import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from '@material-ui/icons/Visibility';
import ReportForm from "../Components/ReportForm";
const columns = [
  { id: "PatientID", label: "PatientID", align: "left" },
  {
    id: "InsuredName",
    label: "InsuredName",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "InsuredSSN",
    label: "InsuredSSN",

    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "InsuredID",
    label: "InsuredID",

    align: "left",
    format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: 500,
  },
  container: {
    maxHeight: "100%",
  },
});

export default function ReportPage(props) {
  const classes = useStyles();
  const [rowData, setRowData] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);

  const handleViewReport = (row) => {
    setIsOpen(true);
    setRowData(row);
  }

  const handleClose = () => {
    setIsOpen(false);
    setRowData({});
  }
  return (
    <Paper className={classes.root}>
      <ReportForm open={isOpen} data={rowData} handleClose={handleClose}/>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>
                View Report
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.allInsurances.allInsurances.map((row) => {
              return (
                <TableRow hover role="checkbox" key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                      <VisibilityIcon onClick={() => handleViewReport(row)}/>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}