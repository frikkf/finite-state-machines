import { Machine } from 'xstate';

// This machine is completely decoupled from React
export const videoMachine = Machine({
  id: 'video',
  initial: 'idle',
  states: {
    idle: {
      on: { play: 'playing' }
    },
    playing: {
      on: { 
        pause: 'paused',
        stop: 'idle'
      }
    },
    paused: {
      on: { 
        play: 'playing',
        stop: 'idle'
      }
    }
  }
});