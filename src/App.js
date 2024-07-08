import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TransactionProvider } from "./context/TransactionContext";
import NavigationBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import FormTransaksi from "./components/FormTransaksi";
import Laporan from "./components/Laporan";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./styles/App.css";

const App = () => {
  return (
    <AuthProvider>
      <TransactionProvider>
        <Router>
          <NavigationBar />
          <div className="container-fluid">
            <div className="row">
              <Sidebar className="col-md-2" />
              <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/transactions" element={<FormTransaksi />} />
                  <Route path="/reports" element={<Laporan />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </TransactionProvider>
    </AuthProvider>
  );
};

export default App;
