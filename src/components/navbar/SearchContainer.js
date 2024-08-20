import React from "react";
import "./NavbarContainer.css";
import { PRODUCTS } from "../../static/index";
import { VscSearchStop } from "react-icons/vsc";

function SearchContainer({ value }) {
  let filterData = PRODUCTS.filter((el) =>
    el.title.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <div className="search__container">
      <b>Qidiruv natijalari : </b>
      <br />
      <br />
      {filterData?.map((el) => (
        <div className="search__item">
          <img src={el.url[0]} width={50} alt="" />
          <div>
            <p>{el.title}</p>
            <b>{el.price.brm()} so'm</b>
          </div>
        </div>
      ))}
      {filterData.length === 0 ? (
        <div className="search__empty">
          <VscSearchStop />
          <h3>
            Mahsulot topilmadi <br />
          </h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SearchContainer;
