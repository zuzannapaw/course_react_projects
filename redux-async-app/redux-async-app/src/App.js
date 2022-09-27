import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsShown = useSelector((state) => state.showUI.cartIsShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.showUI.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

//OLD USE EFFECT METHOD

// useEffect(() => {
//   const sendCartData = async () => {
//     // dispatch(
//     //   uiActions.showNotification({
//     //     status: "pending",
//     //     title: "Sending...",
//     //     message: "Sending cart data",
//     //   })
//     // );

//     // const response = await fetch(
//     //   "https://react-redux-shop-7fe1e-default-rtdb.firebaseio.com/cart.json",
//     //   { method: "PUT", body: JSON.stringify(cart) }
//     // );

//     // if (!response.ok) {
//     //   throw new Error("Sent cart data failed");
//     // }

//     // dispatch(
//     //   uiActions.showNotification({
//     //     status: "success",
//     //     title: "Success!",
//     //     message: "Sent cart data successfully",
//     //   })
//     // );
//   };

//   // if (isInitial) {
//   //   isInitial = false;
//   //   return;
//   // }

//   // sendCartData().catch((error) => {
//   //   dispatch(
//   //     uiActions.showNotification({
//   //       status: "error",
//   //       title: "Error",
//   //       message: "Sending cart failed",
//   //     })
//   //   );
//   // });
// }, [cart, dispatch]);
