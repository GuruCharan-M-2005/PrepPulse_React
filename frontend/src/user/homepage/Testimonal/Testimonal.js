import "./style.css";
import React from "react";
import img1 from "./testo/t1.webp";
import img2 from "./testo/t2.webp";
import img3 from "./testo/t3.webp";

const Testimonal = () => {
  return (
    <>
    <div className="headingtest">
    <h3>TESTIMONIAL</h3>
    <h1>Our Successful Students</h1>
  </div>
      <div className="testimonal padding">
        <div className="container">
        
          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src={img1} alt="Santhosh Prem" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>SANTHOSH PREM</h2>
                  <span>FULL STACK DEVELOPER</span>
                </div>
              </div>
              <p>
                I believe in leveraging technology to build impactful solutions
                that enhance user experiences.
              </p>
            </div>

            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src={img2} alt="Kishore Kumar" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>KISHORE KUMAR</h2>
                  <span>DATA ANALYST</span>
                </div>
              </div>
              <p>
                Data tells stories that can transform businesses. I am
                passionate about diving deep into data to uncover insights.
              </p>
            </div>

            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src={img3} alt="Harish" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>HARISH</h2>
                  <span>BUSINESS ANALYST</span>
                </div>
              </div>
              <p>
                Bridging the gap between business needs and technology by
                understanding client requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonal;
