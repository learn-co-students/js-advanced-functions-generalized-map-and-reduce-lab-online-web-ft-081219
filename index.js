function map(array, mappingFn) {
  let holderArr = [];
  for (const element of array) {
    holderArr.push(mappingFn(element));
  };
  return holderArr;
}

function reduce(sourceArray, reducingFn, startingVal) {
  let runningTotal = startingVal || true;
  for (const element of sourceArray) {
    runningTotal = reducingFn(element, runningTotal);
  }
  
  if (typeof runningTotal == 'number' && startingVal == undefined) {
    runningTotal --;
  }
  return runningTotal;
}