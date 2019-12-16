import React, {Component} from "react";
import "./HomeContact.scss";
import deco from '../../assets/assets/Decoration.svg'; // with import
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';




class HomeContact extends Component{
    render(){
        return(
            <>
            <section className="home_contact">
                <div className= "contact">
                    <h1>Skontaktuj się z nami</h1>
                    <img src={deco} alt=""/>
                    <form>
                        <div className="contact_name">
                            <label>Wpisz swoje imię</label>
                            <input placeholder="Krzysztof"/>
                        </div>
                        <div className="contact_email">
                             <label>Wpisz swoje email</label>
                             <input placeholder="abc@gmail.com"/>
                        </div>
                    </form>
                    <div className="text_area">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea cols="43" placeholder="Pellentesque consectetur, urna quis egestas aliquet, tortor eros pharetra justo,
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