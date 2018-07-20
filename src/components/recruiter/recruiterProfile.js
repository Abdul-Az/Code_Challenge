import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RecDash from './rDash';
import { Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});



class RProfile extends React.Component {


  handleChange = name => event => {
    this.setState({

      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <RecDash />
        <div className="margin-top-50">
          <div className="container" style={{ boxSizing: 'border-box', borderStyle: 'ridge', width: '885px' }}>
            <div className="row legend">
              <span style={{ fontSize: '15px', marginLeft: '2px' }}>CompanyName+Profile</span>
            </div>
            <div className="row">
              <div className="container">
                <form className={classes.container} noValidate autoComplete="off">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Company Name"
                        id="margin-normal"
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      /></div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Company Registration No."
                        id="margin-normal"
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Phone"
                        id="margin-normal"
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>                    
                  </div>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Email"
                        id="margin-normal"
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Password"
                        id="margin-normal"
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="Recruiter Name"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>                                        
                    </div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="Company Website"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>                                        
                    </div>
                    
                  </div>

                </form>

              </div>

            </div>
            <div className="row legend" style={{ color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end', fontSize: '15px' }}>
              <Button style={{ color: 'white' }}>Reset</Button>
              <Button style={{ color: 'white' }}>Submit</Button></div>
          </div>
        </div >

      </div >
    )
  }
};

RProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RProfile);
