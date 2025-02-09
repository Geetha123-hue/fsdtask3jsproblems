function calculateElectricityBill(units, timeOfDay) {
    let rate = units <= 100 ? 5 : units <= 300 ? 4 : 3;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1; // Peak hour charge

    return `Total Bill: $${(units * rate).toFixed(2)}`;
}

function calculateBill() {
    let units = parseInt(document.getElementById("unitsConsumed").value);
    let timeOfDay = parseInt(document.getElementById("billTime").value);

    document.getElementById("billResult").innerText = calculateElectricityBill(units, timeOfDay);
}
