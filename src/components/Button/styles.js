import styled, {css} from "styled-components";

const buttonStyle = css` // o css é para 'reutilizar'
    border: 3px solid #fff;
    background-color: transparent;
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        color: #ff0000;
        background-color: #fff;
    }
`


export const ButtonWhite = styled.button`
    ${buttonStyle}
`

export const ButtonRed = styled.button`
    ${buttonStyle} //copia os mesmos estilos dessa const e depois sobrepõe
    background-color: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0/ 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0/ 30%);
        background-color: #ff0000;
        color: white;
    }
`

export const ContaineButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`