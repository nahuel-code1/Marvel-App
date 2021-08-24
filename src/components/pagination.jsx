import React from 'react';
import "./General_Comics/general_comics.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowCircleRight, 
    faArrowCircleLeft 
} from '@fortawesome/free-solid-svg-icons';


export default function Pagination ({offsetNumber, setOffsetNumber, total}) {

    const back = () => {
        if (offsetNumber === 1) {
            setOffsetNumber(offsetNumber - 1);
        } else if (offsetNumber === 2) {
            setOffsetNumber(offsetNumber - 2);
        } else if (offsetNumber === 3) {
            setOffsetNumber(offsetNumber - 3);
        } else if (offsetNumber >= 4) {
            setOffsetNumber(offsetNumber - 4);
        } 
    }

    const next = () => {
        if (total % 2 !== 0) {
            let resto = total % 4;
            let numRedondeado = total - resto - 4;
            if (numRedondeado === offsetNumber) {
                setOffsetNumber(offsetNumber + resto);
            } else if (numRedondeado > offsetNumber) {
                setOffsetNumber(offsetNumber + 4 );
            }
        } else {
            if ( total !== offsetNumber ) {
                setOffsetNumber(offsetNumber + 4);
            }
        }
    }

    return (
        <>
            <FontAwesomeIcon onClick={back} icon={faArrowCircleLeft} size="6x" className="arrow_size" />               

            <FontAwesomeIcon onClick={next} icon={faArrowCircleRight} size="6x" className="arrow_size" />
        </>
    )
}
