import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { closeDrawer } from "@/store/drawerSlice";
import { X } from "lucide-react";
import React from "react";
import { parseDateString } from "@/lib/dateParse";

const Drawer: React.FC = () => {
  const isDrawerOpen = useAppSelector(
    (state: RootState) => state.drawer.isOpen,
  );
  const drawerData = useAppSelector(
    (state: RootState) => state.drawer.drawerData,
  );

  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(closeDrawer());
  };

  const drawerStyle: React.CSSProperties = {
    transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
    position: "fixed",
    top: 0,
    right: 0,
    width: "370px",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  };

  if (drawerData === null) {
    return (
      <div style={drawerStyle} className="">
        <button onClick={toggleDrawer}>Close</button>
      </div>
    );
  }

  return (
    <div
      style={drawerStyle}
      className="flex flex-col items-stretch justify-between gap-8 px-3 py-6"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={toggleDrawer}
          className="rounded-md p-2 hover:text-red-600"
        >
          <X />
        </button>
        <p>{parseDateString(drawerData.created_at).formattedDate}</p>
      </div>
      <div className="space-y-3 py-3">
        <p className="rounded-xl bg-indigo-300 px-3 py-1">
          {drawerData.form_type}
        </p>
        {drawerData.form_name !== "main_form" && (
          <p className="rounded-xl bg-teal-300 px-3 py-1">
            {drawerData.form_name}
          </p>
        )}
      </div>
      <div className="flex-grow">
        <div className="">
          <p className="text-2xl tracking-wide">{drawerData.name}</p>
          <p className="text-neutral-500">{drawerData.mobile}</p>
          <p className="block text-neutral-500">{drawerData.email}</p>
          {drawerData.get_updates ? (
            <p className="animate-pulse text-green-600">can get updates</p>
          ) : (
            <p className="animate-pulse text-red-600">get no updates</p>
          )}
        </div>
        {drawerData.message && (
          <div className="my-3 min-h-32 w-full rounded-xl border border-zinc-500 p-2">
            <p className=" ">{drawerData.message}</p>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <button className="w-full rounded-xl bg-emerald-300 py-2 shadow-sm hover:bg-emerald-400">
          Mark as Contacted
        </button>
        <button className="w-full rounded-xl bg-red-300 py-2 shadow-sm hover:bg-red-400">
          Delete this Message
        </button>
      </div>
    </div>
  );
};

export default Drawer;
