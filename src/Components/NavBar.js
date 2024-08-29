import React, { useState } from 'react';
import './NavBar.css';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`NavBar ${isOpen ? 'active' : ''}`}>
            <div className="logo">
                <img src='https://img.icons8.com/?size=40&id=212ADDKBpxxA&format=png' alt='logo' />
                <h1>Minds</h1>
            </div>

            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul>
                <li>
                    <a href='#' onClick={()=> console.log('Home Button Clicked')
                    }>Home</a>
                    <a href='#' onClick={()=> console.log('About Button Clicked')
                    }>About</a>
                    <a href='#' onClick={()=> console.log('Blog Button Clicked')
                    }>Blog</a>
                    <a href='#' onClick={()=> console.log('Jobs Button Clicked')
                    }>Jobs</a>
                </li>
            </ul>

            <button className='btn1' onClick={()=> console.log('Your Account button clicked')
            }>Your Account</button>
        </div>
    );
};

export default NavigationBar;
