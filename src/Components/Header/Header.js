import React from "react";
import { BsHandbag } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { pageActions } from "../../store/store";
import classes from "./Header.module.css";
export default function Header(props) {
  const islogin = useSelector((st) => st.isLoggedIn);
  const cart = useSelector((st) => st.CartData);
  const userName = useSelector((st) => st.userName)
    ?.split(" ")[0]
    .toUpperCase();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandler = () => {
    navigate("/login", true);
    dispatch(pageActions.logout());
  };

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <div className={classes.name}>
          <NavLink to="/Home" className={classes.siteName}>
            RvShop.com
          </NavLink>
          {islogin && (
            <section className={classes.navigationBox}>
              <NavLink to="/Men" className={classes.link}>
                Men
              </NavLink>
              <NavLink to="/Women" className={classes.link}>
                Women
              </NavLink>
            </section>
          )}
        </div>

        {islogin && (
          <section className={classes.Cartcontainer}>
            <div className={classes.profileBox}>
              <TbUser className={classes.profileLogo} />
              <div>{userName}</div>
            </div>
            <div className={classes.cartHolder}>
              <NavLink className={classes.cart} to="/Cart">
                <BsHandbag />
              </NavLink>
              <div>{cart.length}</div>
            </div>
            <button className={classes.button} onClick={logouthandler}>
              Logout
            </button>
          </section>
        )}
      </header>
      <div className={classes.childDiv}>{props.children}</div>
    </main>
  );
}
