// #!/usr/bin/env node

'use strict';

const { includes, multiply, sum } = require('lodash');
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
    let males = _.filter(array, function(customers){
       return customers.gender === 'male'
    });
    return males.length;
 };




var femaleCount = function(array){
    let females = _.reduce(array, function(accumalator, current){
        if(current.gender === 'female'){
              accumalator += 1;   
        }
        return accumalator;
  }, 0);
    return females;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumalator, current){
        if(current.age > accumalator.age){
            accumalator = current;
        }
         return accumalator;
    }, {age : 0});
        return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumalator, current){
        if(current.age < accumalator.age){
            accumalator = current;
        }
            return accumalator;
        
    });
        return youngest.name;
};

var averageBalance = function(array){
    let total = 0;
    let avg = 0;
    let balances = _.map(array, function(customer){
            return customer.balance.replace(/[$,]/g, '')
    });
        for(let i = 0; i < balances.length; i++){
             total += Number(balances[i]);
        }
         avg = total / balances.length
         return avg;

};



var firstLetterCount = function(array, letter){
    let names = _.filter(array, function(customer){
        if(customer['name'][0].toLowerCase() === letter.toLowerCase()){
            return customer['name'];
        }
            
    });
        return names.length;
};
var friendFirstLetterCount = function(array, customer, letter){
    let names = _.filter(array, function(customer){
        if(customer.friends[0].toLowerCase() === letter.toLowerCase()){
            return customer.friends;
        }
    });
    
        return names.length;
};

var friendsCount = function(array, customer, name){
    let names = _.filter(array, function(obj){
        if(customer['friends'] === name){
            return customer['friends'];
        }
            return obj.name === customer;
    });
        return names.length;
};

var topThreeTags = function(array){

    let commonTags = _.filter(array, function(array){
        let count = arr.reduce(function (value, value2) {
            return (
                value[value2] ? ++value[value2] :(value[value2] = 1),
                value
            );
        }, {});
        return count
    })
        for(let key in commonTags){
            if(commonTags[key]){

            }
        }
};

var genderCount = function(array) {
    let count = {};
   if(array.gender === 'female'){ 
    let females = _.reduce(array, function(accumalator, current){
        if(current.gender === 'female'){ 
             accumalator += 1;
        }
                return accumalator;
    }, 0);
         count['females'] = [females];
    };
    if(array.gender === 'male'){
        let males = _.reduce(array, function(accumalator, current){
            if(current.gender === 'male'){
             accumalator += 1;
        }
                return accumalator;
    }, 0);
         count['males'] = [males];
    };   
    if(array.gender === 'non-binary'){

    let nonBinary = _.reduce(array, function(accumalator, current){
        if(current.gender === 'non-binary'){
             accumalator += 1;
        }
                return accumalator;
    }, 0);
         count['non-binary'] = [nonBinary];
    };
        return count;
}
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
