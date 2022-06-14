import axios from "axios";
import { SERVER_DIR, GET_USER_INFO,
         ERROR_SERVER } from "../constants/constants";

export function getUserInfo(){
  return function(dispatch){
    const userInfo = axios.get(`${SERVER_DIR}auth/login/succes`)
      .then(res => dispatch({
        type: GET_USER_INFO,
        payload:res.data
      }))
      .catch((erro)=>({
        type:GET_USER_INFO,
        payload:`${ERROR_SERVER}`
      }));
  }
}