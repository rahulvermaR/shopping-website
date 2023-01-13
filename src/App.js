import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import LogInPage from "./Components/Login/LogInPage";
import DescriptionElement from "./Components/Description/DescriptionElement";
import Home from "./Components/Home/Home";

import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import Cart from "./Components/Cart/Cart";
// import { getCart, pageActions } from "./store/store";
import { getCartData, sendCartData } from "./store/page-actions";
let isInitial = true;
function App() {
  const isLogin = useSelector((st) => st.isLoggedIn);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCartData());
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
      <Header>
        {!isLogin ? (
          <Routes>
            <Route path="*" element={<Navigate to="/Login" replace />} />
            <Route path="/Login" element={<LogInPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="*" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Description" element={<DescriptionElement />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        )}
      </Header>
    </Fragment>
  );
}

export default App;
