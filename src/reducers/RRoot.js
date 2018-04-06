// import { ACTION_TYPES, TOTAL_DONATION } from '../helpers';

const initialState = {
  donate: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "XXXX":
      return Object.assign({}, state, {
        
      });
    default: return state;
  }
}
