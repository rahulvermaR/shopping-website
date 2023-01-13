import { configureStore, createSlice } from "@reduxjs/toolkit";
// export const getCart = () => {
//   async function help() {
//     const res = await fetch(
//       "https://shopping-36e6e-default-rtdb.firebaseio.com/Cart.json"
//     );
//     const d = await res.json();
//     return d;
//   }
//   return help();
// };

// async function postCart(data, totalP) {
//   const res = await fetch(
//     "https://shopping-36e6e-default-rtdb.firebaseio.com/Cart.json",
//     {
//       method: "PUT",
//       body: JSON.stringify({
//         data,
//         totalPrice: totalP,
//       }),
//     }
//   );
//   await res.json();
// }

const pageSlice = createSlice({
  name: "pageInfo",
  initialState: {
    CartData: [],
    Descriptiondata: null,
    isLoggedIn: false,
    haveAcc: false,
    userName: null,
    pass: null,
    totalPrice: 0,
    changed: false,
  },
  reducers: {
    signup(state, action) {
      state.userName = action.payload.user;
      state.pass = action.payload.pass;
      state.haveAcc = true;
    },
    login(state, action) {
      if (
        state.userName === action.payload.user &&
        state.pass === action.payload.pass
      ) {
        state.isLoggedIn = true;
      }
    },
    dontHaveAcc(state) {
      state.userName = null;
      state.pass = null;
      state.haveAcc = false;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setCartData(state, action) {
      state.CartData.push(action.payload);
      state.totalPrice = +state.totalPrice + +action.payload.price;
      state.changed = true;

      //postCart(state.CartData, state.totalPrice);
    },
    remoItem(state, action) {
      state.CartData = state.CartData.filter((obj) => {
        return (
          obj.name !== action.payload.name &&
          obj.description !== action.description
        );
      });
      state.totalPrice = state.totalPrice - +action.payload.price;
      state.changed = true;
      //postCart(state.CartData, state.totalPrice);
    },
    setDescrip(state, action) {
      state.Descriptiondata = action.payload;
    },

    replaceCart(state, action) {
      state.CartData = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    clear(state) {
      state.CartData = [];
      state.totalPrice = 0;
      state.changed = true;
    },
  },
});
const store = configureStore({
  reducer: pageSlice.reducer,
});
export default store;

export const pageActions = pageSlice.actions;
