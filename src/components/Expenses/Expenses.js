import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredFolder, setFilteredFolder] = useState("miscellaneous");
  const repoFiles = props.repoFiles;
  // console.log(repoFiles);

  const filterHandler = (filterValue) => {
    setFilteredFolder(filterValue);
  };

  const duplicatedfolders = repoFiles.map((file) => file.folder);
  const folders = duplicatedfolders.filter(
    (item, index) => duplicatedfolders.indexOf(item) === index
  );

  const filteredFiles = repoFiles.filter(
    (file) => file.folder === filteredFolder
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredFolder}
        folders={folders}
        onFilter={filterHandler}
      />
      {/* <ExpenseChart expenseList={filteredFiles} /> */}
      <ExpensesList filteredFiles={filteredFiles} />
    </Card>
  );
}

export default Expenses;
