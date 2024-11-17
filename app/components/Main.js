"use client"
import Image from "next/image";
import filter from "../../public/filter.png";
import r1 from "../../public/r1.png";
import r2 from "../../public/r2.png";
import r3 from "../../public/r3.png";
import a1 from "../../public/a1.png";
import a2 from "../../public/a2.png";

import React, { useState } from 'react';

import { ChevronDown, ChevronRight } from "lucide-react";

const Main = () => {
  const [expandedItems, setExpandedItems] = useState({
    item1: true,
    item2: false,
  });

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="p-5">
      {/* Search Header - Previous Code */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white">
          <span className="text-sm">2</span>
        </div>
        <div className="flex items-center">
          <span className="text-black text-lg">Objectives result for: </span>
          <span className="text-gray-500 text-sm ml-1">
            "My Individual OKR in 17/10/2024"
          </span>
        </div>
        <div className="flex items-center ml-auto gap-3">
          <div className="flex items-center border border-gray-200 rounded-full pr-2">
            <div className="pl-3 pr-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search here..."
              className="py-2 px-2 outline-none text-sm w-64 bg-transparent"
            />
          </div>
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 border border-gray-300 text-gray-500 rounded-full hover:bg-gray-200">
            <Image src={filter} alt="filter" className="w-auto h-5" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      {/* OKR List */}
      <div className="space-y-2">
        {/* First Main Item */}
        <div className="bg-gray-50 rounded-lg">
          <div 
            className="p-4 flex items-center cursor-pointer"
            onClick={() => toggleExpand('item1')}
          >
            <button className="mr-2">
              {expandedItems.item1 ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            <Image src={r1} alt="icon" className="w-6 h-6 mr-3" />
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <h3 className="font-medium">Hire Top Tier Software Development for IT Team</h3>
                <span className="text-red-500 text-sm">Hard Deadline</span>
                <span className="text-gray-500 text-sm">Oct 2024 - Dec 2024</span>
                <div className="w-20 bg-teal-100 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{width: '24%'}}></div>
                </div>
                <span className="text-gray-700">24%</span>
                <div className="flex items-center gap-2 ml-auto">
                  <Image src={r1} alt="user" className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-gray-600">Sara Ali Khan</span>
                  <span className="text-sm text-gray-500">Individual</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dropdown Content */}
          {expandedItems.item1 && (
            <div className="pl-12 pb-4 space-y-3">
              {/* Sub Item 1 */}
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                <Image src={a1} alt="icon" className="w-6 h-6" />
                <span className="font-medium">Hire 100 Top Tier Software Development Employee</span>
                <div className="flex items-center gap-3 ml-4">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Target:</span>
                    <span className="text-sm">100 Employees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Achievement:</span>
                    <span className="text-sm">70 Employees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Remain:</span>
                    <span className="text-sm">30 Employees</span>
                  </div>
                </div>
              </div>

              {/* Sub Item 2 */}
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                <Image src={a2} alt="icon" className="w-6 h-6" />
                <span className="font-medium">Hire 100 Top Tier Software Development Employee</span>
                <div className="flex items-center gap-3 ml-4">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Target:</span>
                    <span className="text-sm">100 Employees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Achievement:</span>
                    <span className="text-sm">70 Employees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Remain:</span>
                    <span className="text-sm">30 Employees</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Second Main Item */}
        <div className="bg-gray-50 rounded-lg">
          <div 
            className="p-4 flex items-center cursor-pointer"
            onClick={() => toggleExpand('item2')}
          >
            <button className="mr-2">
              {expandedItems.item2 ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            <Image src={r2} alt="icon" className="w-6 h-6 mr-3" />
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <h3 className="font-medium">Sell 120 Security Data Dog Software</h3>
                <span className="text-red-500 text-sm">Hard Deadline</span>
                <span className="text-gray-500 text-sm">Sept 2024 - Dec 2024</span>
                <div className="w-20 bg-teal-100 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="text-gray-700">65%</span>
                <div className="flex items-center gap-2 ml-auto">
                  <Image src={r2} alt="user" className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-gray-600">Raline Syah</span>
                  <span className="text-sm text-gray-500">Individual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Main Item */}
        <div className="bg-gray-50 rounded-lg">
          <div className="p-4 flex items-center cursor-pointer">
            <button className="mr-2">
              <ChevronRight size={20} />
            </button>
            <Image src={r3} alt="icon" className="w-6 h-6 mr-3" />
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <h3 className="font-medium">Sell 120 Security Data Dog Software</h3>
                <span className="text-red-500 text-sm">Hard Deadline</span>
                <span className="text-gray-500 text-sm">Sept 2024 - Dec 2024</span>
                <div className="w-20 bg-teal-100 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="text-gray-700">65%</span>
                <div className="flex items-center gap-2 ml-auto">
                  <Image src={r3} alt="user" className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-gray-600">Raline Syah</span>
                  <span className="text-sm text-gray-500">Individual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;