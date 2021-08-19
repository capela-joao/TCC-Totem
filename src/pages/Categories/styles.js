import styled from "styled-components";
import background from '../../assets/ifsplogo.jpg';
import { shade } from 'polished';

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
    width: 347px;
    align-items: center;
    text-align: center;
    border-radius: 16px;

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
        transition: background-color 0.3s;
        text-align: center;

        & + a {
            margin-top: 10px;
        }

        &:hover {
            background: ${shade(0.2, "#25894d")};
        }
        
    }
`;

export const Background = styled.div`
    flex: 1;
    background:url(${background}) no-repeat center;
    background-size: cover;
`;