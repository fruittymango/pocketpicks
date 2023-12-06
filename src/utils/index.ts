import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const AUTH_TOKEN = `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`;

const TRENDING_ALL_ENDPOINT = '/trending/all/day?language=en-US';
const TRENDING_PEOPLE_ENDPOINT = '/trending/person/day?language=en-US'
const TRENDING_MOVIES_ENDPOINT = '/trending/movie/day?language=en-US';
const TRENDING_TV_ENDPOINT = '/trending/tv/day?language=en-US';

export function getTrendingAll(){
    const options = {
        method: 'GET',
        url: API_URL+TRENDING_ALL_ENDPOINT,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response: any)=>response.results).catch((error)=>console.log(error));
  
}

export function getTrendingPeople(){
    const options = {
        method: 'GET',
        url: API_URL+TRENDING_PEOPLE_ENDPOINT,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response: any)=>response.results).catch((error)=>console.log(error));
  
}

export function getTrendingMovies(){
    const options = {
        method: 'GET',
        url: API_URL+TRENDING_MOVIES_ENDPOINT,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response: any)=>response.results).catch((error)=>console.log(error));
  
}

export function getTrendingTVShows(){
    const options = {
        method: 'GET',
        url: API_URL+TRENDING_TV_ENDPOINT,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response: any)=>response.results).catch((error)=>console.log(error));
    
}