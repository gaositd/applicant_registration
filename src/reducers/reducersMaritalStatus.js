const initialState = {
  allMaritalStatus:[],
};
const{ GET_MARITALSTATUS } = require('../constants/constants.js');

export default (state = initialState, action) => {
  
  switch (action.type) {
    case GET_MARITALSTATUS:
      return {
        ...state,
        allMaritalStatus: action.payload,
      }
    default:
      return {...state}
  }
}