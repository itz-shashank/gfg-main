import React from "react";
import {
  BarChart,
  Wallet,
  HandCoins,
  BadgeIndianRupee
} from "lucide-react";
import Dashboard from "../Dashboard/Dashboard.jsx";

export function SidebarThree() {
  return (
    <div className=" fixed top-0 left-0 h-screen  mr-10 ">
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8 scale-105">
        <img
          src="public/logo.png"
          className="h-20 w-20 rounded-3xl items-center justify-center"
        />
      
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
           
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/Transactions"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">All Transactions</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/Splitwise"
            >
              <BadgeIndianRupee className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">SplitWise</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="/Expenses"
            >
              <HandCoins className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-lg font-medium">Expenses</span>
            </a>
          </div>
        </nav>
      </div>
    </aside></div>
  );
}
