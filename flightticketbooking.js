function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300;
    if (classType.toLowerCase() === "business") fare += 200;
    if (classType.toLowerCase() === "first") fare += 500;

    if (luggageWeight > 20) fare += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent === "yes") fare *= 0.85;
    if (isSenior === "yes") fare *= 0.90;

    return `Total Ticket Price: $${fare.toFixed(2)}`;
}

function calculateFlightPrice() {
    let classType = document.getElementById("flightClass").value;
    let luggageWeight = parseFloat(document.getElementById("luggageWeight").value);
    let isStudent = document.getElementById("isStudent").value.toLowerCase();
    let isSenior = document.getElementById("isSenior").value.toLowerCase();

    document.getElementById("flightResult").innerText = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);
}
