$(document).ready(function () {
    initializePage();
});

function initializePage() {
    $('#btnLogin').on('click', function (e) {
        e.preventDefault();
        var user = $('#txtUserID').val();
        var pass = $('#txtPassword').val();

        var user = {
            UserID: user,
            Password: pass
        };

        submit(user);
    });

    $('#lblSign').hide();
}

function submit(user) {
    $('#lblSign').hide();

    $.ajax({
        url: "../../Login/Validate",
        type: "POST",
        dataType: "JSON",
        cache: false,
        reloadAfterSubmit: false,
        data: JSON.stringify(user),
        contentType: 'application/json; charset=utf-8',
        loadonce: true,
        success: function (returnData) {
            if (returnData.ok) {
                $('#lblSign').hide();
                window.location.href = returnData.newurl;
            }
            else if (returnData.message == "User Deleted") {
                $('#lbldelete').show();
            }
            else {
                $('#lblSign').show();
            }
        }
    });
}