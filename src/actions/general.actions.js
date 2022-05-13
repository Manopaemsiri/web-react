import { TOPNAV_ACTIVE_INDEX } from './types';


// Topnav
export const setTopnavActiveIndex = (index) => (dispatch) => {
  dispatch({
    type: TOPNAV_ACTIVE_INDEX,
    payload: index
  });
  return true;
};
