import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';


const CartButton = (props) => {

  const cartAmount = useSelector(state=>state.cart.totalAmount)
  return (
    <button onClick = {props.onShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
