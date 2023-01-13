import React, { Fragment, useEffect, useState } from "react";

import CardElemet from "../ProductItem/CardElemet";
import classes from "./Men.module.css";
import { FiFilter } from "react-icons/fi";

import Sidebar from "../SideBar/Sidebar";
import LoadingSpinner from "../UI/LoadingSpinner";
export default function Men(props) {
  const [isFolded, setIsFolded] = useState(false);
  const [isFullSleev, setFullSleev] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [sort, setSort] = useState(1);
  const [price500, setPrice500] = useState(false);
  const [price1000, setPrice1000] = useState(false);
  const [price1500, setPrice1500] = useState(false);
  const [price2000, setPrice2000] = useState(false);
  const [price2500, setPrice2500] = useState(false);

  const [disc25, setDis25] = useState(false);
  const [disc40, setDis40] = useState(false);
  const [disc50, setDis50] = useState(false);
  const [disc60, setDis60] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setAppData] = useState([]);
  useEffect(() => {
    async function my() {
      setLoading(true);
      const res = await fetch(
        "https://shopping-36e6e-default-rtdb.firebaseio.com/Item.json"
      );
      const resdata = await res.json();
      let loadeddata = [];

      for (const keys in resdata) {
        loadeddata.push({
          myD: resdata[keys],
        });
      }
      loadeddata = [...loadeddata[0].myD];

      setAppData(loadeddata);
      setLoading(false);
    }
    my();
  }, []);
  let preData = data.slice().filter((ele) => {
    return ele.gender === "M";
  });

  if (isFolded) {
    preData = preData.filter((ele) => {
      return ele.folded === "Y";
    });
  }
  if (isFullSleev) {
    preData = preData.filter((ele) => {
      return ele.folded === "";
    });
  }
  if (price500) {
    preData = preData.filter((ele) => {
      return +ele.finalPrice < 500;
    });
  }
  if (price1000) {
    preData = preData.filter((ele) => {
      return +ele.finalPrice >= 500 && +ele.finalPrice < 1000;
    });
  }
  if (price1500) {
    preData = preData.filter((ele) => {
      return +ele.finalPrice >= 1000 && +ele.finalPrice < 1500;
    });
  }
  if (price2000) {
    preData = preData.filter((ele) => {
      return +ele.finalPrice >= 1500 && +ele.finalPrice < 2000;
    });
  }
  if (price2500) {
    preData = preData.filter((ele) => {
      return +ele.finalPrice >= 2000;
    });
  }
  if (disc25) {
    preData = preData.filter((ele) => {
      return ele.discount >= 25;
    });
  }
  if (disc40) {
    preData = preData.filter((ele) => {
      return ele.discount >= 40;
    });
  }
  if (disc50) {
    preData = preData.filter((ele) => {
      return ele.discount >= 50;
    });
  }
  if (disc60) {
    preData = preData.filter((ele) => {
      return ele.discount >= 60;
    });
  }

  let content;
  if (sort === 1) {
    content = preData.map((ele, i) => {
      return (
        <Fragment key={i}>
          <CardElemet element={ele} />
        </Fragment>
      );
    });
  }
  if (sort === 2) {
    preData = preData.sort((a, b) => a.finalPrice - b.finalPrice);
    content = preData.map((ele, i) => {
      return (
        <Fragment key={i}>
          <CardElemet element={ele} />
        </Fragment>
      );
    });
  }
  if (sort === 3) {
    preData = preData.sort((a, b) => b.finalPrice - a.finalPrice);
    content = preData.map((ele, i) => {
      return (
        <Fragment key={i}>
          <CardElemet element={ele} />
        </Fragment>
      );
    });
  }
  if (sort === 4) {
    preData = preData.sort((a, b) => b.discount - a.discount);
    content = preData.map((ele, i) => {
      return (
        <Fragment key={i}>
          <CardElemet element={ele} />
        </Fragment>
      );
    });
  }
  const selectHandler = (event) => {
    setSort(+event.target.value);
  };
  const filterHandler = () => {
    setIsFilter((prev) => !prev);
  };
  if (loading)
    return (
      <div className={classes.center}>
        <LoadingSpinner />
      </div>
    );
  if (preData.length === 0) content = <p>No Item Found</p>;
  return (
    <section className={classes.section}>
      <div className={classes.area}>
        <button className={classes.filterBtn} onClick={filterHandler}>
          <FiFilter className={classes.filterLogo} /> Filter
        </button>
        <div>
          <label className={classes.label}>Sort by</label>
          <select onChange={selectHandler} className={classes.select}>
            <option value="1">Whats new</option>
            <option value="2">Price low to high</option>
            <option value="3">Price high to low</option>
            <option value="4">Better Discount</option>
          </select>
        </div>
      </div>
      <div className={classes.mainBox}>
        {isFilter && (
          <div className={classes.temp}>
            <div className={classes.rahul}>
              <Sidebar
                setFoldes={setIsFolded}
                setFull={setFullSleev}
                set500={setPrice500}
                set1000={setPrice1000}
                set1500={setPrice1500}
                set2000={setPrice2000}
                set2500={setPrice2500}
                dis25={setDis25}
                dis40={setDis40}
                dis50={setDis50}
                dis60={setDis60}
              />
            </div>
          </div>
        )}
        <div className={classes.mainCardSection}>{content}</div>
      </div>
    </section>
  );
}
