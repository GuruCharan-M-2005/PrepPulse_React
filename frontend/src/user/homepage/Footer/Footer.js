import "./Footer.css";
import React from "react";
import { FaFacebook, FaGoogle, FaHome, FaLinkedin, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="footertop"></div>
      <div className="Footer">
        <div className="foot1">
          <h1 className="logo">PREPPULSE</h1>
          <p>
            Empowering learners worldwide     through <br />
        accessible, high-quality    online education and resources.<br />          
          </p>
        
          <div className="footic">
            <FaLinkedin
              id="ic1"
              style={{
                color: "#9999D4",
                width: "30px",
                height: "30px",
              }}
            />
            <FaFacebook
              id="ic1"
              style={{
                color: "#9999D4",
                width: "30px",
                height: "30px",
              }}
            />
            <FaTwitter
              id="ic1"
              style={{  color: " #9999D4", width: "30px", height: "30px" }}
            />
            <FaPinterest
              id="ic1"
              style={{
                color: " #9999D4",
                width: "30px",
                height: "30px",
              }}
            />
          </div>
        </div>
        <div className="foot2">
          <div>
            <p>For Students</p>
            <ul>
              <li>Student Dashboard</li>
              <li>Courses</li>
              <li>My Learning</li>
              <li>Certifications</li>
              <li>Resources</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="foot3">
          <div>
            <p>For Educators</p>
            <ul>
              <li>Instructor Dashboard</li>
              <li>Course Creation</li>
              <li>Manage Students</li>
              <li>Analytics</li>
              <li>Community</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="foot4">
          <div>
            <p className="p1">Join our Newsletter</p>
            <p>
              Stay updated on the latest courses,
              <br /> educational trends, and more.
            </p>
            <input className="l1" placeholder="Your Email" type="text" />
          </div>
          <div>
            <button style={{ backgroundColor: "#9999D4" }}>
              Subscribe Now!
            </button>
          </div>
        </div>
      </div>
      <div className="footerbottom"></div>
    </>
  );
}

export default Footer;
