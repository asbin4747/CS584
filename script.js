
var employees = [];                            
var employeeID = Math.floor(Math.random()*100000000);

var firstname = document.getElementsByName('firstname').value;
var lastname = document.getElementsByName('lastname').value;
var department = document. getElementsById('department').value;

var employee = {
    employeeID : employeeID 
}

var employee = {
    "firstname": firstname,
    "lastname": lastname,
    "department" : department,
    "employeeId" : employeeID,
    "hiredate" : dates ,
    "totalemployees" : total
};

for (var i = 0 ; i<employees.length; i++){
    if (employees[i].employeeId == employeeID){
        console.log("Employee already exists");
    }
    else{
        employees.push(employee);
    }
}

function showMessage(){
document.getElementById('ListOfEmployees').innerHTML = "List of Employees";
document.getElementById('fullname').innerHTML = "Employee" + firstname + " " + lastname;
document.getElementById('department').innerHTML = "Department " + department;
document.getElementById('employeeId').innerHTML = "Employee ID" + employeeID;
document.getElementById('hiredate').innerHTML = "Hire Date " + dates;
document.getElementById('totalemployees').innerHTML = "Total Employees"+ employee.length;
}


function browserName(){

}


