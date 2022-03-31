import React, { Fragment } from "react";
// import axios from "axios";

import { 
  SERVER_DIR,
  ERROR_SERVER,
  DISABILITY,
  MEXICAN_STATE,
  MUNICIPAL,
} from '../constants/constants.js';

export function OptionReact(typeSelect){

  function getOptionType(option){
    switch(option.type){
      case DISABILITY:
        return DISABILITY;
      case MEXICAN_STATE:
        return MEXICAN_STATE;
      case MUNICIPAL:
        return MUNICIPAL;
      default:
        return ERROR_SERVER;
    }
  }

  const getDisabilities = function(typeSelect){
    const typeOption = getOptionType(typeSelect);
    let options = [];

    fetch(`${SERVER_DIR}${typeOption}/`)
      .then(res => res.json())
      .then(data =>{
        // options = data.map(opt => options.push(opt));
        // options = data.map(opt => options.push(<option key={opt.id} id={opt.id} value={opt.id}>{opt.description}</option>));
        for(let i = 0; i < data.length; i++){
          options.push(data[i]);
        }
      })
      .catch(function(error){
        options.push({msg: error.message});
      });
      return options;
  }
 
  const displayOption = getDisabilities(typeSelect);
  return(
    <Fragment>
      <p>displayOption[0] </p>
      <select key={typeSelect.type} id={typeSelect.type} name={typeSelect.type} className="form-select" required>
        {
          // displayOption.forEach(dos => {
          //   return <option key={dos.id} id={dos.id} value={dos.id}>{dos.description}</option>
          // })
          // displayOption.forEach(dos => { console.log(dos) })
          displayOption.map(dos => <option key={dos.id} id={dos.id} value={dos.id}>{dos.description}</option> )
          // https://scriptverse.academy/tutorials/reactjs-select.html
        }
      </select>
    </Fragment>
  );
}