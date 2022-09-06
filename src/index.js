import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { UpgradeVehicle } from "./components/UpgradeVehicle";
import { RegisterEntrance } from "./components/RegisterEntrance";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTypeVehicle from "./components/CreateTypeVehicle";
import RegisterExit from "./components/RegisterExit";
import GeneratePayment from "./components/GeneratePayment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar10"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar10">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  Entrance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/exit'>
                  Exit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/createtypevehicle'>
                  Add Type Vehicle
                </Link>
              </li>
            
              <li className="nav-item">
              <Link className="nav-link" to='/upgradevehicle'>
                  Upgrade Vehicle
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='/generatepayment'>
                  Payment Resident
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <Routes>
        <Route path="/" element={<RegisterEntrance/>} />
        <Route path="/exit" element={<RegisterExit/>} />
        <Route path="/createtypevehicle" element={<CreateTypeVehicle />} />
        <Route path="/upgradevehicle" element={<UpgradeVehicle />} />
        <Route path="/generatepayment" element={<GeneratePayment />} />
 
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
