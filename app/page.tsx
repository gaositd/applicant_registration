import React from "react";
import CustomButton from "../components/buttons/CustomButton";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl">Page Layout</h1>
      <CustomButton text="Enviar" size="lg" loading />
    </div>
  );
};

export default Home;
