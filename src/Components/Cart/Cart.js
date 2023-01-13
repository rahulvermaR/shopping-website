import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartElement from "./CartElement";
import classes from "./Cart.module.css";
import Order from "./Order";

export default function Cart() {
  const Cartdata = useSelector((st) => st.CartData);
  const totalPrice = useSelector((st) => st.totalPrice);

  let content;

  content = Cartdata.map((ele) => {
    return (
      <Fragment key={ele.image}>
        <CartElement data={ele} />
      </Fragment>
    );
  });

  if (Cartdata.length === 0) content = <p>Cart is Empty</p>;
  return (
    <section className={classes.base}>
      <div className={classes.backDrop}></div>
      <div className={classes.cont}>
        {content}
        <div className={classes.btnBox}>
          <p>Total Amount : ₹ {totalPrice}</p>
          <div className={classes.oreder}>
            <button>Order</button>
            <button>cancel</button>
          </div>
        </div>

        <Order />
      </div>
    </section>
  );
}
