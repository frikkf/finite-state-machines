import React from "react";
import { Fab, Icon, Grid } from "@material-ui/core";

const Controller = ({ nextEvents, send }) => (
  <Grid container justify="space-evenly" spacing={24}>
    {nextEvents.map((event, index) => (
      <Grid key={index} item>
        <ActionButton event={event} send={send} />
      </Grid>
    ))}
  </Grid>
);

const iconMapper = iconKey => {
  const map = {
    play: "play_arrow"
  };
  return map[iconKey] ? map[iconKey] : iconKey;
};

const ActionButton = ({ event, send }) => (
  <Fab color="primary" onClick={() => send(event)}>
    <Icon>{iconMapper(event)}</Icon>
  </Fab>
);

export default Controller;
