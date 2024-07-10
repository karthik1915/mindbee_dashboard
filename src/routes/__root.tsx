/* eslint-disable react-hooks/rules-of-hooks */
import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@/index.css";
import Sidebar from "@/components/side-bar";
import BottomBar from "@/components/bottom-bar";
import Drawer from "@/components/Drawer";

export const Route = createRootRoute({
  component: () => {
    return (
      <section className="grid h-screen w-screen grid-cols-[80px_1fr] grid-rows-[70px_1fr] gap-x-2 gap-y-3 bg-my-gradient bg-cover bg-center">
        <Sidebar />
        <BottomBar />
        <header className="col-span-2 flex items-center bg-white/50 p-2 backdrop-blur-md md:mr-2 md:mt-2 md:rounded-xl lg:col-span-1">
          <h1>Mindbees Dashboard</h1>
        </header>
        <Drawer />
        <Outlet />
      </section>
    );
  },
});
