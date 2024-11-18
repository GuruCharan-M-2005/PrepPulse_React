import { useNavigate } from "react-router-dom";
import "./course.css";
import React from "react";

const Course = [
  {
    cover: "./images/courses/online/i1.png",
    courseName: "UI/UX Design Courses",
    course: "25 Courses",
  },
  {
    cover: "./images/courses/online/i2.png",
    courseName: "Art & Design",
    course: "25 Courses",
  },
  {
    cover: "./images/courses/online/i3.png",
    courseName: "Computer Science",
    course: "10 Courses",
  },
  {
    cover: "./images/courses/online/i4.png",
    courseName: "History & Archeologic",
    course: "15 Courses",
  },
  {
    cover: "./images/courses/online/i5.png",
    courseName: "Software Engineering",
    course: "30 Courses",
  },
  {
    cover: "./images/courses/online/i6.png",
    courseName: "Information Software",
    course: "60 Courses",
  },
  {
    cover: "./images/courses/online/i7.png",
    courseName: "Health & Fitness",
    course: "10 Courses",
  },
  {
    cover: "./images/courses/online/i8.png",
    courseName: "Marketing",
    course: "30 Courses",
  },
  {
    cover: "./images/courses/online/i9.png",
    courseName: "Graphic Design",
    course: "80 Courses",
  },
  {
    cover: "./images/courses/online/i10.png",
    courseName: "Music",
    course: "120 Courses",
  },
  {
    cover: "./images/courses/online/i11.png",
    courseName: "Business Administration",
    course: "17 Courses",
  },
  {
    cover: "./images/courses/online/i12.png",
    courseName: "Web Management",
    course: "17 Courses",
  },
];

const Courses = () => {

  const nav=useNavigate();
  return (
    <>
          <div className='containercourse'>
          <div id='heading'>
          <h3>COURSES </h3>
          <h1>Browse Our  Courses </h1>
        </div>
        </div>
      <div className='course'>      
          <div className='content grid3'>
            {Course.map((val) => (
              <div className='box' key={val.courseName} onClick={()=>nav('/learn')}>
                <div className='img'>
                  <img src={val.cover} alt={val.courseName} style={{color:'blue'}}/>
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>        
      </div>
    </>
  );
};

export default Courses;
