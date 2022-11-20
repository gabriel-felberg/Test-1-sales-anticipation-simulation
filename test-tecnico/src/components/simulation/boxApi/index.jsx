import Card from "./card";

const BoxApi = (response) => {
  let arrCards = [];
  for (const [key, value] of Object.entries(response["response"])) {
    arrCards.push([key, value]);
  }
  return (
    <div className="flex flex-col w-64 md:w-40 space-y-2 md:apace-0 text-blue-600">
      <h2 className="mb-4 border-b-2">
        <b>
          <i>VOCÊ RECEBERÁ:</i>
        </b>
      </h2>
      <div className="flex flex-row md:flex-col w-80 md:w-40 md:space-y-2 flex-wrap md:flex-nowrap md:h-40 md:overflow-y-auto overscroll-x-contain">
        {arrCards?.map((e) =>
          e[0] === "1" ? (
            <p className="text-blue-300  ">
              <i>
                Amanhã:{" "}
                <span className="text-blue-400 mr-5 md:mr-0">R${e[1]}</span>
              </i>
            </p>
          ) : e[0] === "0" ? (
            <p className="text-blue-300  ">
              <i>
                Agora:{" "}
                <span className="text-blue-400 mr-10 md:mr-0">R${e[1]}</span>
              </i>
            </p>
          ) : (
            <Card text={e[0]} price={e[1]} />
          )
        )}
      </div>
    </div>
  );
};

export default BoxApi;
