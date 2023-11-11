import styled from "styled-components";
import { Slider } from '@mui/material';

export const SliderStyledComponent = styled(Slider)`
  &.MuiSlider-root {
    color: var(--font-color);
    height: 10px;
    width: 50vh;

    @media (max-width: 767px) {
      width: 100%;
    }

  }
`