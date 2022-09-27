import classes from "./CartItem.module.css";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";


const CartItem = (props) => {
  const { title, amount, price, totalPrice, id } = props;

  const dispatch= useDispatch()

  const addOrRemoveProduct = {
    title,
    amount,
    price,
    id,
  }


  const addItemHandler = () => {
   dispatch(cartActions.addToCart(addOrRemoveProduct));
    console.log(`item added! ${title} ${amount} ${price} ${id}`);
  };

  const removeItemHandler = ()=>{
    dispatch(cartActions.removeFromCart(addOrRemoveProduct));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <span>{totalPrice.toFixed(2)}</span>
          <span className={classes.itemprice}>{`${price} /item`}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick = {removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
