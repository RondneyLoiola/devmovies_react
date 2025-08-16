import { Background, Container, Info, Poster } from './styles'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { ContaineButtons } from '../../components/Button/styles'
import Slider from '../../components/Slider'
import getImages from '../../utils/getImages.js'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData.js'


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        // chama as api's no getData e colocar em cada variável pelo seu 'set'
        async function getAllData() {
            /*
            setMovie(await getMovies())
            setTopMovies(await getTopMovies())
            setTopSeries(await getTopSeries())
            setPopularSeries(await getPopularSeries())
            setTopPeople(await getTopPeople())
            */

            // no de cima, carregaria de um por um, só iria aparecer outro, se o que tiver em cima fosse já carregado
            Promise.all([ // carrega todos aos mesmo tempo e faz o código ser mais rápido
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()

            ]).then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setTopPeople(topPeople)

                /*
                outra forma de fazer:
                .then((result) => {
                    setMovie(result[0])
                    setTopMovies(result[1])
                    setTopSeries(result[2])
                    setPopularSeries(result[3])
                    setTopPeople(result[4])
                */

            }).catch((error) => console.error(error))//console.erro => mostrar o erro em vermelho no console

        }

        getAllData()
    }, [])//o colchete ta vazio pq só vai iniciar quando a página rodar





    return (
        <>
            {movie && (//esse movie && é como se fosse um if(movie === true) ou if(movie), usa-se assim no react
                <Background $img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContaineButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>Assista o Trailer</Button>
                            </ContaineButtons>
                        </Info>
                        <Poster>
                            <img alt='capa-do-filme' src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider>}
            {topSeries && <Slider info={topSeries} title={'Top Series'}></Slider>}
            {popularSeries && <Slider info={popularSeries} title={'Series Populares'}></Slider>}
            {topPeople && <Slider info={topPeople} title={'Artistas Populares'}></Slider>}

        </>

    )// linha 67 => só vai carregar o slider quando o topMovies for carregado
}

export default Home