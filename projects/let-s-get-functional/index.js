// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require(`underbar`);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./josh-roberts.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.reduce(array, function(accumalator, current){
        if(current.gender === 'male'){
             accumalator += 1;
             let filtered = filter(persons, (p) => p.age < 30);
        }
                return accumalator;
    }, 0);
        return males;
    };




var femaleCount = function(array) {
    let females = _.reduce(array, function(accumalator, current){
        if(current.gender === 'female'){
             accumalator += 1;
             let filtered = filter(persons, (p) => p.age < 30);
        }
                return accumalator;
    }, 0);
        return females;
    };


var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumalator, current){
    });
        return oldest.name;
};

var youngestCustomer = function(array){
    let yougest = _.reduce(array, function(accumalator, current){
    });
        return youngest.name;
};

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount = function(array, customer, letter){
    let names = _.filter(array, function(obj){
        if(customer['friends']){
            return customer['friends'];
        }
            return obj.names === customer;
    });
        return names.length;
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
