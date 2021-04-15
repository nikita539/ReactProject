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
import Table from "./components/table/table";
import {routes} from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <div className="RenderPlace">
                <Route path={routes.forProfile} component={Profile}/>
                <Route path={routes.forLogin} component={LogIn}/>
                <Route path={routes.forRegister} component={Register}/>
                <Route path={routes.foNewPassword} component={NewPassword}/>
                <Route path={routes.forPasswordRecovery} component={PasswordRecovery}/>
                <Route path={routes.forMistake} component={Four}/>
                {/*<div className="TableRender">*/}
                {/*    <Route path={routes.forTable} component={Table}/>*/}
                {/*</div>*/}
                <Route path={routes.forTable} component={Table}/>
            </div>
        </div>
        
    </BrowserRouter>
  );
}

export default App;
