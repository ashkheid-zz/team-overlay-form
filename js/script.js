function validateForm() {
    var fieldName = document.forms["form"]["name"].value;
    var fieldPhone = document.forms["form"]["phone"].value;
    var fieldTextarea = document.forms["form"]["textarea"].value;
    var fieldEmail = document.forms["form"]["email"].value;
    if (fieldName == null || fieldName == "") {
        alert("فیلد نام نباید خالی باشد");
        return false;
    } else if (fieldPhone == null || fieldPhone == "") {
        alert("فیلد تلفن نباید خالی باشد");
        return false;
    } else if (fieldTextarea == null || fieldTextarea == "") {
        alert("فیلد متن نباید خالی باشد");

        return false;
    } else if (fieldEmail == null || fieldEmail == "") {
        alert("فیلد ایمیل نباید خالی باشد");
        return false;
    }
}

function hide() {

    document.getElementById("form").style.display = "none";


}

function show() {
    document.getElementById("form").style.display = "flex";

}