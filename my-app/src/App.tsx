import React from "react";
import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter,Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import LogIn from "./components/LogIn/log_in";
import Register from "./components/register/register";
import NewPassword from "./components/new_password/new_password";
import Four from "./components/404/404";
import {PasswordRecovery} from "./components/password-recovery/password_recovery";
import SortPacks from "./components/SortPacks/SortPacks";
import Table from "./components/table/table";
import {routes} from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <div className="RenderPlace">
                <Route path={"/Profile"} component={Profile}/>
                <Route path={"/Log_in"} component={LogIn}/>
                <Route path={"/Register"} component={Register}/>
                <Route path={"/New_Password"} component={NewPassword}/>
                <Route path={"/PasswordRecovery"} component={PasswordRecovery}/>
                <Route path={"/404"} component={Four}/>
            </div>
        </div>
        
    </BrowserRouter>
  );
}

export default App;
