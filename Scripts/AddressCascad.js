
$(document).ready(function () {
    

    $("#ddlCountry").change(function () {
        debugger;
        var countryId = $("#ddlCountry").val();
        $.ajax({
            type: "POST",
            url: "/Register/GetStates?id=" + countryId,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            success: function (data) {
                $("#ddlCity").find("option").remove();
                $("#ddlState").find("option").remove();
                
                $("#ddlState").append("<option selected=selected value='0'>Select State</option>");
                $("#ddlCity").append("<option selected=selected value='0'>Select City</option>");
                $.each(data, function (index, value) {

                    $("#ddlState").append('<option value="' + value.StateId + '">' + value.StateName + '</option>');
                });

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error " + XMLHttpRequest + " xhr " + textStatus + " status " + errorThrown);
            },

        });
    });

    $("#ddlState").change(function () {
        var stateId = $("#ddlState").val();
        $.ajax({

            type: "POST",
            url: "/Register/GetCity?id=" + stateId,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            success: function (data) {
                $("#ddlCity").find("option").remove();
                $("#ddlCity").append("<option selected=selected value='0'>Select City</option>");
                $.each(data, function (index, value) {

                    $("#ddlCity").append('<option value="' + value.CityId + '">' + value.CityName + '</option>');
                });

            }

        });

    });
});


