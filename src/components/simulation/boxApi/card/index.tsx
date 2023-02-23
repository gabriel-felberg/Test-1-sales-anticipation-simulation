type card = {
  text: string;
  price: number;
};

const Card = ({ text, price }: card) => {
  return (
    <p className="text-blue-300 mr-3 md:mr-0 w-34 md:w-32">
      <i>Em {text} dias: <span className="text-blue-400">R${price}</span></i>
    </p>
  );
};

export default Card;
