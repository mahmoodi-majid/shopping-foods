import React from "react";
import "./cardHeader.css";
export default function CardHeader() {
  return (
    <div className="cardHeader">
      <div className="cardTitle">
        <h1>Cart</h1>
      </div>
      <div className="cardTitleItem">
        <span className="cartNvbar cardItem">Item</span>
        <span className="cartNvbar cardPrice">Price</span>
        <span className="cartNvbar cardQuantty">Quantty</span>
      </div>
      
    </div>
  );
}
