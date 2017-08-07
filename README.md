# Hello Good People of OneClass :)

This repo contains the Sign Up page kevin requested I write for your viewing pleasure.

## Getting Started

1. Download my zip off of github
2. Unzip
3. Open index.html in your browser (keep my assets in the same folder as index.html) 

---
* Please remember that you can check out my github for examples of Angular and Vue apps I have written. All of them have modern build systems usually using webpack. You can also see some of my full stack work with Node and Laravel.

* Thank you for you time and consideration.
---
## What it does
* provides validation for
    * Username
    * Password
    * Subjects

* Handle's what to during or after AJAX requests
    * successful return from server
    * error return from server
    * general failure in sending the AJAX request

* Responsive viewing sizes for
    * mobile
    * tablet
    * desktop

## How it does it
* Validation
    * Username
        * A keyup listener on the username field will check for invalid characters through testing against a regex to ensure only acceptable characters are passed in
        * A UI notification will popup letting the user know what isn't allowed if something bad is entered
        * Also, if a user tries to submit bad data through pressing the sign up button an error will be provided in an alert box

    * Password
        * keyup listener on the password field will check for minimum and maximum password length requirements
        * Any character should be allowed to be in the password
            * The password (really everything a user submits to the server) should be escaped on the server side before being processed
        * If the password is invalid upon submission and error will be provided and the request will not be sent

    * Subjects
        * After serializing the form I run a loop through the array of JSON checking if the name of each property contains "subj_"
            * if one does the count will be increased and that part of the form will be marked as valid because we have at least one subject selected
            * if not an error is provided and submission won't send a request.
            * There's a lot of room for improvement on the way I am checking for at least one subject being selected but with final projects, final exams and several interviews happening all within the next two weeks I went down the path of least resistance


* AJAX
    * I leveraged JQuery's AJAX lib to send my request and handle it's returns and inserted the appropriate error or success messages into the DOM with JQuery's append function
    * I used a few boolean flag's that were checked against to ensure the form was valid instead of redoing the error handling within the on click handler

* Responsive Design
    * Keeping things responsive was relativley straight forward using bootstrap
    * I leveraged the column system along with a few of my own CSS styles

## Technology Choices

* Bootstrap - Basic styling and grid system
* Bootflat  - UI library to make things look super simple 
* JQuery    - For my page's interactibity

    I tried to keep my dependencies as minimal as possible. I brought in everything through CDN's so you wouldn't have to install anything at all.
    I thought about using VueJS and possibly providing a webpack build system with a little node server to run everything but I figured that would be super duper over kill.
    I figured you would not want to have to read my build steps, run my build command and then run it on localhost.
    Instead everything is brought in through CDN and all of my logic is done with some pretty basic JQuery which meets your requirements.
    You can literally just download my zip off of github and open index.html in your browser and it works.

---
## Don't Forget!
* You can check out my github for examples of Angular and Vue apps I have written. All of them have modern build systems usually using webpack. You can also see some of my full stack work with Node and Laravel.

* Thank you for you time and consideration.
---