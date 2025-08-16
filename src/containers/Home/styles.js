import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0.8);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background: url(${(props) => props.$img}); //poderia colocar o link direto da imagem
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
    
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #fff;
    }

    p{ 
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`

export const Poster = styled.div`
    z-index: 2;
    img {
        width: 400px;
        border-radius: 25px;
        border: none;
        animation: ${scale} 0.3s linear;
    }
`