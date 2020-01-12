import React, {Component} from "react";
import "./Register.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from "../../assets/assets/Decoration.svg";

class Register extends Component{
    state = {
        email: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(`Nazwa: ${this.state.email}`);
        console.log(`Hasło: ${this.state.password}`);
    };
    render(){
        const {email, password} = this.state;
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
                        <form onSubmit={this.handleSubmit}>
                            <input type="email"
                                   name="name"
                                   value={name}
                                   onChange={this.handleChange}/>
                            <p>Hasło</p>
                            <input type="password"
                                   name="password"
                                   value={password}
                                   onChange={this.handleChange}/>
                            <p className="password_repeat">Powtórz hasło</p>
                            <input type="password"
                                   name="password"
                                   value={password}
                                   onChange={this.handleChange}/>
                        </form>
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