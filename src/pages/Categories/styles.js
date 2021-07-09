import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    background-color: #252222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 600px;
    padding: 10px;
    border-radius: 16px;
    height: 100%;

    h1 {
        margin-bottom: 50px;
    }

`;