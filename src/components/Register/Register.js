import React, {Component} from "react";
import "./Register.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from "../../assets/assets/Decoration.svg";

class Register extends Component{
    state = {
        email: "",
        password: "",
        password2:'',
        emailError: false,
        passwordError: false,
        password2Error: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = () => {
        const {email, password, password2} = this.state;
        let errorCounter = 0;

        function validateEmail(em) {
            let re = /\S+@\S+\.\S+/;
            return re.test(em);
        }

        if (validateEmail(email) === false) {
            this.setState({emailError: true});
            errorCounter++;
        } else {
            this.setState({emailError: false});
        }

        if (password.length < 6) {
            this.setState({passwordError: true});
            errorCounter++;
        } else {
            this.setState({passwordError: false});
        }

        if (password !== password2) {
            this.setState({password2Error: true});
            errorCounter++;
        } else {
            this.setState({password2Error: false});
        }
        if (errorCounter === 0) {
            console.log('jazda');
            this.setState({
                email: '',
                password: ''
            })
        }
    };
    render(){
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
                        <form >
                            <input  style={{border: this.state.emailError ? '1px solid red' : null}}
                                    type="text"
                                    name='email'
                                    onChange={this.handleChange}
                                    value={this.state.email}/>
                            <p>Hasło</p>
                            <input  style={{border: this.state.passwordError ? '1px solid red' : null}}
                                    type="password"
                                    name='password'
                                    onChange={this.handleChange}
                                    value={this.state.password}/>
                            <p className="password_repeat">Powtórz hasło</p>
                            <input  style={{border: this.state.password2Error ? '1px solid red' : null}}
                                    type="password"
                                    name='password2'
                                    onChange={this.handleChange}
                                    value={this.state.password2}/>
                        </form>
                    </div>
                </section>
                <div className="options">
                    <div className= "loginAccount">
                        <NavLink to={"/logowanie"}><p>Zaloguj</p></NavLink>
                    </div>
                    <div className= "registerAccount">
                        <span onClick={this.handleSubmit}>Załóż konto</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Register;