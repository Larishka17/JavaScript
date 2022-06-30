// Write a validation script using functions

//   1. The script must accept a string as input;
//   2. After checking the string, output a message to the console where it will be specifically written what is wrong in the entered string;
//   3. Minimum 5 characters per line;
//   4. Maximum 64 characters per line;
//   5. The line must contain letters;
//   6. Must have at least one uppercase letter;
//   7. Must be at least one number;
//   8. Must have at least one @;
//   9. The string must not be empty.

const isValid = function (my_string){
    if (typeof (my_string) == 'string') {
    var minString = my_string.length >= 5;
    var maxString = my_string.length <= 64;
    var letters = /[A-Za-zA-Яа-я-ё]/.test(my_string);
    var capital_letter = /[A-ZА-Я-Ё]/.test(my_string);
    var one_number = /[0-9]/.test(my_string);
    var symbol_dog = my_string.includes('@');
    var notEmpty = my_string;
    if (minString != true){
    console.log ("String less than 5 characters")
    } else {
    minString 
    }
    if (maxString != true) {
       console.log ("String more than 64 characters");
    } else {
       maxString
    } if (letters != true ) {
       console.log ('Add letters')
    } else {
       letters
    } if (capital_letter != true) {
        console.log ("Add UpperCase letters")
    } else {
        capital_letter
    } if (one_number != true) {
        console.log ("Add one number")
    } else {
        one_number
    } if (symbol_dog != true) {
        console.log ("Add @")
    } else {
        symbol_dog
    } if (!my_string) {
        console.log ("Add something")
    } else { notEmpty
    } if (minString && maxString && letters && capital_letter && one_number && symbol_dog && notEmpty) {
        console.log ("This is a correct string")
    }
   }
   else {
       console.log ("This is not a string")
   }
};
