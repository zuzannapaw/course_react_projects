import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx

  const cartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsActive && classes.bump}`;
  useEffect(() => {
    if(items.length === 0){
        return
    }
    setBtnIsActive(true);

    const timer = setTimeout(()=>{
        setBtnIsActive(false)
    },300);
    return()=>{
        clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderButton;
