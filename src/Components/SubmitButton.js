import React from "react";
import styled from "styled-components";

function SubmitButton({ title }) {
  return (
    <SubmitButtonStyled value={title} type='submit'>
      <div>{title.toUpperCase()}</div>
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 3rem;
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  font-size: inherit;
  div {
    color: white;
  }

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default SubmitButton;
