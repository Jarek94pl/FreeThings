import React, {Component} from "react";
import "./HomeHeader.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from '../../assets/assets/Decoration.svg';
import Navigation from "../Navigation/Navigation"; // with import



class HomeHeader extends Component{
    render(){
        return(
            <header className= "home">
                <Navigation/>
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