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

  function getDisabilities(typeSelect){
    const typeOption = getOptionType(typeSelect);
    let options = [{}];

    fetch(`${SERVER_DIR}${typeOption}/`)
      .then(res => res.json())
      .then(data =>{
        options.push(data);
        return data
      })
      .catch(function(error){
        options.push({msg: error.message})
        return {msg: error.message};
      });
      console.log("option");
      console.log(options);

      return options;
  }

  const displayOption = getDisabilities(typeSelect);

  return(
    <div>
      {
        // displayOption.forEach(opt => {
        //   <option value={opt.id} id={opt.id}>{opt.description}</option>
        // })
       
      }
    </div>
  );
}