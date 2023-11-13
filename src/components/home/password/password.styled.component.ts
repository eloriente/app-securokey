import { Typography } from "@mui/material";
import styled from "styled-components";

function passwordStatus(password_length: number): string {
  switch(true) {
    case password_length < 12:
      return 'orange';
    case password_length >= 12:
      return 'yellowgreen'
    default:
      return 'var(--font-color)';
  }
}

export const PasswordStyledComponent = styled(Typography)<{password_length: number}>`
  &.MuiTypography-root{
    color: ${({password_length}) => passwordStatus(password_length)};
    font-family: var(--font-monospace);
    font-size: 2rem;
    margin: 10px 0;
    text-align: center;
    word-wrap: break-word;
    width: 100%;
  }
`