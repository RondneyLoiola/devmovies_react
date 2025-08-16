import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom' // o uselocation informa em que página estamos

function Header() { 
    const [ changeBackground, setChangeBackground] = useState(false)
    window.onscroll = () => {
        if(window.pageYOffset > 120){
            setChangeBackground(true)
        }
        else {
            setChangeBackground(false)
        }
    }

    const { pathname } = useLocation()
    return (
        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt="logo-dev-movies" />
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to='/'>Ínicio</Link>
                </Li>

                <Li $isActive={pathname.includes('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>

                <Li $isActive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </Li>

            </Menu>
        </Container>
    )
}

export default Header