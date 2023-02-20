import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
`;

export const Item = styled.li`
  font-size: 25px;

  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
