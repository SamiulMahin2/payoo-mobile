// login button configuration
document.getElementById("login-button").addEventListener("click", function(event){
    event.preventDefault();

    let requiredMobileNumber = 12345678910;
    let requiredPinNumber = 1234;

    let mobileNumber = parseInt(document.getElementById("login-mobile-number").value);
    let pinNumber = parseInt(document.getElementById("login-pin").value);

    if(mobileNumber === requiredMobileNumber && pinNumber === requiredPinNumber){
        window.location.href = "./other-html-page/home.html";
    }
    else{
        alert("Invalid Input");
    }
})