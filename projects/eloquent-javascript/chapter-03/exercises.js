////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  if(x < y){
    return x;
  }else{
    return y;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  if( n < 0){
    n = isEven(n + 2)
  }else if(n === 1){
    return false
  }else if(n === 0){
    return true;
  }else{
     n = isEven(n-2)
 }
return n;  
}


////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, letter){
    let count = 0;
    for(let i = 0; i < string.length; i++){
      if(string[i] === letter){
        count++
      }
    }
      return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let bCount = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === 'B'){
      bCount++
    }
  }
    return bCount;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
