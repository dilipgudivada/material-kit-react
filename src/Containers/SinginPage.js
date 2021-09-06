import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoimage from "../images/divimage.jpg";
import logoapp from "../images/logoApp.png"
import Login from "../Components/Login";
import { SignUp } from '../Components/SignUp';

const useStyles = makeStyles((theme) => ({
  image: {
    content: `url(${logoimage})`,
    display: 'inline-block',
    height: '100vh',
    position: 'relative',
    left: 0,
    width: '50%'
  },
  logo:{
    content: `url(${logoapp})`,
    height: 300,
    width: "28%",
    position: "fixed",
    top: 0,
    zIndex: 0,
    left: 50,
    display: 'none'
  },
  signin: {
    width: '50%',
    display: 'inline-block',
    height: '100vh',
    position: 'absolute',
    overflow: 'auto',
  }
}));

export default function SigninPage() {
  const [ isLoginPage, setIsLoginPage] = React.useState(true);

  const classes = useStyles();
  const handleShowSignUp = () => {
    setIsLoginPage(false);
  }

  const handleShowLogin = () => {
    setIsLoginPage(true);
  }

  return (
    <div style={{ width: '100%', height: '100%'}}>
      <div className={classes.logo} />
      <div className={classes.image} />
      <div className={classes.signin}>
       { isLoginPage ? <Login onShowSignUpForm={handleShowSignUp}/> : <SignUp onShowLoginForm={handleShowLogin}/>} 
      </div>
    </div>
  );
}

