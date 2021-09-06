import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DynamicForm } from '../DynamicForm/DynamicForm';
import { insuranceBreakDownFields} from "../../Constants/insurance";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '20px 0px',
    border: '2px solid grey'
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const InsuranceBreakDown = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Insurance Breakdown</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <DynamicForm definition={insuranceBreakDownFields} data={props.data} handleChange={props.handleChange}/>
        </AccordionDetails>
      </Accordion>
    </div>

  )
}

export default InsuranceBreakDown;