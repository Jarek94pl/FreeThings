import React, {Component} from "react";
import "./Logout.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from '../../assets/assets/Decoration.svg'; // with import


class Login extends Component{
    render(){
        return(
            <>
                <div className= "accounts">
                    <div className= "loginAccount">
                        <NavLink to={"/logowanie"}><p>Zaloguj</p></NavLink>
                    </div>
                    <div className= "registerAccount">
                        <NavLink to={"/rejestracja"}>Załóż konto</NavLink>
                    </div>
                </div>
                <ul className= "homeMenu">
                    <li><NavLink  to={"/"}>
                        Start
                    </NavLink>
                    </li>
                    <li><Link  activeClass="active"
                               to="home_four_step"
                               spy={true}
                               smooth={true}
                               duration={500}>O co chodzi?
                    </Link></li>
                    <li><Link  activeClass="active"
                               to="home_about_us"
                               spy={true}
                               smooth={true}
                               duration={500}>O nas
                    </Link></li>
                    <li><Link  activeClass="active"
                               to="home_help"
                               spy={true}
                               smooth={true}
                               duration={500}>Fundacja i organizacje
                    </Link></li>
                    <li><Link  activeClass="active"
                               to="home_contact"
                               spy={true}
                               smooth={true}
                               duration={500}>Kontakt
                    </Link></li>
                </ul>
                <section>
                    <h1>Wylogowanie nastąpiło <br/> pomyślnie!</h1>
                    <img src={deco} alt=""/>
                    <div>
                    <NavLink to={"/"}><button>STRONA GŁÓWNA</button></NavLink>
                    </div>
                </section>

            </>
        )
    }
}

export default Login;