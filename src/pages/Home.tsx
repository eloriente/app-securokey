// Vendors
import { Typography, Button } from '@mui/material';
// Components
import { MainStyledComponent, ModalStyledComponent } from '../components/ui';
import { SliderStyledComponent } from '../components/home';

function HomePage() {

  return (
    <MainStyledComponent>
      <ModalStyledComponent>
        <Typography variant='h4' sx={{fontFamily: 'var(--font-monospace)'}}>
          Password Generator
        </Typography>
        <SliderStyledComponent
          defaultValue={12}
          valueLabelDisplay="auto"
          step={2}
          marks
          min={4}
          max={24}
        />
        <Button variant="outlined">Generate</Button>
      </ModalStyledComponent>
    </MainStyledComponent>
  )

}

export default HomePage;