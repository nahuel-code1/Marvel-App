import axios from "axios";
 
const baseUrl = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "&ts=1&apikey=8cd0012f437437004305be4bbf877e7a&hash=196c4f26efc0a5d84d10873faf959c21";

export const showMarvelCharacters = (offsetNumber) => {
    let response = axios.get(`${baseUrl}characters?limit=4&offset=${offsetNumber}${apiKey}`)
    return response;
}

export const searchMarvelCharacter = (name, offsetNumber) => {
    let response = axios.get(`${baseUrl}characters?nameStartsWith=${name}&limit=4&offset=${offsetNumber}${apiKey}`)
    return response;
}