import React, {Component} from "react";
import "./Home.scss";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";
import HomeFourSteps from "../HomeFoursSteps/HomeFourSteps";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeHelp from "../HomeHelp/HomeHelp";
import HomeContact from "../HomeContact/HomeContact";
import HomeFooter from "../HomeFooter/HomeFooter";



class Home extends Component{
    render(){
        return(
            <section className= "home">
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAboutUs/>
                <HomeHelp/>
                <HomeContact/>
                <HomeFooter/>
            </section>
        );
    }
}

export default Home;