// Vendors
import { Typography } from "@mui/material"
// Styles
import HeaderStyledComponent from "./header.styled.component"

export const HeaderComponent = () => {
  return (
    <HeaderStyledComponent>
      <Typography variant="h5" sx={{display: 'flex', alignItems: 'center', fontWeight: 'bold'}}>
       <img src="/favicon.ico" width={50} style={{marginRight: '10px'}}/> SecuroKey
      </Typography>
    </HeaderStyledComponent>
  )
}