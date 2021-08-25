import React from 'react';
import "./specific_comic.css"
import { useParams } from "react-router-dom";

export default function ComicInfo () {
    const params = useParams();

    console.log("comic infp;", params);
    
    return (
        <div className="mantenimiento">
        </div>
    )
}
