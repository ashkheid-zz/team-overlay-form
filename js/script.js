//hide form
function hide() {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
//show form
function show() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form-container").style.display = "block";

}

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
    var fieldEmail = document.forms["form"]["email"].value;
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
    } else if (fieldEmail == null || fieldEmail == "") {
        alert("فیلد ایمیل نباید خالی باشد");
        return false;
    }
    //check phone validation
    if (fieldPhone != null || fieldPhone != "") {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        const phone = document.getElementById('phone');
        const phonerror = document.getElementById('phonerror');
        phonerror.textContent = '';
        if (!re.test(phone.value)) {
            phonerror.style.color = "red";
            phone.style.borderColor = "red";
            phonerror.textContent = 'لطفاً یک شماره معتبر وارد کنید';
            return false;
        } else {
            phonerror.textContent = '';
            phone.style.borderColor = "green";
        }
    }
    //check email validation
    if (fieldEmail != null || fieldEmail != "") {
        const email = document.getElementById('email');
        const emailerror = document.getElementById('emailerror');
        const simpleEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        emailerror.textContent = '';
        if (!simpleEmail.test(email.value)) {
            emailerror.style.color = "red";
            email.style.borderColor = "red";
            emailerror.textContent = 'لطفاً یک ایمیل معتبر وارد کنید';
            return false;
        } else {
            emailerror.textContent = '';
            email.style.borderColor = "green";
        }
    }
    //check name input box 
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


    //reset all input boxes after send form
    var fieldName = (document.forms["form"]["fullname"].value = "");
    var fieldPhone = (document.forms["form"]["phone"].value = "");
    var fieldPhone = (document.forms["form"]["email"].value = "");
    var fieldMessage = (document.forms["form"]["message"].value = "");
    //get confirm from the user to send form
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
        //styles to the input boxes when everthings is ok
        email.style.borderColor = "gray";
        email.style.border = "1px solid";
        block.style.borderColor = "black";
        block.style.border = "1px solid";
        phone.style.borderColor = "black";
        phone.style.border = "1px solid";
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