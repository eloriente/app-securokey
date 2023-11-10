// Vendors
import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
// Components
import { MainStyledComponent, ModalStyledComponent } from '../components/ui';
import { SliderStyledComponent, FormStyledComponent } from '../components/home';
import { generatePassword } from '../utils/';

type FormData = {
  passwordLength: number;
  privateKey?: number;
};

function HomePage() {

  const [ passwordLength, setPasswordLength ] = useState<number>(12);
  const [ passwordGenerated, setPasswordGenerated ] = useState<string>();
  const { handleSubmit } = useForm<FormData>();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPasswordLength(newValue as number);
  };

  function handlePasswordGeneration() {
    setPasswordGenerated(generatePassword(passwordLength))
  };

  useEffect(() => {
    handlePasswordGeneration();
  }, []);

  return (
    <MainStyledComponent>
      <ModalStyledComponent>
        <Typography sx={{fontFamily: 'var(--font-monospace)'}}>
          Password Generator
        </Typography>
        {
          (passwordGenerated)
          ? <Typography variant='h3' sx={{fontFamily: 'var(--font-monospace)'}}>
              {passwordGenerated}
            </Typography>
          : <></>
        }
        <SliderStyledComponent
            defaultValue={12}
            valueLabelDisplay="auto"
            step={2}
            marks
            min={4}
            max={24}
            onChange={handleChange}
          />
        <FormStyledComponent onSubmit={handleSubmit(handlePasswordGeneration)}>
          <Button type="submit" variant="outlined">Generate</Button>
        </FormStyledComponent>
      </ModalStyledComponent>
    </MainStyledComponent>
  )

}

export default HomePage;