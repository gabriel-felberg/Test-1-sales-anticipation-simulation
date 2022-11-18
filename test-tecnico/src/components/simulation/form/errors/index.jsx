import CardError from "./cardError";

const VitrineCardsError = ({ amount, installments, mdr, days, Transform }) => {
  return (
    <div>
      {amount < 1000 ? (
        <CardError text="o valor da venda deve ser maior que 999" />
      ) : undefined}
      {console.log(Transform(days)?.length > 10)}
      {0 >= installments || installments > 12 ? (
        <CardError text="as parcelas devem estar entre 1 e 12" />
      ) : undefined}
      {0 > mdr || mdr > 100 ? (
        <CardError text="o mdr deve ser maior que 0 e menor que 100" />
      ) : undefined}
      {Transform(days)?.length <= 0 || Transform(days)?.length > 10 ? (
        <CardError text="A quantidade de dias deve maior que 0 e menor que 10" />
      ) : undefined}
    </div>
  );
};

export default VitrineCardsError;
