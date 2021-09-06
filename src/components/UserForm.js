import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, InputLabel, Select, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { ServiceCall } from "../Services/Services";
import SaveIcon from "@material-ui/icons/Save";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { GET_USERS } from "../Constants/urlConstants";

export default function UserForm(props) {
  const locations = useSelector((state) => state.locationReducer);
  const loginUserReducer  =useSelector((state) => state.loginUserReducer)
  const [userData, setUserData] = useState(props?.props?.allUsers);
  const [type, setType] = React.useState("");
  const [url, seturl] = React.useState("");
  const handleTextChange = (event) => {
  setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handlesubmit = () => {
    ServiceCall.postService(url, type, userData, loginUserReducer).then((data) => {
      if(data?.username) {
        toast.success("Success");
      } else if(data?.message) {
        toast.error(data.message);
      }
    });
  };
  React.useEffect(() => {
    if (props.props.EditUser) {
      setType("put");
      seturl(`${GET_USERS}/${props.props.allUsers.id}`);
    } else {
      setType("post");
      seturl(`${GET_USERS}` );
    }
  }, [props]);
  return (
    <React.Fragment>
      <AppBar style={{ backgroundColor: "#3f9fb5" }}>
        <Toolbar>
          <Typography variant="h4" gutterBottom>
            {props.props.EditUser ? "Edit user" : "Add User"}
          </Typography>
          <IconButton
            color="inherit"
            onClick={props.props.handleClose}
            aria-label="close"
            style={{ fontSize: 36, position: "absolute", right: 20 }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={3}
        style={{ width: "96%", paddingLeft: 40, marginTop: 65 }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={props?.props?.EditUser}
            id="username"
            label="User Id"
            value={userData["username"]}
            fullWidth
            autoComplete="username"
            name="username"
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={props?.props?.EditUser}
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            type="password"
            value={userData["password"]}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="firstName"
            value={userData["firstName"]}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="lastName"
            value={userData["lastName"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            fullWidth
            autoComplete="mobileNumber"
            value={userData["mobileNumber"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailAddress"
            name="emailAddress"
            label="Email Address"
            fullWidth
            autoComplete="Email Address"
            value={userData["emailAddress"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Select
            name="gender"
            id="gender"
            native
            inputProps={{
              name: "gender",
              id: "gender",
            }}
            fullWidth
            value={userData["gender"]}
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>
              Select
            </option>
            <option value={"M"}>Male</option>
            <option value={"F"}>Female</option>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="dateOfBirth"
            name="dateOfBirth"
            label="dateOfBirth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={userData["dateOfBirth"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="role">Role</InputLabel>
          <Select
            native
            value={userData["role"]}
            inputProps={{
              name: "role",
              id: "role",
            }}
            fullWidth
            required
            name="role"
            autoComplete="role"
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>Select</option>
            <option value={99}>Administrator</option>
            <option value={1}>Dental Office</option>
            <option value={2}>Agent</option>
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="locationId">Location</InputLabel>
          <Select
            native
            value={userData["locationId"]}
            inputProps={{
              name: "locationId",
              id: "locationId",
            }}
            fullWidth
            required
            name="locationId"
            autoComplete="locationId"
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>
              Select
            </option>
            {locations?.data?.length &&
              locations.data.map((item, index) => {
                return (
                  <option key={`${item} + ${index}`} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            native
            value={userData["country"]}
            inputProps={{
              name: "country",
              id: "country",
            }}
            fullWidth
            required
            name="country"
            autoComplete="country"
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>
              Select
            </option>
            <option value={"US"}>US</option>
            <option value={"INDIA"}>INDIA</option>
          </Select>
        </Grid>
      </Grid>

      <br />
      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 20 }}
          onClick={handlesubmit}
        >
          <SaveIcon /> Save
        </Button>

        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: 20 }}
          onClick={props.props.handleClose}
        >
          <CloseIcon /> Cancel
        </Button>
      </div>
    </React.Fragment>
  );
}
