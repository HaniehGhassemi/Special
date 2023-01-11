let poolPlan = [];
let day = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" , 7: "Sunday"};

function createTable () {
    let string = "";
    let column = document.getElementById("column").value;
    let id = 1;

    let thead = `<thead><tr><th></th>`;
    for (let i = 0; i < column; i++) {
        thead +=  `<th>${i+1}</th>`;
    }
    document.getElementById("pool").innerHTML += thead +`</tr></thead><tbody>`;

    for (let i = 1; i <= 7; i++) {
        let stringTable = [];
        string +=`<tr><td>${day[i]}</td>`;
        for (let j = 0; j < column; j++) {
            stringTable.push(id);
            string += `<td class="select"><button class="button2" id=${id} onclick=genderChanger(${id++})>Female</button></td>`;
        }
        poolPlan.push(stringTable);
    }
    document.getElementById("pool").innerHTML += string +`<tr></tbody>`;
}


function genderChanger (id) {
    let gender = document.getElementById(id).innerHTML;
    switch (gender){
        case "Female":
            document.getElementById(id).innerHTML = "Male";
            break;
        case "Male":
            document.getElementById(id).innerHTML = "Closed";
            break;
        case "Closed":
            document.getElementById(id).innerHTML = "Female";
            break;
    }
}

function StringData () {
    let Data = "";
    for(i = 0; i < poolPlan.length; i++) {
        for(j = 0; j < poolPlan[0].length; j++){
            let value = document.getElementById(poolPlan[i][j]).innerHTML;
            if(value == "Female") {
                Data += "1";
            } else if (value == "Male") {
                Data += "2";
            } else {
                Data += "3";
            }
            
        }
    }
    document.getElementById("saveData").value = Data.toString();
   return Data.toString();
}


function showTable (data) {
    let toArray = data.split(",");
    let genderObject = {1: "Female", 2: "Male", 3: "Closed"}
    let column = toArray.length / 7;
    document.getElementById("pool").innerHTML = "";
    let thead = `<thead><tr><th></th>`
    for (let i = 0; i < column; i++) {
        thead += `<th>${i+1}</th>`
    }
    document.getElementById("pool").innerHTML += thead + `</tr></thead>`;

    let tbody = "<tbody>";
    let variable = 0;
    let id = 1;
    let Capacity = 100;
    for (let i = 1; i <= 7; i++) {
        tbody +=`<tr><td>${day[i]}</td>`;
        let dayGender = [];
        for (let j = 0; j < column; j++) {
            dayGender.push(id);
            tbody += `<td class="select"><button class="button2" id=${id} onclick="getId(${id++})">Gender: ${genderObject[toArray[variable++]]} \n Capacity: ${Capacity} </button></td>`;  
        }
        tbody += "</tr>";
        poolPlan.push(dayGender)
    }
    
    document.getElementById("pool").innerHTML += tbody +`</tbody>`;
}


function getId (id) {
    document.getElementById("idbtn").value = id;
}


function reloadData (id,num) {
    let string = document.getElementById(id).innerHTML;
    let index = string.lastIndexOf(":");
    let number = string.slice(index+2);
    number -= num;
    string = string.slice(0, index+2);
    string = string + number;
    document.getElementById(id).innerHTML = string;
}

