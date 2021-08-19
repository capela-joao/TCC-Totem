import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    h1{
        margin-left: 20px;
    }

    ul{
        display: flex;
        list-style: none;
        align-items: center;
        li{
            margin-right: 20px;

            svg{
                margin-right: 10px;
            }

            &+li{
                margin-left: 30px;
            }
        }
    }
`;