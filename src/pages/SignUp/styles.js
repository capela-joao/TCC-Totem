import styled from 'styled-components';
import background from '../../assets/ifsplogo.jpg'
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

export const ContentLogin = styled.div`
  background-color: #252222;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 16px;

  form {
    margin: 80px 0;
    width: 347px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#F4EDE8")};
      }
    }
  }

  > a {
    text-decoration: none;
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    margin-bottom: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#25894d")};
    }
  }
`;

export const Background = styled.div`
    flex: 1;
    background:url(${background}) no-repeat center;
    background-size: cover;
`;