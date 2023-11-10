// Vendors
import { useEffect, useState } from 'react';
import { Typography, Button, FormControlLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
// Components
import { MainStyledComponent, ModalStyledComponent, CheckboxStyledComponent } from '../components/ui';
import { SliderStyledComponent, FormStyledComponent, FormGroupComponent } from '../components/home';
import { generatePassword } from '../utils/';

type FormData = {
  letters: boolean;
  numbers: boolean;
  special_characters: boolean;
};

function HomePage() {

  const [ passwordLength, setPasswordLength ] = useState<number>(12);
  const [ passwordGenerated, setPasswordGenerated ] = useState<string>();
  const { register, handleSubmit } = useForm<FormData>();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPasswordLength(newValue as number);
  };

  function handlePasswordGeneration({letters, numbers, special_characters}: FormData) {
    const options = {letters, numbers, special_characters};
    setPasswordGenerated(generatePassword(passwordLength, options));
  };

  useEffect(() => {
    handlePasswordGeneration({letters: true, numbers: true, special_characters: true});
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
          <FormGroupComponent>
            <FormControlLabel control={<CheckboxStyledComponent defaultChecked {...register('letters')}/>} label="Letters" />
            <FormControlLabel control={<CheckboxStyledComponent defaultChecked {...register('numbers')}/>} label="Numbers" />
            <FormControlLabel control={<CheckboxStyledComponent defaultChecked {...register('special_characters')}/>} label="Special characters" />
          </FormGroupComponent>
          <Button type="submit" variant="outlined">Generate</Button>
        </FormStyledComponent>
      </ModalStyledComponent>
    </MainStyledComponent>
  )

}

export default HomePage;