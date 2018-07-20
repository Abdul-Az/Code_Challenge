import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Navbar from './Nav-bar';



class Fordevelopers extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Grid>
          <Cell rows={4}>
            {/* <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Fordevelopers;
