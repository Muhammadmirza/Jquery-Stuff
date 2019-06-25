$(function () {

    var form = $("#form");
    enableFastFeedback(form);

    form.submit(function (event) {
        var name = $("#name").val()
        var password = $("#password").val();
        var message = $("#message").val();
        var checkbox = $("#checkbox").is(":checked");

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checkbox, event);
    })

    function enableFastFeedback(formElement) {
        var nameInput = formElement.find("#name");
        var passwordInput = formElement.find("#password");
        var messageInput = formElement.find("#message");
        var checkboxInput = formElement.find("#checkbox");

        nameInput.blur(function () {
            var name = nameInput.val();
            validateNameField(name, event);
            highlight($(this), isValidName(name));
        })

        passwordInput.blur(function () {
            var password = passwordInput.val();
            validatePasswordField(password, event);
            highlight($(this), isValidPassword(password));
        })

        messageInput.blur(function () {
            var message = messageInput.val();
            validateMessageField(message, event);
            highlight($(this), isValidMessage(message));
        })

        checkboxInput.change(function () {
            var isChecked = $(this).is(":checked");
            validateCheckboxField(isChecked, event)
            highlight($(this), isChecked);
        })

    }
})

function highlight(element, isValid) {
    var color = "#811"; //red
    if (isValid) {
        color = "#181";
    }

    element.css("box-shadow", "0 0 4px" + color);
}

function isValidName(name) {
    return name.trim().length >= 2;
}

function isValidMessage(message) {
    return message.trim() != "";
}

function isValidPassword(password) {
    return password.length >= 8 && /.*[0-9].*/.test(password);
}

function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least two characters");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }
}

function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $('#password-feedback').text("Please enter a password that is atleast 8 characters and contain atleast one number.")
        event.preventDefault();
    } else {
        $("#password-feedback").text("");
    }
}

function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
        $('#message-feedback').text("Enter a message!")
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
}


function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
        $("#checkbox-feedback").text("Please agree to this.");
        event.preventDefault();
    } else {
        $("#checkbox-feedback").text("");
    }
}