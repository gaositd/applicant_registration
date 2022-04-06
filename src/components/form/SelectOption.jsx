import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMaritalStatus } from "../../actions/actionsMaritalStatus.js";
import { getDisabilities } from "../../actions/actionsDisabilities.js";
import { getStates } from "../../actions/actionsStates.js";
import { getGenders } from "../../actions/actionsGenders";
import {
  DISABILITY, MARITAL_STATUS, BIRTHSTATE, SCHOOLSTATE, GENDERS,
} from '../../constants/constants.js';

export function OptionReact(typeSelect){
  let options;

  let dispatch = useDispatch();//dispatch for all

  const maritalStatus = useSelector(state => state.allMaritalStatus);
  useEffect(()=>{ 
    dispatch(getMaritalStatus());
  },[]);
 
  const gender = useSelector(state => state.allGenders);
  useEffect(()=>{
    dispatch(getGenders());
  },[])

  const birthState = useSelector(state => state.allStates);
  useEffect(()=>{
    dispatch(getStates());
  },[]);

  const disabilities = useSelector(state => state.allDisabilities);
  useEffect(()=>{ 
    dispatch(getDisabilities());
  },[]);

  if(typeSelect.type === MARITAL_STATUS){
    options = maritalStatus;
  }else if(typeSelect.type === GENDERS){
    options = gender;
  }else if(typeSelect.type === BIRTHSTATE || typeSelect.type === SCHOOLSTATE){
    options = birthState;
  }else if(typeSelect.type === DISABILITY){
    options = disabilities
  }

  return(
      <select key={typeSelect.type} id={typeSelect.type} name={typeSelect.type} className="form-select" required>
      {
        options && options.map(dos => <option key={dos.id} id={dos.id} value={dos.id}>{dos.description}</option>)
      }
    </select>
);
}
