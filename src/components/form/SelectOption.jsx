import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMaritalStatus } from "../../actions/actionsMaritalStatus.js";
import { getDisabilities } from "../../actions/actionsDisabilities.js";
import { getStates } from "../../actions/actionsStates.js";
import { getGenders } from "../../actions/actionsGenders";
import { getMunicipalities } from "../../actions/actionsMunicipalities.js";
import {  DISABILITY, MARITAL_STATUS, BIRTHSTATE, SCHOOLSTATE, GENDERS,
  SCHOOLMUNICIPAL, BIRTHMINICIPAL } from '../../constants/constants.js';

let idState;
function handleIdState(event){
  console.log(idState = event.target.options[event.target.options.selectedIndex]);
  idState = event.target.options[event.target.options.selectedIndex];
}

export function OptionReact(typeSelect){
  const [select, setSelect] = useState('');

  let options;
  let dispatch = useDispatch();//dispatch for all

  const maritalStatus = useSelector(state => state.allMaritalStatus);
  useEffect(()=> dispatch(getMaritalStatus()),[]);
 
  const gender = useSelector(state => state.allGenders);
  useEffect(()=> dispatch(getGenders()),[])

  const birthState = useSelector(state => state.allStates);
  useEffect(()=> dispatch(getStates()),[]);

  const disabilities = useSelector(state => state.allDisabilities);
  useEffect(()=> dispatch(getDisabilities()),[]);
  
  const municipalities = useSelector(state => state.allMunicipalities);
  useEffect(()=>{
    if(typeSelect.stateId) dispatch(getMunicipalities(idState));
  },[]);

  if(typeSelect.type === MARITAL_STATUS){
    options = maritalStatus;
  }else if(typeSelect.type === GENDERS){
    options = gender;
  }else if(typeSelect.type === BIRTHSTATE || typeSelect.type === SCHOOLSTATE){
    options = birthState;
  }else if(typeSelect.type === DISABILITY){
    options = disabilities
  }else if(typeSelect.type === SCHOOLMUNICIPAL){
    options = municipalities;
  }else if(typeSelect.type === BIRTHMINICIPAL){
    options = municipalities;
  }
  return(
    <select key={typeSelect.type} id={typeSelect.type} name={typeSelect.type} className="form-select" onChange={handleIdState} >
      { options && options.map(optn => <option key={optn.id} id={optn.id} value={optn.description}>{optn.description}</option>) }
    </select>
  );
}