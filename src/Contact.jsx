import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hi3kecm',   
            'template_4mj55ik', 
            form.current,
            'MGbqth5RikJtKNr-v'   
        ).then(
            (result) => {
                alert("✅ Message sent successfully! I will respond as soon as possible.");
                form.current.reset();
            },
            (error) => {
                alert("❌ Error sending message: " + error.text);
            }
        );
    };

    return (
        <>
            <div id="contact">
                <h2>Contact Me</h2>
            </div>

            <div id="contact-box">
                <form ref={form} onSubmit={sendEmail}>
                    <div id="mini-inputs">
                        <div className="form-group half">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" required />
                        </div>

                        <div className="form-group half">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" required />
                        </div>
                    </div>

                    <div className="form-group full">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="6" required></textarea>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
