// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            // returns number of contacts
            return contacts.length;
        },
        addContact: function(contact){
            // use .push to add contact to contacts
            contacts.push(contact);
        },
        findContact: function(fullName){
          
        
                for(var i = 0; i <= contacts.length - 1; i++){
                // use conditional statement to compare nameSplit at the indexs to nameFirst and nameLast
                if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]){
                    // returns the contact object
                    return contacts[i];
                }else{
                    // else returns undefined
                    return undefined;
                }
                 
        }
    },
        removeContact: function(contact){
            // use for loop to iterae over contacts
            for(var i = 0; i < contacts.length; i++){
                // conditional statement to compare contact to contacts[i]
            if (contact === contacts[i]){
                return contacts.splice([i], 1);
            }
        }
        },
        printAllContactNames: function(fullName){
            // init variable to hold string
            let hold1 = '';
        // use for loop it iterate over contacts
        for(var i = 0; i < contacts.length; i++){
            // conditional statement that compares length of contacts to i
            if(i === contacts.length - 1){
                hold1 += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
            }else{
                hold1 += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            }
        }   
        return hold1;
        }

           
        }
    }





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
