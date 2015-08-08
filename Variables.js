// JavaScript Notes

//                                 ***  Storing Data in Variables ****

// * Just like in Ruby, Java, etc., we can store data in variables in JavaScript.

// * In JavaScript we store data in " var ". " var " is the variable keyword; we give a name to  " var "; lastly, we set it equal (assigment operator( = ) ) with a value.
//      Ex: var juanDeveloper = 1

// * Now when we call juanDeveloper, it returns 1
//      Ex: juanDeveloper
//            = 1

// * In like any other language, we follow rules and regulations when naming variables

// * Rules and Regulations:
//      1) NO Space in variable names
//          Ex: var juan Developer (The compiler will return an error)
//
//      2) NO Digit in the beginning of the variable name
//          Ex: var 2juan (the compiler will return an error)
//
//      3) CAN use underscores
//          Ex: var juan_ordaz
//
//      4) CAN use the ' $ ' signs
//          Ex: var juan$ (this is not recommended)
//
//      5) CAN use ' $ ' and underscore
//          Ex: var $_$ (this is not recommended)
//
//      6) CAN begin with lower case, and followed by Capitalized names(CamelCase)
//          Ex: var juanRailsDeveloper
//
//      7) CAN have a digit at the end
//          Ex: var juanDeveloper1



//                        ***   Changing the Value of the Variable   ****

// * If we set var juanDeveloper = 1, than we decide to change it later.
//      We do not have to call ' var ' when we change a value of a variable that is already inside memory of the console, just write the name of the variable and give the new value,
//      because the console already knows that juanDeveloper is a variable.
//      Ex: juanDeveloper = 2 (I didn't have to use ' var ' keyword)

// * We can call the variable name, and modified the value. Suppost i have a variable (already in console memory) call " juanDeveloper = 5 "
//      Ex: juanDeveloper = juanDeveloper + 1 (remember we didn't have to use ' var ')
//          = 6

// * Other way to modified the value of an existing variable as above. if we have a variable (already in console memory) call "juanDeveloper = 3"
//      Ex: juanDeveloper += 3 ( remeber we didn't have to use ' var )
//            = 6

// * We can also use multiplication ( *  or *= ) to modified a variable's value, lets use juanDeveloper = 3 ( pretend is already in console's memory)
//      Ex: juanDeveloper * 2           or          juanDeveloper *= 2      ( remeber I didn't have to use ' var ')
//            = 6                                                = 6

// * Remeber ' interpolation '  in Ruby??? In Javascript we CAN do the same thing!! Cool huh?? (Do not use #{ } )
//      - If we have two string an we want to add juanDeveloper = 2(already inside console memory)
//        Ex: "I have " + juanDeveloper + " dogs"           <--- Do you see a space after "have " and before " dogs" (inside the strings)? Don't forget those spaces
//              = "I have 2 dogs"

// * Using the same variable as the example above. If we have two strings, and juanDeveloper = 2 (already in console memory). We can mutiply the variable and put the result inside the strings...
//          Ex: "Anthony has " + (juanDeveloper * 2) + " dogs"
//                  = "Anthony has 4 dogs"  (this example is kind of wrong, because anthony should have its own variable (Think about, maybe he has same/more dogs than I do, right?)) so do this...

//          var anthony = juanDeveloper * 3     (remember juanDeveloper has a value of 2 and we are multiplying by three)
//                 "Anthony has " + anthony + "dogs"
//                  = "Athony has 6 dogs" (now if you call the variable anthony it will return 6, the amount dogs he has )



//                       *** Incrementing and Decrementing variable's values ****

// * If we have juanDeveloper = 5 (already inside console memory), we can Increment its value like this...
//      Ex: juanDeveloper++
//              = 6

// * We can decrement juanDeveloper = 5 like this...
//      Ex: juanDeveloper--
//              = 4


//                              **** Storing Strings in Variables ****

// * Just like in Ruby we can store Strings in variables!!!!
//    Ex: var hi = "Hi everyone!"
//    EX: var goodNight = "Have a good night!"

// * If we want to use " var hi '' and " var goodNight "
//      Ex: hi + "\n" + goodNight
//            = "Hi everyone!
//                Have a good night"

// * We can use properties in string, suck as length. Using the variables above ( ' hi ' ).
//      Ex: hi.lenght
//          = 11

// * We can compare strings using properties, length. Using the variables above. ( ' hi ' and 'goodNight')
//      Ex: hi.length > goodNight.length
//            = false

// * In JavaScript we can find characters inside a string by the index number. Remember this...
//      1) empty spaces are characters too
//      2) The first letter of the sentences starts with 0
//      3) none letter charachters are counted too (?, !, $, etc.)
//      Ex: var words = "juan developer!"     (let's find " j ", " empty space ",  " ! " )
//              =  j = 0, empty space = 4 and ! = 15

//       !!!!!!!!!!!!!!     IMPORTANT    !!!!! when you use the length property (using the variable words above)
//      Ex: words.length
//          = 16

//   Although the sentence index starts with 0, the " length value will always " return 1 more than the index

// * Finding Index inside the string we can use the method charAt(number_of_the_letter_you_want_to_find)
// * Using the var words = "juan developer!"
//      Ex: words.charAt(2)             Ex: word.charAt(4)
//          = "a"                                       =" "     (JavaScript returns an empty string)