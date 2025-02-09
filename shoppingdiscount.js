function calculateFinalAmount(orderAmount) {
    let discount = 0, shippingCost = 0;
    if (orderAmount > 1000) discount = 0.20;
    else if (orderAmount >= 500) discount = 0.10;

    let discountedAmount = orderAmount - (orderAmount * discount);
    if (discountedAmount < 50) shippingCost = 10;

    return `Final Amount: $${(discountedAmount + shippingCost).toFixed(2)} (Discount: ${discount * 100}%, Shipping: $${shippingCost})`;
}

function calculateTotal() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    document.getElementById("shoppingResult").innerText = calculateFinalAmount(orderAmount);
}
