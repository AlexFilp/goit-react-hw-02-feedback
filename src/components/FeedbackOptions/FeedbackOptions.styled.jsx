import styled from 'styled-components';

export const Container = styled.div``;

export const Btn = styled.button`
  &:not(:last-child) {
    margin-right: 10px;
  }
  padding: 10px;
  transition: color 150ms ease-in, background-color 150ms ease-in;

  &:hover,
  &:focus {
    color: white;
    background-color: #010101;
  }
`;
