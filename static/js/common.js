function isValidEmailAddress(emailAddress)
{
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function ConvertFormToJSON(form){
    var array = $(form).serializeArray();
    var json = {};

    $.each(array, function() {
        json[this.name] = this.value || '';
    });

    return json;
};

function validateMobileNumber(field) {
    if (field.match(/^\d{10}$/)) {
        return true;
    };
    return false;
};

function cleanName(name){
    cleanedName = name.replace(/[^a-zA-Z]/g, '');
    if (cleanedName.length > 2){
        return true;
    }
    return false;
};

function cleanMobileNumber(field) {
    cleanField = field.replace(/\D+/g, '');
    if (cleanField.length == 11 && cleanField[0] == "0"){
        return cleanField.slice(1);
    }
    else if (cleanField.length == 12 && cleanField.slice(0,2) == "91"){
        return cleanField.slice(2);
    }
    return cleanField;
};

function show_error(div_id, msg){
    $("#" + div_id).text(msg).show();
};


function check_address_fields(){
    
    var address_line1 = $("#address_line1").val().trim();
    if (address_line1 == ''){
        $("#address_line1").focus();
        show_error('address_error', 'Please Enter address_line1');
        return false;
    };

    var area = $("#area").val().trim();
    if (area == ''){
        $("#area").focus();
        show_error('address_error', 'Please Enter Area');
        return false;
    };

    var city = $("#city").val().trim();
    if (city == ''){
        $("#city").focus();
        show_error('address_error', 'Please Enter City');
        return false;
    };

    var pin = $("#pin_code").val().trim();
    if (pin == ''){
        $("#pin_code").focus()
        show_error('address_error', 'Please Enter Pin Code');
        return false;
    };
    
    var state = $("#state").val().trim();
    if (state == ''){
        $("#state").focus();
        show_error('address_error', 'Please Enter State');
        return false;
    };
    
};
