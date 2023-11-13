// Vendors
import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonStyledComponent = styled(Button)`
  &.MuiButtonBase-root {
    background-color: var(--font-color); 
    color: var(--background);

    &:hover {
      background-color: var(--font-color); 
      color: var(--background);
    }

  }
`