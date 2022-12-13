// import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  console.log(props);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.amount} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <a href={`${props.url}`} target="_blank" rel="noreferrer">
            <button className="expense-item__price"> Open </button>
          </a>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
