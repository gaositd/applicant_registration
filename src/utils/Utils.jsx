import React from "react";

export function getDates(){
  const date = new Date();
  const currenrtDate = String(date.getDate());
  return currenrtDate;
}
