import React, {Component} from "react";
import "./HomeContact.scss";
import deco from '../../assets/assets/Decoration.svg'; // with import
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';




class HomeContact extends Component{
    state = {
        name: "",
        email: "",
        message: ""
    };
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render(){
        return(
            <>
            <section className="home_contact">
                <div className= "contact">
                    <h1>Skontaktuj się z nami</h1>
                    <img src={deco} alt=""/>
                    <form>
                        <div className="contact_name">
                            <label  htmlFor="name">Wpisz swoje imię</label>
                            <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Krzysztof"/>
                        </div>
                        <div className="contact_email">
                             <label htmlFor="email" >Wpisz swoje email</label>
                             <input id="email" type="email" name="email" value={this.state.email} placeholder="abc@xyz.pl" onChange={this.handleInput}/>
                        </div>
                    </form>
                    <div className="text_area">
                        <label htmlFor="textarea" >Wpisz swoją wiadomość</label>
                        <textarea  id="textarea" name="message" value={this.state.message}  onChange={this.handleInput} cols="43" placeholder="Pellentesque consectetur, urna quis egestas aliquet, tortor eros pharetra justo,
                                eu pulvinar quam nunc sed leo. Fusce in gravida nulla, eget eleifend turpis"> </textarea>
                    </div>
                    <button type="submit">Wyślij</button>
                </div>
            </section>
            <footer>
                <p>Copywright by CodersLab
                    <i className="face"><FaFacebookSquare/></i>
                    <i className="insta"><FaInstagram/></i>
                </p>
            </footer>
            </>
        );
    }
}

export default HomeContact;