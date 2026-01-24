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
                            <div className="banner-sub-text"><h2>&lt; Building digital experiences, one pixel at a time &gt;</h2></div>
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
                        <div id="about-me-content" className="container " style={{display: 'none'}}>
                            <div className="row">
                                <div className="col-lg-7">
                                <h2>About Me</h2>
                                <br/>
                                <h4><b>Who I Am</b></h4>
                                <p>I am a <b>Visual &amp; UI/UX Designer</b> based in <b>Calgary</b> with a foundational background in <b>Front-End Development</b>. My career began in code, but my lifelong passion for art naturally pulled me into the world of <b>Graphic Design</b> and <b>Multimedia</b>. Today, I bridge the gap between technical logic and visual storytelling. Having earned a <b>Specialization in Applied UX Design from SAIT</b>, I focus on building user-centered digital products while maintaining a high standard for <b>Brand Identity, Logo Design, and Motion Graphics</b>. Whether I am architecting a complex interface or producing <b>high-impact video content</b>, I design with a &quot;Build-First&quot; mindset&mdash;ensuring everything I create is both <b>visually stunning and technically feasible</b>.</p>
                                <br/>
                                <h4><b>How I Work</b></h4>
                                <p>What sets me apart is my <b>technical literacy</b>. Because I speak the language of <b>Front-End Development (HTML/CSS/JS)</b>, I don&rsquo;t just design &quot;pretty screens&quot;&mdash;I design systems that are <b>technically feasible</b> and ready for engineering. I thrive at the intersection of <b>logic and creativity</b>, whether I&apos;m mapping out complex <b>user journeys</b> or hand-crafting <b>pixel-perfect interfaces</b>.</p>
                                <br/>
                                <h4><b>Why I Do It</b></h4>
                                <p>Beyond the pixels, I am a <b>musician</b> and a <b>problem-solver</b>. My background in music has taught me the importance of <b>rhythm, harmony, and precision</b>&mdash;principles I bring into every <b>design system</b> I build. I believe in <b>clean code</b>, <b>fair collaboration</b>, and products that respect the human beings using them.</p>


                                </div>
                                

                                <div className="col-lg-5 graphics-container">
                                
                                
                                
                                
                                    <div  id="about-me-graphics" >
                                    
                                        <img id="about-me-graphics-img" src={require('../../images/about-pic-2.png')} alt="about me"/> 


                                        <a id="wes-badge" href="https://www.credly.com/badges/b3cfff52-dd4b-4f32-ac5c-322bc11b0231/public_url" target="_blank">
                                            <img src={require("../../images/verified-international-academic-qualifications.1.png")} alt="wes badge" /> 
                                            <span className="wes-badge-verified">Verified International Academic Qualifications</span>
                                            <span className="wes-badge-issuer">Issuer: World Education Services</span>
                                        </a>

                                        <a id="sait-badge" href="https://www.credly.com/badges/13d61736-f9df-473e-8a21-1863868b725a/public_url" target="_blank">
                                            <img src={require("../../images/applied-user-experience-ux-design.png")} alt="sait badge" /> 
                                            <span className="wes-badge-verified">Applied User Experience (UX) Design</span>
                                            <span className="wes-badge-issuer">Issuer: Southern Alberta Institute of Technology</span>
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
                                        
                                    <FontAwesomeIcon id="code-icon" className="fa-code" icon={faCode} style={{display: 'none'}} />
                                    
                                </div>
                                <div className="col-2 works-graphics works-graphics-2">
                                    
                                    <FontAwesomeIcon  id="brush-icon" className="fa-paint-brush" icon={faPaintbrush} style={{display: 'none'}} />
                                </div>
                                
                                
                                <div className="col-lg-8 works-content">
                                        <div>
                                            <div className="works-graphics-content"> 
                                                <FontAwesomeIcon className="fa-code" icon={faCode} />
                                                <FontAwesomeIcon className="fa-paint-brush" icon={faPaintbrush} />
                                            </div>
                                            <h2>My Portfolio</h2>
                                            <p>A collection of works ranging from front-end development and multi-channel graphic design to certified UX research. I've spent nearly a decade building brands and digital solutions for financial services, global events, and business promotions.</p>    
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


