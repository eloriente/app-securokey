// Vendors
import { Typography } from "@mui/material";
import styled from "styled-components";

export const FooterStyledComponent = styled.footer`
  align-items: center;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const FooterTypographyStyledComponent = styled(Typography)<{fontVariant: 'sans-serif' | 'monospace'}>`
  &.MuiTypography-root{
    font-size: 11px;
    font-family: ${({fontVariant}) => fontVariant && (fontVariant === 'sans-serif') ? 'var(--font-monospace)' : 'var(--font-monospace)'};
  }

  @media (max-width: 380px) {
    &.MuiTypography-root {
      padding: 0 2rem;
      text-align: center;
    }
  }

`;