//Javascript Notes

//                              ****    While Loops  ****

// *While-loops runs the code as long as its boolean(true-false) expression is true.

//  *Here is the syntax for JavaScript while-loops
//      Ex:
                while(some expression is true){
                    Do this code
                }

                // * This is very confusing to undestand at first.
                //      So think about this... If the expession is true, the code is going to
                //      run again and again and again. If at some point the expression inside the parenthesis is false
                //      than the while-loop stops.

// * Don't be scared, but if we write true inside parenthesis of the while-loop
//      Ex:
                while(true){
                    "do this code"
                }

                //This while-loop is going to run for ever! BE CAREFUL!!!! we do not want infinite loops

// * On the other hand, if we have false inside the parethensis in the while-loop
//      Ex:
            while(false){
                "do this code"
            }

            //This code will never ever ever run.

// * Let make a simple while-loop that prints 1 - 5 in ascending order
//      Ex:
                var number = 1; // This means it will start at 1, and control the while loop
                while(number <= 5){  // this is saying, As long as the number is less than or equal to 5, run the code below
                    console.log(number); //This is calling the variable (var number = 1) and is going to print it in the CONSOLE.
                    number++; // This peace is the KEY. We have to tell the loop to increase the number by one, otherwise, it will never become false and  will create an infinite loop. We have to take control of the loop.
                }

                // The numbers that will be printed in the console are
                    1
                    2
                    3
                    4
                    5
                //Then it stops the while-loop. When the while-loop hits 6, it stops and does not print it. becuase six is false.

// * You might not like while-loops, but they are fantastic, because it executes code repeatedly without making extra typing

// * Lets do a quick example. I will help you understand HOW and WHAT to think when working with while-loops.

//  * Let's say we have 5 coca-colas and we want to print "I drank <number> coca-colas"
//      -This easies way to do it is this...
//          Ex:
                console.log("I drank 1 cola-colas");
                console.log("I drank 2 cola-colas");
                console.log("I drank 3 cola-colas");
                console.log("I drank 4 cola-colas");
                console.log("I drank 5 cola-colas");

                //This is a lot of typing, what if I drink 100 coca-colas tomorrow. It would be terrible and waste of time typing 100 times the same code.

//      - Let's now use while-loops using the example above.
//          -1) think about what you want the while-loop to print differently.
//          -2) Think about what you want the while-loop to print the same.
//          -3) Think about when do we want the loop to be false. WE CAN NOT HAVE INFINITE LOOPS!!
//          -4) Remember the syntax of the while-loop ( Practice MAKE perfect)
//          -5) Control your while loop!
//          -6) Keep in mind, WE DO NOT WANT INFINITE LOOPS

//       -At this point I know what I want to print differently
            numbers  //right?

//      - Next I know what I want to print the same
            "I drank .... coca -colas"

//      - When do we want to while-loop to be false?
            number <= 5 //Remeber I drank 5 coca-colas. When the loop hit 6, I want the loop to stop.

//      - Let's remember the syntax for whie-loops
            while(true){
                "do this code";
            }

//      - Let's think how we can control our while loop. YES! I want to increment the number by 1
            number++
            // if you want to increment the number by 2 or 3 or 4 or whatever simply write this
            number += 2 //or any number you want. if you want to multiply, just change the symbol to mutiplication

//      - Have we think about if the while-loop will be infinite?
//          - Do we have CONTROL of the while-loop?
//             -GOOD JOB! YES WE HAVE CONTROL we are telling the while-loop to increment the number by one, and at what number we want to start counting.

//      -Now lets write the CODE!
        var number = 1;
        while (number <= 5){
            console.log("I drank " + number + " coca-colas");
            number++;
        }

//      -You must be curious of what will be printed in the console.
//      coca-colas #                coca-colas <= 5                             loop output
                1                               true                                I drank 1 coca-cola
                2                               true                                I drank 2 coca-cola
                3                               true                                I drank 3 coca-cola
                4                               true                                I drank 4 coca-cola
                5                               true                                I drank 5 coca-cola
                6                               FALSE                           LOOP STOPS


// * Think about what if tomorrow I have 6 coca-colas that I can drink, or 10 or 20?
//    - We don't want to write all this code over and over again right?
//          -To avoid that, I can simply change one number...watch me!!
//              Ex:
                        var coca_colas_drank = 20; //This is the number I change, incase I drink different of coca-colas everyday. UFFF now i don't have to write this code every day!
                        var number = 1; // It will start at 1
                        while( number <= coca_colas_drank){ // As long as number(1) is less than or equal than cola_colas_drank(20), execute the code.
                            console.log("I drank " + number + "coca-colas"); //This will be printed 20 times.
                            number++; //Increment the number by one
                        }

                        //At this point you know what is going to be printed in the console.