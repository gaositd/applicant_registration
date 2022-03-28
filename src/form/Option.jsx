import React from "react";
import { 
  SERVER_DIR,
  ERROR_SERVER,
  DISABILITY,
  MEXICAN_STATE,
  MUNICIPAL,
} from '../constants/constants.js';

export function OptionReact(typeSelect){

  function getOptionType(option){

    switch(option){
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

  function getDisabilities(typeSelect){

    const typeOption = getOptionType(typeSelect);
    // console.log(typeOption);
    const disabilities = fetch(`${SERVER_DIR}${typeOption}/`)
      .then(res => res.json())
      .then(data =>{console.log(data)})
      .catch(function(error){
        return {msg: error.message};
      });

      return disabilities;
  }

  const displayOption = getDisabilities(typeSelect);
  return(
    <div>
      { console.log(displayOption) }
    </div>
  );
}