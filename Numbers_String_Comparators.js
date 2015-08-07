//JavaScript Notes
//                                        **** Numbers ****

// 1) OPERATORS: addition, substraction, multiplication, division, modulus.

// 2) *Order of Operations (PEMDAS)

//     *JavaScript follows PEMDAS rule:
//       Ex: ( 5 + 6 ) * 3
//              = 12 * 3
//              = 36

//      *JavaScript also recognizes negative signs before a digit.
//          Ex: (-4 + 3)
//              = -1

//      *Modulus can be considere the multiplication:
//          Ex: 4 + ( 8 % (3 + 1 ) )
//                  = 4 ( 8 % 4 )
//                  = 4 + 0
//                  =  4

// 3) *JavaScript has unique COMPARATORS that allow us to compare values.
//       When we use these COMPARATORS it will return a BOOLEAN value (true or false)
//        Ex: 6 > 4 (greater than)
//              = true
//        Ex: 9 < 5 (less than)
//              = false
//        Ex: 3 == 4 (equal)
//              = false
//        Ex: 12 != 4 (not equal)
//              = true
//        Ex: 8 >= -2 (greater or equal)
//              = true
//        Ex: 10 <= 10 (less or equal)
//              = true

//                                        **** Strings Formatting****

// How JavaScript stores and processes flat text
// 1) *JavaScript need Quotes in the beginning and end of a text.
//          Ex: "I am learning JavaScript"

//     * JavaScript allows to use plus sign " + " to CONCATENATE multiple strings. It returns one String
//          Ex: "I am a Rails Developer" + " and " + "I am learning JavaScript"
//                 = "I am a Rails Developer and I am learning JavaScript"

//     * CONCATENATION work with numbers and their expressions too.
//          - CONCATENATION Does NOT provide space
//          Ex: "My age is " + 24
//                = "My age is 24"

//     *Concatenate Expression, the expression will be evaluate, and will return the result
//          Ex: "This is " + 9 + " and " + 3/4
//                = " This is 9 and 0.79" (returns the result)

//     * To avoid the Expression to be evaluated and get a result, we put the number inside the string.
//          Ex: "These are " + 9 + " and 3/4"
//                = "These are 9 and 3/4"

//     *In JavaScript we need some especial characters to achieve specific formatting.
//       Some characters need backslash notations. (advances to the next tab stop)
//          Ex: "My lucky number #:\t790\t\tSecond lucky number#:\t345"
//                 = "My lucky number #:     790         Second lucky number#:       345"

//      *Doble Quotation mark inside the string
//          Ex: "My login Password:\t\t \"12345\" "
//                = "My login Password:         "12345" "

//      *Backslash inside of a string. In Javascript we need 2 backslash(//) to produce 1 backslash
//          Ex:"Age\\Birth:\t24\\1991"
//                = "Age\Birth:         24\1991"

//      *New line
//          Ex: "Depature:\t10:00PM\nArrival:\t12:00AM"
//                  = "Depature:    10:00PM
//                      Arrival:       12:00AM"

//Research for more String Formatting.

//                                        **** Strings COMPARISONS  ****

//  1) * JavaScrip allows to campare strings in alphabetical ordering or for matching using specific COMPATATORS

//      *To compare two Strings
//          Ex: "Juan is a Developer" == "Juan is a Developer"
//                  = true

//       * If two Strings are not equal
//          Ex: "Juan is a Developer" == "Juan is a Dev."
//                  =false

//      * If other way to compare String is using this character...
//          Ex: "Juan is a Developer" != "juan is a developer"
//                  =true

//      *In JavaScript we can use methods(properties) just like in Ruby or other OOP Languages. (retuns a number)
//          Ex: "JuanOrdaz".length
//                  = 9

//      * JavaScript count the spaces and other character in the string, if using the method(properties) "length"
//          Ex: "Juan, Blah, Blah".length
//                  = 16