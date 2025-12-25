import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Team", active: false },
    { icon: BarChart2, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  // Handle LogOut
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("login");
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar for Mobile - Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-800/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-slate-950">
          <span className="text-2xl font-bold tracking-wider text-indigo-400">
            DevDash
          </span>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={20} className="mr-3" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 shadow-sm">
          <button
            onClick={toggleSidebar}
            className="text-slate-500 hover:text-indigo-600 lg:hidden focus:outline-none"
          >
            <Menu size={24} />
          </button>

          <div className="hidden md:flex items-center flex-1 max-w-xl ml-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                placeholder="Search projects..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
              JD
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Hero Section */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Office"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-indigo-900/60 mix-blend-multiply"></div>
              </div>
              <div className="relative p-8 sm:p-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Welcome back, John!
                </h1>
                <p className="max-w-2xl text-lg text-indigo-100 mb-8">
                  You have 4 pending tasks and 2 new messages today. Your team's
                  productivity has increased by 15% this week.
                </p>
                <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
                  View Reports
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Project Alpha",
                  desc: "Mobile app development for client X",
                  status: "In Progress",
                  color: "bg-emerald-100 text-emerald-800",
                },
                {
                  title: "Marketing Campaign",
                  desc: "Q4 Social Media Strategy",
                  status: "Pending",
                  color: "bg-amber-100 text-amber-800",
                },
                {
                  title: "System Update",
                  desc: "Server maintenance and patching",
                  status: "Completed",
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  title: "Client Meeting",
                  desc: "Review initial design mockups",
                  status: "Today, 2:00 PM",
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  title: "Code Review",
                  desc: "PR #405 needs attention",
                  status: "Urgent",
                  color: "bg-red-100 text-red-800",
                },
                {
                  title: "Team Lunch",
                  desc: "Monthly team bonding event",
                  status: "Friday",
                  color: "bg-slate-100 text-slate-800",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{item.desc}</p>
                  <a
                    href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-800 text-sm flex items-center"
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
