const Card = (text:string, price:number) => {
  return (
    <p>Em {text} dias: <span>R${price}</span></p>
  )
}

export default Card