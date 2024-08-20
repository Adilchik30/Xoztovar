import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { IoIosTimer } from "react-icons/io";
import "./ProductList.css";
function ProductList() {
  return (
    <div className="product_list">
      <div className="product_div">
        <div>
          <FaHandsHelping />
          <br />
          <br />
          <h1>
            Mijozlarga <br /> hurmat
          </h1>
        </div>
      </div>
      <div style={{ background: "#008057" }} className="product_div">
        <div>
          <GrUserWorker />
          <br />
          <br />
          <h1>
            Chaqqon <br /> hamkasblar
          </h1>
        </div>
      </div>
      <div className="product_div">
        <div>
          <IoIosTimer />
          <br />
          <br />
          <h1>
            Tez, <br /> sifatli
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
