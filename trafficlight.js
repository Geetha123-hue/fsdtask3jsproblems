function trafficLightControl(density) {
    if (density.toLowerCase() === "heavy") return "Green for 60 seconds";
    if (density.toLowerCase() === "moderate") return "Green for 40 seconds";
    return "Green for 20 seconds";
}

function controlTraffic() {
    let density = document.getElementById("trafficDensity").value;
    document.getElementById("trafficResult").innerText = trafficLightControl(density);
}
