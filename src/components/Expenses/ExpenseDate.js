import "./ExpenseDate.css";

function ExpenseDate(props) {
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // console.log(props.amount);
  return (
    <div className="expense-date">
      {/* <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div> */}
      <div className="expense-date__day">{Math.round(props.date / 1000)}kb</div>
    </div>
  );
}

export default ExpenseDate;
