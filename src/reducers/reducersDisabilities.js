const initialState = {
  allDisabilities:[],
  allMaritalStatus:[],
};
const{ GET_DISABILITY,GET_MARITALSTATUS } = require('../constants/constants.js');

export default (state = initialState, action) => {
  
  switch (action.type) {
    case GET_DISABILITY:
      return {
        ...state,
        allDisabilities: action.payload,
      }
      case GET_MARITALSTATUS:
        return {
          ...state,
          allMaritalStatus: action.payload,
        }
    default:
      return {...state}
  }
}
