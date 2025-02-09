function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return `Final Ticket Price: $${price.toFixed(2)}`;
}

function calculateTicket() {
    let age = parseInt(document.getElementById("age").value);
    let showTime = parseInt(document.getElementById("showTime").value);
    document.getElementById("ticketResult").innerText = calculateTicketPrice(age, showTime);
}
