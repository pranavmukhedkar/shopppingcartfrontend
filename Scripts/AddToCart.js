function AddToCart(id, quantity) {
    debugger;
        var productId = id;
        //if (quantity == 0)
        //{
        //    var quantity = $("#input-quantity").val();
        //}
        $.ajax({
            type: 'POST',
            url: "/AddToCart/Index?id=" + productId + "&quantity=" + quantity,
            contentType: 'application/json; charset=utf-8',
            datatype: 'json',
            success: function (data) {
                $("#cart-total").html(data.Quantity + " item(s)- Rs." + data.Price);

                //show the success massege of adding product in the cart.
                $("#successBox").removeClass('hidden');
                //$(".alert").show();
                $("#ProductName").html(data.ProductName);
                $("#ProductId").attr("href", "../Product/Index?id=" + data.ProductId);


                //go to the top of page after adding product in the cart.
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            },
            error: function () {
                url: "/AddToCart/Index?id=" + productId + "&quantity=" + quantity;
            }
        });
    };

//remove product from dilog box.
function RemoveProduct(id) {
        $.ajax({
            type: 'POST',
            url: "/AddToCart/RemoveProduct?id=" + id,
            contentType: 'application/json; charset=utf-8',
            datatype: 'json',
            success: function (data) {
                $("#cart-total").html(data.Quantity + " item(s)-Rs." + data.Price);
            },
            error: function () {
                alert("Error");
            }
        });
    };

//Add product in the cart on shopping cart page.
    function AddItems(id,quantity) {
        debugger;
        if (quantity != 0)
        {
            $.ajax({
                type: 'POST',
                url: "/ShoppingCart/UpdateProductQuantity?id=" + id + "&quantity=" + quantity,
                contentType: 'application/json; charset=utf-8',
                datatype: 'json',
                success: function (data) {
                    debugger;
                    $("#price_"+id).html("RS. "+ data.Price)
                    $("#totalprice_" + id).html("Rs. " + data.TotalPrice)
                    $.ajax({
                        type: "POST",
                        url: "/AddToCart/GetTotal",
                        contentType: 'application/json; charset=utf-8',
                        datatype: 'json',
                        success: function (data) {
                            debugger;
                            $("#TotalProductPrice").html(data.Price)
                            $("#cart-total").html(data.Quantity + " item(s)-Rs." + data.Price);

                            $("#Quantity").removeClass("hidden")
                            $("#Quantity").removeClass("alert-danger")
                            $("#Quantity").addClass("alert-success")
                            $("#quantity-error").html("Cart updated succesfully")
                        },


                    });
                    //$("#cart-total").html(data.Quantity + " item(s)- Rs." + data.Price);

                    ////show the success massege of adding product in the cart.
                    //$(".alert").show();
                    //$("#ProductName").html(data.ProductName);
                    //$("#ProductId").attr("href", "../Product/Index?id=" + data.ProductId);

                    ////go to the top of page after adding product in the cart.
                    //document.body.scrollTop = document.documentElement.scrollTop = 0;
                },
                error: function () {
                    //url: "/AddToCart/Index?id=" + productId + "&quantity=" + quantity;
                    //alert("Error");
                }
            });
        }
        else
        {
            $("#Quantity").removeClass("hidden")
            $("#Quantity").addClass("alert-danger")
            $("#quantity-error").html("Quantity should be greter than zero")
        }


    };


//Remove product from the cart on shopping cart page.
    function RemoveItem(id) {
      
        debugger;
        $.ajax({
            type: 'POST',
            url: "/ShoppingCart/RemoveProduct?id=" + id,
            contentType: 'application/json; charset=utf-8',
            datatype: 'html',
            success: function (data) {
                debugger;
                $("#row_" + id).remove();
                $.ajax({
                    type: "POST",
                    url: "/AddToCart/GetTotal",
                    contentType: 'application/json; charset=utf-8',
                    datatype: 'json',
                    success: function (data) {
                   
                        $("#cart-total").html(data.Quantity + " item(s)-Rs." + data.Price);
                        $("#TotalProductPrice").html(data.Price);
                    },


                });

            },
            error: function () {
                alert("Error");
            }
        });
    };

    $(document).ready(function () {


        //Display pop up on click of product quantity and price bar.
        $("#cart").click(function () {
            $.ajax({
                type: 'POST',
                url: "/AddToCart/_ProductList",
                //contentType: 'application/json; charset=utf-8',
                datatype: 'html',
                success: function (data) {
                    $("#ProductList").html(data);
                },
                //error: function () {
                //    alert("Error");
                //}
            });
        });
    
        //Ajax call for getting totle no of product and total price for display on the bar
            $.ajax({
                type: 'POST',
                url: "/AddToCart/GetTotal",
                //contentType: 'application/json; charset=utf-8',
                datatype: 'json',
                success: function (data) {
                    $("#cart-total").html(data.Quantity + " item(s)-Rs."+data.Price);
                },

                //error: function () {
                //    alert("Error");
                //}

            });

    });
