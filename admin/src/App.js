import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect } from "react";
import Login from "./pages/login";

const MyContext = createContext();

function App() {
  const [isToggled, setIsToggled] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isHideSidebarandHeader, setIsHideSidebarandHeader] =
    React.useState(false);
  const toggleSidebar = () => {
    setIsToggled(!isToggled);
  };
  useEffect(() => {
    if (isToggled) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isToggled]);

  const values = {
    isToggled,
    toggleSidebar,
    isLoggedIn,
    setIsLoggedIn,
    isHideSidebarandHeader,
    setIsHideSidebarandHeader,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {!isHideSidebarandHeader && <Header />}
        <div className="main d-flex">
          {
            !isHideSidebarandHeader && <div className={`sidebarWrapper ${isToggled ? "toggle" : ""}`}>
            <Sidebar />
          </div>
          }
          
          <div className={`content ${isHideSidebarandHeader==true ? "full":""} ${isToggled ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
