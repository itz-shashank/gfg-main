
import React, { useState } from 'react';

const ExpenseComponent = () => {
  
  const [expense, setExpense] = useState({
    id: '',
    date: '',
    amount: '',
    status: 'Credited',
  });

  
  const [expenses, setExpenses] = useState([]);

 
  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!expense.id || !expense.date || !expense.amount || !expense.status) {
      alert('Please fill all fields');
      return;
    }

    
    setExpenses([...expenses, expense]);

    
    setExpense({
      id: '',
      date: '',
      amount: '',
      status: 'Credited',
    });
  };

  return (
  
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 bg-gradient-to-r from-cyan-500 to-blue-500"  >
      <h1 className="text-2xl font-bold mb-4 text-center">Add Expense</h1>

      {/* Form to add expense */}
      <form onSubmit={handleSubmit} className="mb-6">
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter ID"
            value={expense.id}
            onChange={handleChange}
          />
        </div> */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={expense.date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            name="amount"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={expense.status}
            onChange={handleChange}
          >
            <option value="Credited">Credited</option>
            <option value="Debited">Debited</option>
          </select>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Expense
        </button>
      </form>

      {/* Display list of expenses */}
      {expenses.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-3">Expense History</h2>
          <ul>
            {expenses.map((expenseItem, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>ID: {expenseItem.id}</span>
                <span>Date: {expenseItem.date}</span>
                <span>Amount: ₹{expenseItem.amount}</span>
                <span>Status: {expenseItem.status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
   
  );
};

export default ExpenseComponent;
