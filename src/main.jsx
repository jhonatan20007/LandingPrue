import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Register from "./Register.jsx";
import "./index.css";
// import {BrowserRouter as Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Route>
      <App />
    </Route> */}
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<App />} />
        {/* Ruta para el componente Register */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/register/:encodedData?" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
