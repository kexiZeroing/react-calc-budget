import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill ", amount: 1200 }
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  // React Fragments look like empty JSX tags. They let you group a list of children without adding extra nodes to the DOM (shorthand syntax <></>)
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending :
        <span className="total">
          $
          {expenses.reduce((acc, cur) => acc += cur.amount, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
