/* eslint-disable import/no-named-as-default */
// Modules
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { toast as Toast } from 'react-toastify';
import PropTypes from 'prop-types';

// UI
import {
  Button,
  Container,
  Checkbox,
  CssBaseline,
  Select,
  FormControl,
  FormControlLabel,
  InputLabel,
  Typography,
  makeStyles,
  TextField,
  MenuItem,
  Grid
} from '@material-ui/core';

// Constants
import genders from '../Constants/genders';
import userRoles from '../Constants/userRoles';
import countries from '../Constants/countries';

// Services
import AuthService from '../Services/auth.service';
import LocationsService from '../Services/locations.service';

// Shared
import Logo from './shared/logo';

// Styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logoWrapper: {
    marginBottom: theme.spacing(1)
  },
  formWrapper: {
    width: '100%'
  },
  formHeader: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textAlign: 'center'
  },
  formElement: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

// Component
export const SignUp = ({ onShowLoginForm }) => {
  // Hooks
  const styles = useStyles();

  // State
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    dateOfBirth: '',
    practiceName: '',
    taxId: '',
    providerName: '',
    npiNumber: '',
    address: '',
    zipCode: ''
  });
  const [locations, setLocations] = useState('');
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const [role, setRole] = useState(userRoles?.dentalOffice?.id);
  const [country, setCountry] = useState(countries?.unitedStates?.id);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');

  // Reset State
  const resetState = () => {
    setDetails({
      firstName: null,
      lastName: null,
      mobileNumber: null,
      emailAddress: null,
      dateOfBirth: null,
      practiceName: null,
      taxId: null,
      providerName: null,
      npiNumber: null,
      address: null
    });
    setLocations(null);
    setRole(userRoles?.dentalOffice?.id);
    setCountry(countries?.unitedStates?.id);
    setLocation(null);
    setGender(null);
    setIsSigningUp(false);
    setIsSignedUp(false);
  };

  // Get Locations
  const getLocations = async () => {
    try {
      const locations = await LocationsService.getLocations();

      if (_.isEmpty(locations)) {
        return setLocations(locations);
      }

      const [location] = locations;

      setLocation(location.id);
      setLocations(locations);
    } catch (exception) {
      Toast.error('Failed to get locations. Please refresh to try again.');
    }
  };

  // On Change Text
  const onChangeText = (event) => {
    const { name, value } = event.target;

    setDetails({
      ...details,
      [name]: value
    });
  };

  // On Change Role
  const onChangeRole = (event) => {
    const { value: roleId } = event.target;

    setRole(roleId);
  };

  // On Change Location
  const onChangeLocation = (event) => {
    const { value: locationId } = event.target;

    setLocation(locationId);
  };

  // On Change Country
  const onChangeCountry = (event) => {
    const { value: countryId } = event.target;

    setCountry(countryId);
  };

  // On Change Gender
  const onChangeGender = (event) => {
    const { value: genderId } = event.target;

    setGender(genderId);
  };

  // On Check Terms of Use
  const onCheckTermsOfUse = (event) => {
    const { checked: hasAgreedToTerms } = event.target;

    setHasAgreedToTerms(hasAgreedToTerms);
  };

  // On Sign Up
  const onSignUp = async () => {
    try {
      setIsSigningUp(true);

      // const user = {
      //   ...details,
      //   role,
      //   locationId: location,
      //   country,
      //   gender
      // };

      // await AuthService.signUp(user);

      // setIsSigningUp(false);
      // setIsSignedUp(true);
      onShowLoginForm();
      Toast.success(`An email has been sent to ${details.email}`);
    } catch (exception) {
      // setIsSigningUp(false);
      Toast.error(exception.message);
    }
  };

  // On Back to Login
  const onBackToLogin = () => {
    // Reset State
    resetState();

    // Back to Login
    onShowLoginForm();
  };

  // Render Form Fields
  const renderFormFields = () => {
    // Fields For Roles
    const insuranceAgentFormFields = [
      'role',
      'firstName',
      'lastName',
      'mobileNumber',
      'emailAddress',
      'dateOfBirth',
      'gender',
      'taxId',
      'providerName',
      'npiNumber',
      'address',
      'zipCode',
      'location',
      'country'
    ];
    const dentalOfficeFormFields = [
      'role',
      'firstName',
      'lastName',
      'mobileNumber',
      'emailAddress',
      'dateOfBirth',
      'gender',
      'practiceName',
      'taxId',
      'providerName',
      'npiNumber',
      'address',
      'zipCode',
      'location',
      'country'
    ];

    // Fields
    const formFields = [
      {
        id: 'role',
        controlType: 'select',
        options: _.filter(userRoles, (role) => !role.hidden),
        props: {
          name: 'role',
          required: true,
          label: 'Choose Your Role',
          onChange: onChangeRole,
          value: role
        }
      },
      {
        id: 'firstName',
        controlType: 'text',
        props: {
          name: 'firstName',
          value: details.firstName,
          label: 'First Name',
          required: true
        }
      },
      {
        id: 'lastName',
        controlType: 'text',
        props: {
          name: 'lastName',
          value: details.lastName,
          label: 'Last Name',
          required: true
        }
      },
      {
        id: 'mobileNumber',
        controlType: 'text',
        props: {
          name: 'mobileNumber',
          value: details.mobileNumber,
          label: 'Mobile Number',
          required: true
        }
      },
      {
        id: 'emailAddress',
        controlType: 'text',
        props: {
          name: 'emailAddress',
          value: details.emailAddress,
          label: 'Email Address',
          required: true
        }
      },
      {
        id: 'dateOfBirth',
        controlType: 'date',
        props: {
          name: 'dateOfBirth',
          value: details.dateOfBirth,
          label: 'Date of Birth'
        }
      },
      {
        id: 'gender',
        controlType: 'select',
        options: _.filter(genders, (gender) => !gender.hidden),
        props: {
          name: 'gender',
          label: 'Gender',
          onChange: onChangeGender,
          required: true,
          value: gender
        }
      },
      {
        id: 'practiceName',
        controlType: 'text',
        props: {
          name: 'practiceName',
          value: details.practiceName,
          label: 'Practice Name',
          required: true
        }
      },
      {
        id: 'taxId',
        controlType: 'text',
        props: {
          name: 'taxId',
          value: details.taxId,
          label: 'Tax ID',
          required: true
        }
      },
      {
        id: 'providerName',
        controlType: 'text',
        props: {
          name: 'providerName',
          value: details.providerName,
          label: 'Provider Name'
        }
      },
      {
        id: 'npiNumber',
        controlType: 'text',
        props: {
          maxLength: 11,
          name: 'npiNumber',
          value: details.npiNumber,
          label: 'NPI #',
          required: true
        }
      },
      {
        id: 'address',
        controlType: 'text',
        props: {
          name: 'address',
          value: details.address,
          label: 'Address',
          required: true
        }
      },
      {
        id: 'zipCode',
        controlType: 'text',
        props: {
          name: 'zipCode',
          value: details.zipCode,
          label: 'ZIP Code',
          required: true
        }
      },
      {
        id: 'location',
        controlType: 'select',
        options: locations,
        props: {
          name: 'location',
          label: 'Location',
          onChange: onChangeLocation,
          value: location,
          required: true
        }
      },
      {
        id: 'country',
        controlType: 'select',
        options: _.filter(countries, (country) => !country.hidden),
        props: {
          name: 'country',
          label: 'Country',
          onChange: onChangeCountry,
          value: country,
          required: true
        }
      }
    ];

    let currentRoleFields;

    if (_.isEqual(userRoles.dentalOffice.id, role)) {
      currentRoleFields = dentalOfficeFormFields;
    }
    if (_.isEqual(userRoles.insuranceAgent.id, role)) {
      currentRoleFields = insuranceAgentFormFields;
    }

    return _.map(formFields, (field) => {
      if (!_.includes(currentRoleFields, field.id)) {
        return null;
      }

      const key = `SignUpFormField${field.id}`;

      if (_.isEqual(field.controlType, 'text')) {
        return (
          <Grid item key={key} xs={6}>
            <TextField
              {...field.props}
              variant="outlined"
              disabled={isSigningUp}
              onChange={onChangeText}
              fullWidth
            />
          </Grid>
        );
      }

      if (_.isEqual(field.controlType, 'select')) {
        return (
          <Grid item key={key} xs={6}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel>{field.props.label}</InputLabel>
              <Select disabled={isSigningUp} {...field.props}>
                {_.map(field.options, (option) => (
                  <MenuItem key={`${key}MenuItem${option.id}`} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      }

      if (_.isEqual(field.controlType, 'date')) {
        return (
          <Grid item key={key} xs={6}>
            <TextField
              {...field.props}
              type="date"
              variant="outlined"
              disabled={isSigningUp}
              onChange={onChangeText}
              InputLabelProps={{
                shrink: true
              }}
              fullWidth
            />
          </Grid>
        );
      }

      return null;
    });
  };

  useEffect(() => {
    // Get Locations
    getLocations();

    // Reset State
    resetState();
  }, []);

  if (isSignedUp) {
    return (
      <Container component="main">
        <CssBaseline />

        {/* Wrapper */}
        <div className={styles.wrapper}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          {/* Form */}
          <div className={styles.formWrapper}>
            {/* Header */}
            <div className={styles.formHeader}>
              <Typography>Done!</Typography>
              <Typography>We have sent you an email with your login credentials</Typography>
            </div>

            <div className={styles.formElement}>
              <Button
                type="button"
                variant="contained"
                className={styles.submit}
                onClick={onBackToLogin}
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  const canSubmit =
    !_.isEmpty(details.firstName) &&
    !_.isEmpty(details.lastName) &&
    !_.isEmpty(details.mobileNumber) &&
    !_.isEmpty(details.emailAddress) &&
    !_.isEmpty(details.practiceName) &&
    !_.isEmpty(details.taxId) &&
    !_.isEmpty(details.npiNumber) &&
    !_.isEmpty(details.address) &&
    !_.isEmpty(details.zipCode) &&
    hasAgreedToTerms &&
    location &&
    country;

  return (
    <Container component="main">
      <CssBaseline />

      {/* Wrapper */}
      <div className={styles.wrapper}>
        {/* Form */}
        <div className={styles.formWrapper}>
          {/* Header */}
          <div className={styles.formHeader}>
            <Typography>Create an Account</Typography>
          </div>

          {/* Fields */}
          <Grid container spacing={2}>
            {renderFormFields()}
          </Grid>

          {/* Terms of Use */}
          <div className={styles.formElement}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasAgreedToTerms}
                  onChange={onCheckTermsOfUse}
                  name="hasAgreedToTerms"
                  color="primary"
                />
              }
              label={
                <span>
                  I agree to the{' '}
                  <a target="_blank" href="/documents/div-terms-of-use.pdf">
                    Terms of Use
                  </a>
                  .
                </span>
              }
            />
          </div>

          {/* Buttons */}
          <div className={styles.formElement}>
            <Button
              type="button"
              color="primary"
              variant="contained"
              disabled={!canSubmit}
              className={styles.submit}
              onClick={onSignUp}
              fullWidth
            >
              Create Account
            </Button>
          </div>
          <div className={styles.formElement}>
            <Button
              type="button"
              variant="contained"
              className={styles.submit}
              onClick={onBackToLogin}
              fullWidth
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Prop Types
SignUp.propTypes = {
  onShowLoginForm: PropTypes.func.isRequired
};

// Exports
export default SignUp;
