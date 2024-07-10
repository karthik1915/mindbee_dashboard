/* eslint-disable @typescript-eslint/no-unused-vars */
import { Handler } from "@netlify/functions";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { ApiDataType } from "@/types/apiDataType";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const REGION = process.env.VITE_AWS_REGION!;
const ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID!;
const SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY!;

const client = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

const dynamoDb = DynamoDBDocumentClient.from(client);

const handler: Handler = async (event, context) => {
  const params = {
    TableName: "mindbee",
  };

  try {
    const command = new ScanCommand(params);
    const data = await dynamoDb.send(command);

    // Convert DynamoDB's AttributeValues to plain JSON
    const formattedData = data.Items?.map((item) =>
      unmarshall(item),
    ) as ApiDataType[];

    return {
      statusCode: 200,
      body: JSON.stringify(formattedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
};

export { handler };
