import Card from "./card";

const BoxApi = (response) => {
  let arrCards = [];
  for (const [key, value] of Object.entries(response["response"])) {
    arrCards.push([key, value]);
  }
  return (
    <div className="flex flex-col w-64 md:w-40 space-y-2 md:apace-0 text-blue-600">
      <h2 className="mb-4">
        <b>
          <i>VOCÊ RECEBERÁ:</i>
        </b>
      </h2>
      <div className="flex flex-row md:flex-col w-80 md:space-y-2 flex-wrap">
        {arrCards?.map((e) =>
          e[0] === "1" ? (
            <p className="text-blue-300  ">
              Amanhã: <span className="text-blue-400 mr-5 md:mr-0">R${e[1]}</span>
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
