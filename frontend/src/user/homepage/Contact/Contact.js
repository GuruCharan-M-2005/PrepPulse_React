import "./Contact.css";
import React from "react";

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31339.23341090114!2d76.92139132945593!3d10.93281069468071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb22369d571%3A0x72cc0bed93b5b2b6!2sSri%20Krishna%20College%20of%20Engineering%20and%20Technology%20-%20SKCET!5e0!3m2!1sen!2sin!4v1724588701540!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
    <div className="contacttop">
    <h1>Contact us</h1>
    <p>We're open for any suggestion or just to have a chat</p>
    </div>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>


            <div className='itemscontactgrid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>SKCET,COIMBATORE</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@prepulse.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91987654321</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='contact-btn'>Send Message</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
