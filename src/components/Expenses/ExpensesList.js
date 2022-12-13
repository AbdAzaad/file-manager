import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // console.log(props.filteredFiles);
  if (props.filteredFiles.length === 0) {
    return <h4 className="expenses-list__fallback">No information here!!</h4>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredFiles.map((expense) => (
        <ExpenseItem
          key={expense.id} //uniquely identifies each element and adjusts the particular element alone instead of updating every single element from the beginning
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          url={expense.id}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
