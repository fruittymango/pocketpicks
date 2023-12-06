import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const AUTH_TOKEN = `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`;

const TRENDING_ALL_ENDPOINT = '/trending/all/day?language=en-US';
const TRENDING_PEOPLE_ENDPOINT = '/trending/person/day?language=en-US'
const TRENDING_MOVIES_ENDPOINT = '/trending/movie/day?language=en-US';
const TRENDING_TV_ENDPOINT = '/trending/tv/day?language=en-US';

const TVSERIES_AIRING_TODAY = '/tv/airing_today?language=en-US&page=1';
const TVSERIES_ON_THE_AIR = '/tv/on_the_air?language=en-US&page=1';
const TVSERIES_POPULAR = '/tv/popular?language=en-US&page=1';
const TVSERIES_TOP_RATED = '/tv/top_rated?language=en-US&page=1';

const TVSHOWS_RECOMMENDATION = `/tv/series_id/recommendations?language=en-US&page=1`;
const TVSHOWS_SIMILAR = `/tv/series_id/similar?language=en-US&page=1`;
const TVSHOWS_VIDEOS = `/tv/series_id/videos?language=en-US&page=1`;
const TVSHOWS_WATCH_PROVIDERS = `/tv/series_id/watch/providers`;

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
    axios(options).then((response :any)=>response?.results).catch((error)=>console.log(error));
       
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

// TV Series Lists
export function getAiringTodayTVShows(){
    const options = {
        method: 'GET',
        url: API_URL+TVSERIES_AIRING_TODAY,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
}

export function getOnTheAirTVShows(){
    const options = {
        method: 'GET',
        url: API_URL+TVSERIES_ON_THE_AIR,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
  
}

export function getPopularTVShows(){
    const options = {
        method: 'GET',
        url: API_URL+TVSERIES_POPULAR,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
    
}

export function getTopRatedTVShows(){
    const options = {
        method: 'GET',
        url: API_URL+TVSERIES_TOP_RATED,
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
   
}

// Series Specific
export function getRecommendedTVShow(series_id=''){
    const options = {
        method: 'GET',
        url: API_URL+TVSHOWS_RECOMMENDATION.replace('series_id', series_id),
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));
       
}

export function getSimilarTVShow(series_id=''){
    
    const options = {
        method: 'GET',
        url: API_URL+TVSHOWS_SIMILAR.replace('series_id', series_id),
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));  
}

export function getTVShowVideos(series_id=''){
    
    const options = {
        method: 'GET',
        url: API_URL+TVSHOWS_VIDEOS.replace('series_id', series_id),
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));  
}

export function getTVShowProviders(series_id=''){
    
    const options = {
        method: 'GET',
        url: API_URL+TVSHOWS_WATCH_PROVIDERS.replace('series_id', series_id),
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    };
    axios(options).then((response:any)=>response.results).catch((error)=>console.log(error));  
}