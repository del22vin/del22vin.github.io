import Navbar from '../navbar';
import Contact from '../contact';


// import * as bootstrap from 'bootstrap';
import {useParams} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import '../../css/pages/portfolio.css';

import portfolioDataList from "../../data/portfolio.json";
// import {useEffect, useState, useRef} from 'react';

export default function PortfolioDetails(){

    /* use fetch to get JSON/XML responses from other servers/API */ 
    // const [portfolioDataList, setPortfolioDataList] = useState([]);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //         setPortfolioDataList(myJson)
    //       });
    // }, []);

    
    var  { name , id } = useParams(); 
    var data;
    var breakLoop = false;

    var descriptionParagraphs;
    portfolioDataList.map((portfolioData, index) => {
        // console.log('name: ' + portfolioData.name.toLowerCase() + ' vs ' + name.replace(/-/g , ' ').toLowerCase());
        if(!breakLoop){
            if(portfolioData.name.toLowerCase().toString() === name.replace(/-/g  , ' ').toLowerCase().toString() && portfolioData.id.toString() === id.toString()){
                data = (portfolioData);
                descriptionParagraphs = data.description.split('\n');

                breakLoop = true;
            }
            return '';
        }
        else{
            return '';
        }
    })

    var imageList = data.images;
    var linkList = data.links;
    var linkListHeader = null;
    if(linkList != null && linkList.length){                                 
        linkListHeader =<h3><b>Links</b></h3>;
    }


    return (
            <div className="portfolio-comp">
                <main>
            
                    <div id="secondary-banner" className="section">
                        <div className="container ">
                            <div className="row">  
                            <h1><b>{data.name}</b></h1>
                            </div>
                        </div>
                    </div>
                    <div id="portfolio-contents" className="section">
                        <div className="container ">
                            <div className="row">
                            
                            <Carousel data-bs-theme="dark">

                                {
                                    imageList.map((imageData, index) => {
                                        let uuid = crypto.randomUUID();

                                        return(
                                            <Carousel.Item key={uuid}>
                                                <img
                                                className="d-block w-100"
                                                src={require('../../images/' + imageData.url)}
                                                alt={imageData.alt}
                                               
                                                />
                                            </Carousel.Item>
                                        );
                                    })
                                }

                               
                            </Carousel>








                            <div className="portfolio-description">
                                <div>{descriptionParagraphs.map((lines, index) => {

                                        return(
                                            <p>{lines}</p>
                                        );
                                    })}</div>
                                <br /><br />

                                {linkListHeader}
                                <ul>
                                    {
                                        linkList.map((linkList, index) => {
                                            let uuid = crypto.randomUUID();
                                            return(
                                            <li key={uuid} >
                                                <a href={linkList.url} target="_blank" >{linkList.name}</a>
                                            </li>
                                            ); 
                                        })
                                    }
                                </ul>
                                

                            </div>


                            </div>
                        </div>
                    </div>

                    
                    <Contact />

                </main>
                
                <div className="top-nav-bar">
                    <div className="top-menu">
                        <div className="container ">
                            <div className="row">  
                                <div className="site-logo"><a href="/">GELVIN</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <Navbar />
                </div>
            </div>
    );
    
}
