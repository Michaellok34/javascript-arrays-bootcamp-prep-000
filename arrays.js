var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  
  const moreArray =[element, ...array]
  
  array.unshift(element);
  
  return moreArray;


} 