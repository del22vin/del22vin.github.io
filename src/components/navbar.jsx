import { Link } from "react-router-dom";

import ResumePdf from '../documents/gelvin-de-leon-resume.pdf';

export default function NavBar() {
 
    function menuOnClick() {
            document.getElementById("menu-bar").classList.toggle("change");
            document.getElementById("nav").classList.toggle("change");
            document.getElementById("menu-bg").classList.toggle("change-bg");
    }
    

    return (
            <div>
                <div id="menu">
                    <div id="menu-bar" onClick={menuOnClick}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                    </div>
                    <nav className="nav" id="nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/portfolio">My Portfolio</a></li>
                        <li><a href={ResumePdf} target="_blank">My Resume</a></li>
                    </ul>
                    </nav> 
                </div>
                
                <div className="menu-bg" id="menu-bg"></div>
            </div>
    );
    
    
}
