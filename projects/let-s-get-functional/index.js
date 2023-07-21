// #!/usr/bin/env node

'use strict';

const { includes, multiply, sum, result } = require('lodash');
var customers = require('./data/customers.json');
var _ = require(`underbar`);
const common = require('mocha/lib/interfaces/common');

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
    for(let i = 0; i < array.length; i++){
        if(array[i].name === customer){
         let names = _.filter(array[i].friends, (friend => friend.name[0].toLowerCase() === letter.toLowerCase()))
                return names.length;
        }
    }
       
};

var friendsCount = function(array, name){
        let commonCustomers = [];
    for(let i = 0; i < array.length; i++){
        let names = _.filter(array[i].friends, (friend => friend.name === name));
            if(names.length > 0){
                        commonCustomers.push(array[i].name)
            }
    }
        return commonCustomers
};
var topThreeTags = function(array){
    let output = []; 
        let count = array.reduce(function (accumalator, current){
            for(let i = 0; i < current.tags.length; i++){
               if(accumalator[current.tags[i]]){ 
                     accumalator[current.tags[i]] += 1;
                }else{
                    accumalator[current.tags[i]] = 1;
                }
            }
                    return accumalator;
        }, {});
        for(let key in count){
            output.push([key, count[key]]);
        }
        console.log(count);
        console.log(output);
    let result = output.sort(function(a, b){
            return b[1] - a[1];
    })
    let tags = []
        tags.push(result[0][0]); 
        tags.push(result[1][0]);
        tags.push(result[2][0]);
            return tags;
         
       
};

var genderCount = function(array) {
        let countObj = array.reduce(function(accumulator, current){
          // let accumulator = { } | current = { name: 'Olga Newton', gender: 'female'}
        
          // determine if current customer's gender already exists in accumulator as a key
          if (accumulator[current.gender]){
            // if true, increment value by 1
            accumulator[current.gender] += 1
          } else { // else it doesn't exist
            // create key of current gender and initialize to 1
            accumulator[current.gender] = 1; 
          }
        
          return accumulator; // return accumulated object
          
        }, {}); // seed should be an empty objet
      
        return countObj;
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
