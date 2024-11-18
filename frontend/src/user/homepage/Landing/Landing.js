import "./Landing.css";
import About from "../About/About";
import Chatbot from "../../chatbot/Chatbot";
import Contact from "../Contact/Contact";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Man from "../images/mann.png";
import Pricing from "../pricing/Pricing";
import React, { useRef } from "react";
import Testimonal from "../Testimonal/Testimonal";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const nav = useNavigate();
    const aboutRef = useRef(null);
    const coursesRef = useRef(null);
    const pricingRef = useRef(null);
    const contactRef = useRef(null);

    const scrollWithOffset = (ref) => {
        const offset = window.innerHeight * 0.10;
        const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
    };

    return (
        <div className="landmaindiv">
            <div className='logo'>
                <h1>PrepPulse</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
            <div className="header">
                <nav className="flexSB">
                    <ul className="flexSB">
                        <li><a onClick={() => scrollWithOffset(coursesRef)}>All Courses</a></li>
                        <li><a onClick={() => scrollWithOffset(aboutRef)}>About</a></li>
                        <li><a onClick={() => scrollWithOffset(pricingRef)}>Pricing</a></li>
                        <li><a onClick={() => scrollWithOffset(contactRef)}>Contact</a></li>
                        <li><a href="/roadmap">Roadmaps</a></li>
                        <li><a href="/calendar">Tasks</a></li>
                        <li><a href="/test">Try our Test</a></li>
                    </ul>
                    <div className="start" onClick={() => nav('/login')}>
                        <div className="button">LOGIN / SIGNUP</div>
                    </div>
                    <button className="toggle">
                        <i className="fa fa-bars"></i>
                    </button>
                </nav>
            </div>
            <div className="image-container">
                <img src={Man} alt="Man" />
            </div>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='heading'>
                            <h3> WELCOME TO PREPPULSE</h3>
                            <span> Best Online Education </span><br/>
                            <span>Expertise</span>
                        </div>
                        <p>A Comprehensive learning platform with roadmaps, reminders, study <br/>videos, and a chatbot to guide your educational journey seamlessly.</p>
                        <div className='button'>
                            <button className='primary-btn'>GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                            <button className="secbutton" onClick={() => nav('/learn')}>VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
                            <br>
                          </br>
                          <br></br>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={coursesRef}><Courses /></section>
            <section ref={aboutRef}><About /></section>
            <section ref={pricingRef}><Pricing /></section>
            <section ref={contactRef}><Contact /></section>

            <Testimonal />
            <Footer />
            <Chatbot />
        </div>
    );
};

export default Landing;