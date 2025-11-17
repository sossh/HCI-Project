const placeholder_sample = true;

function formatTimeRange(start, end) {
  if (!start && !end) return "–";
  if (!end) return start || "–";
  return `${start} – ${end}`;
}

function goToHome() {
    window.location.href = "index.html";
}
function goToConfirmation() {

    window.location.href = "confirmationPage.html";
}


function loadReservation() {
    let lotId = localStorage.getItem("resLotId");
    let lotName = localStorage.getItem("resLotName");
    let spotId = localStorage.getItem("resSpotId");
    let date = localStorage.getItem("resDate");
    let startTime = localStorage.getItem("resStartTime");
    let endTime = localStorage.getItem("resEndTime");
    let price = localStorage.getItem("resPrice");

    const hasRealData = lotId || lotName || spotId || date || startTime || endTime || price;
    if(!hasRealData) {
        if(!placeholder_sample) {
            alert("Please select a parking lot first.");
            window.location.href = "index.html";
            return null;
        }
        lotId = "Q";
        lotName = "Q Lot";
        spotId = "Q-12";
        date = "2025-11-20";
        startTime = "09:00";
        endTime = "11:00";
        price = "6.5"; 
    }

    const priceNum = price ? Number(price) : NaN;
    const lotText = lotName ? lotName + "(" + (lotId || "") + ")" : lotId || "-";
    
    document.getElementById("lot").textContent = lotText;
    document.getElementById("spot").textContent = spotId || "-";
    document.getElementById("date").textContent = date || "-";
    document.getElementById("time").textContent = formatTimeRange(startTime, endTime);
    document.getElementById("price").textContent = isNaN(priceNum) ? "$0.00" : "$" + priceNum.toFixed(2);

    return {lotId, lotName, spotId, date, startTime, endTime, price: priceNum};
}


document.addEventListener("DOMContentLoaded", ()=>{
    const reservation = loadReservation();
    if(!reservation && !placeholder_sample) return;

    const backBtn = document.getElementById("backBtn");
    const paymentForm = document.getElementById("paymentForm");

    backBtn.addEventListener("click", ()=>{goToHome();});
    paymentForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        goToConfirmation();
    });
});