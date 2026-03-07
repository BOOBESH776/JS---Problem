//dispatch system

let km = 1;
let kg = 4;

if(km <=50 && kg <=5){
    console.log("use Bike");
}
else if(km <=200 && kg <=20){
    console.log("Use Van");
}

else if(km>200 && kg>20){
    console.log("Use Truck");
}

else{
    console.log("Go Home");
}