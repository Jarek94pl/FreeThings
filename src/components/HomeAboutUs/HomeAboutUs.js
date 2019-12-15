import React, {Component} from "react";
import "./HomeAboutUs.scss";
import deco from '../../assets/assets/Decoration.svg'
import signature from '../../assets/assets/Signature.svg'

class HomeAboutUs extends Component{
    render(){
        return(
            <section className="home_about_us">
                <div className="about_us_text">
                    <div className="position">
                        <h1>O nas</h1>
                        <img className="deco" src={deco} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img  className="signature" src={signature} alt=""/>
                    </div>
                </div>
                <div className="picture_div">

                </div>
            </section>
        )
    }
}

export default HomeAboutUs;