import axios from "axios";
 
const apiKey = "&ts=1&apikey=8cd0012f437437004305be4bbf877e7a&hash=196c4f26efc0a5d84d10873faf959c21";

export const showMarvelComics = (url, offsetNumber) => {
    let response = axios.get(`${url}?limit=4&offset=${offsetNumber}${apiKey}`);
    return response;
}

export const getComicForExample = (url) => {
    let response = axios.get(`${url}?${apiKey}`);
    return response;
}