import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dash from './dash';
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

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  }
];

class Profile extends React.Component {
  state = {
    gender: 'male',
  };

  handleChange = name => event => {
    this.setState({

      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dash />
        <div className="margin-top-50">
          <div className="container" style={{ boxSizing: 'border-box', borderStyle: 'ridge', width: '885px' }}>
            <div className="row legend">
              <span style={{ fontSize: '15px', marginLeft: '2px' }}>Profile</span>
            </div>
            <div className="row">
              <div className="container">
                <form className={classes.container} noValidate autoComplete="off">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="First Name"
                        id="margin-normal"
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      /></div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Middle Name"
                        id="margin-normal"
                        className={classes.textField}

                        margin="normal"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Last Name"
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

                    <div className="form-group col-md-4">
                      <TextField
                        id="select-gender"
                        select
                        label="Gender"
                        className={classes.textField}
                        value={this.state.gender}
                        onChange={this.handleChange('gender')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        helperText="Required"
                        margin="normal"
                      >
                        {genders.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
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
                          label="Linkedin"
                          id="margin-normal"
                          className={classes.textField}

                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="GitHub"
                          id="margin-normal"
                          className={classes.textField}

                          margin="normal"
                        />
                      </div>
                    </div>
                    <div className="row legend">
                      <span style={{ fontSize: '15px', marginLeft: '2px' }}>Project</span>
                    </div>
                    <div className="row" style={{ marginLeft: '2px' }}>
                      <div className="form-group">

                        <TextField
                          label="Project"
                          id="margin-normal"
                          className={classes.textField}

                          margin="normal"
                        /><br />
                        <TextField
                          label="Project"
                          id="margin-normal"
                          className={classes.textField}

                          margin="normal"
                        /><br />
                        <TextField
                          label="Project"
                          id="margin-normal"
                          className={classes.textField}

                          margin="normal"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="row legend">
                      <span style={{ fontSize: '15px', marginLeft: '2px' }}>Address</span>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="House-No."
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Street"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Locality"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="City"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Pin-Code"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Country"
                          id="margin-normal"
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div></div>
                  </div>

                </form>
                
            </div>
            
          </div>
          <div className="row legend" style={{color:'white', backgroundColor:'black',display:'flex', justifyContent:'flex-end', fontSize:'15px'}}>
            <Button style={{color:'white'}}>Reset</Button>
                  <Button style={{color:'white'}}>Submit</Button></div>
              </div>
        </div >
        
      </div >
    )
  }
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
