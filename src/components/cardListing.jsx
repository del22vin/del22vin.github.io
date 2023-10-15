import '../css/cardListing.css';

export default function CardListing({data}) {

    var pageLink = '/#/portfolio/' + data.name.replace(/\s+/g, '-').toLowerCase() + '/' + data.id;

    return(
                <div className="col">
                    <div className="card">
                        <a href={pageLink}>
                            <img className="bd-placeholder-img card-img-top" src={require('../images/' + data.thumbnail)} alt="KM Awards and Events" />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.summary}</p>
                            </div>
                        </a>
                                    
                    </div>
                </div>
    );
                
    
}
