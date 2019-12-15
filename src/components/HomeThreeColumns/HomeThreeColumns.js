import React, {Component} from "react";
import "./HomeThreeColumns.scss";


class HomeThreeColumns extends Component{
    render(){
        return(
            <section className="three_cols">
                <div className="first-col">
                    <h1>10</h1>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="second-col">
                    <h1>5</h1>
                    <h3>WSPARTYCH ORGANIZACJI</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="third-col">
                    <h1>7</h1>
                    <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
        )
    }
}

export default HomeThreeColumns;