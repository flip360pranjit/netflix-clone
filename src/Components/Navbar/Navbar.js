import React,{useState, useEffect} from "react";
import "./Navbar.css";

function Navbar(){
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
    }, []);

    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className="nav-avatar" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="User Avatar" />
        </div>
    )
}

export default Navbar;