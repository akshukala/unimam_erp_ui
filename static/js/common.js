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
    $("#" + div_id).text(msg).show().fadeOut(5000);
};


function check_address_fields(){
    var state = $("#state").val().trim();
    if (state == ''){
        $("#state").focus()
        show_error('address_error', 'Please Enter State');
        return false;
    };

    var district = $("#district").val().trim();
    if (district == ''){
        $("#district").focus()
        show_error('address_error', 'Please Enter District');
        return false;
    };

    var taluka = $("#taluka").val().trim();
    if (taluka == ''){
        $("#taluka").focus()
        show_error('address_error', 'Please Enter Taluka');
        return false;
    };

    var post_office = $("#post_office").val().trim();
    if (post_office == ''){
        $("#post_office").focus()
        show_error('address_error', 'Please Enter Post Office');
        return false;
    };

    var village = $("#village").val().trim();
    if (village == ''){
        $("#village").focus()
        show_error('address_error', 'Please Enter Village');
        return false;
    };
};
