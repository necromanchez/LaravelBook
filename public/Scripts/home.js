$(document).ready(function () {
    initializePage();
});

function initializePage() {
    $('#btnSave').on('click', btnSave_Click);
}

// == EVENTS == //
function btnSave_Click() {
    var oldPassword = $('#txtOldPassword').val();
    var newPassword = $('#txtNewPassword').val();
    var confirmPassword = $('#txtConfirmPassword').val();

    if (newPassword == confirmPassword) {
        if (oldPassword != newPassword) {
            var passwords = {
                OldPassword: oldPassword,
                NewPassword: newPassword
            };

            savePassword(passwords);
        }
        else {
            // TODO: Modal alert.
        }
    }
    else {
        // TODO: Modal alert.
    }
}

// == HELPERS == //
function savePassword(passwords) {
    $.ajax({
        url: "../../Home/SavePassword",
        type: "POST",
        dataType: "JSON",
        cache: false,
        reloadAfterSubmit: false,
        data: JSON.stringify(passwords),
        contentType: 'application/json; charset=utf-8',
        loadonce: true,
        success: function (returnData) {
            if (returnData.ok) {
                alert(returnData.message);
            }
            else{
                alert(returnData.message);
            }
        }
    });
}