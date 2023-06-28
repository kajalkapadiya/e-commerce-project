import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// React BootStrap configuration.

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./Components/auth/AuthContext";
import CartContextProvider from "./storeRoom/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
