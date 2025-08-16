import { data } from "react-router-dom";
import api from "./api";

// Home
export async function getMovies() {
    //const dados = await api.get('/movie/popular')
    //setMovie(dados.data.results[0])
    const { data: { results } } = await api.get('/movie/popular') //pega somente o results dentro de data da API
    //vai em data e recebe tudo que tiver dentro de results
    return results[1]
}

export async function getTopMovies() {
    const { data: { results } } = await api.get('/movie/top_rated')
    return results
}

export async function getTopSeries() {
    const { data: { results } } = await api.get('tv/top_rated')
    return results
}

export async function getSeriesToday(){
    const { data: { results } } = await api.get('tv/airing_today')
    return results
}

export async function getSeriesAir(){
    const { data: { results } } = await api.get('tv/on_the_air')
    return results
}

export async function getPopularSeries() {
    const { data: { results } } = await api.get('tv/popular')
    return results
}

export async function getTopPeople() {
    const { data: { results } } = await api.get('person/popular')
    return results
}

export async function getNowMovie() {
    const { data: { results } } = await api.get('movie/now_playing')
    return results
}

export async function getNewMovie(){
    const { data: { results } } = await api.get('movie/upcoming')
    return results
}

//busca o filme pelo id
export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)
    return results[0]
}


// Details
export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)
    //receber tudo que tem dentro de data
    return cast
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`)
    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)
    return data
}