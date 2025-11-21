let paymentState = {
  lotName: "",
  spotId: "",
  date: "",
  startTime: "",
  endTime: "",
  price: 0,
};

// Payment Page
function resetPaymentPage(spotId, lotName, pricePerHour) {
  const overlay = document.getElementById("payment-page");

  if (overlay) {
    const form = document.getElementById("paymentForm");
    if (form) form.reset();

    const durationSelect = document.getElementById("durationSelect");
    if (durationSelect) durationSelect.value = "2";

    overlay.classList.add("show");

    initReservationLogic(spotId, lotName, pricePerHour);
  } else {
    console.error("Error: #payment-page element missing");
  }
}

function initReservationLogic(spotId, lotName, pricePerHour) {
  const date = getCurrentDate();
  const startTime = getCurrentTime();

  document.getElementById("lot").textContent = lotName;
  document.getElementById("spot").textContent = spotId;
  document.getElementById("date").textContent = date;

  paymentState.lotName = lotName;
  paymentState.spotId = spotId;
  paymentState.date = date;
  paymentState.startTime = startTime;

  const durationSelect = document.getElementById("durationSelect");

  function updateTotals() {
    const hours = parseInt(durationSelect.value);
    const endTime = addHoursToTime(startTime, hours);
    const total = pricePerHour * hours;

    document.getElementById("time").textContent = formatTimeRange(
      startTime,
      endTime
    );
    document.getElementById("price").textContent = formatCurrency(total);

    paymentState.endTime = endTime;
    paymentState.price = total;
  }

  durationSelect.onchange = updateTotals;
  updateTotals();
}

function formatCurrency(val) {
  return "$" + Number(val).toFixed(2);
}
function formatTimeRange(start, end) {
  return `${start} - ${end}`;
}
function getCurrentDate() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
function getCurrentTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;
}

function addHoursToTime(timeString, hoursToAdd) {
  const parts = timeString.split(":");
  const h = Number(parts[0]);
  const m = Number(parts[1]);

  const newHour = (h + hoursToAdd) % 24;
  return String(newHour).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}

// Confirmation Page
loadConfirmationPage = function (paymentState) {
  const overlay = document.getElementById("confirm-page");

  document.getElementById("confirmLot").textContent = paymentState.lotName;
  document.getElementById("confirmSpot").textContent = paymentState.spotId;
  document.getElementById("confirmDate").textContent = paymentState.date;
  document.getElementById("confirmTime").textContent = formatTimeRange(
    paymentState.startTime,
    paymentState.endTime
  );
  document.getElementById("confirmPrice").textContent = formatCurrency(
    paymentState.price
  );

  overlay.classList.add("show");
};

// Buttons
document.addEventListener("DOMContentLoaded", () => {
  // Submit Payment
  const paymentForm = document.getElementById("paymentForm");
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("payment-page").classList.remove("show");
      loadConfirmationPage(paymentState);
    });
  }

  // Back Button (Payment)
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      document.getElementById("payment-page").classList.remove("show");
    });
  }

  // Back to Map Button (Confirmation)
  const backToMapBtn = document.getElementById("backToMapBtn");
  if (backToMapBtn) {
    backToMapBtn.addEventListener("click", () => {
      const confirmPage = document.getElementById("confirm-page");
      if (confirmPage) confirmPage.classList.remove("show");

      const paymentPage = document.getElementById("payment-page");
      if (paymentPage) paymentPage.classList.remove("show");

      const lotPage = document.getElementById("parking-overlay-container");

      if (lotPage) {
        lotPage.classList.remove("show");
      }
    });
  }
});
