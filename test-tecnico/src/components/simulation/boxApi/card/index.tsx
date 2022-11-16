type card = {
  text: string
  price: number
}

const Card = ({text, price}:card) => {
  return (
    <p>Em {text} dias: <span>R${price}</span></p>
  )
}

export default Card