// Employee Age Check

// var age = prompt("enter your age:");

var age =25;

if(age<18){
    console.log("Not Eligiable to Work");
}

else if(age>=18 && age<=60){
    console.log("Eligiable to Work");
}

else{
    console.log("Retirement age reached");
}