import Navbar from '../navbar';
import Contact from '../contact';
import CardListing from '../cardListing';

import '../../css/pages/portfolio.css';

import portfolioDataList from "../../data/portfolio.json";
// import {useEffect, useState, useRef} from 'react';

export default function Portfolio() {
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

    return (
            <div className="portfolio-comp">
                <main>
            
                    <div id="secondary-banner" className="section">
                    <div className="container ">
                        <div className="row">  
                        <h1><b>My Portfolio</b></h1>
                        </div>
                    </div>
                    </div>
                    <div id="portfolio-list" className="section">
                        <div className="container ">
                            <div className="row">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    /*use this for Object: Object.keys(portfolioDataList).map */
                                    /* e.g. {userId: 1, id: 1, title: 'delectus aut autem', completed: false} */
                                    // portfolioDataList.map((portfolioData, index) => {
                                    //     console.log(portfolioData);
                                    //     return (
                                    //         <CardListing />

                                    //     );
                                    // })

                                    portfolioDataList.map((portfolioData, index) => {
                                        return (
                                            <CardListing key={portfolioData.id} data={portfolioData}/>
                                        );
                                    })
                                }
                                
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

