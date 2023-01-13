import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pageActions } from "../../store/store";
import classes from "./CardElement.module.css";

export default function CardElemet(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const descriptionhandler = () => {
    dispatch(pageActions.setDescrip(props.element));
    navigate("/description");
  };

  return (
    <div className={classes.container} onClick={descriptionhandler}>
      <main className={classes.image}>
        <img src={props.element.otherImages[0]} alt={props.element.name} />
      </main>
      <div>{props.element.name}</div>
      <div className={classes.description}>{props.element.description}</div>

      <div className={classes.price}>
        <span className={classes.currentPrice}>
          Rs. {props.element.finalPrice}
        </span>
        <strike className={classes.strickPrice}>
          Rs. {props.element.strickPrice}
        </strike>
        <span className={classes.off}>({props.element.discount}%OFF)</span>
      </div>
    </div>
  );
}
