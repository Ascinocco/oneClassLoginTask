/**
 * Normally I'd use VueJS or Angular for my client side app's, especially if reactivity and feeling quick is important.
 * However, since this just a basic example I don't want to go through the process of setting up an entire build system to compile my vue modules and es6
 * and give you a bunch of build steps to run.
 * Instead everything is brought in through CDN's and can run once index.html is opened in a browser.
 * Minimal overhead was part of my goal here.
 */
jQuery(document).ready(function () {

    /**
     * Handlers
     */
    $("#username").keydown(function (e) {
        alert("Username")
    });

    $("#password").keydown(function (e) {
        alert("Password");
    });

    /**
     * Submit request via ajax
     */
    $("#signUpButton").click(function (e) {
        // grab the form data for the request
        var formData = $("#signUpForm").serializeArray();
        
        $.ajax({
            url: "/form_signup",
            type: "POST",
            data: formData,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {

            },

            failure: function (err) {

            }
        });
    });
});