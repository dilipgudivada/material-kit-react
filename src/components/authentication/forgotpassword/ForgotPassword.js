/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dialog, Button, TextField, CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
import { resetPasswordApi } from '../../../Services/reset.service';

const ForgotPassword = ({ open, handleClose = null }) => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSendEmail = () => {
    setIsLoading(true);
    if (value) {
      resetPasswordApi(value).then((response) => {
        setIsLoading(false);
        if (response.message) {
          toast.error(response.message);
        } else {
          toast.success('success');
          handleClose();
        }
      });
    } else {
      toast.error('Please fill email address field ');
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ height: 350, width: 450, padding: '20px 20px' }}>
        <h3>Enter validate Email Address</h3>
        <TextField
          required
          id="emailAddress"
          name="emailAddress"
          label="Email Address"
          style={{ width: 400 }}
          autoComplete="Email Address"
          variant="outlined"
          onChange={handleChange}
          value={value}
        />
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <CircularProgress />{' '}
          </div>
        ) : null}
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '10px 0%', width: 400 }}
          onClick={handleSendEmail}
        >
          Send Email
        </Button>
        <Button
          color="secondary"
          variant="contained"
          style={{ margin: '10px 0%', width: 400 }}
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </Dialog>
  );
};

export default ForgotPassword;
