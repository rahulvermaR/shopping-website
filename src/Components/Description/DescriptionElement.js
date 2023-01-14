import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import classes from "./DescriptionElement.module.css";
import { pageActions } from "../../store/store";
import { useNavigate } from "react-router-dom";
import SizeBtn from "./SizeBtn";

export default function DescriptionElement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currIdx, setCurrentIdx] = useState(0);
  const [selectedSize, setselectedSize] = useState(null);
  const data = useSelector((st) => st.Descriptiondata);
  const sizedata = data.productSize.split(", ");

  const sizeEl = sizedata.map((sz) => {
    return (
      <Fragment key={sz}>
        <SizeBtn setSize={setselectedSize} text={sz} />
      </Fragment>
    );
  });

  const leftClickHandler = () => {
    if (currIdx === 0) setCurrentIdx(3);

    setCurrentIdx((prev) => prev - 1);
  };
  const rightClickHandler = () => {
    if (currIdx === 3) setCurrentIdx(0);

    setCurrentIdx((prev) => prev + 1);
  };
  const addToBagHandler = () => {
    if (!selectedSize) {
      alert("Please select a size to add in Bag");
      return;
    }
    dispatch(
      pageActions.setCartData({
        name: data.name,
        description: data.description,
        size: selectedSize,
        price: data.finalPrice,
        image: data.otherImages[0],
      })
    );
    navigate("/Home", true);
  };
  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <img src={data.otherImages[currIdx]} alt={data.description} />
        <div className={classes.btnContainer}>
          <button className={classes.changeImg} onClick={leftClickHandler}>
            ‹
          </button>
          <button className={classes.changeImg} onClick={rightClickHandler}>
            ›
          </button>
        </div>
      </div>
      <div className={classes.detailsBox}>
        <div className={classes.nameBox}>
          <h1 className={classes.name}>{data.name}</h1>
          <div className={classes.description}>{data.description}</div>
          <div className={classes.idealFor}>
            Ideal for {data.gender === "M" ? "Men" : "Women"}
          </div>
        </div>
        <div className={classes.priceBox}>
          <span>₹{data.finalPrice}</span>
          <strike className={classes.stricke}> ₹{data.strickPrice}</strike>
          <span className={classes.off}>{`(${data.discount}% OFF)`}</span>
        </div>
        <div className={classes.texes}>inclusive of all taxes</div>
        <div className={classes.sizeContainer}>
          <div className={classes.selectText}>SELECT SIZE ›</div>
          <div className={classes.sizebox}>{sizeEl}</div>
        </div>
        <div>
          <button className={classes.addBtn} onClick={addToBagHandler}>
            <BsHandbag /> Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}
