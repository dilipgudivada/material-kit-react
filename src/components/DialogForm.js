import React, { useState } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import GeneralInfo from "./InsuranceForm/GeneralInfo";
import InsuranceInfo from "./InsuranceForm/InsuranceInfo";
import InsuranceVerification from "./InsuranceForm/InsuranceVerification";
import InsuranceHistory from "./InsuranceForm/InsuranceHistory";
import InsuranceBreakDown from "./InsuranceForm/InsuranceBreakDown";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ServiceCall } from "../Services/Services";
import SaveIcon from "@material-ui/icons/Save";
import CheckIcon from '@material-ui/icons/Check';
import { GET_INSURANCES } from "../Constants/urlConstants";
import { generalInfoFields } from "../Constants/insurance";

const DialogForm = (props) => {
  const loginUserReducer = useSelector((state) => state.loginUserReducer);
  const userData = loginUserReducer?.data;
  const [insuranceData, setInsuranceData] = useState(props.allInsurances || {});
  const [type, setType] = React.useState("");
  const [url, seturl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [validationFields, setValidationFields] = React.useState([]);

  React.useEffect(() => {
    if (props.EditInsurance) {
      setType("put");
      seturl(GET_INSURANCES + "/" + props.allInsurances.id);
    } else {
      setType("post");
      seturl(GET_INSURANCES);
    }
  }, [props]);
  const handleChange = (event) => {
    if(event.target.type === 'checkbox') {
      const updateData = {
        ...insuranceData,
        [event.target.name]: event.target.checked
      }
      setInsuranceData(updateData);
    } else {
      const updateData = {
        ...insuranceData,
        [event.target.name]: event.target.value,
      };
      setInsuranceData(updateData);
    }
  };

  const handleSubmit = () => {
    const _validationFields = [];
    generalInfoFields.forEach((field) => {
      if (field.isMandatory) {
        if (!insuranceData[field.id]) {
          _validationFields.push(field.id);
        }
      }
    });
    setValidationFields(_validationFields);

    if (props.EditInsurance && !_validationFields.length) {
      setIsLoading(true);
      const finalData = {
        ...insuranceData,
        UpdatedBy: userData.username,
      };
      ServiceCall.postService(url, type, finalData, loginUserReducer).then(
        (data) => {
          if (data?.PatientID) {
            toast.success("Success");
          } else if (data?.message) {
            toast.error(data.message);
          }
          setIsLoading(false);
        }
      );
    } else if(!_validationFields.length){
      setIsLoading(true);
      const finalData = {
        ...insuranceData,
        LocationId: userData.locationId,
        CreatedBy: userData.username,
        requiresVerification: !userData?.requiresInstantVerification, // normal verification 
      };
      ServiceCall.postService(url, type, finalData, loginUserReducer).then(
        (data) => {
          if (data?.PatientID) {
            toast.success("Success");
          } else if (data?.message) {
            toast.error(data.message);
          }
          setIsLoading(false);
        }
      );
    }
  };

  const handleInstVerify = () => {
    setIsLoading(true);
   
    const apiUrl = GET_INSURANCES + `/${insuranceData?.id}/instant-verify`;
    ServiceCall.postService(apiUrl, "post", {}, loginUserReducer).then(
      (data) => {
       if (data?.message) {
          toast.success(data.message);
        }
        setIsLoading(false);
      }
    );
  }

  const handleVerify = () => {
    setIsLoading(true);
    const apiUrl = GET_INSURANCES + `/${insuranceData?.id}/verify`;
    ServiceCall.postService(apiUrl, "post", {}, loginUserReducer).then(
      (data) => {
        if (data?.message) {
          toast.success(data.message);
        }
        setIsLoading(false);
      }
    );
  }
  return (
    <Dialog fullScreen open={props.open} onClose={props.handleClose}>
      <AppBar style={{ backgroundColor: "#3f9fb5", height: 60 }}>
        <Toolbar>
          <Typography variant="h4" gutterBottom>
            {props.EditInsurance ? (
              <h6> Edit Insurance </h6>
            ) : (
              <h6>Add Insurance</h6>
            )}
          </Typography>
          { props?.EditInsurance && props?.allInsurances?.requiresInstantVerification ?
          <Button
          variant="contained"
          onClick={handleInstVerify}
          style={{ position: "absolute", right: 230, backgroundColor: "#039403", color: "#FFF" }}
        >
          <CheckIcon /> Instant Verified
        </Button>
        :
         <div>{props.EditInsurance ? 
           <Button
           variant="contained"
           onClick={handleVerify}
           style={{ position: "absolute", right: 230, backgroundColor: "#039403", color: "#FFF", bottom: 15 }}
         >
           <CheckIcon /> Verified
         </Button>
         :
         null}       
          </div> }
          

          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            style={{ position: "absolute", right: 130 }}
          >
            <SaveIcon /> Save
          </Button>
          <Button
            color="secondary"
            onClick={props.handleClose}
            aria-label="close"
            variant="contained"
            style={{ position: "absolute", right: 20 }}
          >
            <CloseIcon /> Close
          </Button>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <div style={{ textAlign: "center", width: "100%", marginTop: 60 }}>
          {" "}
          <CircularProgress />
        </div>
      ) : (
        <div style={{ marginTop: 60 }}>
          <GeneralInfo data={insuranceData} handleChange={handleChange} validationFields={validationFields}/>
          {loginUserReducer?.data?.user?.role !== 1 && (
            <div>
              <InsuranceInfo data={insuranceData} handleChange={handleChange} />
              <InsuranceVerification
                data={insuranceData}
                handleChange={handleChange}
              />
              <InsuranceHistory
                data={insuranceData}
                handleChange={handleChange}
              />
              <InsuranceBreakDown
                data={insuranceData}
                handleChange={handleChange}
              />
            </div>
          )}
        </div>
      )}
    </Dialog>
  );
};

export default DialogForm;
