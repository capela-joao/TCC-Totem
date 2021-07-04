import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.button`
  background: #25894d;
  border-radius: 10px;
  height: 54px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 80%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color(0.2);

  &:hover {
    background: ${shade(0.2, "#ff0000")};
  }
`;