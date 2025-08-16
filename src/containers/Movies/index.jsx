import { useState, useEffect, use } from 'react'
import Slider from '../../components/Slider'
import { getMovies, getNowMovie, getTopMovies, getNewMovie} from '../../services/getData.js'
import { Container } from './styles.js'

function Movies() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [nowMovie, setNowMovie] = useState()
    const [newMovie, setNewMovie] = useState()
    

    useEffect(() => {
        async function getAllMovies(){
            Promise.all([
                getMovies(),
                getTopMovies(),
                getNowMovie(),
                getNewMovie()
            ]).then(([movie, topMovies, nowMovie, newMovie]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setNowMovie(nowMovie)
                setNewMovie(newMovie)
            }).catch((error) => console.error(error))
        }

        getAllMovies()
    }, [])

    return (
        <>
            
            {movie &&  (
                <Container>
                    {nowMovie && <Slider info={nowMovie} title={'Assista Agora'}></Slider>}
                    {topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider>}
                    {newMovie && <Slider info={newMovie} title={'Lançamentos'}></Slider>}
                </Container>
            )}
            
        </>
    )
}

export default Movies