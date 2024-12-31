import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about_img" />
                {/* <img src={play_icon} alt="" className="play_icon" /> */}
            </div>
            <div className="about-right">
                <h3 className="h3">About University</h3>
                <h2 className="h2">Nuturing the leaders of tomorrow</h2>
                <p className="para">
                    Embark on a journey to a fabulous world of learning with the best teachers and
                    facilities in the country. Explore all the fun and interesting events we offer, both on campus and outside. Our students are known for their outstanding achievements in academic and extracurricular activities. Find out more about our programs.
                    <br />
                    <br />
                    With a focus on the overall development of students, we offer a wide
                    range of programs designed to nurture their talents and interests. Our
                    students are known for their outstanding achievements in academic and
                    extracurricular activities. Find out more about our programs.
                    <br />
                    <br />
                    Embark on a journey to a fabulous world of learning with the best
                    Our students are known for their outstanding achievements in academic
                    and extracurricular activities. Find out more about our programs
                    With a focus on the overall development of students, we offer a wide
                    range of programs designed to nurture their talents and interests. Our
                    students are known for their outstanding achievements in academic and
                    extracurricular activities. Find out more about our programs.
                </p>
            </div>
        </div>
    );
};

export default About;
