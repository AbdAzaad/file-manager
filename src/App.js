import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const repoFiles = [];
let userName = "AbdAzaad";
let repoName = "tester";

fetch(
  `https://api.github.com/repos/${userName}/${repoName}/git/trees/main?recursive=1`
)
  .then((response) => response.json())
  .then((data) => {
    for (const item of data.tree) {
      const newItem = {};
      let remainingPath = "miscellaneous";
      let name = "";
      if (item.path.includes("/")) {
        name = item.path.slice(item.path.lastIndexOf("/") + 1);
        remainingPath = item.path.slice(0, item.path.lastIndexOf("/") + 1);
      } else {
        name = item.path;
      }
      newItem.folder = remainingPath.includes("/")
        ? remainingPath.slice(0, remainingPath.lastIndexOf("/"))
        : remainingPath;
      newItem.title = name;
      newItem.date = new Date(2021, 5, 12);
      newItem.amount = item.size;
      newItem.id = `https://${userName}.github.io/${repoName}/${newItem.folder}/${name}`;
      repoFiles.push(newItem);
      // console.log(repoFiles);
    }
  });
function App() {
  return (
    <div className="App">
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <Expenses repoFiles={repoFiles} />
    </div>
  );
}

export default App;
