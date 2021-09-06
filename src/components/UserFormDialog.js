import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import UserForm from './UserForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserFormDialog(props) {
  return (
      <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
       <UserForm props={props}/>:
      </Dialog>
  );
}