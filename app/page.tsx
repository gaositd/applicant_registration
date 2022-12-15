"use client";

import React from "react";
import CustomInput from "../components/CustomInput";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Page Layout</h1>
      <CustomInput inputSize="lg" label="test" />
    </div>
  );
};

export default Home;
