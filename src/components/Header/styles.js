import styled from "styled-components";

export const Container = styled.div`
    min-height: 100px;
    z-index: 999;
    position: fixed;
    top: 0;
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.$changeBackground ? '#000' : 'transparent'};
    transition: background 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    img {
        width: 25%;
        margin-left: 1rem;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`

export const Li = styled.li`
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    a { //o 'a' tem dentro do Link do react router dom
        text-decoration: none;
        color: #fff;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => props.$isActive ? '100%' : 0};
        background: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%); //para fazer a borda em baixo (after) vir do meio
        border-radius: 15px;
        transition:  width .3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`