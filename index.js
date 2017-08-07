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