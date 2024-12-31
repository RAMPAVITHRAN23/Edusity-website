import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let translateX = 0;

const slideForward = () => {
    if(translateX > -50){
        translateX -= 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;

}

const slidebackward = () => {
    if(translateX < 0){
        translateX += 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
    
}

    return (
        <div className="Testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img
                src={back_icon}
                alt=""
                className="back-btn"
                onClick={slidebackward}
            />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Benze</h3>
                                    <span>Nemilicherry, USA</span>
                                </div>
                            </div>
                            <p>
                                The experience was great. The teachers are very helpful and the
                                campus is very beautiful.The university provided an excellent
                                learning environment. The faculty was supportive, and the
                                facilities were top-notch. I highly recommend this institution
                                to anyone seeking quality education and a vibrant campus life.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Benze</h3>
                                    <span>Nemilicherry, USA</span>
                                </div>
                            </div>
                            <p>
                                The experience was great. The teachers are very helpful and the
                                campus is very beautiful.The university provided an excellent
                                learning environment. The faculty was supportive, and the
                                facilities were top-notch. I highly recommend this institution
                                to anyone seeking quality education and a vibrant campus life.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William Benze</h3>
                                    <span>Nemilicherry, USA</span>
                                </div>
                            </div>
                            <p>
                                The experience was great. The teachers are very helpful and the
                                campus is very beautiful.The university provided an excellent
                                learning environment. The faculty was supportive, and the
                                facilities were top-notch. I highly recommend this institution
                                to anyone seeking quality education and a vibrant campus life.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Benze</h3>
                                    <span>Nemilicherry, USA</span>
                                </div>
                            </div>
                            <p>
                                The experience was great. The teachers are very helpful and the
                                campus is very beautiful.The university provided an excellent
                                learning environment. The faculty was supportive, and the
                                facilities were top-notch. I highly recommend this institution
                                to anyone seeking quality education and a vibrant campus life.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
