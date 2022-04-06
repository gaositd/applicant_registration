import {
  MUNICIPAL, SERVER_DIR,
  ERROR_SERVER, GET_MUNICIPALITIES
} from '../constants/constants';

export function getMunicipalities(id_state){
  return function(dispatch){
    const municipalities = fetch(`${SERVER_DIR}${MUNICIPAL}/${id_state}`)
      .then(res => dispatch({
        type:GET_MUNICIPALITIES,
        payload:res.data,
      }))
      .catch(error =>({
        type:GET_MUNICIPALITIES,
        payload:`${ERROR_SERVER} ${error}`
      }));
  }
}