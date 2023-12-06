import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5500';
const AUTH_TOKEN = `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`;
const TRENDING_ALL_ENDPOINT = '/trending/all/day?language=en-US';
const TRENDING_PEOPLE_ENDPOINT = '/trending/person/day?language=en-US';
const TRENDING_TV_ENDPOINT_DAY = '/trending/tv/day?language=en-US';
const TRENDING_TV_ENDPOINT_WEEK = '/trending/tv/week?language=en-US';
const TVSHOW_GENRES = '/genre/tv/list?language=en';

const TVSERIES_AIRING_TODAY = '/tv/airing_today?language=en-US&page=1';
const TVSERIES_ON_THE_AIR = '/tv/on_the_air?language=en-US&page=1';
const TVSERIES_POPULAR =  '/tv/popular?language=en-US&page=1';
const TVSERIES_TOP_RATED = '/tv/top_rated?language=en-US&page=1';
const TVSHOW_DISCOVER = '/discover/tv?first_air_date_year=2023&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';

const TVSHOWS_RECOMMENDATION = `/tv/series_id/recommendations?language=en-US&page=1`;
const TVSHOWS_SIMILAR = `/tv/series_id/similar?language=en-US&page=1`;
const TVSHOWS_VIDEOS = `/tv/series_id/videos?language=en-US&page=1`;
const TVSHOWS_WATCH_PROVIDERS = `/tv/series_id/watch/providers`;

// Trending
export async function getTrendingAll(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TRENDING_ALL_ENDPOINT,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTrendingPeople(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TRENDING_PEOPLE_ENDPOINT,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTrendingTVShows(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TRENDING_TV_ENDPOINT_DAY,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTVShowsGenres(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSHOW_GENRES,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTrendingTVShowsThisWeek(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TRENDING_TV_ENDPOINT_WEEK,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

// TV Series Lists
export async function getAiringTodayTVShows(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSERIES_AIRING_TODAY,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getOnTheAirTVShows(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSERIES_ON_THE_AIR,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;
}

export async function getPopularTVShows(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSERIES_POPULAR,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTopRatedTVShows(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSERIES_TOP_RATED,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

// Series Specific
export async function getRecommendedTVShow(series_id=''){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSHOWS_RECOMMENDATION.replace('series_id', series_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getSimilarTVShow(series_id=''){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSHOWS_SIMILAR.replace('series_id', series_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTVShowVideos(series_id=''){
    try {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/'+TVSHOWS_VIDEOS.replace('series_id', series_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTVShowProviders(series_id=''){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSHOWS_WATCH_PROVIDERS.replace('series_id', series_id),
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}

export async function getTVShowDiscovery(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+TVSHOW_DISCOVER,
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
        return await axios(options);
    } catch (error) {
        console.error(error);
    }
    return;   
}