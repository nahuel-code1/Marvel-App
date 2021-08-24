import React from 'react'
import { Link } from "react-router-dom";

export default function AllComicsCards ({data}) {
    console.log(data)
    let {title, description, thumbnail} = data;

    return (
        <div className="comics_section-comics_list-cards">
            <Link to={{
            pathname: "/comic_info",
            state: { comic_info: data }
            }}>
                <div className="comics_section-comics_list-cards-image">
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
                </div>
            </Link>
        </div>
    )
}