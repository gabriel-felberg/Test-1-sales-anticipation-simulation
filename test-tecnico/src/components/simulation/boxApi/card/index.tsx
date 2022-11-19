type card = {
  text: string;
  price: number;
};

const Card = ({ text, price }: card) => {
  return (
    <p className="text-blue-300 mr-1 md:mr-0 w-5/12">
      Em {text} dias: <span className="text-blue-400">R${price}</span>
    </p>
  );
};

export default Card;
