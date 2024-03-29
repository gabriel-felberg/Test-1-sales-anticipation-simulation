import BoxApi from "./boxApi";
import Form from "./form";
import axios from "axios";
import { useState, useEffect } from "react";

// interface IResponse{
//   "30" : number;
//   "60" : number;
//   "120" : number;
// }

const Simulation = () => {
  const [response, setResponse] = useState([]);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    if (request["mdr"]) {
      refreshSeach();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

  function refreshSeach() {
    axios
      .post(`https://frontend-challenge-7bu3nxh76a-uc.a.run.app`, request)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <main className="flex flex-col h-screen items-center justify-center w-screen md:w-max ">
      <div className="flex flex-col md:flex-row bg-white border-2 rounded h-creen w-screen md:h-max md:w-max">
        <div className="flex flex-col p-12">
          <h2 className="text-xl">
            <b>Simule sua Antecipação</b>
          </h2>
          <Form setRequest={setRequest} refreshSeach={refreshSeach} />
        </div>
        <div className="bg-gray-100 h-96 md:h-full px-12 pt-20 pb-12">
          <BoxApi response={response} />
        </div>
      </div>
    </main>
  );
};

export default Simulation;
