const regEx = `^(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$
`;
const emailInput = document.getElementById("email");


function test() {
    console.log("Hi TEST!!!!!");
    // emailInput.pattern = regEx;
}


// function emailValidate(form, email) {
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     var address = document.forms[form].elements[email].value;
//     if (reg.test(address) == false) {
//         alert('آدرس ایمیل وارد شده نامعتبر است');
//         return false;
//     }
// }


window.onload = test();


function hide() {

    document.getElementById("form").style.display = "none";


}

// function show() {
//     document.getElementById("form").style.display = "flex";

// }



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

        alert('لطفا یک عبارت معتبر وارد کنید');
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
    alert('فرم شما ارسال شد');
    return true;


}



//change color of imput boxes
function ChangeColor(string) {
    strlen2 = string.length;
    console.log(strlen2);
    var block = document.getElementById('fullname');
    if (strlen2 > 1) {
        block.style.borderColor = "green";

    }

}