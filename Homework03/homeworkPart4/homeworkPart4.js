function atm(){
    let amountMoneyInput = parseInt(prompt("Enter how much money you want to withdrawn: "));
    let acountMoney = 50000;
    let moneyLeft = acountMoney - amountMoneyInput;
    if (amountMoneyInput > acountMoney){
        console.log("Not enought money! You have 50000 on your account!");
    } 
    else {
        console.log(`Your withdrawn ${amountMoneyInput}, and you have ${moneyLeft} money left on the account!`);
    }
 
}
atm();