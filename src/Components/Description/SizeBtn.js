import React, { useState } from "react";
import classes from "./SizeBtn.module.css";
export default function SizeBtn(props) {
  const [selected, setSelected] = useState(false);
  const clickHandler = (e) => {
    setSelected((prev) => !prev);
    props.setSize(+e.target.id);
  };
  return (
    <button
      className={!selected ? classes.sizeBtn : classes.selected}
      onClick={clickHandler}
      id={props.text}
    >
      {props.text}
    </button>
  );
}
