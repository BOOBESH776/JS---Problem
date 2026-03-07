// Banking Transaction 

let money = [2000, -500, -1200, 3000, -700];
var tot = 0;
for (let i=0 ; i<money.length; i++){
    if(money[i] > 0){
        console.log("Deposit:"+money[i]);
    }
    else{
        console.log("withdrawals:"+ money[i]);
    }
    tot+=money[i];
}
console.log("final amount:"+tot);
