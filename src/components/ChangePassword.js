import React from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify"; 
import changePasswordApi from "../Services/changepassword.service";

const ChangePassword = () => {
  const [values, setValues] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [ isLoading, setIsLoading] = React.useState(false);
  const userId = localStorage.getItem("usr");
  const handelChange = (e) => {
    const updateValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(updateValues);
  };

  const handleSubmit = () => {
      if(values.newPassword !== values.confirmPassword) {
          toast.error("Please enter same password for both fields")
      } else {
        setIsLoading(true);
          changePasswordApi(userId, values.newPassword).then (response => {
            setIsLoading(false);
            if(response.message) {
                toast.error(response.message);
            } else {
                toast.success("Success");
            }
          });
      }
  }
  return (
      <div style={{ width: "100%", height: "100%", background: "white", textAlign: 'center'}}>
        <h1 style={{ margin: "20px 20px"}}>Change Password</h1>
        <div style={{ width: 400, margin: "30px 35%"}}> 
        <TextField
          required
          id="newPassword"
          name="newPassword"
          label="New Password"
          fullWidth
          autoComplete="New Password"
          type="password"
          value={values.newPassword}
          onChange={handelChange}
        />
        <TextField
          required
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          fullWidth
          autoComplete="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handelChange}
        />
        </div>
        {isLoading ?<div> <CircularProgress /> </div>: null}  
         <Button color="primary" variant="contained" style={{ margin: "10px 5%", width: 400}} onClick={handleSubmit}>Submit</Button>

      </div>
  );
};

export default ChangePassword;
