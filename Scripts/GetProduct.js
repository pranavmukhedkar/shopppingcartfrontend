function DisplayProduct(categoryId) {
    debugger;
    $.ajax({

        type: "POST",
        url: "/Home/GetProduct?id=" + categoryId,
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        success: function (data) {

            $(".list-unstyled").find("li").remove();
            //$("#ddlState").append("<option selected=selected value='0'>Select State</option>");
            if (data != null)
            {
                $.each(data, function (index, value) {
                    $(".list-unstyled").append('<li><a href="/Home/GetProduct?id=' + value.ProductId + '">' + value.ProductName + '</a><li>');
                });
            }
            else
            {
                $(".list-unstyled").hide();
            }
        },

    });

}