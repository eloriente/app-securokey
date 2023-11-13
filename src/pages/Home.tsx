// Vendors
import { useEffect, useState } from 'react';
import { Typography, FormControlLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
// Styles
import { MainStyledComponent, ModalStyledComponent, CheckboxStyledComponent, ButtonStyledComponent } from '../components/ui';
import { SliderStyledComponent, FormStyledComponent, FormGroupComponent, PasswordStyledComponent } from '../components/home';
// Utils
import { copyIntoClipboard, generatePassword } from '../utils/';

type FormData = {
  letters: boolean;
  numbers: boolean;
  special_characters: boolean;
};

function HomePage() {

  const [ passwordLength, setPasswordLength ] = useState<number>(12);
  const [ passwordGenerated, setPasswordGenerated ] = useState<string>();
  const { register, handleSubmit, watch } = useForm<FormData>();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setPasswordLength(newValue as number);
  };

  function handlePasswordGeneration(passwordOptions: FormData) {
    setPasswordGenerated(generatePassword(passwordLength, passwordOptions));
  };

  function handleCopyToClipboard() {
    if(passwordGenerated) copyIntoClipboard(passwordGenerated);
  }

  useEffect(() => {
    const passwordOptions = {letters: watch('letters'), numbers: watch('numbers'), special_characters: watch('special_characters')};
    handlePasswordGeneration(passwordOptions);
  }, [passwordLength, watch('letters'), watch('numbers'), watch('numbers'), watch('special_characters')])

  return (
    <MainStyledComponent>
      <ModalStyledComponent>
        <Typography sx={{fontFamily: 'var(--font-monospace)'}}>
          Password Generator
        </Typography>
        {
          (passwordGenerated)
          ? <PasswordStyledComponent variant='h3' sx={{fontFamily: 'var(--font-monospace)'}}>
              {passwordGenerated}
            </PasswordStyledComponent>
          : <></>
        }
        <div>
          <Typography sx={{fontSize: 14}}>
            Password length
          </Typography>
          <SliderStyledComponent
            defaultValue={12}
            valueLabelDisplay="auto"
            step={2}
            marks
            min={4}
            max={24}
            onChange={handleChange}
          />
        </div>
        <FormStyledComponent onSubmit={handleSubmit(handleCopyToClipboard)}>
          <FormGroupComponent>
            <FormControlLabel control={<CheckboxStyledComponent defaultChecked {...register('letters')}/>} label="Letters" />
            <FormControlLabel control={<CheckboxStyledComponent defaultChecked {...register('numbers')}/>} label="Numbers" />
            <FormControlLabel control={<CheckboxStyledComponent defaultChecked {...register('special_characters')}/>} label="Special characters" />
          </FormGroupComponent>
          <ButtonStyledComponent type="submit" variant='contained'>Copy password</ButtonStyledComponent>
        </FormStyledComponent>
      </ModalStyledComponent>
    </MainStyledComponent>
  )

}

export default HomePage;