$(document).ready(function() {
    $('#login-btn').on('click', function() {
        var username = $('#username').val();
        var password = $('#password').val();
        var message = $('#message');

        if (username === '') {
            message.text('Username cannot be empty.');
            alert('Username cannot be empty.')
            $('#username').val('');
            $('#password').val('');
            return;
        }

        if (password.length < 8) {
            message.text('Password must be at least 8 characters long.');
            alert('Password must be at least 8 characters long.')
            $('#username').val('');
            $('#password').val('');
            return;
        }

        // Login successful message
        message.text('Login successful.');
        $('#username').val('');
        $('#password').val('');
    });
});
