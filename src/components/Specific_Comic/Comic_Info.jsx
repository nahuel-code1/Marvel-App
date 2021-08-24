import React from 'react';
import "./specific_comic.css"
import { useLocation } from "react-router-dom";

export default function ComicInfo () {
    const location = useLocation();
    const comic_info = location.state?.comic_info;
    console.log("comic infp;",comic_info);
    
    return (
        <div className="mantenimiento">
        </div>
    )
}
