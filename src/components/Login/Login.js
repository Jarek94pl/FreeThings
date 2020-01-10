import React, {Component} from "react";
import "./Login.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from '../../assets/assets/Decoration.svg'; // with import


class Login extends Component{
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
                                   name="email"
                                   value={email}
                                   onChange={this.handleChange}/>
                            <p>Hasło</p>
                            <input type="password"
                                   name="password"
                                   value={password}
                                   onChange={this.handleChange}/>
                            <input className="submit" type="submit" value="Zaloguj"/>
                        </form>
                    </div>
                </section>
                <div className="options">
                <div className= "registerAccount">
                    <NavLink to={"/rejestracja"}>Załóż konto</NavLink>
                </div>
                </div>
            </>
        )
    }
}

export default Login;