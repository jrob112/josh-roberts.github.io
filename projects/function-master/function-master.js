//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // return values of an object as an array
        return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // return keys of an object  as a string joined with a space
        return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //init a variable to hold value as an array
   var keepArray = [];
   // for in loop to iterate over object
    for(var key in object){
        //condiontaional statement that compares if an object value is a string
      if(typeof object[key] === 'string'){
        //if true push values to keepArray
         keepArray.push(object[key]);
      }
    }//return keepArray joined with a space
    return keepArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true){
        return 'array'
    }else{
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split the above string into an array of strings 
//whenever a blank space is encountered

const arr = string.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
    return str2;

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // init newName to hold value of object['name'] and capitalize the first character
    let newName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    // return Welcome + newName!
    return 'Welcome ' + newName + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let newName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    let newSpecies = object['species'].charAt(0).toUpperCase() + object['species'].slice(1)
        return  newName + ' is a ' + newSpecies;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// conditional satement compareing if object has key of noises
   if(Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(' ');
    } 
    else {
        return 'there are no noises';
    }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
     object.friends.push(name);
     return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   if(typeof object.friends === 'object' && object.friends.includes(name)){
    return true;
   }else {
    return false;
   }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var list = [];
    var result = [];
    var current = null;
    for(var i = 0; i < array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            list.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i = 0; i < list.length; i++){
        if(current.friends.indexOf(list[i]) == -1){
            result.push(list[i]);
        }
    }

    return result;

}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //if an object has a key value of 'key'
        //update the value
     object[key] = value;
     return object;
 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // loop over array
    for (var i = 0; i < array.length; i++){
           // remove the property
            delete object[array[i]];
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //init variable with empty array to store each value
    let each = [];
    //for loop to iterate over array
    for (i = 0; i < array.length; i++) {
        //conditional statement that comapares 
        if (each.indexOf(array[i]) === -1) {
            each.push(array[i]);
        }
    }
    return each;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}