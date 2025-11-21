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

    startReservation(spotId, lotName, pricePerHour);
  } 
}

function startReservation(spotId, lotName, pricePerHour) {
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
  return start + " - " + end;
}

function getCurrentDate() {
  var now = new Date();
  return now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function getCurrentTime() {
  var now = new Date();
  var h = String(now.getHours()).padStart(2, "0");
  var m = String(now.getMinutes()).padStart(2, "0");
  return h + ":" + m;
}

function addHoursToTime(timeString, hoursToAdd) {
  var parts = timeString.split(":");
  var h = Number(parts[0]);
  var m = Number(parts[1]);

  var newHour = (h + hoursToAdd) % 24;
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

      const cardName = document.getElementById("cardName").value.trim();
      const cardNumber = document.getElementById("cardNumber").value.trim();
      const cardExpiry = document.getElementById("cardExpiry").value.trim();
      const cardCVV = document.getElementById("cardCVV").value.trim();

      // ========= CARD NUMBER =========
      if (!/^\d{16}$/.test(cardNumber)) {
        alert("Card number must be exactly 16 digits.");
        return;
      }

      // ========= EXPIRY (MM/YY) =========
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry)) {
        alert("Expiry must be in MM/YY format.");
        return;
      }

      // ========= CVV =========
      if (!/^\d{3}$/.test(cardCVV)) {
        alert("CVV must be a 3-digit number.");
        return;
      }

      // If all good continue
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
