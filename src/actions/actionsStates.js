import axios from "axios";
import {
  MEXICAN_STATE, SERVER_DIR,
  ERROR_SERVER, GET_STATES,
} from '../constants/constants';

export function getStates(){
  return function(dispatch){
    const mexicanStates = axios.get(`${SERVER_DIR}${MEXICAN_STATE}`)
          .then(res =>{ dispatch({
              type:GET_STATES,
              payload:res.data
            })
          })
          .catch((error)=>({type:GET_STATES, payload:`${ERROR_SERVER} ${error}`}));
  }
}
/*
export function getDisabilities(){
  return function(dispatch){
    const disability = axios.get(`${SERVER_DIR}${DISABILITY}`)
                .then(res => 
                  dispatch({type:GET_DISABILITY, payload:res.data}))
                .catch((error)=>({type:GET_DISABILITY, payload:`${ERROR_SERVER} ${error}`}));
  }
}
*/