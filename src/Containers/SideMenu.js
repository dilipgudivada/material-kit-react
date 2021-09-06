import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import logoPng from '../images/logodiv.png';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  topMenu:{
    height: "100px"
  },  
  menuicon:{
    margin: "16px",
    color: "white",
    fontSize: 36
  },
  insurenceHeading:{
    position: "absolute",
    top: -10,
    left: 80,
    color: "white"
  },
  logo:{
    top:"0% !importent" 
  },
  logout:{
    "position":"fixed","bottom":"3%","left":"1%"
  },
  logoDiv: {
    content: `url(${logoPng})`,
    width: "200px",
    height: "120px",

}
});

export default function SideMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const menus = [
    { menuName: 'Dashboard', icon: <PeopleIcon /> },
    { menuName: 'Insurance', icon: <PeopleIcon /> },
    { menuName: 'Report', icon: <AssignmentIcon /> },
    {menuName: 'Change Password', icon: <VpnKeyIcon />}
  ];

    if(props?.user?.role === 99) {
      menus.push({menuName:'Users', icon: <AssignmentIcon/>});
    }
const handleLogout =() =>{
  localStorage.setItem("isUserLoggedIn", false);
  window.location.href = '/';
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });  };
  

  const list = (anchor) => (
    
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <hr/>
        {menus.map((menu) => (
          <ListItem button key={menu.menuName} onClick={()=>props.handleMenu(menu.menuName)}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.menuName} />
          </ListItem>
        ))}
        <ListItem button onClick={()=>handleLogout()}>
        <ListItemIcon><ExitToAppIcon/></ListItemIcon>
        <ListItemText primary={"Logout"} />
        </ListItem>
      </List>
      
    </div>
  );

  return (
    <div className={classes.topMenu}>
        <React.Fragment >
        
          <MenuIcon onClick={toggleDrawer('left', true) } className={classes.menuicon}/>          
          <h1 className={classes.insurenceHeading}>{props.heading}</h1>
          {props.user ? <h3 style={{float: "right",
    position: "relative",
    color: "#fff",
    fontSize: 30,
    bottom: 20, right: 20}}>{props.user.firstName + ' ' + props.user.lastName}</h3>  : null}

          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          <div className={classes.logoDiv} />
            
            {list('left')}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}
