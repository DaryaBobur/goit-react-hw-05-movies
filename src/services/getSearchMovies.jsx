import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'f17c8764406c58be1dc553dcf8d1d1db';

export const getSearchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
    return response;
}

export const getSearchQueryMovies = async ({ query = '', page = 1}) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`)
    return response;
    
}

export const getMoviesDetails = async ({ movieId }) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`)
    return response;
}


export const getCastMovie = async ({ movieId }) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`)
    return response;
}

export const getReviewsMovie = async ({ movieId }) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
    return response;
}