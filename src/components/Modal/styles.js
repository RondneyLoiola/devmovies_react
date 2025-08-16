import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    border-radius: 20px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;
    

    iframe {
        border: none;
        border-radius: 5px;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`