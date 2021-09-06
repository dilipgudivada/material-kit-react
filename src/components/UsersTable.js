import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UserFormDialog from './UserFormDialog';

const  roles = [{id: 99, roleName: "Administrator"}, {id:1, roleName: "Dental Office"}, { id: 2, roleName: 'Agent'}];


function roleName(value) {
  let results = [];
  roles.forEach((item) => {
    if(item.id.toString() === value.toString()) {
       results.push(<div>{item.roleName}</div>);
    }
  });
  return results;
}
const columns = [
  { id: 'username', label: 'username', align: 'left' },
  {
    id: 'firstName',
    label: 'First Name',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'lastName',
    label: 'Last Name',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'mobileNumber',
    label: 'Mobile Number',
    align: 'left',
    format: (value) => value,
  },
  {
    id: 'emailAddress',
    label: 'Email Address',
    align: 'left',
    format: (value) => value,
  },
  {
    id: 'gender',
    label: 'Gender',
    align: 'left',
    format: (value) => value,
  },
  {
    id: 'role',
    label: 'Role',
    align: 'left',
    format: (value) => {return <div>{roleName(value)}</div>},
  }
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 500,
  },
  container: {
    maxHeight: "100%",
  },
});

export default function UsersTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [isRowSelected, setisRowSelected] = React.useState(false);
  const [selectedRow, setselectedRow] = React.useState({});
  const emptyDataFields = {  
      "username": null,
      "firstName": null,
      "lastName": null,
      "password": null,
      "mobileNumber": null,
      "emailAddress": null,
      "gender": null,
      "dateOfBirth": null,
      "role": null,
      "locationId": null,
      "city": null,
      "country": null,
    };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setselectedRow({})
    setisRowSelected(false);
    props.setUpdatePage(!props.updatePage)
  };
 
  const rows = props.allUsers.allUsers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
const onRowClcik=(row)=>{
  setselectedRow(row)
  setOpen(true);
  setisRowSelected(true);
}
  return (
    <Paper className={classes.root}>
     
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={()=>onRowClcik(row)} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          
        </Table>
        <TablePagination
        style={{ position: 'relative', bottom : 0}}
        rowsnperpageoptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </TableContainer>
    
      <AddCircleIcon style={{ 
        fontSize: 50,
         position:"fixed",
    top: 100,
    left:"95%",
    color:"#3f9fb5",
    zIndex: 2
    }}
    onClick={()=>handleClickOpen()}/>
    {isRowSelected?<UserFormDialog open={open} handleClose={handleClose} allUsers={selectedRow} EditUser= {isRowSelected}/>:
    <UserFormDialog open={open} handleClose={handleClose} allUsers={emptyDataFields} EditUser ={isRowSelected} locations={props.locations}/>}
    
    </Paper>
  );
}
