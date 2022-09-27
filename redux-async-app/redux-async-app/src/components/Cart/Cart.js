import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartArr);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            id={item.id}
            amount={item.amount}
            key={item.id}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
