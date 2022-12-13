import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectHandler = (event) => {
    // console.log(event.target.value);
    props.onFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by folder</label>
        <select value={props.selected} onChange={selectHandler}>
          {/* {props.folders.map((folder) => (
            <option value={`${folder}`}>{folder}</option>
          ))} */}
          <option value="miscellaneous">miscellaneous</option>
          <option value="slides">slides</option>
          <option value="folder">folder</option>
          <option value="notes">notes</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
