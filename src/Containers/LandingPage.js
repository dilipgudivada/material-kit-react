import React from 'react';
import SideMenu from './SideMenu';
import MainTable from '../Components/MainTable';
import UsersTable from '../Components/UsersTable';
import Report from './ReportPage';
import Dashboard from "./Dashboard";
import CustomerChat from "../Components/shared/customerChat";
import { GET_USERS,GET_INSURANCES} from "../Constants/urlConstants";
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../Redux/Actions/LocationActions';
import { Toaster } from "../Components/Toaster";
import _ from "lodash";
import ChangePassword from '../Components/ChangePassword';

export default function LandingPage(userDetails) {
  console.log(userDetails);
  const dispatch = useDispatch();
  const loginUserReducer = useSelector(state => state.loginUserReducer)
  const userData = JSON.parse(userDetails?.userDetails);
  const isLockedOut = userData?.user?.isLockedOut;
  const style = {
    height: "100%",
    width:"100%",
    "marginLeft": "0%",
    "marginRight": "0%",
    "paddingLeft": "0px",
    "paddingRight": "0px",
    "backgroundImage": "linear-gradient(269.7deg, #01ADD5 0.26%, #005775 99.4%)",
    "minHeight": "781px"
  };
  const [menu, setMenu] = React.useState(isLockedOut ? "CHANGE PASSWORD" : "DASHBOARD");
  const [user, setuserDetails] = React.useState({});
  const [allUsers,setallUsers] = React.useState({
    allUsers: [],
    usersErrorMessage: "",
    isUserError: false
  });
  const [allInsurances,setallInsurances] = React.useState({
    allInsurances: [],
    insurenceErrorMessage: "",
    isInsuranceError: false
  });


  React.useEffect(() => {
    setuserDetails(loginUserReducer.data.user);
    // eslint-disable-next-line
    getInsurences();
    // eslint-disable-next-line
    getUsers();
    // eslint-disable-next-lineli
    dispatch(getLocations());
    // eslint-disable-next-line
  },[loginUserReducer.data.user]);

  const handleCallRequiredApis = () => {
    getInsurences();
    getUsers();
  }

  const getUsers = () => {
    var url = GET_USERS;
  
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": loginUserReducer?.data?.tokens?.accessToken,
        "X-DentalInsuranceVerification-User": loginUserReducer?.data?.user?.id
      },
    })
      .then((res) => {
          return res.json();
      })
      .then((data) => {
        
        if(data.length) {
         
          setallUsers({...allUsers, isUserError: false, allUsers:data});
        } else if(data.error) {
          setallUsers({...allUsers, isUserError: true, usersErrorMessage: data.message});
        }
      });
  };

  //get All insurences
  const getInsurences = () => {
    const url = GET_INSURANCES;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": loginUserReducer?.data?.tokens?.accessToken,
        "X-DentalInsuranceVerification-User": loginUserReducer?.data?.user?.id
      },
    })
      .then((res) => {
          return res.json();
      })
      .then((data) => {
        
        if(data.length) {
       
          setallInsurances({...allInsurances, isInsuranceError: false, allInsurances:data});
        } else {
          setallInsurances({...allInsurances, isInsuranceError: true, insurenceErrorMessage: data.message});
        }
      });
  };


  // Handle Menu
  const handleMenu = (value) => {
   setMenu(value);
  };

  // Render Page
  const renderPage = (pageName) => {
    switch (_.toUpper(pageName)) {
      case "USERS": {
        return (
          <UsersTable
            setUpdatePage={handleCallRequiredApis}
            user={user}
            allUsers={allUsers}
          />
        );
      }
      case "REPORT": {
        return <Report allInsurances={allInsurances} />;
      }
        
      case "INSURANCE": {
        return (
          <MainTable
            setUpdatePage={handleCallRequiredApis}
            user={user}
            allInsurances={allInsurances}
          />
        );
      }

      case "CHANGE PASSWORD": {
        return (
          <ChangePassword
          />
        );
      }
        
      default: {
        return (
          <Dashboard
            setUpdatePage={handleCallRequiredApis}
            user={user}
            allInsurances={allInsurances}
          />
        );
      }
    }
  }

  return (
    <div style={style}>
        <SideMenu user={user} handleMenu={handleMenu} heading ={menu}/>
          {renderPage(menu)}
      <Toaster />
      
      <CustomerChat />
    </div>
  );
}

