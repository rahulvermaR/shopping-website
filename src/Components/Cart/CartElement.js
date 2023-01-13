import React from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store/store";
import classes from "./CartElement.module.css";

export default function CartElement(props) {
  const dispatch = useDispatch();

  const removehandler = () => {
    dispatch(pageActions.remoItem(props.data));
  };

  return (
    <div className={classes.container}>
      <img src={props.data.image} alt={props.data.description} />

      <div className={classes.deatils}>
        <h3>{props.data.name}</h3>
        <p>{props.data.description}</p>
        <div>₹ {props.data.price}</div>
        <div> Size : {props.data.size}</div>
        <button onClick={removehandler}>Remove</button>
      </div>
    </div>
  );
}
