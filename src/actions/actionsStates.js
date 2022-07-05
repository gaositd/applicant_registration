import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import {
  MEXICAN_STATE, SERVER_DIR, ERROR_SERVER,
  GET_STATES, STATE_ID,
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

export function returnStateId(stateId){
  return function(dispatch){
    dispatch({
      type: STATE_ID,
      payload: stateId
    })
  }
}