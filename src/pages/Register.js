import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
import logoPng from '../images/divimage.jpg';
// import { SignUp } from '../components/SignUp';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

const ImageDiv = styled('div')(() => ({
  content: `url(${logoPng})`
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | Minimal-UI">
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <ImageDiv />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <RegisterForm />
          {/* <SignUp /> */}
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
