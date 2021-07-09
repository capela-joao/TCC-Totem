import styled from "styled-components";
import background from '../../assets/ifsplogo.jpg'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    background-color: #1a1717;
    width: 80%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
`;

export const ContentCategories = styled.div`
    background-color: #252222;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    border-radius: 16px;
    height: 45vh;

    h1 {
        margin: 50px 0 50px 0;
    }

    a {
        width: 95%;
        text-decoration: none;
        padding: 20px;
        border-radius: 10px;
        color: #FFF;
        font-weight: 500;
        background-color: #25894d;
        text-align: center;

        & + a {
            margin-top: 10px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background:url(${background}) no-repeat center;
    background-size: cover;
`;