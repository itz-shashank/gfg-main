import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { SidebarThree } from "./components/Navigation/Sidebar";
import TransactionHistory from "./components/Transaction/Transaction";
import SplitwiseComponent from "./components/SplitWise/Splitwisecomponent";
import ExpenseComponent from "./components/Expense/ExpenseComponent";


function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    Expense: [650, 590, 800, 810, 560, 550, 400],
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
