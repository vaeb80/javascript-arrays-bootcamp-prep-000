var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, elemnt){
  return [item, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array[0] = item
  return array
}