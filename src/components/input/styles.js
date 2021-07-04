import styled, { css } from "styled-components";

import Tooltip from '../ToolTip';

export const Container = styled.div`
  background: #000000;
  border-radius: 10px;
  color: #666360;
  border: 2px solid #000000;
  padding: 16px;
  margin-left: 34px;
  height: 54px;
  width: 80%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 12px;
  }

  ${(props) =>
    props.isErrored && css`
      border-color: #c53030;
    `}

  ${(props) => props.isFocused && css`
      color: #25894d;
      border-color: #25894d;
    `}

  ${(props) => props.isFilled && css`
      color: #25894d;
    `}

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before{
      border-color: #c53030 transparent;
    }
  }
`;
