const useFakeSample = true;

function formatTimeRange(startTime, endTime) {
  if (!startTime && !endTime) return "–";
  if (!endTime) return startTime || "–";
  return startTime + " – " + endTime;
}

function loadReservation() {
  const raw = localStorage.getItem("currentReservation");
  let reservation;

  if (!raw) {
    if (!useFakeSample) {
      window.location.href = "index.html";
      return null;
    }
    reservation = {
      lotId: "Q",
      lotName: "Q Lot",
      spotId: "Q-12",
      date: "2025-11-20",
      startTime: "09:00",
      endTime: "11:00",
      price: 6.5
    };
  }

  const lotText = reservation.lotName
    ? reservation.lotName + " (" + (reservation.lotId || "") + ")": reservation.lotId || "–";
  document.getElementById("confirmLot").textContent = lotText;
  document.getElementById("confirmSpot").textContent =reservation.spotId || "–";
  document.getElementById("confirmDate").textContent =reservation.date || "–";
  document.getElementById("confirmTime").textContent = formatTimeRange(reservation.startTime,reservation.endTime);
  document.getElementById("confirmPrice").textContent =reservation.price != null ? "$" + Number(reservation.price).toFixed(2) : "$0.00";
  return reservation;
}


const reservation = loadReservation();

const backToMapBtn = document.getElementById("backToMapBtn");
if (backToMapBtn) {
  backToMapBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
