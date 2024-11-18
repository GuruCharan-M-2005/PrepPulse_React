import "./About.css";
import Girl from "../images/about.webp";
import React from "react";

const About = () => {
  return (
    <>
      <div className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={Girl} alt='About Us' />
          </div>
          <div className='right row'>
            <div className="headingabout">
            <h3>LEARN ANYTHING</h3>
            <h1>Benefits About <br/>Online Learning Expertise</h1>
          </div>
            <div className='itemsabout'>
              <div className='itemflexSB'>
                <div className='img'>
                  <img src='https://img.icons8.com/dotty/80/000000/storytelling.png' alt='Online Courses' />
                </div>
                <div className='text'>
                  <h2>Online Courses</h2>
                  <p>Discover a wide range of online courses designed to help you gain new skills, advance your career, or pursue your passions—all at your own pace.</p>
                </div>
              </div>
              <div className='itemflexSB' style={{marginLeft:'18px'}}>
                <div className='img'>
                  <img src='https://img.icons8.com/ios/50/overtime--v1.png' alt='Easy Scheduling' />
                </div>
                <div className='text'style={{marginLeft:'30px'}}>
                  <h2>Easy Scheduling</h2>
                  <p>Enjoy the flexibility of easy scheduling, allowing you to learn whenever it fits your busy lifestyle.</p>
                </div>
              </div>
              <div className='itemflexSB'>
                <div className='img'>
                  <img src='https://img.icons8.com/ios/80/000000/athlete.png' alt='Learn with Expert' />
                </div>
                <div className='text'>
                  <h2>Learn with Expert</h2>
                  <p>Learn with expert instructors who bring real-world experience and deep knowledge to every course.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
