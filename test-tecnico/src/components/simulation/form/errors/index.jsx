import CardError from "./cardError";

const VitrineCardsError = ({ amount, installments, mdr, days, Transform }) => {
  return (
    <div>
      {amount!==null ? amount < 1000 ? (
        <CardError text="A venda deve ser maior que 999" />
      ) : undefined : undefined}
      {installments!==null ? 0 >= installments || installments > 12 ? (
        <CardError text="as parcelas devem estar entre 1 e 12" />
      ) : undefined : undefined}
      {mdr!==null ? 0 > mdr || mdr > 100 ? (
        <CardError text="o mdr deve ser maior que 0 e menor que 100" />
      ) : undefined : undefined}
      {days!==null ? Transform(days)?.length <= 0 || Transform(days)?.length > 10 ? (
        <CardError text="A quantidade de dias deve estar entre 0 e 10" />
      ) : undefined : undefined}
    </div>
  );
};

export default VitrineCardsError;
