import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Link, Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { LOGIN_API } from '../../../Constants/urlConstants';
import { Toaster } from '../../Toaster';
import { receivedPosts } from '../../../Redux/Actions/LoginUserActions';
import ForgotPassword from '../forgotpassword/ForgotPassword';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    userName: '',
    password: '',
    userData: '',
    errorMessage: '',
    isError: false,
    isUserLoggedIn: false
  });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = () => {
    const url = LOGIN_API;
    const bdy = {
      username: values.userName,
      password: values.password
    };
    setIsLoading(true);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(bdy),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.tokens) {
          dispatch(receivedPosts(data));
          localStorage.setItem('userDetails', JSON.stringify(data));
          localStorage.setItem('isUserLoggedIn', true);

          // TODO: SHIFT THIS TO SERVICE
          localStorage.setItem('act', data.tokens.accessToken);
          localStorage.setItem('rft', data.tokens.refreshToken);
          localStorage.setItem('url', data.user.role);
          localStorage.setItem('usr', data.user.id);
          navigate('/dashboard/app', { replace: true });
        } else {
          localStorage.setItem('isUserLoggedIn', false);
          toast.error(data.message);

          setValues({ ...values, isError: true, errorMessage: data.message });
        }
      });
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value, isError: false });
  };

  const handleForgotPassword = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Toaster />
      <ForgotPassword open={open} handleClose={handleClose} />
      <Stack spacing={3}>
        <TextField
          fullWidth
          type="text"
          id="userName"
          label="User Name"
          autoComplete="userName"
          name="userName"
          autoFocus
          onChange={handleChange}
        />

        <TextField
          fullWidth
          autoComplete="current-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                </IconButton>
              </InputAdornment>
            )
          }}
          variant="outlined"
          margin="normal"
          required
          name="password"
          id="password"
          onChange={handleChange}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link component={RouterLink} variant="subtitle2" to="#" onClick={handleForgotPassword}>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="button"
        variant="contained"
        loading={isLoading}
        onClick={handleLogin}
      >
        Login
      </LoadingButton>
    </div>
  );
}
