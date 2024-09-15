
import React, { useState } from 'react';

const SplitwiseComponent = () => {
 
  const groupMembers = ['Shashank','Priyanshu','Divyansh','Abhishek'];


  const [expenseAmount, setExpenseAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [balances, setBalances] = useState({
    Shashank: 0,
    Priyanshu: 0,
    Divyansh: 0,
    Abhishek: 0,
  });

  
  const handleSplitExpense = (e) => {
    e.preventDefault();

    if (!expenseAmount || !payer) {
      alert('Please enter all the details!');
      return;
    }

    const splitAmount = expenseAmount / groupMembers.length;
    const updatedBalances = { ...balances };

    groupMembers.forEach((member) => {
      if (member === payer) {
        updatedBalances[member] -= expenseAmount - splitAmount;
      } else {
        updatedBalances[member] += splitAmount;
      }
    });

    setBalances(updatedBalances);
    setExpenseAmount(''); 
    setPayer(''); 
  };

  
  const handleSettleUp = () => {
    setBalances({
        Shashank: 0,
        Priyanshu: 0,
        Divyansh: 0,
        Abhishek: 0,
    });
  };

  return (

    
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Split Expense</h1>
      
      {/* Input Form */}
      <form onSubmit={handleSplitExpense} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Total Expense</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter total amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Who Paid?</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value="">Select a member</option>
            {groupMembers.map((member, index) => (
              <option key={index} value={member}>
                {member}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Split Expense
        </button>
      </form>

      {/* Split Summary */}
      {Object.keys(balances).length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-3">Expense Summary</h2>
          <ul>
            {groupMembers.map((member) => (
              <li key={member} className="text-gray-800">
                {member} {balances[member] >= 0 ? `owes` : `gets back`} <strong>₹{Math.abs(balances[member]).toFixed(2)}</strong>
              </li>
            ))}
          </ul>

          {/* Settle Up Button */}
          <button
            onClick={handleSettleUp}
            className="w-full bg-green-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-green-600"
          >
            Settle Up
          </button>
        </div>
      )}
    </div>
  );
};

export default SplitwiseComponent;
