"use client";

import React from "react";
import Link from "next/link";
import { ButtonConnectWallet } from "./ButtonConnectWallet";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold text-purple-600">
          MyDApp
        </Link>
        <div className="space-x-4">
          <Link
            href="/BorrowPage"
            className="text-gray-700 hover:text-purple-600"
          >
            Dashboard
          </Link>
          <Link
            href="/LendingPage"
            className="text-gray-700 hover:text-purple-600"
          >
            Marketplace
          </Link>
        </div>
      </div>

      <div className="relative group">
        <ButtonConnectWallet />
      </div>
    </nav>
  );
};
