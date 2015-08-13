//JavaScript Notes

//                              *** If - Else Loops!!! ***

// * IF - ELSE allow use to execute code base on a specific condition.
//          Ex:
                    if ( this condition is true ){

                        do this code here // If this is true the " else '' conditional does not excute at all

                    } else {

                        do this code here instead  // This code will only run if the " if " conditional is false.

                    }

// Let's do an example;
//          Ex:
                    var num1 = 1;
                    var num2 = 3;

                    if (num1 < num2){
                        console.log(num1 + " is less than " + num2); //This is true so the " else " conditiona does not execute
                    } else {
                        console.log(num1 + " is greater than or equal " + num2); //in this example thi " else " conditional never runs because num1  is not greater or equal than num2

                    }

//          Ex:
                    var num1 = 4;
                    var num2 = 3;

                    if (num1 < num2){
                        console.log(num1 + " is less than " + num2); //Since this is false, the " if " conditional does not execute
                    } else {
                        console.log(num1 + " is greater than or equal " + num2); //This is true, the " else " conditional  executes.

                    }


// * Let's use other examples how to imprement conditionals
//          Ex:
                    var coca_colas = 12;
                    var drank_colas = 5;
                    var no_drank_colas = 7;

                    for( var start_colas = 1; start_colas <= coca_colas;  start_colas++){
                        if(start_colas <= drank_colas){
                            console.log(" I drank " +  start_colas + " coca-cola");
                        } else {
                            console.log("I did not drink " + start_colas + " coca-colas");
                        }
                    }

            //This is what will be executed:
                                                                //Loop                                                   Is                                                                         Execution
                   // coca_colas                   coca_colas <=12?                    start_colas <= drank_colas
                            1                                           true                                               Yes = if                                                         "I dran 1 coca-cola"
                            2                                           true                                               Yes = if                                                         "I dran 2 coca-cola"
                            3                                           true                                               Yes = if                                                         "I dran 3 coca-cola"
                            4                                           true                                               Yes = if                                                         "I dran 4 coca-cola"
                            5                                           true                                               Yes = if                                                         "I dran 5 coca-cola"
                            6                                           true                                                No  = else                                                    "I did not drank 6 coca-colas!"
                            7                                           true                                                No  = else                                                    "I did not drank 7 coca-colas!"
                            8                                           true                                                No  = else                                                    "I did not drank 8 coca-colas!"
                            9                                           true                                                No  = else                                                    "I did not drank 9 coca-colas!"
                            10                                         true                                                No  = else                                                    "I did not drank 10 coca-colas!"
                            11                                         true                                                No  = else                                                    "I did not drank 11 coca-colas!"
                            12                                         true                                                No  = else                                                    "I did not drank 12 coca-colas!"
                            13                                          false                                   HERE THE LOOP STOPS!                                    HERE THE LOOP STOPS!


// * only print the even number

    var num = 10;

        while (num > 0) {
            if(num % 2 == 0){
                console.log(num);
            }
            num--;
        }

