import React, {Component} from "react";
import deco from '../../assets/assets/Decoration.svg'; // with import
import "./HomeFourSteps.scss";
import arrows from '../../assets/assets/arrows.svg'
import polo from '../../assets/assets/polo-shirt.svg'
import bag from '../../assets/assets/shopping-bag.svg'
import loupe from '../../assets/assets/loupe.svg'
import {NavLink} from "react-router-dom";


class HomeFourSteps extends Component{
    render(){
        return(
            <section className="home_four_step">
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={deco} alt=""/>
                <div className="background">
                <div className="four-cols">
                    <div className="column">
                        <img src={polo} alt=""/>
                        <h2>Wybierz rzeczy</h2>
                        <div></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="column">
                        <img src={bag} alt=""/>
                        <h2>Spakuj je</h2>
                        <div></div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="column">
                        <img src={loupe} alt=""/>
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <div></div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="column">
                        <img src={arrows} alt=""/>
                        <h2>Zamów kuriera</h2>
                        <div></div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                </div>
                <NavLink to={"/logowanie"}><button>ODDAJ RZECZY</button></NavLink>
            </section>
        )
    }
}

export default HomeFourSteps;