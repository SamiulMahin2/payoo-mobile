/* common js start */

//collapse all forms sections
function getFormsByClass(formsClassName){
    let forms = document.getElementsByClassName(formsClassName);
    for(let form of forms){
        form.style.display = "none";
    }
}

//collapse all values of input filed after operation
function collapseValue(id){
    document.getElementById(id).value = "";
}

/* common js end */

// logout button configuration
document.getElementById("logout-button").addEventListener("click", function(){
    window.location.href = "../index.html";
})

//add money card and form configure
document.getElementById("add-money-card").addEventListener("click", function(){
    getFormsByClass("common-form");
    document.getElementById("add-money-section").style.display = "block";
})

//cashout card and form configure
document.getElementById("cashout-card").addEventListener("click", function(){
    getFormsByClass("common-form");
    document.getElementById("cashout-section").style.display = "block";
})

//transfer money card and form configure
document.getElementById("transfer-money-card").addEventListener("click", function(){
    getFormsByClass("common-form");
    document.getElementById("transfer-money-section").style.display = "block";
})

//get bonus card and form configuration 
document.getElementById("get-bonus-card").addEventListener("click", function(){
    getFormsByClass("common-form");
    document.getElementById("get-bonus-section").style.display = "block";
})

//pay bill card and form configuration
document.getElementById("pay-bill-card").addEventListener("click", function(){
    getFormsByClass("common-form");
    document.getElementById("pay-bill-section").style.display = "block";
})

//transactions card and form configuration
document.getElementById("transactions-card").addEventListener("click", function(){
    getFormsByClass("common-form");
    document.getElementById("transactions-section").style.display = "block";
})

//add money form data validation
document.getElementById("add-money-button").addEventListener("click", function(event){
    event.preventDefault();

    let requiredAddMoneyAccountNumber = 12345678910,
        requiredAddMoneyPinNumber =1234,
        availableBalance = parseInt(document.getElementById("total-balance").innerText),
        totalBalance,
        addMoneyAccountNumber = parseInt(document.getElementById("add-money-account-number").value), 
        addMoneyAmount = parseInt(document.getElementById("add-money-amount").value),
        addMoneyPin = parseInt(document.getElementById("add-money-pin").value);

    if(addMoneyAccountNumber === requiredAddMoneyAccountNumber && 
        addMoneyPin === requiredAddMoneyPinNumber && 
        addMoneyAmount > 0){
        totalBalance = availableBalance + addMoneyAmount;
    }
    else{
        alert("Invalid Input");
        return;
    }

    document.getElementById("total-balance").innerText = totalBalance;

    collapseValue("add-money-account-number");
    collapseValue("add-money-amount");
    collapseValue("add-money-pin");
})

//cashout form data validation
document.getElementById("cashout-button").addEventListener("click", function(event){
    event.preventDefault();

    let requiredCashoutAgentNumber = 12345678910,
        requiredCashoutPin =1234,
        availableBalance = parseInt(document.getElementById("total-balance").innerText),
        totalBalance,
        cashoutAgentNumber = parseInt(document.getElementById("cashout-agent-number").value), 
        cashoutAmount = parseInt(document.getElementById("cashout-amount").value),
        cashoutPin = parseInt(document.getElementById("cashout-pin").value);


    if(cashoutAmount > availableBalance){
        alert("Invalid Amount Input");
        return;
    }
    else if(cashoutAgentNumber === requiredCashoutAgentNumber && 
        cashoutPin === requiredCashoutPin && 
        cashoutAmount > 0){
        totalBalance = availableBalance - cashoutAmount;
    }
    else{
        alert("Invalid Input");
        return;
    }

    document.getElementById("total-balance").innerText = totalBalance;

    collapseValue("cashout-agent-number");
    collapseValue("cashout-amount");
    collapseValue("cashout-pin");
})

//transfer money form data validation
document.getElementById("transfer-money-button").addEventListener("click", function(event){
    event.preventDefault();

    let requiredTransferAccountNumber = 12345678910,
        requiredTransferPin =1234,
        availableBalance = parseInt(document.getElementById("total-balance").innerText),
        totalBalance,
        transferMoneyAccountNumber = parseInt(document.getElementById("transfer-money-account-number").value), 
        transferMoneyAmount = parseInt(document.getElementById("transfer-money-amount").value),
        transferMoneyPin = parseInt(document.getElementById("transfer-money-pin").value);


    if(transferMoneyAmount > availableBalance){
        alert("Invalid Amount Input");
        return;
    }
    else if(transferMoneyAccountNumber === requiredTransferAccountNumber && 
        transferMoneyPin === requiredTransferPin && 
        transferMoneyAmount > 0){
        totalBalance = availableBalance - transferMoneyAmount;
    }
    else{
        alert("Invalid Input");
        return;
    }

    document.getElementById("total-balance").innerText = totalBalance;

    collapseValue("transfer-money-account-number");
    collapseValue("transfer-money-amount");
    collapseValue("transfer-money-pin");
})

//get bonus form data validation
document.getElementById("get-bonus-button").addEventListener("click", function(event){
    event.preventDefault();

    let requiredGetBonusCoupon = 12345678910,
        availableBalance = parseInt(document.getElementById("total-balance").innerText),
        totalBalance,
        getBonusCoupon = parseInt(document.getElementById("get-bonus-coupon").value);

    if(getBonusCoupon === requiredGetBonusCoupon){
        totalBalance = availableBalance + 100;
    }
    else{
        alert("Invalid Input");
        return;
    }

    document.getElementById("total-balance").innerText = totalBalance;

    collapseValue("get-bonus-coupon");
})

//pay bill form data validation
document.getElementById("pay-bill-button").addEventListener("click", function(event){
    event.preventDefault();

    let requiredPayBillAccountNumber = 12345678910,
        requiredPayBillPin =1234,
        availableBalance = parseInt(document.getElementById("total-balance").innerText),
        totalBalance,
        payBillAccountNumber = parseInt(document.getElementById("pay-bill-account-number").value), 
        payBillAmount = parseInt(document.getElementById("pay-bill-amount").value),
        payBillPin = parseInt(document.getElementById("pay-bill-pin").value);


    if(payBillAmount > availableBalance){
        alert("Invalid Amount Input");
        return;
    }
    else if(payBillAccountNumber === requiredPayBillAccountNumber && 
        payBillPin === requiredPayBillPin && 
        payBillAmount > 0){
        totalBalance = availableBalance - payBillAmount;
    }
    else{
        alert("Invalid Input");
        return;
    }

    document.getElementById("total-balance").innerText = totalBalance;

    collapseValue("pay-bill-account-number");
    collapseValue("pay-bill-amount");
    collapseValue("pay-bill-pin");
})