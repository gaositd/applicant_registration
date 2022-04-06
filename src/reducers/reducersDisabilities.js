const initialState = {
  allDisabilities:[],
  allMaritalStatus:[],
  allStates:[],
  allGenders: [],
  allMunicipalities:[],
};
const{
  GET_DISABILITY, GET_MARITALSTATUS,
  GET_STATES, GET_GENDERS, GET_MUNICIPALITIES
} = require('../constants/constants.js');

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
        case GET_STATES:
          return {
            ...state,
            allStates: action.payload,
          }
        case GET_GENDERS:
          return {
            ...state,
            allGenders: action.payload,
          }
        case GET_MUNICIPALITIES:
          return{
            ...state,
            allMunicipalities:action.payload,
          }
    default:
      return {...state}
  }
}
