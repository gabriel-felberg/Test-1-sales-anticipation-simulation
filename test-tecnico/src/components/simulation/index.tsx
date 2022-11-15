import React from "react";
import BoxApi from "./boxApi";
import Form from "./form";

const Simulation = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center w-96">
      <div className="flex flex-col border-2 items-center justify-center w-96 h-96 bg-yellow-600">
        <h2>Simule sua Antecipação</h2>
        <div className="flex">
          <Form />
          <BoxApi />
        </div>
      </div>
    </main>
  );
};

export default Simulation;
