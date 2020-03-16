function GetCategoryForSearch() {
    debugger;
    $.ajax({

        type: "POST",
        url: "/Home/GetCategory",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        success: function (data) {

            
        },

    });

}