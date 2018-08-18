import types from '../actionTypes';
import subTypes from '../../sub/state/actionTypes';

const SPEED_MOD = .01;

const initialState = {
  locX: 0, // -1000-1000
  locY: 1, // -1000-1000
  speed: 0, // 0 to 1000
  dir: 0, // 0-359, 0 is north
};

function ships(state = [
  {...initialState, dir: 0, speed: 10, locX: 0, locY: 250},
  {...initialState, dir: 0, speed: 10, locX: 0, locY: 500}
], action) {
  switch(action.type) {
    case types.timeIncremented: {
      const {dir, speed} = action.payload.boat.boat;
      return state.map(ship => ({
        ...ship,
        locX: ship.locX + Math.sin(ship.dir/360*Math.PI*2) * ship.speed * SPEED_MOD - Math.sin(dir/360*Math.PI*2)*speed * SPEED_MOD,
        locY: ship.locY + -1 * Math.cos(ship.dir/360*Math.PI*2) * ship.speed * SPEED_MOD+ Math.cos(dir/360*Math.PI*2)*speed * SPEED_MOD,
      }));
    }

    case subTypes.boatInputReceived: {
      switch(action.payload.type) {
        // when i turn left, actually shift every ship right
        case 'dir-left':
        case 'dir-right': {
          const dirFactor = action.payload.type === 'dir-left' ? -1 : 1;
          return state.map(ship => {
            const dist = Math.pow(ship.locX * ship.locX + ship.locY * ship.locY, .5);
            const ang = Math.atan(ship.locY/ship.locX)+dirFactor*5/360*Math.PI*2;
            return {
              ...ship,
              locX: Math.cos(ang)*dist,
              locY: Math.sin(ang)*dist,
            }
          });
        }
      }
    }
  }
  return state;
}

export default ships;