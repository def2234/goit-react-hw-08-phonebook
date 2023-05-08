import styled from 'styled-components';
import { Button } from '@mui/material';

// export const Btn = styled.button`
//   display: inline-block;
//   border-radius: 3px;
//   outline: 1px solid;
//   border: none;
//   margin-left: 15px;
//   cursor: pointer;
//   background-color: #f7fafa;
//   &:hover {
//     background-color: #ddfcd2;
//   }
//   &:focus {
//     background-color: #c0f3fa;
//   }
// `;

export const Btn = styled(Button)`
  &:hover {
    background-color: #ddfcd2;
  }
  &:focus {
    background-color: #c0f3fa;
  }
`;

export const P = styled.p`
  font-weight: 500;
  margin: 0;
  margin-right: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: baseline;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  text-decoration: underline;
  margin-right: 10px;
`;
