// @ts-nocheck
import React, { useEffect, /*useState*/ } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMaritalStatus } from "../../actions/actionsMaritalStatus.js";
import { getDisabilities } from "../../actions/actionsDisabilities.js";
import { getStates } from "../../actions/actionsStates.js";
import { getGenders } from "../../actions/actionsGenders";
import { getMunicipalities } from "../../actions/actionsMunicipalities.js";
import {  DISABILITY, MARITAL_STATUS, BIRTHSTATE, SCHOOLSTATE, GENDERS,
  SCHOOLMUNICIPAL, BIRTHMINICIPAL } from '../../constants/constants.js';

let municipal;
let idState;
let municipalities;

function handleChange(id) {
  idState = id;
  municipal = municipalities.filter(municipalitie => {
    if(municipalitie.id_states === parseInt(idState)){
          return municipalitie;
    }
  });
  debugger;
  return municipal;
}
export function OptionReact(typeSelect){

  let options;
  let dispatch = useDispatch();//dispatch for all

  const maritalStatus = useSelector(state => state.allMaritalStatus);
  useEffect(()=> dispatch(getMaritalStatus()),[dispatch]);
 
  const gender = useSelector(state => state.allGenders);
  useEffect(()=> dispatch(getGenders()),[dispatch])

  const birthState = useSelector(state => state.allStates);
  useEffect(()=> dispatch(getStates()),[dispatch]);

  const disabilities = useSelector(state => state.allDisabilities);
  useEffect(()=> dispatch(getDisabilities()),[dispatch]);
  
  // const municipalities = useSelector(state => state.allMunicipalities);
  // useEffect(()=>{
  //   if(typeSelect.stateId) dispatch(getMunicipalities(idState));
  // },[dispatch]);
  municipalities = useSelector(state => state.allMunicipalities);
  useEffect(()=>{dispatch(getMunicipalities(idState));
  },[municipal]);

  if(typeSelect.type === MARITAL_STATUS){
    options = maritalStatus;
  }else if(typeSelect.type === GENDERS){
    options = gender;
  }else if(typeSelect.type === BIRTHSTATE || typeSelect.type === SCHOOLSTATE){
    options = birthState;
  }else if(typeSelect.type === DISABILITY){
    options = disabilities
  }else if(typeSelect.type === SCHOOLMUNICIPAL && idState){
    options = municipalities;
  }else if(typeSelect.type === BIRTHMINICIPAL){
    options = municipal;
  }

  return(
    <select
      key={typeSelect.type}
      id={typeSelect.type}
      name={typeSelect.type}
      className="form-select"
      // onChange={handleIdState}
      onChange={e => handleChange(e.target.value)}
    >
      <option
        id="noOne"
        value="noOne"
      >
      </option>
      { options && options.map(optn =>
        <option
          key={optn.id}
          id={optn.id}
          value={optn.id}
        >
          {optn.description}
        </option>)
      }
    </select>
  );
}