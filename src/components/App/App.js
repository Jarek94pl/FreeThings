import React from 'react';
import Home from "../Home/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

function App() {
    return (
            <main className="App">
                <Router>
                   <switch>
                    <Route exact path="/" component={Home}/>
                   </switch>
                </Router>
            </main>


    );
}

export default App;