import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
// import CustomButton from "../../components/CustomButton";

interface props {
  children: React.ReactNode;
}

const page: React.FC<props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="bg-pallete-primary w-full h-24 flex p-6 justify-between">
        <div>
          <img src="/logo.png" alt="logo" className="h-full object-cover" />
        </div>
        <div>{/* <CustomButton text="test" colorType="success" /> */}</div>
        <div className="flex gap-2 items-center mr-4 hover:bg-slate-50/20 p-3 rounded-md">
          <h2 className="font-bold text-white">John Doe</h2>
          <AiFillCaretDown className="text-white" />
        </div>
      </div>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default page;
