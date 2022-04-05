const initialState = {
  allMaritalStatus:[],
};
const{ GET_MARITALSTATUS } = require('../constants/constants.js');

export default (state = initialState, {type, payload}) => {
  
  debugger;
  switch (type) {
    case GET_MARITALSTATUS:
      return {
        ...state,
        allMaritalStatus: payload,
      }
    default:
      return {...state}
  }
}