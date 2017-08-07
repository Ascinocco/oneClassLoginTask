/**
 * Normally I'd use VueJS or Angular for my client side app's, especially if reactivity and feeling quick is important.
 * However, since this just a basic example I don't want to go through the process of setting up an entire build system to compile my vue modules and es6
 * and give you a bunch of build steps to run.
 * Instead everything is brought in through CDN's and can run once index.html is opened in a browser.
 * Minimal overhead was part of my goal here.
 */
jQuery(document).ready(function () {
    
    var usernameValid = false;
    var passwordValid = false;

    /**
     * Hide username and password validation on ready 
     */
    $("#usernameError").hide();
    $("#passwordError").hide();

    /**
     * Inject error content into DOM after elements are hidden
     * to avoid a jerky annimation 
     */
    $("#usernameError").append(`
        <span>Username can only contain numbers and letters</span>
    `);

    $("#passwordError").append(`
        <span>Password must be between 6 and 20 characters</span>
    `);

    /**
     * Handlers
     */
    $("#username").keyup(function (e) {
        var username = $("#username").val();

        if (/^[a-zA-Z0-9]+$/.test(username) || username == "") {
            $("#usernameError").fadeOut("slow");
            usernameValid = true;
        } else {
            $("#usernameError").fadeIn("slow");
            usernameValid = false;
        }
    });

    $("#password").keyup(function (e) {
        var password = $("#password").val();

        if (password.length < 6 || password.length > 20) {
            $("#passwordError").fadeIn("slow");
            passwordValid = false;
        } else {
            $("#passwordError").fadeOut("slow");
            passwordValid = true;
        }
    });

    /**
     * Submit request via ajax
     */
    $("#signUpButton").click(function (e) {
        // grab the form data for the request
        var formData = $("#signUpForm").serializeArray();

        console.log(formData);

        /**
         * Make sure at least one subject has been selected
         */
        var subjCount = 0;
        for (var field in formData) {
            if (formData[field].name.indexOf("subj_") !== -1) {
                subjCount++;
                break;
            }
        }

        if (subjCount <= 0) {
            $("#alertDangerContainer").append(`
                <div class="alert alert-danger">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <p class="oneClass-AlertFont">You must choose at least one subject.</p>
                </div>
            `);
        } else if (passwordValid == false || usernameValid == false) {
            $("#alertDangerContainer").append(`
                <div class="alert alert-danger">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <p class="oneClass-AlertFont">Check your credentials!</p>
                </div>
            `);
        } else {
            $.ajax({
                url: "/form_signup",
                type: "POST",
                data: formData,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    /**
                     * This will never display because the request will always error out because there is no server
                     * It's here just to show you an idea of what would be displyed if this actually worked.
                     */
                    $("#alertSuccessContainer").append(`
                        <div class="alert alert-success">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <p class="oneClass-AlertFont">Data sent to server!</p>
                        </div>
                    `);
                },

                error: function (err) {
                    $("#alertDangerContainer").append(`
                        <div class="alert alert-danger">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <p class="oneClass-AlertFont">There is no server implemented! You can't login :P</p>
                        </div>
                    `);
                },

                failure: function (err) {
                    $("#alertDangerContainer").append(`
                        <div class="alert alert-danger">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <p class="oneClass-AlertFont">There is no server. You cannot do that :P</p>
                        </div>
                    `);
                }
            });
        }
    });
});