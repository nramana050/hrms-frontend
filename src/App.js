import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import MainHrRouting from "../src/Hr/components/MainHrRouting";
import MainEmpRouting from "../src/Employee/components/MainEmpRouting";
import LoginSignup from "./Hr/components/LoginSignup";
import useAuth from ".././src/Hr/hooks/useAuth"

function App() {
  const { logout } = useAuth();
  const token = localStorage.getItem("TokenOrive");
  console.log("yahan", token);
  return (
    <div className="App">
      {token?<MainHrRouting logout={logout}/>:<LoginSignup/>}
      {token?<MainEmpRouting logout={logout}/>:<LoginSignup/>}
      {/* <MainEmpRouting logout={logout}/> */}
    </div>
  );
}

export default App;
