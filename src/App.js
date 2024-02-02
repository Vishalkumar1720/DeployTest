import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Components/Home";
import HomePage from "./Pages/All-Home-Pages/HomePage";
import InvManagement from "./Pages/All-InvManagement-Pages/InvManagement";
import Billing from "./Pages/All-Billing-Pages/Billing";
import Analysis from "./Pages/All-Analysis-Pages/Analysis";
import Video from "./Pages/All-Video-Pages/Video";
import AddStock from "./Pages/All-Home-Pages/AddStock";
import Pos from "./Pages/All-Home-Pages/Pos";
import Po from "./Pages/All-Home-Pages/Purchase-order";
import RemoveExp from "./Pages/All-Home-Pages/RemoveExp";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp/> },
  { path: "/login", element: <Login /> },
  { path: "/homePage", element: <HomePage /> },
  { path: "/invManagement", element: <InvManagement /> },
  { path: "/billing", element: <Billing /> },
  { path: "/analysis", element: <Analysis /> },
  { path: "/video", element: <Video /> },
  { path: "/pointOfSale", element: <Pos /> },
  { path: "/inventaryHealth", element: <AddStock /> },
  { path: "/PurchaseOrder", element: <Po /> },
  { path: "/RemoveExpiry", element: <RemoveExp /> },
];

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
