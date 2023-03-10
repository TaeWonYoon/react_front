import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;
const Button = (to, children) => {
  const nav = useNavigate();
  console.log(to);
  const onClick = (e) => {
    if (to.to) {
      nav('/login');
    }
    if (to.onClick) {
      to.onClick(e);
    }
  };
  return <StyledButton {...to} onClick={onClick}></StyledButton>;
};

export default Button;
