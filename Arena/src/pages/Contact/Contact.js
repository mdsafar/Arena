import React from "react";
import './Contact.css'


const Contact = () => {
    return (
        <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Us</span></h2>
            <form >
                <div class="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div class="input-box">
                    <input type="number" placeholder="Mobile Number" />
                    <input type="text" placeholder="Email subject" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;