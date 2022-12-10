import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Container, Row, Col } from "react-bootstrap";
import { containerConfig } from "../"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
      <container>
        <div id="contact-form">
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="placeholder" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></input>
            <button onClick={submit}>Send Message</button>

            <span className={emailSent ? 'visible' : null}><p>Thank you for your message, we will be in touch soon!</p></span>
        </div>
      </container>
    );
};

export default Contact;