import { pageActions } from "./store";

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://shopping-36e6e-default-rtdb.firebaseio.com/Cart.json"
      );
      if (!res.ok) {
        throw new Error("Could Not fetch data!");
      }
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchData();

      dispatch(
        pageActions.replaceCart({
          items: cartData.items || [],
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequist = async () => {
      const res = await fetch(
        "https://shopping-36e6e-default-rtdb.firebaseio.com/Cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.CartData,
            totalPrice: cart.totalPrice,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("sending Cart data failed");
      }
    };
    try {
      await sendRequist();
    } catch (err) {
      console.log(err);
    }
  };
};
