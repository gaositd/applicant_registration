import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDisabilities } from "../../actions/actionsDisabilities.js";
import {
  ERROR_SERVER,
  DISABILITY,
  MEXICAN_STATE,
  MUNICIPAL,
} from '../../constants/constants.js';

export function OptionReact(typeSelect){
  const dispatch = useDispatch(getDisabilities());
  const disabilities = useSelector(state => state.allDisabilities);
  
  useEffect(()=>{ 
    dispatch(getDisabilities());
  },[]);
  
  return(
    <select key={typeSelect.type} id={typeSelect.type} name={typeSelect.type} className="form-select" required>
      {
        disabilities && disabilities.map(dos => <option key={dos.id} id={dos.id} value={dos.id}>{dos.description}</option>)
      }
    </select>
);
}