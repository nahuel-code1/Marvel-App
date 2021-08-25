import React from 'react';
import { Link } from "react-router-dom";

export default function CharactersCards ({charactersData}) {
    let image_path = charactersData.thumbnail.path;
    let image_extension = charactersData.thumbnail.extension;
    let character_name = charactersData.name;

    return (
        <div className="characters_card">
            
            <Link to={`/comics_info/${charactersData.id}`}>
               
                <div className="character_image">
                    <img src={`${image_path}.${image_extension}`} alt={charactersData.name} />
                </div>
                
                <div className="character_mini_info">
                    <p className="white_text">
                        {character_name}
                    </p>
               
                </div>
            </Link>        
        
        </div>
    )
}
