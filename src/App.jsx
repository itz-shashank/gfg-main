import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { SidebarThree } from "./components/Navigation/Sidebar";
import TransactionHistory from "./components/Transaction/Transaction";
import SplitwiseComponent from "./components/SplitWise/Splitwisecomponent";
import ExpenseComponent from "./components/Expense/ExpenseComponent";


function App() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    Expense: [5000, 3000, 4000, 4500, 3500, 6000, 7000, 6500, 5000, 5500, 6000, 4500], // Example expense data for each month
    Earnings: [10000, 12000, 11000, 14000, 13500, 7000, 16000, 5500, 14000, 14500, 15000, 14000], // Example earnings data for each month
  };
  





  
  return (
    <>
     <Router>
      <div className="flex ">
        <SidebarThree />
        <div className="ml-64 w-full p-6">

          <Routes>
            <Route path="/" element={<Dashboard data={data} />} />
            <Route path="/Transactions" element={<TransactionHistory/>} />
            <Route path="/Splitwise" element={<SplitwiseComponent />} />
            <Route path="/Expenses" element={<ExpenseComponent />} />
          </Routes>
          </div>
          </div>
        </Router>
      
    </>
  );
}

export default App;
