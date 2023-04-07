import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./css/ContactUs.css";
import { Link } from "react-router-dom";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dyfcr6o', 'template_j899vqy', form.current, 'Tl7ix6nPcNGpE6hH5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contactUs'>
            <Link to="/" className='soleimg'>
                <img src="https://i.ibb.co/Zmj8WF2/thesolestore.png" alt="thesolestore" border="0" />
            </Link>
            <h2><b>Send us feedback</b></h2>
            <form ref={form} onSubmit={sendEmail} className='contactUs__form'>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>
                    We'd love to hear your feedback.
                    <br />
                    What was positive?
                    What can we improve?
                </label>
                <textarea style={{ marginTop: "30px", marginBottom: "20px" }} name="message" />
                <input style={{ marginTop: "50px", marginBottom: "20px" }} type="submit" value="POST" />
                <Link to="/feed">
                    <button style={{ textDecoration: "none", backgroundColor: "inherit", color: "white", width: "100%", height: "100px", borderBlockWidth: "5px" }}>Next</button>
                </Link>

            </form>
        </div>

    );
};