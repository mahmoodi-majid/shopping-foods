import React from "react";
import "./headerFooter.css";
export default function HeaderFooter() {
  return (
    <div className="headerFooter">
      <h1 className="titleFooter">Consectetur adipisicing elit</h1>
      <p className="descriptionFooter">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ,
        autem
      </p>
      <form className="surveyForm">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
      </form>
      <textarea name="cooment" id="cooment" cols="30" rows="10" ></textarea>
      <button className="btnSendMessage">Send Message</button>
    </div>
  );
}
