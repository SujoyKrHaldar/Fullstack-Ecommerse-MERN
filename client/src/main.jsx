import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import "./index.css";
import { AuthProvider } from "./components/context/authProvider";
import { NotifyProvider } from "./components/context/notificationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotifyProvider>
    <AuthProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
        <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </AuthProvider>
  </NotifyProvider>
);
