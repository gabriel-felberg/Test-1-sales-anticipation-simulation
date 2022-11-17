import { useState, useEffect } from "react";

import Switch from "@mui/material/Switch";

const Form = ({ setRequest }) => {
  const [amount, setAmount] = useState(undefined);
  const [installments, setInstallments] = useState(undefined);
  const [mdr, setMdr] = useState(undefined);
  const [days, setDay] = useState(undefined);
  const [state, setState] = useState(false);

  function callback(event) {
    event.preventDefault();
    if (event.target.name === "amount") {
      setAmount(event.target.value);
    } else if (event.target.name === "installments") {
      setInstallments(event.target.value);
    } else if (event.target.name === "mdr") {
      setMdr(event.target.value);
    } else {
      setDay(event.target.value);
    }
  }
  function Transform(day) {
    let arr = []
    day
      ?.split(",")
      ?.map((e) =>
        e === "[" || e === "]" || e === " " || e === ","
          ? undefined
          : arr.push(Number(e))
      );
    return arr
    }
  useEffect(() => {
    Transform(days);
    if (
      (amount !== undefined) &
        (installments !== undefined) &
        (mdr !== undefined) ||
      days !== undefined
    ) {
      days
        ? setRequest({ amount, installments, mdr, days: Transform(days) })
        : setRequest({ amount, installments, mdr });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mdr, amount, installments, days]);

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
        <h3>percentual de MDR</h3>
        <input type="number" name="mdr" onChange={(event) => callback(event)} />
      </label>
      <Switch
        checked={state}
        onChange={() => (state ? setState(false) : setState(true))}
      />
      {state ? (
        <label>
          <h3>quantidade de dias</h3>
          <input value={days} type="text" name="day" onChange={(event) => callback(event)} />
        </label>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default Form;
