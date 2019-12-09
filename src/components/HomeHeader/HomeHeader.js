import React, {Component} from "react";
import "./HomeHeader.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";


class HomeHeader extends Component{
    render(){
        return(
            <header className= "home">
                <div className= "accounts">
                    <div className= "loginAccount">Zaloguj</div>
                    <div className= "registerAccount">Załóż konto</div>
                </div>
                <ul className= "homeMenu">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </header>
        )
    }
}

export default HomeHeader;