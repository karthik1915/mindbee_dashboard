import { createLazyFileRoute } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchData } from "@/store/dataSlice";
import { useEffect } from "react";
import { DataTable } from "@/components/table/data-table";
import { MessagesColumns } from "@/components/Messages/columns";
import { ApiDataType } from "@/types/apiDataType";
import { openDrawer, setDrawerData } from "@/store/drawerSlice";
import { RefreshCcw } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.data);
  // const error = useAppSelector((state) => state.data.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const handleRefresh = () => {
    dispatch(fetchData());
    // console.log(items);
  };

  const handleRowData = (row: ApiDataType) => {
    dispatch(setDrawerData(row));
    dispatch(openDrawer());
  };

  if (status === "loading") {
    return <div>Loading ... </div>;
  }

  return (
    <div className="col-span-2 overflow-y-auto bg-white/40 p-2 backdrop-blur-md lg:col-span-1 lg:mb-2 lg:mr-2 lg:rounded-xl">
      <h3 className="text-xl md:text-3xl">Mindbee website Form Data</h3>
      <div className="flex items-center justify-between p-3">
        <div></div>
        <button
          className="flex items-center gap-3 rounded-lg border border-zinc-500 p-2"
          onClick={handleRefresh}
        >
          Refresh <RefreshCcw size={18} />
        </button>
      </div>

      <DataTable
        columns={MessagesColumns}
        data={items}
        onRowClick={handleRowData}
      />
    </div>
  );
}
