import { useState, useEffect, use } from 'react'
import Slider from '../../components/Slider'
import { getTopSeries, getPopularSeries, getSeriesAir, getSeriesToday } from '../../services/getData.js'
import { Container } from './styles.js'

function Series() {
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [seriesAir, setSeriesAir] = useState()
    const [seriesToday, setSeriesToday] = useState()

     useEffect(() => {
            async function getAllMovies(){
                Promise.all([
                    getTopSeries(),
                    getPopularSeries(),
                    getSeriesAir(),
                    getSeriesToday()
                ]).then(([serie, topSerie, serieAir, serieToday]) => {
                    setTopSeries(serie)
                    setPopularSeries(topSerie)
                    setSeriesAir(serieAir)
                    setSeriesToday(serieToday)
                }).catch((error) => console.error(error))
            }
    
            getAllMovies()
        }, [])

    return (
        <>
            {topSeries && (
                <Container>
                    {topSeries && <Slider info={topSeries} title={'Top Series'}></Slider>}
                    {popularSeries && <Slider info={popularSeries} title={'Series Populares'}></Slider>}
                    {seriesAir && <Slider info={seriesAir} title={'Series no Ar'}></Slider> }
                    {seriesToday && <Slider info={seriesToday} title={'Series Recentes'}></Slider>}
                </Container>
            )}


        </>
    )
}

export default Series