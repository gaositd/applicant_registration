const initialState = {
  allDisabilities:[],
};
const{ GET_DISABILITY } = require('../constants/constants.js');

export default (state = initialState, action) => {
  
  switch (action.type) {
    case GET_DISABILITY:
      return {
        ...state,
        allDisabilities: action.payload,
      }
    default:
      return {...state}
  }
}