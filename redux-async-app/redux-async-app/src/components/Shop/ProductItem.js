import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = (props) => {
  useSelector((state) => state.cart.cartArr);
  const dispatch = useDispatch();
  const { title, price, description,id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        title,
        price: price.toFixed(2),
        description,
        id,
        amount: 1,
        totalPrice: price
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
