$(function () {
    $("#form").submit(function (event) {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checkbox = $("#checkbox");

        validateNameField(name, event);
        validatePasswordField(password, event);
        isChecked(checkbox, event);

    })
})


function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least two characters");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }
}

function isValidName(name) {
    return name.trim().length >= 2;
    //check for characters, no spaces, etc.

}

function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $('#password-feedback').text("Please enter a password that is atleast 8 characters.")
        event.preventDefault();
    } else {
        $("password-feedback").text("");
    }
}

function isValidPassword(password) {
    return password.length >= 8;
}

function isChecked(checkbox, event) {
    var isChecked = checkbox.is(":checked");
    console.log(isChecked);
    if (isChecked) {
        checkbox.add("label[for='cb']").css("box-shadow", '0 0 4px green')
    } else {
        checkbox.add("label[for='cb']").css("box-shadow", '0 0 4px red')
    }
}
