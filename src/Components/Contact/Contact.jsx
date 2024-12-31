import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {


    return (
        <div className="Contact">
            <div className="Contact-col">
                <h3>
                    Send Us a Message <img src={msg_icon} alt="" />
                </h3>
                <p>
                    Feel free to reach out to us with any questions or concerns you may
                    have. We are here to help and look forward to hearing from you.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="" />contact@edusity.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="" />+12 3456789
                    </li>
                    <li>
                        <img src={location_icon} alt="" />77, eswaran nagar railway staion toad nemilicherry USA{" "}
                    </li>
                </ul>
            </div>
            <div className="Contact-col">
                <form>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <label>Enter the Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter Your Phone Number" required />
                    <label>Write Your Message</label>
                    <textarea name="message" rows="6" placeholder="Write Your Message Here" required></textarea>
                    <button type="submit" className="btn dark-btn"> Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>
                    
                </span>
            </div>
            <contact />
        </div>
    );
};

export default Contact;
