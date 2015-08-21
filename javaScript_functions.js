// JavaScipt have built-in fuctions you can use and call throughout you app.

// - Some Basic functions are...

        alert("I am ready to learn JavaScipt");  // You can write anything you want inside the Strings. This fuctions will trigger a pop-up window when the user click on a button, or anything you set this fuction to. The window has an ' ok ' button to press after they read the message

        confirm("Are you ready to learn too?"); // You can write anything you want inside the Strings. This fuctions will trigger a pop-up window when the user click on a button, or anything you set this fuction to. The window has an ' ok ' and ' cancel 'buttons to press after they read the message, both with boolean value, true and false, respectively.

        prompt("What programming language is this?"); // It's a pop-up window that sends a message to the user and recieves an input from the user. User can click ' ok '  or  ' cancel ' buttons.

// We can store the above function in a variable

        var name = prompt("What's you name?"); // What ever the user input in the pop-up window, will be store in the variable ' name '. Ofcourse, after the click ' ok ' button. You can call the variable ' name ', and it will return the name of the user.

//  Let's use two fuctions. (Pretent windows pop-up for each function)

        var name = prompt("What's youe name?"); //  "Juan"

// Next, let's confirm the user name...

        confirm("Is" + name + "correct?" ); // "Is Juan correct?    --then the user can click " cancel " or " ok " button "



// Now you how these fuctions works. Let's do cool things this fuctions.

// Let's say we promp the user to enter his/her name

        var name = prompt("What's youe name?");

// and confirm his/her name

        confirm("Is" + name + "correct?" );

// What if the user enter a number instead of name?...

// To check user's input  we need TYPEOF Operator.

// Typeof indetifies the type of value inside a variable or expression

//      Ex:

                typeof true
//      this will return,
                    "boolean"
//      because true is a boolean value.

                typeof "This is not valid"
//      this will return,
                    "string"
        // because the expession followed typeof is a string.

                typeof 34
//      this will return,
                    "number"
//      because 34 is a number.

                typeof undefined
//      this will return,
                    "undefined"
//      because is its own type.

                typeof null
//      this will return,
                    "object"
//      which is not a string...You will see why


// - Typeof is very useful when checking a variable's contents (value).

//      - Let work with the prompt fuction

// Let's do Magic now!
//   - When we prompt the user to enter his/her name
                var name = prompt("What's youe name?");
//   - and the user presses the ' cancel ' button, this will return...
                    null // which is not a String value.
//  - Now when we call
                typeof name
//      it returns,
                "object"  // <-- Is just a Generic JavaScript Object.
//      This is very useful, because if the user enter an invalid entry, we can alert the user that is not a valid entry.
//      Ex:
//              If your name is not a string
//                  you need to enter a valid name
//                  Then we can re-start a cycle again until they enter a valid entry

//      - Now, let's work with confirm function
//  -It very easy

                confirm("Is" + name + "correct?" );

//          Since we are dealing with ' boolean ' true an false we can use If conditional.

//      Ex:
//              if (confirm(use can click ok button)){
//                  do this pieace of code
//              }


//  Now that we know how to use Functions and Typeof, let's write code.

    var  isName = false;                    // <-- We start at false, because we don't have a name yet
    while (isName == false){             // <-- While we don't have a name yet,
        var name = prompt("What is your name?"){        //<-- so lets ask the user to enter a name.
            if(confirm("Is" + name + "correct?" ));             // <-- If the name is correct and confirm,
            isName = true;                                                 // <-- then now we have a name!!!!!!
        }
        //if the name is not confirm, then it jumps back to line 104!!
    }





