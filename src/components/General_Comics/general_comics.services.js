import axios from "axios";
const baseURL = "https://gateway.marvel.com:443/v1/public/characters/"
const apiKey = "&ts=1&apikey=8cd0012f437437004305be4bbf877e7a&hash=196c4f26efc0a5d84d10873faf959c21";


export const getCharacterName = (id) => {
    let response = axios.get(`${baseURL}${id}?${apiKey}`);
    return response;
}

export const showMarvelComics = (id, offsetNumber) => {
    let response = axios.get(`${baseURL}${id}/comics?limit=4&offset=${offsetNumber}${apiKey}`);
    return response;
}

export const getComicForExample = (id) => {
    let response = axios.get(`${baseURL}${id}/comics?${apiKey}`);
    return response;
}