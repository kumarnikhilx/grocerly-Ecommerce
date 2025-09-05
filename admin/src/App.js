import { BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect } from "react";

const MyContext = createContext();

function App() {
  const [isToggled, setIsToggled] = React.useState(false);
  const toggleSidebar = () => {
    setIsToggled(!isToggled);
  };
  useEffect(() => { 
    if(isToggled){
      document.body.classList.add("sidebar-open");
    }else{
      document.body.classList.remove("sidebar-open");
    }
    }, [isToggled]);
//   useEffect(() => {
// alert(isToggled);
    
//   }, [isToggled]);

  const values = { 
   isToggled,
   toggleSidebar  
   };
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header />
      <div className="main d-flex">
        <div className={`sidebarWrapper ${isToggled ? "toggle" : ""}`}>
          <Sidebar />
        </div>
        <div className={`content ${isToggled ? "toggle" : ""}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
