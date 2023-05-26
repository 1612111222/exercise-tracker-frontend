import React from "react";
import "./App.css";
import Landing from "./Components/LandingPage/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import {Register}  from "./Components/Register/Register";
import {Dashboard} from  "./Components/Dashboard/Dashboard"
import Activity from "./Components/Activitty/Activity";
import Details from "./Components/Details/Details";
import Edit  from "./Components/Edit/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/details" element={<Details/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
