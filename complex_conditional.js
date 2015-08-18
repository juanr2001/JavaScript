//JavaScript notes

// * Here we are going to talk about how to implement && - | |  complex conditionals.
//      ** Pretend we have 12 coca-colas and I will drink #1 to #5 right now, and i will drink # 9 later. Ask yourself 3 questions...
//          1) What if I want to drink coca-cola #11 ' or ' # 9 later?
//          2) What if I want to drink my favorite coca-cola #2 on a special day, perhaps on Saturday?
//          3) how can we implement question #1 and #2 in our code?

//      ** First let's undestand this...
//              -To handle two condition at once, JavaScript has what is call Complex Conditionals...

//                  ' && '  and ' | | '

//                  && - is pronouce as ' And '
//                  | | - is pronounce as ' Or '



//          - ' &&' (And) returns true if ' both ' values are true

//              Ex:
                        true && false
                            = false         //return false because only ' one ' value is true.

                        false && true
                            = false         // return false because only ' one ' value is false

                        true && true
                            = true          //return true because ' both ' values are true

                        false && false
                            = false         //returns false because ' both ' values are false

//      ** Let's do real examples using ' && '

//              Ex:
                        (1 >= 1) && ( 1 < 2 )  // Both values are true so, it return true
//                          true    &&     true

                        (6 > 3)   && (1 > 3)    // Returns false because only ' one ' values is true
//                        true     &&    false


//          - ' | | ' (Or) returns true if ' either ' value is true

//              Ex:
                        false || true
                            = true          // returns true because all we need is only ' one ' value to be true

                        true || false
                            = true          // return true becuase all we need is only ' one ' value to be true

                        false || false
                            = false         // returns false because ' both ' values are false

                        true || true
                            = true          // returns true because ' both ' values are true

//  ** Let's do real examples using ' | | '

//              Ex:

                        ( 3 > 1 ) || (1 > 3)    //returns true, because we only need ' one ' to be true
//                        true     ||    false

                        ( 3 > 4 ) || ( 1 > 3)   // returns false, becuase ' both ' are false
//                        false    ||   false

// * Now that we know how ' && ' and ' | | ' work, let's implement it in our code we've been doing in previous files in this Repository.

//                      ( If you are confused how this code works, go back to previous files to undestand how we got here.)

//      ** Let's answer question #1( in line 5 )
//              1) What if I want to drink coca-cola #11 ' or ' # 9 later?


                        var coca_colas = 12;  // total coca-colas
                        var drank_colas = 5;   // number of coca-colas I will drink now


                            if( drank_colas > 0){ // only if it's greater than 0 do the code below
                                if( drank_colas == coca_colas){
                                    console.log("I have 12 coca-colas in the cooler");
                                }else{
                                    for( var start_colas = 1; start_colas <= coca_colas;  start_colas++){
                                        if(start_colas <= drank_colas){
                                            console.log(" I drank " +  start_colas + " coca-cola");
                                            // in the line below is where we implement ' || ', becuase we want to drink either #9 or #11
                                        }else if(start_colas == 9 || start_colas == 11){
                                            console.log("I will drink coca-cola #" + start_colas + " later today");
                                        } else {
                                            console.log("I did not drink " + start_colas + " coca-colas");
                                        }
                                    }
                            }else{ // if is less than 0 do the code below
                                console.log("All my coca-colas are gone!");
                            }

//          ***This is what will be executed when we run the code above

                                            loop                                  is                                  is
                start_colas             start_colas <= 12?                   start_colas<=5?                    start_colas == 9                            output
                    1                         true                                yes(if)                           ignored                           "I drank 1 coca-cola"
                    2                         true                                yes(if)                           ignored                           "I drank 2 coca-cola"
                    3                         true                                yes(if)                           ignored                           "I drank 3 coca-cola"
                    4                         true                                yes(if)                           ignored                           "I drank 4 coca-cola"
                    5                         true                                yes(if)                           ignored                           "I drank 5 coca-cola"
                    6                         true                                no(else)                          no(else)                           "I did not drink 6 coca-colas"
                    7                         true                                no(else)                          no(else)                           "I did not drink 7 coca-colas"
                    8                         true                                no(else)                          no(else)                          "I did not drink 8 coca-colas"
                    9                         true                                no(else if)                         yes(else-if)                             "I will drink coca-cola #9 later today"
                    10                        true                                no(else)                          no(else)                           "I did not drink 10 coca-colas"
                    11                        true                                no(else)                          yes (else-if)                           "I will drink drink #11 coca-colas"
                    12                        true                                no(else)                          no(else)                          "I did not drink 12 coca-colas"
                    13                    LOOP STOPS!                    THIS                    LINE            DOES        NOT                         GET                         EXECUTED!!!!!!!!


//      ** Let's answer question #2(in line 6)
//               2) What if I want to drink my favorite coca-cola #2 on a special day, perhaps on Saturday?

                        var coca_colas = 12;  // total coca-colas
                        var drank_colas = 5;   // number of coca-colas I will drink now

                        //We have to add a new variable
                        var todayDay = 'Monday';

                            if(drank_colas > 0){ // only if it's greater than 0 do the code below
                                if( drank_colas == coca_colas){
                                    console.log("I have 12 coca-colas in the cooler");
                                }else{
                                    for( var start_colas = 1; start_colas <= coca_colas;  start_colas++){
                                        // If we do not add ' && coca colas != 2 ' in line below, than our conditional (in line 139) will never be triggered. Why?...
                                        // because drank_colas <= 5, and it includes #2, so it will always be true, and our conditional (in line 139) will never be triggered
                                        // Rember ' both ' values are true in this conditional
                                        if(start_colas <= drank_colas && coca_colas != 2){
                                            console.log(" I drank " +  start_colas + " coca-cola");
                                        }else if(start_colas == 9 || start_colas == 11){
                                            console.log("I will drink coca-cola #" + start_colas + " later today");
                                            // Whe have to add an else if conditional.
                                        }else if( start_colas == 2 && todayDay == 'Saturday'){
                                                console.log("I drank 2 coca-colas")
                                        } else {
                                            console.log("I did not drink " + start_colas + " coca-colas");
                                        }
                                    }
                            }else{ // if is less than 0 do the code below
                                console.log("All my coca-colas are gone!");
                            }

//          ***This is what will be executed when we run the code above

                                            loop                                  is                                  is
                start_colas             start_colas <= 12?                   start_colas<=5?                    start_colas == 9                            output
                    1                         true                                yes(if)                           ignored                           "I drank 1 coca-cola"
                    2                         true                                yes(if)                           ignored                           "I did not drink 2 coca-colas"
                    3                         true                                yes(if)                           ignored                           "I drank 3 coca-cola"
                    4                         true                                yes(if)                           ignored                           "I drank 4 coca-cola"
                    5                         true                                yes(if)                           ignored                           "I drank 5 coca-cola"
                    6                         true                                no(else)                          no(else)                           "I did not drink 6 coca-colas"
                    7                         true                                no(else)                          no(else)                           "I did not drink 7 coca-colas"
                    8                         true                                no(else)                          no(else)                          "I did not drink 8 coca-colas"
                    9                         true                                no(else if)                         yes(else-if)                             "I will drink coca-cola #9 later today"
                    10                        true                                no(else)                          no(else)                           "I did not drink 10 coca-colas"
                    11                        true                                no(else)                          yes (else-if)                           "I will drink drink #11 coca-colas"
                    12                        true                                no(else)                          no(else)                          "I did not drink 12 coca-colas"
                    13                    LOOP STOPS!                    THIS                    LINE            DOES        NOT                         GET                         EXECUTED!!!!!!!!
// IMPORTANT!!!!!
//            - You noticed, when we execute the code, coca cola #2  output "I did not drink 2 coca-colas", WHY?
//                  -WHY it did not output "I drank 2 coca-cola" like we wrote (in line 142)? If both values in conditional (in line 135 ) are TRUE?

//            Answer:
//            Since we wrote a variable

                 var todayDay = 'Monday';

//             it means that is Monday now, and not Saturday. So coca-cola #2 will be ignored, and will be treated as I did not drink it on  ' Monday ' (I have to wait until Saturday)

//             So since is Monday, the code below has only one ' value ' that is true, so this code is not going to execute until both values are true.

                }else if( start_colas == 2 && todayDay == 'Saturday'){
                    console.log("I drank 2 coca-cala")

//              How do we make the code above to run?
//                  -The easy way is to chage the value of the variable like this...

                    var todayDay = 'Saturday';

//              When we execute the code with the variable above, this is the output

                                            loop                                  is                                  is
                start_colas             start_colas <= 12?                   start_colas<=5?                    start_colas == 9                            output
                    1                         true                                yes(if)                           ignored                           "I drank 1 coca-cola"
                    2                         true                                yes(if)                           ignored                           "I drank 2 coca-cola"
                    3                         true                                yes(if)                           ignored                           "I drank 3 coca-cola"
                    4                         true                                yes(if)                           ignored                           "I drank 4 coca-cola"
                    5                         true                                yes(if)                           ignored                           "I drank 5 coca-cola"
                    6                         true                                no(else)                          no(else)                           "I did not drink 6 coca-colas"
                    7                         true                                no(else)                          no(else)                           "I did not drink 7 coca-colas"
                    8                         true                                no(else)                          no(else)                          "I did not drink 8 coca-colas"
                    9                         true                                no(else if)                         yes(else-if)                             "I will drink coca-cola #9 later today"
                    10                        true                                no(else)                          no(else)                           "I did not drink 10 coca-colas"
                    11                        true                                no(else)                          yes (else-if)                           "I will drink drink #11 coca-colas"
                    12                        true                                no(else)                          no(else)                          "I did not drink 12 coca-colas"
                    13                    LOOP STOPS!                    THIS                    LINE            DOES        NOT                         GET                         EXECUTED!!!!!!!!

//              Since is Saturdat,  it out puts that 'I drank 2 coca-cola', because both values are true!
                    }else if( start_colas == 2 && todayDay == 'Saturday'){
                    console.log("I drank 2 coca-cala")
