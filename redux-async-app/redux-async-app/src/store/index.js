import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCartState = { cartArr: [], totalAmount: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {

    replaceCart(state,action){
        state.cartArr = action.payload.cartArr
        state.totalAmount = action.payload.totalAmount;

    },
    addToCart(state, action) {
      const { payload } = action;
      const existingItem = state.cartArr.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.amount++;
        existingItem.totalPrice += Number(payload.price);
      } else {
        state.cartArr.push(payload);
      }

      state.totalAmount++;
      state.changed = true
    },

    removeFromCart(state, action) {
      const { payload } = action;
      const existingItem = state.cartArr.find((item) => item.id === payload.id);
      const index = state.cartArr.findIndex((item) => item.id === payload.id)
      if (existingItem.amount > 1) {
        existingItem.amount--;
        existingItem.totalPrice -= Number(payload.price);
      } else {
        state.cartArr.splice(index,1);
      }
      state.totalAmount--;
      state.changed = true
    },
  },
});

const initialUIState = { cartIsShown: false, notification: null };

const uiSlice = createSlice({
  name: "showUI",
  initialState: initialUIState,
  reducers: {
    showCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, showUI: uiSlice.reducer },
});

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;
export default store;

//const updatedItem = {...existingItem, amount : existingItem.amount++ };
// const updatedArray = {...state.cartArr, updatedItem}
// state.cartArr = updatedArray
