import React from "react";
// import CustomButton from "../../components/CustomButton";

interface props {
  children: React.ReactNode;
}

const page: React.FC<props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="bg-pallete-primary w-full h-1/6 flex p-6 justify-between">
        <div>
          <img src="/logo.png" alt="logo" className="" />
        </div>
        <div>{/* <CustomButton text="test" colorType="success" /> */}</div>
      </div>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default page;
