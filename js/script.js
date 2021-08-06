const regEx = `^(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$
`;
const emailInput = document.getElementById("email");


function test() {
    console.log("Hi TEST!!!!!");
    // emailInput.pattern = regEx;
}

window.onload = test();


function hide() {

    document.getElementById("form").style.display = "none";


}

// function show() {
//     document.getElementById("form").style.display = "flex";

// }




function validateForm() {
    var fieldName = document.forms["form"]["fullname"].value;
    var fieldPhone = document.forms["form"]["phone"].value;
    var fieldMessage = document.forms["form"]["message"].value;
    if (fieldName == null || fieldName == "") {
        alert("فیلد نام نباید خالی باشد");
        return false;
    } else if (fieldPhone == null || fieldPhone == "") {
        alert("فیلد تلفن نباید خالی باشد");
        return false;
    } else if (fieldMessage == null || fieldMessage == "") {
        alert("فیلد متن نباید خالی باشد");
        return false;
    }



}