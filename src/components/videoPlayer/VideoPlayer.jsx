import React from "react";
import { Grid } from "@material-ui/core";
import { useMachine } from "../../util/UseMachine";
import { videoMachine } from "../../util/VideoMachine";
import Controller from "./Controller";

const VideoPlayer = () => {
  
  const [current, send] = useMachine(videoMachine);

  const State = ({ state }) => <h1>{state}</h1>;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={24}
      direction="column"
    >
      <Grid item>
        <State state={current.value} />
      </Grid>
      <Grid item>
        <Controller send={send} nextEvents={current.nextEvents} />
      </Grid>
    </Grid>
  );
};
export default VideoPlayer;
