$(function(){
    $(".ac_mobile").autocomplete({
        source: function(request, response){
            var crm_service_url = localStorage.getItem("crm_service_url");
            var autocomplete_url = crm_service_url + "autocomplete/";
            $.ajax({
                url: autocomplete_url,
                type:'get',
                data : {
                    "term": request.term,
                    "type" : "mobile"
                },
                success:function(data){
                    response(data["responseData"]);
                }
            });
        },
        select: function(event, ui) {
            if (ui.item.farmer_id != ""){
                window.location = "/crm/farmer/edit/" + ui.item.farmer_id;
            }
        }
    }).focus(function(){
        $(this).autocomplete("search", $(this).val());
    });
});

$(".ac_state").autocomplete({
    source: ['Maharashtra', 'Gujarat', 'Rajasthan'],
    change: function(event,ui){
        if (ui.item==null){
                $("#state").val('');
                $("#state").focus();
            }
        }
});

$(".ac_district").autocomplete({
    source: function(request, response) {
        var crm_service_url = localStorage.getItem("crm_service_url");
        var autocomplete_url = crm_service_url + "autocomplete/";
        $.ajax({
            url: autocomplete_url,
            type : "get",
            data :{
                "type": "district",
                "term": request.term,
                "state": $('#state').val()
            },
            success:function(data){
                response(data["responseData"]);
            }
        });
    },
    change: function(event,ui){
        if (ui.item==null){
                $("#district").val('');
                $("#district").focus();
            }
        }
});

$(".ac_taluka").autocomplete({
    source: function(request, response) {
        var crm_service_url = localStorage.getItem("crm_service_url");
        var autocomplete_url = crm_service_url + "autocomplete/";
        $.ajax({
            url: autocomplete_url,
            type : "get",
            data :{
                "type": "taluka",
                "term": request.term,
                "state": $('#state').val(),
                "district": $('#district').val()
            },
            success:function(data){
                response(data["responseData"]);
            }
        });
    },
    change: function(event,ui){
        if (ui.item==null){
                $("#taluka").val('');
                $("#taluka").focus();
            }
        }
});

$(".ac_post_office").autocomplete({
    source: function(request, response) {
        var crm_service_url = localStorage.getItem("crm_service_url");
        var autocomplete_url = crm_service_url + "autocomplete/";
        $.ajax({
            url: autocomplete_url,
            type : "get",
            data :{
                "type": "post_office",
                "term": request.term,
                "state": $('#state').val(),
                "district": $('#district').val(),
                "taluka": $('#taluka').val()
            },
            success:function(data){
                response(data["responseData"]);
            }
        });
    },
    select: function(event, ui) {
        $("#pin_code").val(ui.item.pin_code);
    }
});

$(".ac_village").autocomplete({
    source: function(request, response) {
        var crm_service_url = localStorage.getItem("crm_service_url");
        var autocomplete_url = crm_service_url + "autocomplete/";
        console.log(autocomplete_url);
        $.ajax({
            url: autocomplete_url,
            type : "get",
            data :{
                "type": "village",
                "term": request.term,
            },
            success:function(data){
                response(data["responseData"]);
            }
        });
    },
    select: function(event, ui) {
        $("#state").val(ui.item.state);
        $("#district").val(ui.item.district);
        $("#taluka").val(ui.item.taluka);
        $("#post_office").val(ui.item.post_office);
        $("#pin_code").val(ui.item.pin_code);
        $("#village").val(ui.item.value);
        if (ui.item.taluka == "NA"){
            $("#taluka").focusout();
        };
    }
});


$(".ac_crop").autocomplete({
    source: function(request, response) {
        var crm_service_url = localStorage.getItem("crm_service_url");
        var autocomplete_url = crm_service_url + "autocomplete/";
        $.ajax({
            url: autocomplete_url,
            type : "get",
            data :{
                "type": "crop",
                "term": request.term,
            },
            success:function(data){
                response(data["responseData"]);
            }
        });
    },
});


$(".ac_catalogue").autocomplete({
    source: function(request, response){
        var catalog_service_url = localStorage.getItem("crm_service_url");
        var autocomplete_url = catalog_service_url + "catalogcomplete/";
        $.ajax({
            url: autocomplete_url,
            type:'get',
            data : {"name": request.term},
            success:function(data) {
                var availableTags = [];
                for(var x = 0;x<data['responseData'].length;x++){
                	availableTags.push(data['responseData'][x]['item_sku']
                						+'-'+data['responseData'][x]['name']
                						+'-'+data['responseData'][x]['mrp']
                						+'-'+data['responseData'][x]['sellingPrice']);
                }           
                $( "#item_name" ).autocomplete({
                  source: availableTags
                 
                });
                
               
                
                                 }
        });
    },
    select: function(event, ui) {
    	
    	var values = JSON.stringify(ui.item['value']).split('-');
    	var mrp = values[2]
    	var selling_price = values[3].replace('"','')
    	var sku = values[0]
        $("#add").prop('disabled', true);
        //$("#sku").val(sku);
        $("#item_name").val(ui.item.product_name);
        $("#selling_price").val(selling_price);
        $("#list_price").val(mrp);
        $("#qty").val('1');
        //$("#discount").val('0');
        var quantity = document.getElementById('qty').value;
 
        var net_price = parseInt(selling_price);
        $("#net_price").val(net_price);
        //$("#add").addClass('disabled');
        //get_inventory(ui.item.sku_code, $("#qty_stock"));
    },
    change: function(event,ui){
        if (ui.item==null){
            clear_product_row();
        }
    }
});

/*function get_inventory(sku, qty_stock){
    var catalog_service_url = localStorage.getItem("catalog_service_url");
    $.ajax({
        url: catalog_service_url + "inventory/",
        headers: {'X-Authorization-Token':"{{request.session.userservice_key}}"},
        type: 'get',
        dataType: 'json',
        data : JSON.stringify({"sku": sku}),
        success : function(data)
        {
            if (data.data){
                inventory = data.data.Inventory.inventory;
                qty_stock.val(inventory);
            }
            else{
                show_error('cart_error', "Error in Getting Inventory Information");
            }
            $("#add").removeClass('disabled');
        },
        error : function(data)
        {
            $("#add").removeClass('disabled');
            show_error('cart_error', "Error in Getting Inventory Information");
        },
    });
}*/

$(".ac_order").autocomplete({
    source: function(request, response) {
        var ordermanagement_url = localStorage.getItem("ordermanagement_service_url");
        var autocomplete_url = ordermanagement_url + "autocomplete/";
        $.ajax({
            url: autocomplete_url,
            type : "get",
            data :{
                "term": request.term,
            },
            success:function(data){
                response(data["responseData"]);
            }
        });
    },
    select: function(event, ui) {
        window.location = '/crm/salesorder/view/' + ui.item.value;
    }
});
