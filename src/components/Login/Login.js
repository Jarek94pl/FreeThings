import React, {Component} from "react";
import "./Login.scss";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import deco from '../../assets/assets/Decoration.svg';
import Navigation from "../Navigation/Navigation"; // with import


class Login extends Component{
    state = {
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = () => {
        const {email, password} = this.state;
        let errorCounter = 0;

        function validateEmail(em) {
            let re = /\S+@\S+\.\S+/;
            return re.test(em);
        }

        if (validateEmail(email) === false) {
            this.setState({emailError: true});
            errorCounter++
        } else {
            this.setState({emailError: false});
        }

        if (password.length < 6) {
            this.setState({passwordError: true});
            errorCounter++
        } else {
            this.setState({passwordError: false});
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
                <Navigation/>
                <section>
                    <h1>Zaloguj się</h1>
                    <img src={deco} alt=""/>
                    <div className="form_inputs">
                            <p>Email<br/></p>
                        <form>
                            <input  style={{border: this.state.emailError ? '1px solid red' : null}}
                                    type="text"
                                    name='email'
                                    onChange={this.handleChange}
                                    value={this.state.email}
                             />

                            <p>Hasło</p>
                            <input  style={{border: this.state.passwordError ? '1px solid red' : null}}
                                    type="password"
                                    name='password'
                                    onChange={this.handleChange}
                                    value={this.state.password}/>

                        </form>
                    </div>
                </section>
                <div className="options">
                    <div className= "registerAccount">
                     <NavLink to={"/rejestracja"}>Załóż konto</NavLink>
                    </div>
                    <div className="loginAccount">
                        <span onClick={this.handleSubmit}>Zaloguj</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;