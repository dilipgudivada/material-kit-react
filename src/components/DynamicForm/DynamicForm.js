
import React from 'react';
import moment from 'moment';
import { TextField, Checkbox, FormControlLabel, Grid, Switch} from '@material-ui/core';

export const DynamicForm =({ definition, data, handleChange, validationFields = []}) => {
    const renderComponent = [];
        if(definition && definition.length) {
            definition.forEach(element => {
                if(element?.controlType === 'date') {
                    renderComponent.push(
                        <Grid item xs={4}>
                        <TextField
                         id={element.id}
                         name={element.id}
                         label={element?.name}
                         type="date"
                         onChange={handleChange}
                         value={data && data[element.id] ? moment(new Date(data[element.id])).format("YYYY-MM-DD"): ""}
                         variant="outlined"
                         fullWidth
                         InputLabelProps={{
                            shrink: true,
                          }}
                          labelPlacement={element?.name}
                          error ={validationFields.length && validationFields.includes(element.id)}
                          helperText={validationFields.length && validationFields.includes(element.id)? `${element.name} is required field`: ''}
                         />
                         </Grid>
                    )
                } else if (element?.controlType === 'checkbox') {
                    renderComponent.push(
                        <Grid item xs={4}>
                        <FormControlLabel
                        name={element?.id}
                        control={<Checkbox name={element?.id} color="primary" checked={data && data[element?.id]} onChange={handleChange}/>}
                        label={element?.name}
                        labelPlacement={element?.name}
                        fullWidth
                        error ={validationFields.length && validationFields.includes(element.id)}
                        helperText={validationFields.length && validationFields.includes(element.id)? `${element.name} is required field`: ''}
                      />
                      </Grid>
                    )
                }else if (element?.controlType === 'switch') {
                    renderComponent.push(
                        <Grid item xs={4}>
                         <FormControlLabel
                         id={element?.id}
                         name={element?.id}
                         labelPlacement="start"
                         color="primary"
    control={<Switch color="primary" name={element?.id} id={element?.id} checked={data && data[element?.id]} onChange={handleChange} />}
    label={element?.name}
  />
                    </Grid>

                    )
                }else {
                    renderComponent.push(
                        <Grid item xs={4}>
                        <TextField
                         id={element?.id}
                         name={element?.id}
                         label={element?.name}
                         type="text"
                         onChange={handleChange}
                         value={data && data[element.id] ? data[element.id]: null}
                         variant="outlined"
                         fullWidth
                         multiline={element.multiline}
                         error ={validationFields.length && validationFields.includes(element.id)}
                         helperText={validationFields.length && validationFields.includes(element.id)? `${element.name} is required field`: ''}
                         />
                                               </Grid>

                    )
                }
            });
                }


    return  (<Grid container spacing={2}>{renderComponent}</Grid>);

}