// Vendors
import { FormGroup } from "@mui/material";
import styled from "styled-components";

export const FormGroupStyledComponent = styled(FormGroup)`
  &.MuiFormGroup-root {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: 2rem 0;
  }

  @media (max-width: 380px) {
    &.MuiFormGroup-root {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

`