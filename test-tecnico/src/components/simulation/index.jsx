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
    <main className="flex flex-col h-screen items-center justify-center w-96">
      <div className="flex flex-col border-2 items-center justify-center w-96 h-96 bg-yellow-600">
        <h2>Simule sua Antecipação</h2>
        <div className="flex">
          <Form setRequest={setRequest} refreshSeach={refreshSeach} />
          <BoxApi response={response} />
          
        </div>
      </div>
    </main>
  );
};

export default Simulation;
