// Vendors
import { useContext, useEffect, useState } from 'react';
import { Typography, FormControlLabel } from '@mui/material';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { useForm } from 'react-hook-form';
// Styles
import { MainStyledComponent, ModalStyledComponent, CheckboxStyledComponent, ButtonStyledComponent, IconButtonStyledComponent } from '../components/ui';
import { SliderStyledComponent, FormStyledComponent, FormGroupComponent, PasswordStyledComponent, SliderContainerStyledComponent } from '../components/atoms';
// Utils
import { copyIntoClipboard, generatePassword } from '../utils/';
import { UiContext } from '../context';

type FormData = {
  letters: boolean;
  numbers: boolean;
  special_characters: boolean;
};

function HomePage() {

  const { register, handleSubmit, watch } = useForm<FormData>();
  const [ passwordLength, setPasswordLength ] = useState<number>(12);
  const [ passwordOptions, setPasswordOptions ] = useState<FormData>({letters: watch('letters'), numbers: watch('numbers'), special_characters: watch('special_characters')})
  const [ passwordGenerated, setPasswordGenerated ] = useState<string>();
  const { handleAlertMessage } = useContext(UiContext);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setPasswordLength(newValue as number);
  };

  function handlePasswordGeneration(options: FormData) {
    setPasswordGenerated(generatePassword(passwordLength, options));
  };

  function handleCopyToClipboard() {
    if(passwordGenerated) {
      copyIntoClipboard(passwordGenerated);
      handleAlertMessage({display: true, message: 'Password copy into clipboard', severity: 'info'});
    };
  }

  useEffect(() => {
    const options = {letters: watch('letters'), numbers: watch('numbers'), special_characters: watch('special_characters')};
    setPasswordOptions(options)
    handlePasswordGeneration(options);
  }, [passwordLength, watch('letters'), watch('numbers'), watch('numbers'), watch('special_characters')])

  return (
    <MainStyledComponent>
      <ModalStyledComponent>
        <Typography sx={{fontFamily: 'var(--font-monospace)'}}>
          Password Generator
        </Typography>
        {
          (passwordGenerated)
          ? <PasswordStyledComponent variant='h3' password_length={passwordLength}>
              {passwordGenerated}
              <IconButtonStyledComponent aria-label="delete" color="primary" onClick={() => handlePasswordGeneration(passwordOptions)}>
                <ReplayRoundedIcon />
              </IconButtonStyledComponent>
            </PasswordStyledComponent>
          : <></>
        }
        <SliderContainerStyledComponent>
          <Typography sx={{fontSize: 14}}>
            Password length
          </Typography>
          <SliderStyledComponent
            defaultValue={12}
            valueLabelDisplay="auto"
            step={2}
            marks
            min={6}
            max={24}
            onChange={handleChange}
          />
        </SliderContainerStyledComponent>
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