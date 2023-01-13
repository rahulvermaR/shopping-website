import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";

export default function Sidebar(props) {
  const handlerFolded = (e) => {
    props.setFoldes(e.target.checked);
  };
  const handlerFullSleev = (e) => {
    props.setFull(e.target.checked);
  };
  return (
    <Fragment>
      <div className={classes.conatiner}>
        <h2 className={classes.heding}>CATEGORIES</h2>

        <div className={classes.elementBox}>
          <input type="checkbox" onClick={handlerFolded} />
          <label>Folded</label>
        </div>
        <div className={classes.elementBox}>
          <input type="checkbox" onChange={handlerFullSleev} />
          <label>Half-sleeve</label>
        </div>
      </div>
      <div className={classes.conatiner}>
        <h2 className={classes.heding}>PRICE</h2>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.set500(e.target.checked)}
          />
          <label>Below 500</label>
        </div>

        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.set1000(e.target.checked)}
          />
          <label> 500 - 1000</label>
        </div>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.set1500(e.target.checked)}
          />
          <label> 1000 - 1500</label>
        </div>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.set2000(e.target.checked)}
          />
          <label> 1500 - 2000</label>
        </div>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.set2500(e.target.checked)}
          />
          <label> above 2000</label>
        </div>
      </div>
      <div className={classes.conatiner}>
        <h2 className={classes.heding}>DISCOUNT RANGE</h2>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.dis25(e.target.checked)}
          />
          <label>25%</label>
        </div>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.dis40(e.target.checked)}
          />
          <label>40%</label>
        </div>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.dis50(e.target.checked)}
          />
          <label>50%</label>
        </div>
        <div className={classes.elementBox}>
          <input
            type="checkbox"
            onClick={(e) => props.dis60(e.target.checked)}
          />
          <label>60%</label>
        </div>
      </div>
    </Fragment>
  );
}
