import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

export default function RandomComicCard ({data, characterName}) {
    // ---------------  UseState Section  ---------------

    const [ randomComic, setRandomComic ] = useState("");

    // ----------------------- || ------------------------

    // ---------------  UseEffect Section  ---------------

    useEffect(() => {
        if (data) {
            let maxNumber = data.length - 1;

            let randomNumber = Math.floor((Math.random() * (maxNumber)));

            setRandomComic(data[randomNumber]);
        }
    }, [data])

    // ----------------------- || ------------------------


    return (
    <>
        <div className="comics_section-comic_example-main_tittle">
            {characterName &&
                <h3>
                    Random Comic In Which {characterName} Appears
                </h3>
            }
        </div>

        <div className="comics_section-comic_example-main_card">
                <div className="comics_section-comic_example-card">
                    <Link to={`/comics_info/${randomComic.id}/all_data`}>
                    {randomComic &&
                        <>
                            <div className="comics_section-comic_example-tittle">
                                <h4>
                                    {randomComic.title}
                                </h4>
                            </div>

                            <div className="comics_section-comic_example-image">
                                <div className="comics_section-comic_example-image2">
                                    <img src={`${randomComic.thumbnail.path}.${randomComic.thumbnail.extension}`} alt="comic" />
                                </div>
                            </div>

                            <div className="comics_section-comic_example-info">

                                <div>
                                    <p>
                                        <strong className="white_text">
                                        N° of Pages: 
                                        </strong> 
                                        {randomComic.pageCount}
                                    </p>

                                    <p>
                                        <strong>
                                            Price print:
                                        </strong>  
                                        {randomComic.prices[0].price ? 
                                            `${randomComic.prices[0].price}$`
                                            :
                                            "No info"
                                        } 
                                    </p>

                                    <p>
                                        <strong>
                                            Digital Price:
                                        </strong>  
                                        {randomComic.prices.length === 2 ? 
                                            `${randomComic.prices[1].price}$`
                                            :
                                            "No digital price"
                                        }  
                                    </p>

                                    <p>
                                        <strong>
                                            Issue Number:
                                        </strong>  
                                        {randomComic.issueNumber ?
                                            randomComic.issueNumber
                                            :
                                            "No info"
                                        }
                                    </p>

                                    <p>
                                        <strong>
                                            isbn:
                                        </strong>  
                                        {randomComic.isbn ?
                                            randomComic.isbn
                                            :
                                            "No info"
                                        }   
                                    </p>

                                    <p>
                                        <strong>
                                            issn:
                                        </strong> 
                                        {randomComic.issn ?
                                            randomComic.issn
                                            :
                                            "No info"
                                        }
                                    </p>
                                </div>
                        
                            </div>
                        </>
                    }
                    </Link>
                </div>
        </div>
    </>
    )
}
