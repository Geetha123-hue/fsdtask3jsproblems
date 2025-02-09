function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let freeShipping = false;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        freeShipping = true;
    }

    let finalAmount = orderAmount - (orderAmount * discount);
    let shippingCost = freeShipping ? 0 : 10;

    return `Final Price: $${(finalAmount + shippingCost).toFixed(2)} (Discount: ${discount * 100}%, Shipping: $${shippingCost})`;
}

function applyCouponCode() {
    let orderAmount = parseFloat(document.getElementById("couponAmount").value);
    let couponCode = document.getElementById("couponCode").value;

    document.getElementById("couponResult").innerText = applyCoupon(orderAmount, couponCode);
}
