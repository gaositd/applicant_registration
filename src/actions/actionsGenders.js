import axios from "axios";

import{ GENDERS, SERVER_DIR,
         ERROR_SERVER, GET_GENDERS
} from "../constants/constants.js";

export function getGenders(){
  return function(dispatch){
    const genders = axios.get(`${SERVER_DIR}${GENDERS}`)
      .then(res => dispatch({type:GET_GENDERS, payload:res.data}))
      .catch((error)=>({type:GET_GENDERS, payload:`${ERROR_SERVER} ${error}`}));
  }
}