/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    for (var i = 0; i < array.length; i++){
        if(array[i].name === string){
            return array[i];
        }
    } 
    return null;   
}


//search

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    let index;
    // loop over aniamls array
     for (var i = 0; i < animals.length; i++){
        //if name isnt in animals array
       if(name !== animals[i]){
        //return array
        return animals;
       }else{//else push the index of the name that matches 
        index = animals.indexOf(animals[i])
       }
     }
        //return animals array with the index removed
        return animals.splice(index, 1);
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    var match = [];
    for(var i = 0; i < animals.length; i++){
    // if-animal doesnt match animals.name
    if(animal.name === animals[i].name){
        match.push(animals[i]);
    } 
}
        if (match.length === 0 && animal.name.length > 0 && animal.species.length > 0){
             return animals.push(animal);
        }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
