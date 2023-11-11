import { Typography } from "@mui/material";
import styled from "styled-components";

export const PasswordStyledComponent = styled(Typography)`
  &.MuiTypography-root{
    color: greenyellow;
    font-family: var(--font-monospace);
    font-size: 2rem;
    margin: 10px 0;
    word-wrap: break-word;
    width: 100%;
  }
`