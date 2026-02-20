

document.getElementById('login-btn').addEventListener("click",function() {
    console.log("login successful");

    // 1. get number
    const inputNumber = document.getElementById('input-number');
    const contractNumber = inputNumber.value;
    console.log(contractNumber);

    // 2. get pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    // 3. Match Mobile number & Pin
    if( contractNumber=="01234567890" && pin=="1234") {
        alert("Login Successful");
        // Move to Home Page
        // window.location.replace('./home.html');
        window.location.assign('./home.html');
    }
    else {
        alert("Login Fail");
        return;
    }
})