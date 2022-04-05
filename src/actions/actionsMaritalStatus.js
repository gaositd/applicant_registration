import axios from "axios";
import {
  MARITAL_STATUS, SERVER_DIR,
  ERROR_SERVER, GET_MARITALSTATUS
} from '../constants/constants';

export function getMaritalStatus(){
  return function(dispatch){
    const maritalStatus = axios.get(`${SERVER_DIR}${MARITAL_STATUS}/`)
                .then(res => 
                  dispatch({type:GET_MARITALSTATUS, payload:res.data})
                  )
                .catch((error)=>({type:GET_MARITALSTATUS, payload:`${ERROR_SERVER} ${error}`}));
  }
}