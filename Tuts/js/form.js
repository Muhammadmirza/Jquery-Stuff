$(function () {
    $("#form").submit(function (event) {
        var name = $("#name")
        var password = $("#password").val();
        var message = $("#message").val();
        var checkbox = $("#checkbox");

        var inputFields = $("input[type='email'], input:text, input:password, textarea")
        inputFields.focus(function () {
            $(this).css("box-shadow", "0 0 px #666");
        });

        // inputFields.blur(function () {
        //     var text = $(this).val()
        //     if (text.length <= 3) {
        //         $(this).css("box-shadow", "0 0 8px red");
        //     }
        //     if (text.length >= 3) {
        //         $(this).css("box-shadow", "0 0 8px green");
        //     }
        // });


        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMesageField(message,event);
        isChecked(checkbox, event);

    })
})


function validateNameField(name, event) {
    if (!isValidName(name.val())) {
        $("#name-feedback").text("Please enter at least two characters");
        $('#name').css("box-shadow", '0 0 4px red')
        event.preventDefault();
    } else {
        $('#name').css("box-shadow", 'none')
        $("#name-feedback").text("");
    }
}

function isValidName(name) {
    return name.trim().length >= 2;
    //check for characters, no spaces, etc.

}

function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $('#password-feedback').text("Please enter a password that is atleast 8 characters and contain atleast one number.")
        $('#password').css("box-shadow", '0 0 4px red')
        event.preventDefault();
    } else {
        $('password').css("box-shadow", "none")
        $("#password-feedback").text("");
    }
}

function validateMesageField(message, event) {
    if (!isValidMessage(message)) {
        $('#message-feedback').text("Enter a message!")
        $('#message').css("box-shadow", '0 0 4px red')
        event.preventDefault();
    } else {
        $('message').css("box-shadow", "none")
        $("#message-feedback").text("");
    }
}

function isValidMessage(message) {
    return message.trim() != "";
}

function isValidPassword(password) {
    return password.length >= 8 && /.*[0-9].*/.test(password);
}



function isChecked(checkbox,event) {
    var isChecked = checkbox.is(":checked");
    if (isChecked) {
        checkbox.add("label[for='cb']").css("box-shadow", 'none')
        $('#checkbox-feedback').text("")
    } else {
        checkbox.add("label[for='cb']").css("box-shadow", '0 0 4px red')
        $('#checkbox-feedback').text("Please Agree to this!")
        event.preventDefault();
    }
}