import Navbar from '../navbar';
import Contact from '../contact';

import '../../css/pages/home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCode, faPaintbrush } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

    var root = document.getElementsByTagName( 'html' )[0];
        root.setAttribute( 'class', 'noScroll' );

        window.onload=function() {  
            document.getElementById("about-me-content").style.display = "none";
            document.getElementById("code-icon").style.display = "none";
            document.getElementById("brush-icon").style.display = "none";
    }

    function scrollToAbout(){
        var elmntToView = document.getElementById("about-me");
        elmntToView.scrollIntoView(); 
    }
    

     //for section detection to change element colors.. *note, use css instead on changing stye
    window.addEventListener("scroll", function() {
        
            var heroBannerSection = document.getElementById("hero-banner");
            var aboutMeSection = document.getElementById("about-me");
            var portfolioSection = document.getElementById("portfolio");
            var contactSection = document.getElementById("contact");

            if(heroBannerSection && aboutMeSection && portfolioSection && contactSection){

                const heroBanner = heroBannerSection.getBoundingClientRect();
                const aboutMe = aboutMeSection.getBoundingClientRect();
                const portfolio = portfolioSection.getBoundingClientRect();
                const contact = contactSection.getBoundingClientRect();
                    if(heroBanner.bottom <= window.innerHeight && aboutMe.bottom >= window.innerHeight ){ //on hero banner
                        // document.getElementById("bar1").style.backgroundColor = "white";
                        // document.getElementById("bar2").style.backgroundColor = "white";
                        // document.getElementById("bar3").style.backgroundColor = "white";
                    }
                    if((aboutMe.bottom - (aboutMe.bottom/3)) <= window.innerHeight && (portfolio.bottom - (portfolio.bottom/3)) >= window.innerHeight ){ //on about
                        //console.log("aboutME: " + aboutMe.bottom +"portfolio: " + portfolio.bottom + " window:" + window.innerHeight);
                        document.getElementById("about-me-content").style.display = "block";
                        document.getElementById("about-me-content").classList.add("fadeSlideAnimate");
                        // document.getElementById("bar1").style.backgroundColor = "red";
                        // document.getElementById("bar2").style.backgroundColor = "red";
                        // document.getElementById("bar3").style.backgroundColor = "red";
                    }
                    if((portfolio.bottom - (portfolio.bottom/3)) <= window.innerHeight && (contact.bottom - (contact.bottom/3)) >= window.innerHeight ){ //on about
                        //console.log(" window:" + window.innerHeight);
                        document.getElementById("code-icon").style.display = "inline-block";
                        document.getElementById("brush-icon").style.display = "inline-block";
                        document.getElementById("code-icon").classList.add("fadeSlideAnimate");
                        document.getElementById("brush-icon").classList.add("fadeSlideAnimate");
                        // document.getElementById("bar1").style.backgroundColor = "white";
                        // document.getElementById("bar2").style.backgroundColor = "white";
                        // document.getElementById("bar3").style.backgroundColor = "white";
                    }
            }
           
    });
    


    
    return (
            <div className="home-comp">
                <main>
                    <div id="hero-banner" className="primary-banner section">    
                        <div className="context">
                            <h1>GELVIN</h1>
                            <div className="banner-sub-text"><h2>&lt; Front-end Developer / Graphic Designer &gt;</h2></div>
                        </div>
                        <div className="area" >
                                    <ul className="circles">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                    </ul>
                        </div>
                        <span className="ct-btn-scroll ct-js-btn-scroll" onClick={scrollToAbout}>
                            <FontAwesomeIcon className="favicon-icon floating" icon={faChevronDown} />
                        </span>
                    </div>
                    <div id="about-me" className="section">
                        <div id="about-me-content" className="container ">
                            <div className="row">
                                <div className="col-lg-6">
                                <h2>About Me</h2>

                                <p>My professional crafts are technology and design, while music is what drives me. Considering how closely those three are related, a fantastic user experience is always the end outcome. And because I work as a front-end developer, I get to enjoy my favorite playlist while doing what I love.
                                </p>
                                <p>I have been developing websites for the past 8 years since I received my degree in the field of computer science. I develop intelligent websites and emails that complies with web standards, as well as creating graphic designs and web contents.
                                </p>
                                <p>Since the world is constantly evolving, I am highly receptive to learning new technologies, ideas and concepts. I am a certified team player, which is unquestionably a skill required to maintain a highly motivated and cooperative team.
                                </p>
                                <p>With all that being said, let's connect so we can talk more about my professional journey... <i>or maybe our shared taste in music</i>.
                                </p>


                                </div>
                                

                                <div className="col-lg-6 graphics-container">
                                
                                
                                
                                
                                    <div  id="about-me-graphics" >
                                    
                                        <img id="about-me-graphics-img" src={require('../../images/about-pic.png')} alt="about me"/> 


                                        <a id="wes-badge" href="https://www.credly.com/badges/b3cfff52-dd4b-4f32-ac5c-322bc11b0231/public_url" target="_blank">
                                            <img src={require("../../images/verified-international-academic-qualifications.1.png")} alt="wes badge" /> 
                                            <span className="wes-badge-verified">Verified International Academic Qualifications</span>
                                            <span className="wes-badge-issuer">Issuer: World Education Services</span>
                                        </a>
                                    
                                    </div>
                                    
                                </div>


                            

                            </div>
                        </div>
                    </div>
                
                    <div id="portfolio" className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 works-graphics">
                                        
                                    <FontAwesomeIcon id="code-icon" className="fa-code" icon={faCode} />
                                    
                                </div>
                                <div className="col-2 works-graphics works-graphics-2">
                                    
                                    <FontAwesomeIcon  id="brush-icon" className="fa-paint-brush" icon={faPaintbrush} />
                                </div>
                                
                                
                                <div className="col-lg-8 works-content">
                                        <div>
                                            <div className="works-graphics-content"> 
                                                <FontAwesomeIcon className="fa-code" icon={faCode} />
                                                <FontAwesomeIcon className="fa-paint-brush" icon={faPaintbrush} />
                                            </div>
                                            <h2>My Portfolio</h2>
                                            <p>Over the years, I've created websites, solutions, and designs in different projects globally such as financial services, lending, business promotion, awards, and event sites.</p>    
                                            <a href="/#/portfolio">SEE MY WORKS</a>
                                            
                                        </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                    <Contact />

                </main>
                

                <Navbar />
            </div>
            
    );
    
}


