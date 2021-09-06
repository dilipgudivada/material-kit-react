// import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, Grid } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  // const navigate = useNavigate();


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
  return (
    <div>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {renderFormFields()}
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading>
          Register
        </LoadingButton>
      </Stack>
    </div>
  );
}
