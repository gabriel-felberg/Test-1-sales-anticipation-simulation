import { useState, useEffect } from "react";

import Switch from "@mui/material/Switch";

const Form = ({ setRequest }) => {
  const [amount, setAmount] = useState(undefined);
  const [installments, setInstallments] = useState(undefined);
  const [mdr, setMdr] = useState(undefined);
  const [state, setState] = useState(true);

  function callback(event) {
    event.preventDefault();
    if (event.target.name === "amount") {
      setAmount(event.target.value);
    } else if (event.target.name === "installments") {
      setInstallments(event.target.value);
    } else {
      setMdr(event.target.value);
    }
    //if (event.target.name === "mdr") {
    //  setMdr(event.target.value);
    //}
    console.log(amount, installments, mdr);
  }
  useEffect(() => {
    if (
      (amount !== undefined) &
      (installments !== undefined) &
      (mdr !== undefined)
    ) {
      setRequest({ amount, installments, mdr });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mdr, amount, installments]);

  console.log(amount, installments, mdr);
  return (
    <form>
      <label>
        <h3>Informe o valor da venda</h3>
        <input
          type="number"
          name="amount"
          onChange={(event) => callback(event)}
        />
      </label>
      <label>
        <h3>Em quantas parcelas</h3>
        <input
          type="number"
          name="installments"
          onChange={(event) => callback(event)}
        />
      </label>
      <label>
        <h3>Informe o percentual de MDR</h3>
        <input type="number" name="mdr" onChange={(event) => callback(event)} />
      </label>
      <Switch
        checked={state}
        onChange={() => (state ? setState(false) : setState(true))}
      />
    </form>
  );
};

export default Form;
