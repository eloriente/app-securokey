// Vendors
import { Checkbox } from "@mui/material"
import styled from "styled-components"

export const CheckboxStyledComponent = styled(Checkbox)`
  &.MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
  &.MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: var(--font-color);
  }

  .MuiSvgIcon-root {
    fill: var(--font-color);
  }

`