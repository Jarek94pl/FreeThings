import React, {Component} from "react";
import "./Navigation.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

class Navigation extends Component{
    render(){
        return(
            <nav className= "home">
                <div className= "accounts">
                    <div className= "loginAccount">
                        <NavLink to={"/logowanie"}><p>Zaloguj</p></NavLink>
                    </div>
                    <div className= "registerAccount">
                        <NavLink to={"/rejestracja"}>Załóż konto</NavLink>
                    </div>
                </div>
                <ul className= "homeMenu">
                    <li><NavLink to={"/"} style={{textDecoration:"none", color: "black"}}>Start
                    </NavLink></li>
                    <li><Link  activeClass="active"
                               to="home_four_step"
                               spy={true}
                               smooth={true}
                               duration={800}>O co chodzi?
                    </Link></li>
                    <li><Link  activeClass="active"
                               to="home_about_us"
                               spy={true}
                               smooth={true}
                               duration={800}>O nas
                    </Link></li>
                    <li><Link  activeClass="active"
                               to="home_help"
                               spy={true}
                               smooth={true}
                               duration={800}>Fundacja i organizacje
                    </Link></li>
                    <li><Link  activeClass="active"
                               to="home_contact"
                               spy={true}
                               smooth={true}
                               duration={800}>Kontakt
                    </Link></li>
                </ul>

            </nav>
        );
    };
}
export default Navigation;

