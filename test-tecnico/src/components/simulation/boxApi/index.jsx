import Card from "./card";

const BoxApi = (response) => {
  let arrCards = [];
  for (const elem of Object.keys(response)) {
    arrCards.push([elem, response[elem]]);
  }
  return (
    <div>
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <span>R$ 0,00</span>
      </p>
      {arrCards?.map((e) => (
        <Card text={e[0]} price={e[1]} />
      ))}
    </div>
  );
};

export default BoxApi;
