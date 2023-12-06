import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const AUTH_TOKEN = `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`;

const TRENDING_ALL_ENDPOINT = '/trending/all/day?language=en-US';
const TRENDING_PEOPLE_ENDPOINT = '/trending/person/day?language=en-US'
const TRENDING_MOVIES_ENDPOINT = '/trending/movie/day?language=en-US';
const TRENDING_TV_ENDPOINT = '/trending/tv/day?language=en-US';

const MOVIES_NOW_PLAYING = '/movie/now_playing?language=en-US&page=1';
const MOVIES_UPCOMING = '/movie/upcoming?language=en-US&page=1';
const MOVIES_POPULAR = '/movie/popular?language=en-US&page=1';
const MOVIES_TOP_RATED = '/movie/top_rated?language=en-US&page=1';

const MOVIES_RECOMMENDATIONS = `/movie/movie_id/recommendations?language=en-US&page=1`;
const MOVIES_SIMILAR = `/movie/movie_id/recommendations?language=en-US&page=1`;
const MOVIES_VIDEOS =  `/movie/movie_id/similar?language=en-US&page=1`;
const MOVIES_WATCH_PROVIDERS = `/movie/movie_id/watch/providers`;

// Trending
export function getTrendingAll(){
    
        const options = {
            method: 'GET',
            url: API_URL+TRENDING_ALL_ENDPOINT,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
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
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
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
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
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
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

// Movie list

export function getNowPlayinMovies(){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_NOW_PLAYING,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

export function getPopularMovies(){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_POPULAR,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

export function getTopRatedMovies(){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_TOP_RATED,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

export function getUpcomingMovies(){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_UPCOMING,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

// Movies Specific
export function getRecommendedMovies(movie_id=''){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_RECOMMENDATIONS.replace('movie_id', movie_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

export function getSimilarMovies(movie_id=''){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_SIMILAR.replace('movie_id', movie_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

export function getMovieVideos(movie_id=''){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_VIDEOS.replace('movie_id', movie_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}

export function getMovieProviders(movie_id=''){
    
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_WATCH_PROVIDERS.replace('movie_id', movie_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
        
}