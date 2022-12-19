import React from "react";

interface props {}

const page: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-pallete-primary w-full h-1/6 dark:bg-pallete-primary flex items-center p-3">
        <img src="/logo.png"></img>
      </nav>
      <main className="w-full h-5/6 flex justify-center items-center">
        <div className="bg-pallete-primary/30 w-3/4 h-3/4 border-rounded p-5 outline-pallete-primary">
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default page;
