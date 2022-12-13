import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [editingMode, setEditingMode] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditingMode(false);
  };

  const editingModeHandler = () => {
    setEditingMode(true);
  };

  const cancelHandler = () => {
    setEditingMode(false);
  };

  return (
    <div className="new-expense">
      {!editingMode && (
        <button onClick={editingModeHandler}>Add New Expense</button>
      )}
      {editingMode && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
