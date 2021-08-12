window.onload();

function hide() {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function show() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form-container").style.display = "block";

}


//this funcation validates the phone number
function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}

function validateForm(event) {
    var phone = document.getElementById("phone").value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById("phone_error").classList.remove("hidden");
    } else {
        document.getElementById("phone_error").classList.add("hidden");

    }
    event.preventDefault();
}

document.getElementById("form").addEventListener("submit", validateForm);
//phone number validation ends


//this funcation check our input boxs validation
function validateForm(string) {
    //array spam name
    validChar = ["spam", "jerk", "trumpt", "سوسک", "دوشواری"];
    //input box value
    strlen = string.length;
    //length of our array
    arrlen = validChar.length;
    //get input boxes value
    var block = document.getElementById("fullname");
    var fieldName = document.forms["form"]["fullname"].value;
    var fieldPhone = document.forms["form"]["phone"].value;
    var fieldMessage = document.forms["form"]["message"].value;
    //end of get our input boxes value***********************
    //check value of input boxes

    if (fieldName == null || fieldName == "") {
        alert("فیلد نام نباید خالی باشد");
        block.style.borderColor = "red";
        return false;
    } else if (fieldPhone == null || fieldPhone == "") {
        alert("فیلد تلفن نباید خالی باشد");
        return false;
    } else if (fieldMessage == null || fieldMessage == "") {
        alert("فیلد متن نباید خالی باشد");
        return false;
    }
    if (strlen <= 1) {
        alert("لطفا یک عبارت معتبر وارد کنید");
        block.style.borderColor = "red";
        return false;
    }
    //invalid name part
    for (i = 0; i < arrlen; i++) {
        if (validChar[i] == string) {
            alert("شما مجاز به استفاده از این نام نیستید");
            block.style.borderColor = "red";
            return false;
        }
    }



    var fieldName = (document.forms["form"]["fullname"].value = "");
    var fieldPhone = (document.forms["form"]["phone"].value = "");
    var fieldPhone = (document.forms["form"]["email"].value = "");
    var fieldMessage = (document.forms["form"]["message"].value = "");

    var check = confirm("آیا از صحت اطلاعات مطمين هستید؟");
    if (check == 0) {
        return false;
        alert("فرم ارسال نشد");
    } else if (check == 1) {

        swal({
            title: "فرم شما با موفقیت ارسال شد",
            text: "لطفاْ بر روی دکمه تایید کلیک کنید",
            icon: "success",
            button: "تایید",
        });
    }
}

//change color of imput boxes
function ChangeColor(string) {
    strlen2 = string.length;
    var block = document.getElementById("fullname");
    if (strlen2 > 1) {
        block.style.borderColor = "green";
        strlen2 = "";
    }
}

//exit of form with press ESC
document.addEventListener("keyup", function(e) {
    e.preventDefault();

    if (e.keyCode == 27) {
        // 27 is unicode for "Esc" key
        document.getElementById("form").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
});