import { parseDateString } from "@/lib/dateParse";
import { ApiDataType } from "@/types/apiDataType";
import { ColumnDef } from "@tanstack/react-table";

export const MessagesColumns: ColumnDef<ApiDataType>[] = [
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => {
      const parsedDate = parseDateString(row.getValue("created_at")).date;
      return parsedDate ? parsedDate.toLocaleDateString() : "Invalid Date";
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "form_type",
    header: "Form Name",
    cell: ({ row }) => {
      let color = "";
      switch (row.original.form_type) {
        case "main_form":
          color = "bg-blue-400";
          break;
        case "course_form":
          color = "bg-emerald-400";
          break;
        case "internship_form":
          color = "bg-cyan-400";
          break;
        default:
          color = "bg-gray-400";
          break;
      }
      return (
        <span
          className={`rounded-full px-3 py-1 ${color} text-sm font-semibold text-white`}
        >
          {row.original.form_type}
        </span>
      );
    },
  },
];
