import Card from "./card";

const BoxApi = (response) => {
  let arrCards = [];
  for (const [key, value] of Object.entries(response["response"])) {
    arrCards.push([key, value]);
  }
  return (
    <div>
      <h2>VOCÊ RECEBERÁ:</h2>
      {arrCards?.map((e) =>
        e[0] === "1" ? (
          <p>
            Amanhã: <span>R${e[1]}</span>
          </p>
        ) : (
          <Card text={e[0]} price={e[1]} />
        )
      )}
    </div>
  );
};

export default BoxApi;
