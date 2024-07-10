import { Mails, FilePen } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <nav className="row-span-2 hidden h-screen w-full bg-white/40 px-2 pt-6 backdrop-blur-md lg:block">
      <img src="/logo.png" title="mindbee" alt="logo" className="w-16" />
      <div className="flex flex-col items-center gap-y-4 py-8">
        <Link
          to="/"
          className="cursor-pointer rounded-full p-3.5 text-black transition-colors duration-150 [&.active]:bg-fuchsia-400 [&.active]:text-white"
        >
          <Mails size={26} />
        </Link>
        <Link
          to="/blogs"
          className="cursor-pointer rounded-full p-3.5 text-black transition-colors duration-150 [&.active]:bg-fuchsia-400 [&.active]:text-white"
        >
          <FilePen size={26} />
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
