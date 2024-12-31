import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 65) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={logo} alt="logo" className="logo" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>
                    <button className="btn">
                        Contact Us
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
