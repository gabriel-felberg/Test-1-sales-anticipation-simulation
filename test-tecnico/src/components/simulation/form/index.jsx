import { useState } from "react";

const Form = ({ setRequest }) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  function callback(event) {
    console.log(amount, installments, mdr);
    event.preventDefault();
    setRequest({ amount, installments, mdr });
  }
  return (
    <form onSubmit={(e) => {callback(e)}}>
      <h3>Informe o valor da venda</h3>
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <h3>Em quantas parcelas</h3>
      <input
        value={installments}
        onChange={(event) => setInstallments(event.target.value)}
      />
      <h3>Informe o percentual de MDR</h3>
      <input value={mdr} onChange={(event) => setMdr(event.target.value)} />
      {/* <input></input> */}
    </form>
  );
};

export default Form;
