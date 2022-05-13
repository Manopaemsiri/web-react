import {
  TOPNAV_ACTIVE_INDEX
} from '../actions/types';

const initialState = {
  topnavActiveIndex: 0,
};

const generalReducer = (state = initialState, action) => {
  switch(action.type) {

    case TOPNAV_ACTIVE_INDEX:
      return {...state, topnavActiveIndex: action.payload };

    default:
      return state;
  }
};

export default generalReducer;