import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5500';
const AUTH_TOKEN = `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`;
const TRENDING_PEOPLE_ENDPOINT = '/trending/person/day?language=en-US';
const MOVIE_VIDEOS = `/movie/movie_id/videos?language=en-US'`;
const MOVIE_GENRES = '/genre/movie/list?language=en';
const MOVIES_POPULAR =  '/movie/popular';
const MOVIES_UPCOMING =  '/movie/upcoming';
const MOVIES_TRENDING =  '/trending/movie/day?language=en-US';
const MOVIES_NOW_PLAYING =  '/movie/now_playing';


// Trending
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

export async function getTrendingMovies(day='day'){
    try {
        const options = {
            method: 'GET',
            url: API_URL+MOVIES_TRENDING.replace('day', day),
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


export async function getMovieGenres(){
    try {
        const options = {
            method: 'GET',
            url: API_URL+MOVIE_GENRES,
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

// Movies
export async function getPopularMovies(language='en-US',page='1'){
    try {
        const options = {
            method: 'GET',
            url: `${API_URL+MOVIES_POPULAR}?language=${language}&page=${page}`,
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

export async function getNowPlayingMovies(language='en-US', page='1'){
    try {
        //      --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \

        const options = {
            method: 'GET',
            url: `${API_URL+MOVIES_NOW_PLAYING}?language=${language}&page=${page}`,
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

export async function getUpcomingMovies(language='en-US', page='1'){
    try {
        const options = {
            method: 'GET',
            url: `${API_URL+MOVIES_UPCOMING}?language=${language}&page=${page}`,
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

export async function getMovieVideos(movie_id=''){
    try {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/'+MOVIE_VIDEOS.replace('movie_id', movie_id),
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
