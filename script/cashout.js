
document.getElementById('cashout-btn').addEventListener("click", function(){

    // 1.Get Agent Number & check validation
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;

    if( cashoutNumber.length != 11 ) {
        alert("Invalaid Number")
        return;
    }

    console.log(cashoutNumber);

    // 2.Get Amount Number & check validation
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    
    // 3.Current Balance
    const currentBalance = document.getElementById('balance');
    const balance = currentBalance.innerText;
    console.log(balance);
    
    // 4. Current New Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    
    if( newBalance <0 ) {
        alert('Invalid Amount');
        return;
    }
    
    // 4.Get Pin & Verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;
    console.log(pin);
    
    if( pin==="1234" ) {
        alert("Cashout Successful")
        console.log(newBalance);
        currentBalance.innerText = newBalance;
    }
    else {
        alert("Invalid Pin");
        return;
    }
})