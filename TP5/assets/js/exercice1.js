$(document).ready(function() {
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const errorDiv = $('#error-message');
    const successDiv = $('#success-message');

    function validateInput(input) {
        if (input.val().length === 0) {
            input.addClass('error-border');
        } else {
            input.removeClass('error-border');
        }

        if (input.val().length > 255) {
            input.addClass('error-border');
        }
    }

    usernameInput.on('input', function() {
        validateInput(usernameInput);
    });

    passwordInput.on('input', function() {
        validateInput(passwordInput);
    });

    $('#login-form').submit(function(event) {
        event.preventDefault();

        const username = usernameInput.val();
        const password = passwordInput.val();

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    successDiv.html(response.message);
                    $('#login-form').hide();
                    successDiv.show();
                } else {
                    errorDiv.html(response.message);
                    errorDiv.show();
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                errorDiv.html('Une erreur s\'est produite lors de la requête AJAX : ' + errorThrown);
                errorDiv.show();
                successDiv.hide();
            }
        });
    });
});
