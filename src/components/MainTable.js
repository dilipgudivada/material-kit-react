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
import DialogForm from './DialogForm';
import { TextField } from '@material-ui/core';
import { insuranceFormFields } from "../Constants/insurance";

const columns = [
  { id: 'GuestName', label: 'Patient Name', minWidth: 100 },
  {
    id: 'GuestDOB',
    label: 'Patient DOB',
    
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'InsuredName',
    label: 'Insured Name',
    
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'InsuredSSN',
    label: 'Insured SSN',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsuredID',
    label: 'Insured ID',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompany',
    label: 'Insurance Company',
    align: 'left',
    format: (value) => value.toFixed(2),
  },
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

export default function MainTable(props) {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [isRowSelected, setisRowSelected] = React.useState(false);
  const [selectedRow, setselectedRow] = React.useState({});
  const rows = props.allInsurances.allInsurances
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleClickOpen = () => {  
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setselectedRow({});
    setisRowSelected(false);
    props.setUpdatePage(!props.updatePage)
  };
  const onRowClick=(row)=>{
    setselectedRow(row);
    setOpen(true);
    setisRowSelected(true);
  }

  const handleFileUpload = (e,row) => {
    
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
              <TableCell>
                File Upload
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={()=> onRowClick(row)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  <TableCell onclick={(e) => e.stopPropagation()}>
                    <TextField type="file"  variant="filled" onChange={(e) => handleFileUpload(e,row)}/>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <AddCircleIcon style={{ 
        fontSize: 50,
        position:"fixed",
   top: 100,
   left:"95%",
   color:"#3f9fb5",
   zIndex: 2
    }}  
    onClick={()=>handleClickOpen()}/>
    {open && <DialogForm open={open} handleClose={handleClose} allInsurances={isRowSelected ? selectedRow : insuranceFormFields} EditInsurance={isRowSelected}/>}
    </Paper>
  );
}
