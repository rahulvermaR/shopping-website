import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CartElement from "./CartElement";
import classes from "./Cart.module.css";
import Order from "./Order";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const Cartdata = useSelector((st) => st.CartData);
  const totalPrice = useSelector((st) => st.totalPrice);
  const navigate = useNavigate();
  const [isOrder, setIsOrder] = useState(false);

  let content;

  content = Cartdata.map((ele) => {
    return (
      <Fragment key={ele.image}>
        <CartElement data={ele} />
      </Fragment>
    );
  });

  if (Cartdata.length === 0) content = <p>Cart is Empty</p>;

  const cancelHandler = () => {
    navigate("/Home");
  };
  const orderClickHandler = () => {
    setIsOrder(true);
  };
  return (
    <section className={classes.base}>
      <div className={classes.backDrop}></div>
      <div className={classes.cont}>
        {content}
        <div className={classes.btnBox}>
          <p>Total Amount : ₹ {totalPrice}</p>
          {!isOrder && (
            <div className={classes.oreder}>
              <button onClick={orderClickHandler}>Order</button>
              <button onClick={cancelHandler}>cancel</button>
            </div>
          )}
        </div>

        {isOrder && <Order />}
      </div>
    </section>
  );
}
