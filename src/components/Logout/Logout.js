import React, {Component} from "react";
import "./Logout.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from '../../assets/assets/Decoration.svg';
import Navigation from "../Navigation/Navigation"; // with import


class Logout extends Component{
    render(){
        return(
            <>
                <Navigation/>
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

export default Logout;