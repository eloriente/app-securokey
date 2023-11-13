// Vendors
import { IconButton } from "@mui/material"
import styled from "styled-components"

export const IconButtonStyledComponent = styled(IconButton)`
    &.MuiButtonBase-root{
      .MuiSvgIcon-root{
        fill: var(--font-color);
        font-size: 2rem;
      }
    }

    @media (max-width: 380px) {
      &.MuiButtonBase-root{
        .MuiSvgIcon-root{
          font-size: 1.5rem;
        }
      }
    }
`;