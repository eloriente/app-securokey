import { Typography } from "@mui/material";
import styled from "styled-components";

function passwordStatus(passwordLength: number): string {
  switch(true) {
    case passwordLength < 12:
      return 'red';
    case passwordLength >= 12 && passwordLength <= 16:
      return 'orange'
    case passwordLength > 16:
      return 'yellowgreen'
    default:
      return 'var(--font-color)';
  }
}

export const PasswordStyledComponent = styled(Typography)<{passwordLength: number}>`
  &.MuiTypography-root{
    color: ${({passwordLength}) => passwordStatus(passwordLength)};
    font-family: var(--font-monospace);
    font-size: 2rem;
    margin: 10px 0;
    text-align: center;
    word-wrap: break-word;
    width: 100%;
  }
`