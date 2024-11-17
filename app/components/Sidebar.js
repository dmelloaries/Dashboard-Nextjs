import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import dashboard from "../../public/Dashboard.png";
import integration from "../../public/integration.png";
import manage from "../../public/manage.png";
import performance from "../../public/performance.png";
import report from "../../public/report.png";
import setting from "../../public/setting.png";
import dropdown from "../../public/dropdown.png";
import Navbar from "./Navbar";
import Main from "./Main";

const SidebarItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center px-4 py-3 cursor-pointer hover:bg-emerald-900 hover:text-white rounded-lg transition-colors ${
      active ? "bg-emerald-800 text-white" : "text-gray-700"
    }`}
  >
    <Image src={icon} alt={label} className="w-auto h-10" />
    <span className="ml-3 text-sm font-medium">{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="max-w-auto min-h-screen bg-gray-50 border-r border-gray-200 px-3 py-4">
      {/* Logo Section */}
      <div className="px-4 mb-8">
        <Image src={logo} alt="Peak Align" className="h-8 w-auto" />
      </div>

      {/* Dropdown Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center space-x-2 p-2 border rounded-lg">
          <Image src={dropdown} alt="Peak Align FY" className="w-5 h-5" />
          <span className="text-sm text-emerald-900">Peak Align FY 24-25</span>
        </div>
      </div>

      {/* Menu Section */}
      <div className="space-y-1">
        <div className="px-4 mb-2">
          <span className="text-xs font-semibold text-gray-500">MENU</span>
        </div>
        <SidebarItem icon={dashboard} label="Dashboard" />
        <SidebarItem icon={integration} label="OKR Management" />
        <SidebarItem icon={performance} label="Performance Management" />
        <SidebarItem icon={manage} label="Employee Management" />
        <SidebarItem icon={integration} label="Integration Setting" />
        <SidebarItem icon={report} label="Report and Analytics" />
      </div>

      {/* General Section */}
      <div className="mt-8 space-y-1">
        <div className="px-4 mb-2">
          <span className="text-xs font-semibold text-gray-500">GENERAL</span>
        </div>
        <SidebarItem icon={setting} label="Setting" />
        <SidebarItem icon={setting} label="Help and Support" />
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full bg-white ">
        <Navbar></Navbar>
       <Main></Main>
      </div>
    </div>
  );
};

export default Layout;
