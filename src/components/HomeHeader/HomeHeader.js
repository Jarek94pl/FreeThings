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
                               duration={500}>Start
                    </Link></li>
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
                <div className="action">
                    <div className="action_paragraphs">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={deco} alt="" />
                    </div>

                    <div className="action_divs">
                        <button>ODDAJ RZECZY</button>
                        <button>ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>
            </header>
        );
    };
}
export default HomeHeader;