import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMaritalStatus } from "../../actions/actionsMaritalStatus.js";
import { getDisabilities } from "../../actions/actionsDisabilities.js";
import {
  // ERROR_SERVER,
  // DISABILITY,
  // MARITAL_STATUS,
  // MEXICAN_STATE,
  // MUNICIPAL,
} from '../../constants/constants.js';

let options;
export function OptionReact(typeSelect){
  let options;

  let dispatch = useDispatch(getMaritalStatus());
  const maritalStatus = useSelector(state => state.allMaritalStatus);
  useEffect(()=>{ 
    dispatch(getMaritalStatus());
  },[]);
  options = maritalStatus;

  dispatch = useDispatch(getDisabilities());
  const disabilities = useSelector(state => state.allDisabilities);
  useEffect(()=>{ 
    dispatch(getDisabilities());
  },[]);
  options = disabilities;

  return(
      <select key={typeSelect.type} id={typeSelect.type} name={typeSelect.type} className="form-select" required>
      {
        // disabilities && disabilities.map(dos => <option key={dos.id} id={dos.id} value={dos.id}>{dos.description}</option>)
        options && options.map(dos => <option key={dos.id} id={dos.id} value={dos.id}>{dos.description}</option>)
      }
    </select>
);
}