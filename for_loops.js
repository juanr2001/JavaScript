//JavaScript Notes

//                                  ****    For Loop   ****

// * For-Loop is somewhat the same as While-Loop, of couse different syntax
//      Ex:
                for(         ;          ;         ){


                }

    // -Unlike the While-Loops, For-Loops take three statements.
//      Ex:
                for( start with this experssion ;  loop if this experssion is true ;  do this expession after each loop ){

                    here we write the code that we want to will be repeated

                }

// Let's do a quick example with For-Loop
//      Ex:
                var drank_colas = 5;

                for (var coca_colas = 1; coca_colas <= drank_colas; coca_colas++){

                    console.log("I drank " + coca_colas + " coca-colas"); // this is a " String " that will be printed in the console (not the view)

                }

                // Let me explain what is happening inside the parenthesis of the for-loop ;
                    // - the first expression will only run one time
                    // - The second expression will exucute the number if it's true (less than or equal to 5),and will be printed in the string.
                    // - The third expression increments the number only if the second expession is true.
                    // - once the loop reach to 6 the loop stops, because 6 is greater than 5, so it's false and it does not executes the number or printed


// *Now let do something that is going to make us think more.
// * I have 5 coca-colas that I will be drinking today, but I have 12 coca-colas total in my ref, I want to know which cola-colas I am not going to drink
//          Ex:
                    var coca_colas = 5;
                    var total_colas = 12;
                    for(var no_drank = coca_colas + 1; no_drank <= total_colas; no_drank++){ // we set the a variable call no_drank so we can set it equal to coca_colas + 1. Because we want to start with 5 and increment by one.

                        console.log("I am not drinking " + no_drank + " coca-colas");

                    }
                    // This will print in the console the following strings...
                            "I am not drinkin 6 coca-colas"
                            "I am not drinkin 7 coca-colas"
                            "I am not drinkin 8 coca-colas"
                            "I am not drinkin 9 coca-colas"
                            "I am not drinkin 10 coca-colas"
                            "I am not drinkin 11 coca-colas"
                            "I am not drinkin 12 coca-colas"

// *Now let put a Whiile-Loop and For-Loop together.
// * I will be using the same example with colas. You can call a variable anything you want, just remember the syntax.
//          Ex:
                    var = drank_colas = 5; // number of colas that I am drinking today
                    var = total_colas = 12; // total of colas I have in my ref
                    var = coca_colas = 1; //starts with one

                    while ( coca_colas <= drank_colas){ // as long as coca_colas(1) is less than or equal to drank_colas(5) run the code below
                //      coca_colas++;         // This is just an example. If put this statement here, than it will start printing number 2, and not 1
                                                        // Why? Remember, just like OOP Languages,  it exexutes code in sequences (whatever code is first, it will be executed first)
                                                        // So it will add the coca_colas first than execute it and print it  in the code bellow, which is number 2.
                        console.log("I drank " + coca_colas + " coca- colas");
                        coca_colas++;
                    }

                    for (var no_drank = drank_colas + 1; no_drank <= total_colas; no_drank++){

                        console.log("I am not drinking " + no_drank + " coca-colas");

                    }

// We did it! Now let's see what exactly will be printed in the console.

//           Ex:
                    "I drank 1 coca-colas"//Here the while-loop starts, because we wrote it first than the for-loop. If we would have wrote the for-loop first, the for-loop start first than the while-loop
                    "I drank 2 coca-colas"
                    "I drank 3 coca-colas"
                    "I drank 4 coca-colas"
                    "I drank 5 coca-colas"
                                                        //// here the while-loop stops because 6 is false and it does not exexute or print the number.
                    "I am not drinking 6 coca-colas"// Now the For-loop starts here.
                    "I am not drinking 7 coca-colas"
                    "I am not drinking 8 coca-colas"
                    "I am not drinking 9 coca-colas"
                    "I am not drinking 10 coca-colas"
                    "I am not drinking 11 coca-colas"
                    "I am not drinking 12 coca-colas"
                                                                        // The for-loop stops here, 13 is false so it does not print the number.
