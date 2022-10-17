function getData() {
    let data = {};
    data.firstName = document.getElementById("fname").value;
    data.lastName = document.getElementById("lname").value;
    data.age = document.getElementById("age").value;
    data.password = document.getElementById("password").value;
 
    if (document.getElementById("malecheck").checked) {
        data.gender = "Male";
    } else if (document.getElementById("femalecheck").checked) {
        data.gender = "Female";
    } else {
        data.gender = null;
    }

    let select = document.getElementById("country");
    data.country = select.options[select.selectedIndex].value;


    confirm( JSON.stringify(data, null , "\n") );
}
