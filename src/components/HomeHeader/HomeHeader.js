import React, {Component} from "react";
import "./HomeHeader.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from '../../assets/assets/Decoration.svg'; // with import



class HomeHeader extends Component{
    render(){
        return(
            <header className= "home">
                <div className= "accounts">
                    <div className= "loginAccount">
                        <NavLink to={"/logowanie"}><p>Zaloguj</p></NavLink>
                    </div>
                    <div className= "registerAccount">
                        <NavLink to={"/rejestracja"}>Załóż konto</NavLink>
                    </div>
                </div>
                <ul className= "homeMenu">
                    <li><Link  activeClass="active"
                               to="home"
                               spy={true}
                               smooth={true}
                               duration={800}>Start
                    </Link></li>
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
                <div className="action">
                    <div className="action_paragraphs">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={deco} alt="" />
                    </div>

                    <div className="action_divs">
                        <button><NavLink to={"/logowanie"}>ODDAJ RZECZY</NavLink></button>
                        <button><NavLink to={"/logowanie"}>ZORGANIZUJ ZBIÓRKĘ</NavLink></button>
                    </div>
                </div>
            </header>
        );
    };
}
export default HomeHeader;