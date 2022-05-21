import React from 'react'
import './contact.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l2vlt8k', 'template_imo7www', form.current, 'DpR_-BvZpAYajvBdp')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pauljeong25@gmail.com</h5>
            <a href="mailto:pauljeong25@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>pauljeong25</h5>
            <a href="https://m.me/pauljeong25" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Mobile Cell</h4>
            <h5>617-485-4928</h5>
            <a href="tel:6174854928">Call or Text</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name ='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className = 'btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact