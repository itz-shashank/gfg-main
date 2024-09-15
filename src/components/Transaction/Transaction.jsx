import React from 'react';

// Transaction data (without manually assigned IDs)
const transactions = [
  { date: '2024-09-01', amount: '₹200.00', status: 'Credited' },
  { date: '2024-09-02', amount: '₹150.00', status: 'Debited' },
  { date: '2024-09-03', amount: '₹300.00', status: 'Credited' },
  { date: '2024-09-04', amount: '₹450.00', status: 'Debited' },
  { date: '2024-09-05', amount: '₹230.00', status: 'Credited' },
  { date: '2024-09-06', amount: '₹110.00', status: 'Debited' },
  { date: '2024-09-07', amount: '₹540.00', status: 'Debited' },
  { date: '2024-09-08', amount: '₹640.00', status: 'Credited' },
  { date: '2024-09-09', amount: '₹740.00', status: 'Credited' },
  { date: '2024-09-10', amount: '₹210.00', status: 'Debited' },
  { date: '2024-09-11', amount: '₹400.00', status: 'Debited' },
  { date: '2024-09-12', amount: '₹600.00', status: 'Credited' },
  { date: '2024-09-13', amount: '₹320.00', status: 'Debited' },
  { date: '2024-09-14', amount: '₹120.00', status: 'Credited' },
  { date: '2024-09-15', amount: '₹520.00', status: 'Credited' },
  { date: '2024-09-16', amount: '₹240.00', status: 'Debited' },
  { date: '2024-09-17', amount: '₹100.00', status: 'Credited' },
  { date: '2024-09-18', amount: '₹80.00', status: 'Debited' },
  { date: '2024-09-19', amount: '₹300.00', status: 'Debited' },
  { date: '2024-09-20', amount: '₹320.00', status: 'Credited' },
  { date: '2024-09-21', amount: '₹520.00', status: 'Credited' },
  { date: '2024-09-22', amount: '₹450.00', status: 'Debited' },
  { date: '2024-09-23', amount: '₹400.00', status: 'Debited' },
  { date: '2024-09-24', amount: '₹200.00', status: 'Credited' },
  { date: '2024-09-25', amount: '₹100.00', status: 'Debited' },
  { date: '2024-09-26', amount: '₹500.00', status: 'Credited' },
  { date: '2024-09-27', amount: '₹300.00', status: 'Credited' },
  { date: '2024-09-28', amount: '₹250.00', status: 'Debited' },
  { date: '2024-09-29', amount: '₹150.00', status: 'Debited' },
  { date: '2024-09-30', amount: '₹340.00', status: 'Credited' },
  { date: '2024-10-01', amount: '₹440.00', status: 'Credited' },
];

// Helper function to calculate totals
const calculateTotal = (transactions, status) => {
  return transactions
    .filter(transaction => transaction.status === status)
    .reduce((total, transaction) => total + parseFloat(transaction.amount.replace('₹', '')), 0);
};

// Generate unique ID using Math.random()
const generateId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random 9-character string
};

const TransactionHistory = () => {
  const totalCredited = calculateTotal(transactions, 'Credited');
  const totalDebited = calculateTotal(transactions, 'Debited');
  const netTotal = totalCredited - totalDebited;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Transaction History</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="py-3 px-6 text-left text-gray-700">Date</th>
            <th className="py-3 px-6 text-left text-gray-700">Amount</th>
            <th className="py-3 px-6 text-left text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={generateId()} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6 text-gray-800">{transaction.date}</td>
              <td className="py-3 px-6 text-gray-800">{transaction.amount}</td>
              <td className={`py-3 px-6 ${transaction.status === 'Credited' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total section */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Summary</h2>
        <p className="mt-2 text-gray-700">Total Credited: ₹{totalCredited.toFixed(2)}</p>
        <p className="mt-2 text-gray-700">Total Debited: ₹{totalDebited.toFixed(2)}</p>
        <p className="mt-2 text-gray-700 font-semibold">Net Total: ₹{netTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TransactionHistory;
