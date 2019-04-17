import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import VideoPlayer from './components/videoPlayer/VideoPlayer';

class App extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{height: '100vh'}} >
        <Grid item >
          <VideoPlayer />
        </Grid>
      </Grid>
    );
  }
}

export default App;
