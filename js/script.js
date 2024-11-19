function checkMatch() {
    const costPerNight = parseFloat(document.getElementById("userCostPerNight").value);
    const minBeds = parseInt(document.getElementById("userMinBeds").value);
    const minReviewScore = parseFloat(document.getElementById("userMinReviewScore").value);
    const needpool = document.getElementById("userNeedPool").checked;
    const inCountry = document.getElementById("userLocation").value;
    const beds = 6;
    const reviewScore = 4.78;
    const pool = true;
    const country = "Spain"
    const cost = 150
    let match = true;
    let saving;
    let message;
    if (beds < minBeds) {
        match = false;
    }
    if (reviewScore < minReviewScore) {
        match = false;
    }
    if (needpool && !pool) {
        match = false;
    }
    if (inCountry && inCountry.toLowerCase() !== country.toLowerCase() && inCountry.toLowerCase() !== "españa") {
        match = false;
    }
    if (costPerNight > cost) {
        match = false;
    } else {
        saving = cost - costPerNight;
    }
    if (match) {
        message = "This property is a match!";
        if (saving !== undefined) {
            message += " It is S/." + saving + " cheaper than your maximum.";
        }
    } else {
        message = "This property is not match.";
    }
    document.getElementById("message").innerText = message;

}
