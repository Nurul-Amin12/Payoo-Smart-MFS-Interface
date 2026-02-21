
document.getElementById('cashout-btn').addEventListener("click", function(){

    // 1.Get Agent Number & check validation
    const cashoutNumber = getInputValue("cashout-number");

    if( cashoutNumber.length != 11 ) {
        alert("Invalaid Number")
        return;
    }

    // 2.Get Amount Number & check validation
    const cashoutAmount = getInputValue("cashout-amount");
    
    // 3.Current Balance
    const balance = getBalance("balance");
    
    // 4. Current New Balance
    const newBalance = balance - Number(cashoutAmount);
    
    if( newBalance <0 ) {
        alert('Invalid Amount');
        return;
    }
    
    // 4.Get Pin & Verify
    const pin = getInputValue("cashout-pin");
    
    if( pin==="1234" ) {
        alert("Cashout Successful")
        console.log(newBalance);
        document.getElementById("balance").innerText = newBalance;
    }
    else {
        alert("Invalid Pin");
        return;
    }
})