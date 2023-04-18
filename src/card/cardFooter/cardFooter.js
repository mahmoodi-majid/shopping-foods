import React from "react";
import "./cardFooter.css";
export default function CardFooter() {
  return (
    <div className="cardFooter">
      <strong className="cardFooterTotal">Total</strong>
      <span className="cardFooterTotalPrice">$0</span>
      <buton className="btn btnPeyment">Peyment</buton>
      <buton className="btn btnDeleteAll">DeleteAll</buton>
    </div>
  );
}
