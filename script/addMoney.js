
document.getElementById("add-money-btn").addEventListener("click", function(){
    
    // 1. Get Selected Bank 
    const bankAccount = getInputValue("add-money-bank");
    if( bankAccount === "Select a Bank" ) {
        alert("Please select a Bank");
        return;
    }

    // 2. Get Bank Account Number
    const accNo = getInputValue("add-money-number");
    if( accNo.length !== 11 ) {
        alert("Invalid Account Number");
        return;
    }

    // 3. Get Amount to Add
    const amount = getInputValue("add-money-amount");

    // 4. Current Amount
    const balance = getBalance("balance");
    const newAmount = Number(balance) + Number(amount);

    // 5. Check Pin
    const pin = getInputValue("add-money-pin");

    if(pin==="1234") {
        alert(`AddMoney Successful from ${bankAccount} at ${new Date()}` );
        setBalance(newAmount);
    }
    else {
        alert("Invalid Pin");
        return;
    }

})