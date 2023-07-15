import { useState } from "react";
import "../CSS/NavBar.css";

function NavBar() {
    const [isDisplay, setIsDispaly] = useState(false)

    function handleClick() {
        if (isDisplay) {
            document.querySelector(".mobile-nav").style.display = "none"
            setIsDispaly(!isDisplay)
        } else {
            document.querySelector(".mobile-nav").style.display = "block"
            setIsDispaly(!isDisplay)
        }
    }

    return (
        <header>
            <div className="header">
            <a href="#welcome"><h2 className="nameLogo">Jerrick Ee</h2></a>
            <nav>
                <ul className="items">
                <li className="navBtn"><a href="#About">About</a></li>
                <li className="navBtn"><a href="#ProjectSection">Projects</a></li>
                    <li className="navBtn"><a href="#">Contact</a></li>
                </ul>
            </nav>
            <button onClick={()=>handleClick()} className="dropDown">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H20" stroke="#F4EEE0" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 17H20" stroke="#F4EEE0" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 7H20" stroke="#F4EEE0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            </div>
            <div className="mobile-nav">
                <ul className="mobile-items">
                <li className="navBtn"><a href="#About">About</a></li>
                <li className="navBtn"><a href="#ProjectSection">Projects</a></li>
                <li className="navBtn"><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;

