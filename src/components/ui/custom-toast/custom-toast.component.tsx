import { Alert, Snackbar } from '@mui/material';
import { SyntheticEvent, useContext } from 'react';
import { UiContext } from '../../../context';

export const CustomToastComponent = () => {
  const { alert, handleAlertMessage } = useContext(UiContext);

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    handleAlertMessage({...alert, display: false});
  };
  return (
    <Snackbar 
      open={alert?.display}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={2000} 
      onClose={handleClose}>
      <Alert
        severity={alert?.severity}
        sx={{ width: '100%' }}>
        { alert?.message }
      </Alert>
    </Snackbar>
  );
};