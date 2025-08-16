import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ContainerSimilar } from "./styles";
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData";
import { useParams } from 'react-router-dom' // mostrar informações que está na url quando clica no botão linkado aos detalhes, pega o :id da pasta routes em <Details />
import getImages from "../../utils/getImages";
import Slider from '../../components/Slider'
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

function Detail() {
    const { id } = useParams() // const id = useParams().id
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ]).then(([movie, videos, credits, similar]) => {

                setMovie(movie);
                setMovieVideos(videos);
                setMovieCredits(credits);
                setMovieSimilar(similar);

            }).catch((error) => {
                console.error(error);
            })
        }

        getAllData();
    }, []);

    return (
        <>
            {movie && (

                <>

                    <Background $image={getImages(movie.backdrop_path)} />

                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerSimilar>
                        {movieSimilar && <Slider info={movieSimilar} title={'Filmes Recomendados'} />}
                    </ContainerSimilar>
                </>
            )}
        </>
    )
}

export default Detail