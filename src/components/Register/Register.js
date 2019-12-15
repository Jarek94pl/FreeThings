import React, {Component} from "react";
import "./Register.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from "../../assets/assets/Decoration.svg";

class Register extends Component{
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
                    <h1>Zaloguj się</h1>
                    <img src={deco} alt=""/>

                    <div className="form_inputs">
                        <p>Email<br/></p>
                        <input/>
                        <p>Hasło</p>
                        <input/>
                        <p className="password_repeat">Powtórz hasło</p>
                        <input/>
                    </div>
                </section>
                <div className="options">
                    <div className= "loginAccount">
                        <NavLink to={"/logowanie"}><p>Zaloguj</p></NavLink>
                    </div>
                    <div className= "registerAccount">
                        <NavLink to={"/rejestracja"}>Załóż konto</NavLink>
                    </div>
                </div>
            </>
        )
    }
}

export default Register;