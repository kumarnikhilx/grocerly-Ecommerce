import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// .main .sidebarWrapper {width: 20%; flex: 0 0 20%; transition: all 0.3s ease-in-out;}
// .main .sidebarWrapper .sidebar {width: 20%; height: 100vh;max-height: calc(100%-70px); position: fixed; top: 70px; left: 0px; background: #fff; overflow-y: scroll; overflow-x: hidden;padding-bottom: 80px;}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
