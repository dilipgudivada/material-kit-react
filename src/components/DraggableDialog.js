// Modules
import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

// Pages
import Login from "./Login";
import SignUp from "./SignUp";

// Component
export const AuthDialog = (props) => {
  // State
  const [isLoginFormActive, setIsLoginFormActive] = useState(true);
  const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);

  // On Close
  const onClose = () => {
    props.setOpen(false);
  };

  // On Show Login Form
  const onShowLoginForm = () => {
    setIsLoginFormActive(true);
    setIsSignUpFormActive(false);
  };

  // On Show SignUp Form
  const onShowSignUpForm = () => {
    setIsLoginFormActive(false);
    setIsSignUpFormActive(true);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={onClose}
        aria-labelledby="draggable-dialog-title"
        PaperComponent={(props) => (
          <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
          >
            <Paper {...props} />
          </Draggable>
        )}
      >
        <DialogContent>
          {/* Login */}
          {isLoginFormActive && (
            <div>
              <Login onShowSignUpForm={onShowSignUpForm} />
            </div>
          )}

          {/* Sign Up */}
          {isSignUpFormActive && (
            <div>
              <SignUp onShowLoginForm={onShowLoginForm} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Exports
export default AuthDialog;
