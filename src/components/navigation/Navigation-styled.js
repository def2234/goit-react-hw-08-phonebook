import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const LinkItem = styled(NavLink)`
  display: block;
  color: black;
  text-decoration: none;
`;

export const H1 = styled.h1`
  margin: 0;
  &:hover {
    color: blue;
  }
`;

export const LinkItems = styled(NavLink)`
  display: block;
  margin-right: 15px;
`;

export const Btn = styled(Button)`
  display: block;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
