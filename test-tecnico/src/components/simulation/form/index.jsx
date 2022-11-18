import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import CardError from "./errors/cardError";

const Form = ({ setRequest }) => {
  const [amount, setAmount] = useState(undefined);
  const [installments, setInstallments] = useState(undefined);
  const [mdr, setMdr] = useState(undefined);
  const [days, setDay] = useState(undefined);
  const [state, setState] = useState(false);

  function callback(event) {
    event.preventDefault();
    if (event.target.name === "amount") {
      console.log(event.target.value);
      setAmount(event.target.value);
    } else if (event.target.name === "installments") {
      console.log(event.target.value);
      setInstallments(event.target.value);
    } else if (event.target.name === "mdr") {
      setMdr(event.target.value);
    } else {
      setDay(event.target.value);
    }
  }
  function Transform(day) {
    let arr = [];
    day
      ?.split(",")
      ?.map((e) =>
        e === "[" || e === "]" || e === " " || e === ","
          ? undefined
          : arr.push(Number(e))
      );
    return arr;
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
    <section>
      <form>
        <label>
          <h3>Informe o valor da venda</h3>
          <input
            type="number"
            name="amount"
            placeholder="Venda Total"
            onChange={(event) => callback(event)}
          />
        </label>
        <label>
          <h3>Em quantas parcelas</h3>
          <input
            type="number"
            name="installments"
            placeholder="Parcelas"
            onChange={(event) => callback(event)}
          />
        </label>
        <label>
          <h3>percentual de MDR</h3>
          <input
            type="number"
            name="mdr"
            placeholder="MDR"
            onChange={(event) => callback(event)}
          />
        </label>
        <Switch
          checked={state}
          onChange={() => (state ? setState(false) : setState(true))}
        />
        {state ? (
          <label>
            <h3>quantidade de dias</h3>
            <input
              value={days}
              type="text"
              name="day"
              placeholder="Quantidade de dias"
              onChange={(event) => callback(event)}
            />
          </label>
        ) : undefined}
      </form>
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
      {state ? (
        Transform(days)?.length <= 0 || Transform(days)?.length > 10 ? (
          <CardError text="A quantidade de dias deve maior que 0 e menor que 10" />
        ) : undefined
      ) : undefined}
    </section>
  );
  //<VitrineCardsError amount={amount} installments={installments} mdr={mdr} days={days} Transform={Transform}/>
};

export default Form;
