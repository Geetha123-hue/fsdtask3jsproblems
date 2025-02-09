function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType.toLowerCase() === "vip") return "VIP Plan: $80/month";
    if (planType.toLowerCase() === "premium") return "Premium Plan: $50/month";
    if (wantsTrainer === "yes" || wantsDietPlan === "yes") return "Consider upgrading to Premium or VIP.";
    return "Basic Plan: $20/month";
}

function suggestMembership() {
    let planType = document.getElementById("membershipPlan").value;
    let wantsTrainer = document.getElementById("needTrainer").value.toLowerCase();
    let wantsDietPlan = document.getElementById("needDiet").value.toLowerCase();

    document.getElementById("membershipResult").innerText = choosePlan(planType, wantsTrainer, wantsDietPlan);
}
