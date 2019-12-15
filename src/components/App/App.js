import React from 'react';
import Home from "../Home/Home";
import Login from "../Login/Login"
import Register from "../Register/Register"
import Logout from "../Logout/Logout"
import {HashRouter as Router, Route} from "react-router-dom";
import './App.scss';

function App() {
    return (
            <main className="App">
                <Router>
                   <switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/logowanie" component={Login}/>
                    <Route exact path="/rejestracja" component={Register}/>
                    <Route exact path="/wylogowano" component={Logout}/>
                   </switch>
                </Router>
            </main>


    );
}

export default App;