function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Success! Withdrawn $${amount}. Remaining balance: $${balance - amount}`;
}

function withdrawMoney() {
    let balance = 5000;
    let pin = "1234";
    let enteredPin = document.getElementById("pin").value;
    let amount = parseInt(document.getElementById("amount").value);
    document.getElementById("result").innerText = atmWithdrawal(balance, amount, pin, enteredPin);
}
