//JavaScript Notes

//                          *** How to use JavaScript in HTML in souce code *****

// * If we want to include JavaScript in our HTML, we write <script> </script> in the head of the HTML
          Ex: <html>
                <head>
                  <script scr = "developer.js"></script>
                </head>
                <body
                  <h1> This is how you include JavaScript in your HTML </h1>
                ....
                </body>
                </html>

// Important!!!
// * If we include an JavaScript file in out HTML, the javascript file has to be in the same directory.
//      - If your javascript is in a folder, but in the the same directory
            Ex: root/
                    code.html
                    javascript/
                        developer.js
//
//          We need to call our file like this in your html code...
                Ex: <script scr="javascript/developer.js"></script>

// * What if our code.html is an a folder and we want to call a javascript file...do this
                Ex: <script src = "../javascript/developer.js"></script>

                // " ../ "  this mean that code.html has to go up one file and then look for javascript, than developer.js


//                              *** Let's put some code in the developer.js file! ****

//  *developer.js
        "Juan is " + 24 + " year old."  // This will return an error because the console does not like how we wrote the statement in our file.

        // We need a way to defferinciate executables statements

        var juanAge = 24 // this is good,

        // but what if we have multiple statements?
        var juanAge = 24
        var juanMonth = "March"
        var juanYear = 1991
        // the compiler will not be able to understand these statements.

        //  In JavaScript we use SEMICOLONS to end statements in our javascript file
        // This is good to input in the console
        var juanAge = 24

        // But in our file we write it like this... The SEMICOLON will tell the console "we finish the statement.''
        var juanAge = 24;

        //Now, if we write these statements
        var juanAge = 24;
        var juanMonth = "March";
        var juanYear = 1991;
        "Juan age is " + juanAge + " he was born in " + juanMonth + juanYear;

        // The problem about this is that in our console we will get "blank" in return

        //How do we print statement for our file to the CONSOLE??
            // JavaScript has ' console.log() ' method to output a result. (Remember "puts/ print" in Ruby?)
            // Let's output something in the console using the staments about
            console.log("Juan age is " + juanAge + " he was born in " + juanMonth + juanYear);
            // The console will output...
            Juan is 24 he was born in March 1991
            //Noticed?, the console does not print quotations anymore!!!

        // we can use console.log method to campare variables
        // Ex:
            console.log (juanAge == juanYear);
            //this will return false

// * Now if we want to use code.html an open it in the browser
    // Ex:
                <html>
                <head>
                  <script scr = "developer.js"></script>
                </head>
                <body
                  <h1> This is how you include JavaScript in your HTML </h1>
                ....
                </body>
                </html>

        // When you open the browser you will only see
            This is how you include JavaScript

            //Why?, what happen to our statement in our javascript file( developer.js ) ??

            // Well, since we use
            console.log // in our developer.js everything will be print it only to the CONSOLE not for the view.