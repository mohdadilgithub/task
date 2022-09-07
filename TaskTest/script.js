function onFormSubmit(){
 var formData = readFormData();
 insertNewRecord(formData);
 
}
function readFormData() {
    var formData = {};
    formData['fullname'] = document.getElementById('fullname').value;
    formData['empcode'] = document.getElementById('empcode').value;
    formData['salary'] = document.getElementById('salary').value;
    formData['city'] = document.getElementById('city').value;
    return formData;
}
function insertNewRecord(data) {

    var table = document.getElementById("employlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `Completed`;
    
}
function FindError(){
    var retunval = true;
    var Uname = document.getElementById('fullname').value;
    var Dob = document.getElementById('fullname').value;
    var EmailTd = document.getElementById('fullname').value;
    var Phoneno = document.getElementById('fullname').value;
    if(Uname.length<5 ){
        alert('Name must have at least 5 char')
        retunval = false;
    }
    if(  EmailTd.length>15){
        alert('Name must have at least 15 char')
        retunval = false;
    }
    if(Dob.length<4){
        alert('The Dob not valid')
    }
    if(Phoneno.length<9){
        alert('Phone number must be at least 10 ')
        retunval = false
    }
    
    return retunval;
}