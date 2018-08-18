var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, item){
  return [item, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, item){
  array[0] = item
  return array
}