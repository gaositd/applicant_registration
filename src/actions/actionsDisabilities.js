import axios from "axios";
import {
  DISABILITY, SERVER_DIR,
  ERROR_SERVER, GET_DISABILITY
} from '../constants/constants';

export function getDisabilities(){
  return function(dispatch){
    const disability = axios.get(`${SERVER_DIR}${DISABILITY}`)
      .then(res => 
        dispatch({type:GET_DISABILITY, payload:res.data}))
      .catch((error)=>({type:GET_DISABILITY, payload:`${ERROR_SERVER} ${error}`}));
  }
}