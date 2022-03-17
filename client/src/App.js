import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddMovie from "./pages/AddMovie";
import Logout from "./components/Logout";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/add"
              element={
                <Protected>
                  <AddMovie />
                </Protected>
              }
            />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
