
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
  // init triangles as empty array 
  const triangles = [];
  // for loop to itterate over array
    for(let i = 0; i < triangles.length; i++){
      triangles.push(i);
    }
      //return triangles
        return triangles;
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // for loop starts at 1, ends at but  includes 15, increments 1 
  for(let i = 1; i <= 15 ; i++){
    // conditional statment with multiples of 3 & 5
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    }//conditional statment with multiples of 3
    else if (i % 3 === 0){
      console.log('fizz');
    }// conditional statment with multiples of 5
    else if( i % 5 ===0){
      console.log('buzz')
    }//what to do if not any above condition
    else{
      console.log(i)
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var size = 8;
  // init variable myBoard
  var myBoard = '';
  //for loop that begins at 0, end at 8 and increments 1 that represents the board
  for(let i = 0; i < size; i++){
    // nested for loop that represents the rows
    for(let j = 0; j < 8; j++){
      if ((i + j) % 2 === 0){
          myBoard += '';
      }else {
          myBoard += '#';
      }
    }
  }
      myBoard += '\n'
}
console.log(myBoard);
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
