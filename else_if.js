// JavaScrip

//                          *** ELSE-IF ***

// * ' else if ' is used when two condition is not enough, and we want more specific returns

//      ** Here is the syntax for else if

                if(some condition is true ){

                    do this code here

                }else if(some other condition is true){

                    do something for this condition here

                }else{

                    If nothing is true above, do this code instead

                }
            // Keep in mind if any condition is met in any block, the rest will be skipped


// * Let's imagine I have 12 coca-colas and I'm drinkin 1-5 right now, and I will drink coca cola # 9 later today. Although I will drink 1 more later today, I still have 7 in the cooler.


//      ** This is the example we woked with in the ' if_else.js ' file  (if you don't undestand this code, look for the file in this repo)
//              Ex:
                        var coca_colas = 12;
                        var drank_colas = 5;


                        for( var start_colas = 1; start_colas <= coca_colas;  start_colas++){
                            if(start_colas <= drank_colas){
                                console.log(" I drank " +  start_colas + " coca-cola");
                            } else {
                                console.log("I did not drink " + start_colas + " coca-colas");
                            }
                        }


//      ** I am not going to write the ' for loop ' here, just  to make it easier to explain(however, is still the same as above)

//              Ex:

                        if(start_colas <= drank_colas){
                            console.log(" I drank " +  start_colas + " coca-cola");

                        }otherwise, check the next coca-cola I will drink later{
                            console.log("I will drink #9 coca-colas later in the after noon")       //here is where you apply ' else if ''

                        }else {
                            console.log("I did not drink " + start_colas + " coca-colas");
                        }
                    }

//      ** Let's apply the ' else if ''
//              Ex:
                        if(start_colas <= drank_colas){
                            console.log(" I drank " +  start_colas + " coca-cola");

                        }else if (start_colas == 9){
                            console.log("I will drink coca-colas #9 later in the after noon");
                        }else {
                            console.log("I did not drink " + start_colas + " coca-colas");
                        }

// * Now, let include the ' for loop ' here to see the logic
//              Ex:
                        var coca_colas = 12;
                        var drank_colas = 5;

                        for( var start_colas = 1; start_colas <= coca_colas;  start_colas++){
                            if(start_colas <= drank_colas){
                                console.log(" I drank " +  start_colas + " coca-cola");
                            }else if (start_colas == 9){
                                console.log("I will drink coca-cola #9 later today");
                            } else {
                                console.log("I did not drink " + start_colas + " coca-colas");
                            }

                        }

//          ***This is what will be executed when we run the code above

                                            loop                                  is                                  is
                start_colas             start_colas <= 12?                   start_colas<=5?                    start_colas == 9                            output
                    1                         true                                yes(if)                           ignored                           "I drank 1 coca-cola"
                    2                         true                                yes(if)                           ignored                           "I drank 2 coca-cola"
                    3                         true                                yes(if)                           ignored                           "I drank 3 coca-cola"
                    4                         true                                yes(if)                           ignored                           "I drank 4 coca-cola"
                    5                         true                                yes(if)                           ignored                           "I drank 5 coca-cola"
                    6                         true                                no(else)                          ignored                           "I did not drink 6 coca-colas"
                    7                         true                                no(else)                          ignored                           "I did not drink 7 coca-colas"
                    8                         true                                no(else)                          ignored                           "I did not drink 8 coca-colas"
                    9                         true                                no(else if)                         Yes                             "I will drink coca-cola #9 later today"
                    10                        true                                no(else)                          ignored                           "I did not drink 10 coca-colas"
                    11                        true                                no(else)                          ignored                           "I did not drink 11 coca-colas"
                    12                        true                                no(else)                          ignored                           "I did not drink 12 coca-colas"
                    13                    LOOP STOPS!                    THIS                    LINE            DOES        NOT                         GET                         EXECUTED!!!!!!!!

// * Now lets do Nested Conditionals
//          - Now let's say that we want the FORD car or DOGGE, if it's FORD truck I want red, if is a FORD car I want it green. if it's DODGE the car must be color black
            // This is how you do nested conditionals
//                Ex
                        if(ford){
                            if (truck){
                                red
                            }else{       // here we don't need to put car becuse it already knows it's a car, not a truck
                                green
                            }
                        }else{          //here we don't need to put dodge, becuase it already knows that you mean dodge.
                            black
                        }


// * Back to the example of coca-colas, Let's pretend I want to let me everyone know when my coca-colas are gone, or if I have 12 coca-colas in the cooler, or if I still have a specific coca-cola in the cooler.
//                  Ex:
                            if(any coca-colas){
                                if(12 coca-colas){
                                    you have 12 coca colas in the cooler
                                }else{
                                    you have coca-cola #10 in the cooler
                                }

                            }else{
                                you need to buy more coca-colas
                            }

// * Lets write real code. (still using coca-cola example)
//                  Ex:
                        var coca_colas = 12;
                        var drank_colas = 5;


                            if(drank_colas > 0){
                                if( drank_colas == coca_colas){
                                    console.log("I have 12 coca-colas in the cooler");
                                }else{
                                    for( var start_colas = 1; start_colas <= coca_colas;  start_colas++){
                                        if(start_colas <= drank_colas){
                                            console.log(" I drank " +  start_colas + " coca-cola");
                                        }else if(start_colas == 9){
                                            console.log("I will drink coca-cola #9 later today");
                                        } else {
                                            console.log("I did not drink " + start_colas + " coca-colas");
                                        }
                                    }
                            }else{
                                console.log("All my coca-colas are gone!");
                            }
