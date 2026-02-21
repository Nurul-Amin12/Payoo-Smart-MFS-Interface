

// Get Input Value by Id
function getInputValue(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// Get Current Balance
function getBalance() {
    const currentBalance = document.getElementById("balance")
    const balance = currentBalance.innerText;
    console.log("Balance", balance);
    return Number(balance);
}