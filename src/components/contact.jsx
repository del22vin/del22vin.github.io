import { Link } from "react-router-dom";


import '../css/contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

        return (
            <div id="contact" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="contact-details"> 
                                <div>
                                    <FontAwesomeIcon className="fa-comments-o chat-icon" icon={faComments} />
                                 
                                </div>
                                <div>
                                    <h2><b>Feel free to contact me</b></h2>
                                    <div>
                                        <span><i className="fa fa-envelope" aria-hidden="true"></i> Email: </span>
                                        <a href="mailto:deleon.gelvin@gmail.com">deleon.gelvin@gmail.com</a>
                                    </div>
                                    

                                    <div>
                                        <span><i className="fa fa-phone" aria-hidden="true"></i> Phone: </span><a href="tel:+13682993634">+13682993634</a>
                                    </div>

                                    <div>
                                        <span><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn: </span><a target="_blank" href="https://www.linkedin.com/in/gelvin-de-leon-a91200140/">gelvin-de-leon-a91200140</a>
                                    </div>
                            </div>
                                
                                
                            </div>
                            <div className="copyright">© Gelvin De Leon 2023</div>
                        </div>
                    </div>
                </div>
        );
    
    
}