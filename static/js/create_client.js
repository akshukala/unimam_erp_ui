

function add_mobile(){
            var mobile_no = $('#mobile').val().trim();
            var cleaned_mobile_no = mobile_no;
            var currentNumbers = get_mobile_info('mob');
            if (currentNumbers.indexOf(cleaned_mobile_no) != -1){
                show_error('contact_error', "This contact number is already entered");
                $("#mobile").val('');
                $("#mobile").focus();
                return false;
            };
            if (currentNumbers.length == 10){
                show_error('contact_error', "We can not store more than 10 numbers");
                $("#mobile").val('');
                $("#mobile").focus();
                return false;
            };

            add_mobile_pill(cleaned_mobile_no);
            $("#mobile").val('');
        }

        function add_mobile_pill(mobile_no){
            var pill = "<span class='pill' mob='" + mobile_no + "'>";
            pill += mobile_no;
            pill += "<a onclick='remove_pill(this)' href='javascript:void(0)'>";
            pill += "<i class='glyphicon glyphicon-remove-sign'></i></a></span>";
            $("#mobile_numbers").append(pill);
        }

        function get_mobile_info(attr){
            var numbers = [];
            $("#mobile_numbers .pill").each(function(){
                ml = this.getAttribute(attr);
                numbers.push(ml);
            });
            return numbers;
        };

        function add_whatsapp(){
            var whatsapp_no = $('#whatsapp').val().trim();
            var cleaned_whatsapp_no = whatsapp_no;
            var currentNumbers = get_whatsapp_info('whatsapp');
            if (currentNumbers.indexOf(cleaned_whatsapp_no) != -1){
                show_error('contact_error', "This contact number is already entered");
                $("#whatsapp").val('');
                $("#whatsapp").focus();
                return false;
            };
            if (currentNumbers.length == 10){
                show_error('contact_error', "We can not store more than 10 numbers");
                $("#whatsapp").val('');
                $("#whatsapp").focus();
                return false;
            };

            add_whatsapp_pill(cleaned_whatsapp_no);
            $("#whatsapp").val('');
        }

        function add_whatsapp_pill(whatsapp_no){
            var pill = "<span class='pill' whatsapp='" + whatsapp_no + "'>";
            pill += whatsapp_no;
            pill += "<a onclick='remove_pill(this)' href='javascript:void(0)'>";
            pill += "<i class='glyphicon glyphicon-remove-sign'></i></a></span>";
            $("#whatsapp_numbers").append(pill);
        }

        function get_whatsapp_info(attr){
            var numbers = [];
            $("#whatsapp_numbers .pill").each(function(){
                ml = this.getAttribute(attr);
                numbers.push(ml);
            });
            return numbers;
        };

        function add_landline(){
            var landline_no = $('#landline').val().trim();
            var cleaned_landline_no = landline_no;
            var currentNumbers = get_landline_info('landline');
            if (currentNumbers.indexOf(cleaned_landline_no) != -1){
                show_error('contact_error', "This contact number is already entered");
                $("#landline").val('');
                $("#landline").focus();
                return false;
            };
            if (currentNumbers.length == 10){
                show_error('contact_error', "We can not store more than 10 numbers");
                $("#landline").val('');
                $("#landline").focus();
                return false;
            };

            add_landline_pill(cleaned_landline_no);
            $("#landline").val('');
        }

        function add_landline_pill(landline_no){
            var pill = "<span class='pill' landline='" + landline_no + "'>";
            pill += landline_no;
            pill += "<a onclick='remove_pill(this)' href='javascript:void(0)'>";
            pill += "<i class='glyphicon glyphicon-remove-sign'></i></a></span>";
            $("#landline_numbers").append(pill);
        }

        function get_landline_info(attr){
            var numbers = [];
            $("#landline_numbers .pill").each(function(){
                ml = this.getAttribute(attr);
                numbers.push(ml);
            });
            return numbers;
        };


        function remove_pill(parent){
            $(parent).closest('.pill').remove();
        }