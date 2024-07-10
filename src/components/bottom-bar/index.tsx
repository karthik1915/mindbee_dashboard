import React from "react";

const BottomBar = () => {
  return (
    <nav className="fixed bottom-4 z-10 h-16 w-screen px-3 lg:hidden">
      <div className="mx-auto h-full w-full max-w-md rounded-xl bg-indigo-400 drop-shadow-xl"></div>
    </nav>
  );
};

export default BottomBar;
