import Card from "./card";

const BoxApi = (response) => {
  let arrCards = [];
  for (const [key, value] of Object.entries(response["response"])) {
    arrCards.push([key, value]);
  }
  return (
    <div>
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>
        Amanhã: <span>R$ 0,00</span>
      </p>
      console.log(arrCards)
      {arrCards?.map((e) => (
        <Card text={e[0]} price={e[1]} />
      ))}
    </div>
  );
};

export default BoxApi;
