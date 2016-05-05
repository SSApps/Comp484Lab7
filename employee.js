var employeeSet = [];

function employee (first, last, department ){

this.employeeId = generateId();
this.firstName = first;
this.lastName = last;
this.department = department;
this.hireDate = getDate();

  
}


function getDate(){

	var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];

	var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
 	var date = new Date();
 	
 	var day = days[date.getDay()];
	var month = months[date.getMonth()];
	var dayDate = date.getDate();
	var year = date.getFullYear();
	
	
	return (day + " " + month + " " + dayDate + " " + year );
}
function addEmployee() {
	'use strict';
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;
    var newEmployee = new employee(firstName, lastName, department);
    
    employeeSet.push(newEmployee);
    console.log(employeeSet);
    
    insertEmployeeHTML();
	return false;    
} //addEmployee;

function insertEmployeeHTML(){
	var last = employeeSet.length - 1;
	
	document.getElementById('employeeAdded').innerHTML = "Employee Added";
	document.getElementById('employeeName').innerHTML = ("Name: " + employeeSet[last].lastName + "," + employeeSet[last].firstName);
	document.getElementById("employeeDepartment").innerHTML = ("Department: " + employeeSet[last].department);
	document.getElementById("employeeId").innerHTML = ("Employee ID: " + employeeSet[last].employeeId);
	document.getElementById("employeeHireDate").innerHTML = ("Hire Date: " + employeeSet[last].hireDate);
	document.getElementById("employeeTotal").innerHTML = ("Total Employees: " + employeeSet.length);
	


}




function generateId(){
	var id;
	for(i = 0; i < 8; i++){
		var temp = Math.floor(Math.random() * 10);
		if(temp > 10){ 
			temp = temp % 10;
			}
       
		if(i === 0){
			id = temp;
		}
		else{
		
			id = id + (temp * Math.pow(10, i) );
		}
		        console.log(id);
	}
	
	
	var uuidTest = new RegExp(id);
	
	for(i = 0; i < employeeSet.length; i++){
	//console.log(uuidTest.test(employeeSet[i].employeeId));
		if(uuidTest.test(employeeSet[i].employeeId)){
			id = generateId();
			console.log(uuidTest.test(uuidTest.test(employeeSet[i].employeeId)));
		}
	
	}
	
	if(id < 9999999){
      id = generateId(); // sometimes returns a less than 8 digits
    }
	return id;
	
	
}




function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = addEmployee;
} // End of init() function.
window.onload = init;
