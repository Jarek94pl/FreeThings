import React, {Component} from "react";
import "./Home.scss";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";
import HomeFourSteps from "../HomeFoursSteps/HomeFourSteps";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeHelp from "../HomeHelp/HomeHelp";
import HomeContact from "../HomeContact/HomeContact";



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
            </section>
        );
    }
}

export default Home;