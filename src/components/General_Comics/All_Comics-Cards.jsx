import React from 'react'
import { Link } from "react-router-dom";

export default function AllComicsCards ({data}) {
    let {thumbnail} = data;

    return (
        <div className="comics_section-comics_list-cards">
            <Link to={`/comics_info/${data.id}/all_data`}>
                <div className="comics_section-comics_list-cards-image">
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
                </div>
            </Link>
        </div>
    )
}