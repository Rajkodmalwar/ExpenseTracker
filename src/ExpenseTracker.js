import React, { useState } from "react";
import './ExpenseTracker.css'; // Make sure the path is correct based on your file structure

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]); // Initialize as an empty array

  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: parseFloat(amount), // Convert amount to a number
    };
    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id)); // Corrected this line
  };

  return (
    <div className="expense-tracker-container">
      <header className="header">
        <h1>Project 3</h1>
      </header>
      <div className="expense-tracker">
        <h2>Expense Tracker</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Expense"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount} // Added value binding
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <button onClick={addExpense}>Add Expense</button>
        </div>
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        <p>© Developed by Raj 2024</p>
      </footer>
    </div>
  );
};

export default ExpenseTracker;
