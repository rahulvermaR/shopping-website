import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pageActions } from "../../store/store";
import classes from "./Order.module.css";
export default function Order() {
  const [nameerr, setnameerr] = useState(false);
  const [streeterr, setstreeterr] = useState(false);
  const [postalerr, setpostalerr] = useState(false);
  const [cityerr, setcity] = useState(false);
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameRef.current.value) {
      setnameerr(true);
      return;
    } else setnameerr(false);

    if (!streetRef.current.value) {
      setstreeterr(true);
      return;
    } else setstreeterr(false);

    if (postalRef.current.value.length < 6) {
      setpostalerr(true);
      return;
    } else setpostalerr(false);

    if (!cityRef.current.value) {
      setcity(true);
      return;
    } else setcity(false);

    dispatch(pageActions.clear());
    navigate("/Home");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={nameerr ? classes.error : ""}>Your Name</label>
      <input type="text" ref={nameRef} />
      <label className={streeterr ? classes.error : ""}>Street</label>
      <input type="text" ref={streetRef} />
      <label className={postalerr ? classes.error : ""}>Postal Code</label>
      <input type="number" ref={postalRef} />
      <label className={cityerr ? classes.error : ""}>City</label>
      <input type="text" ref={cityRef} />
      <button>Confirm</button>
    </form>
  );
}
