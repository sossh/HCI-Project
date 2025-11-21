// ======================================================
// =============== GLOBAL VARIABLES =====================
// ======================================================

window.visibleLots = [];      // lots that pass filters
let currentLotIndex = 0;      // used for next/prev navigation
window.buildingCircle = null;
window.buildingMarker = null;
window.currentBuilding = null;
window.currentDistance = 500;   // default


// ======================================================
// =============== UI ELEMENT REFERENCES ================
// ======================================================

const distanceValue = document.getElementById("distance-value");
const trafficValue = document.getElementById("traffic-value");

const buildingDropdown = document.getElementById("building-list");
const lotDropdown = document.getElementById("lot-selector");

const prevLotBtn = document.getElementById("prev-lot");
const nextLotBtn = document.getElementById("next-lot");

const activeFiltersContainer = document.getElementById("active-filters");


// ======================================================
// =============== FILTER ICON MAP =======================
// ======================================================

const filterIcons = {
    covered: "images/lot-map-covered.svg",
    electric: "images/lot-map-electric.svg",
    accessible: "images/lot-map-accessible.svg"
};

// ======================================================
// =============== POPULATE BUILDING SELECTOR ===========
// ======================================================

function populateBuildingDropdown() {
    const dropdown = document.getElementById("building-list");
    dropdown.innerHTML = ""; // clear old

    // add None
    const noneOpt = document.createElement("option");
    noneOpt.value = "none";
    noneOpt.textContent = "None";
    dropdown.appendChild(noneOpt);

    // Add dynamic buildings
    Object.keys(window.buildingLocations).forEach(name => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        dropdown.appendChild(opt);
    });
}

populateBuildingDropdown();


// ======================================================
// =============== LOT SELECTOR / DROPDOWN ==============
// ======================================================

// User selects a lot from dropdown
lotDropdown.addEventListener("change", () => {
    const selectedKey = lotDropdown.value;
    const lot = window.nameLot[selectedKey];
    if (!lot) return;

    const center = lot.polygon.getBounds().getCenter();
    map.flyTo(center, 18, { duration: 0.75 });

    onLotSelected(selectedKey);
});

// Prev button
prevLotBtn.addEventListener("click", () => {
    if (window.visibleLots.length === 0) return;

    currentLotIndex--;
    if (currentLotIndex < 0) currentLotIndex = window.visibleLots.length - 1;

    const lotKey = window.visibleLots[currentLotIndex];
    lotDropdown.value = lotKey;

    onLotSelected(lotKey);

    const center = window.nameLot[lotKey].polygon.getBounds().getCenter();
    map.flyTo(center, 18, { duration: 0.75 });
});

// Next button
nextLotBtn.addEventListener("click", () => {
    if (window.visibleLots.length === 0) return;

    currentLotIndex++;
    if (currentLotIndex >= window.visibleLots.length) currentLotIndex = 0;

    const lotKey = window.visibleLots[currentLotIndex];
    lotDropdown.value = lotKey;

    onLotSelected(lotKey);

    const center = window.nameLot[lotKey].polygon.getBounds().getCenter();
    map.flyTo(center, 18, { duration: 0.75 });
});

// Backend placeholder
function onLotSelected(lotName) {
    console.log("onLotSelected() placeholder:", lotName);
}


// ======================================================
// ===================== SLIDERS ========================
// ======================================================

document.getElementById("distance-range").addEventListener("input", (e) => {
    const value = e.target.value;
    window.currentDistance = Number(value);

    distanceValue.textContent = value + "m";

    drawBuildingRadius();
    applyFilters();
});


// ======================================================
// =============== BUILDING DROPDOWN ====================
// ======================================================

buildingDropdown.addEventListener("change", () => {
    const selected = buildingDropdown.value;

    // If user selected NONE: disable distance filtering
    if (selected === "none") {
        window.currentBuilding = null;

        // Remove circle if exists
        if (window.buildingCircle) {
            map.removeLayer(window.buildingCircle);
            window.buildingCircle = null;
        }

        applyFilters(); 
        return;
    }

    window.currentBuilding = selected;
    drawBuildingRadius();
    applyFilters();
});

function drawBuildingRadius() {
    if (!window.currentBuilding) return;

    const coords = window.buildingLocations[window.currentBuilding];
    if (!coords) return;

    // Remove old circle
    if (window.buildingCircle) {
        map.removeLayer(window.buildingCircle);
    }

    // Remove old marker
    if (window.buildingMarker) {
        map.removeLayer(window.buildingMarker);
    }

    // Draw new circle
    window.buildingCircle = L.circle(coords, {
        radius: window.currentDistance,
        color: "#0077ff",
        fillColor: "#66aaff",
        fillOpacity: 0.15,
        interactive: false
    }).addTo(map);

    // Push circle behind lots
    window.buildingCircle.bringToBack();

    // Add building center marker
    window.buildingMarker = L.marker(coords, {
        title: window.currentBuilding
    }).addTo(map);

    // Focus on building
    map.flyTo(coords, 16, { duration: 0.5 });
}


// ======================================================
// =============== FILTER CHECKBOXES ====================
// ======================================================

// Show/hide filter bar
function updateActiveFiltersVisibility() {
    if (activeFiltersContainer.children.length === 0)
        activeFiltersContainer.classList.add("hidden");
    else
        activeFiltersContainer.classList.remove("hidden");
}

// Checkbox event listeners
document.querySelectorAll(".filters input[type='checkbox']").forEach(cb => {
    cb.addEventListener("change", () => {

        if (cb.checked) {
            const img = document.createElement("img");
            img.src = filterIcons[cb.id];
            img.id = "icon-" + cb.id;
            activeFiltersContainer.appendChild(img);
        } else {
            const icon = document.getElementById("icon-" + cb.id);
            if (icon) icon.remove();
        }

        updateActiveFiltersVisibility();
        applyFilters();
    });
});

updateActiveFiltersVisibility(); // Hide at start


// ======================================================
// ===================== FILTERING ======================
// ======================================================

function lotMatchesPermit(lot, user) {
    if (!user) return false;

    switch (user.permit) {
        case "student":
            return lot.isStudent === true || lot.isVisitor === true;

        case "staff":
        case "faculty":
            return lot.isStaff === true || lot.isFaculty === true || lot.isVisitor === true;

        case "visitor":
            return lot.isVisitor === true;

        default:
            return false;
    }
}

function applyFilters() {
    console.log("Applying filters...");

    const wantsCovered  = document.getElementById("covered").checked;
    const wantsElectric = document.getElementById("electric").checked;
    const wantsAccess   = document.getElementById("accessible").checked;

    window.visibleLots = [];

    Object.keys(window.nameLot).forEach(lotKey => {
        const lot = window.nameLot[lotKey];
        let matches = true;

        // -----------------------------
        // make match before logged in so that the polygons load regardless
        // -----------------------------
        let matchesPermit = true;

        if (window.currentUser) {
            matchesPermit = lotMatchesPermit(lot, window.currentUser);
        }

        if (!matchesPermit) {
            matches = false;
        }

        // ---- Spot Feature Filters ----
        if (wantsCovered && !lot.isCovered) matches = false;
        if (wantsElectric && !lot.isElectric) matches = false;
        if (wantsAccess && !lot.isAccessible) matches = false;

        // ---- Distance filter ----
        if (window.currentBuilding && window.currentBuilding !== "none") {
            const buildingCoords = window.buildingLocations[window.currentBuilding];
            const lotCenter = lot.polygon.getBounds().getCenter();
            const distance = map.distance(buildingCoords, [lotCenter.lat, lotCenter.lng]);

            if (distance > window.currentDistance) matches = false;
        }

        // === APPLY VISIBILITY ===
        if (matches) {
            window.visibleLots.push(lotKey);

            lot.polygon.setStyle({ opacity: 1, fillOpacity: 0.5 });

            lot.polygon._clickDisabled = false;
            lot.polygon._hoverDisabled = false;
            lot.polygon._labelDisabled = false;

            // SHOW LABEL
            const tooltip = lot.polygon.getTooltip();
            if (tooltip && tooltip._container)
                tooltip._container.style.display = "block";

        } else {
            lot.polygon.setStyle({ opacity: 0.15, fillOpacity: 0.05 });

            lot.polygon._clickDisabled = true;
            lot.polygon._hoverDisabled = true;
            lot.polygon._labelDisabled = true;

            // HIDE LABEL
            const tooltip = lot.polygon.getTooltip();
            if (tooltip && tooltip._container)
                tooltip._container.style.display = "none";
        }
    });

    updateLotDropdown();
}


// ======================================================
// =============== UPDATE LOT DROPDOWN ==================
// ======================================================

function updateLotDropdown() {
    let dropdown = document.getElementById("lot-selector");
    const previous = dropdown.value;

    dropdown.innerHTML = "";

    window.visibleLots.forEach(lotKey => {
        const lot = window.nameLot[lotKey];
        const option = document.createElement("option");

        option.value = lotKey;
        option.textContent = lot.map_display_name;

        dropdown.appendChild(option);
    });

    if (window.visibleLots.includes(previous)) {
        dropdown.value = previous;
    } else if (window.visibleLots.length > 0) {
        dropdown.selectedIndex = 0;

    }

    currentLotIndex = dropdown.selectedIndex;
}

// ======================================================
// =============== MAP LEGEND TOGGLE ====================
// ======================================================
document.getElementById("map-legend-button").addEventListener("click", () => {
    const box = document.getElementById("map-legend-container");
    const legend = document.getElementById("map-legend");

    box.classList.toggle("open");
    legend.classList.toggle("show");
});


// ======================================================
// =============== INFO BUTTON ==========================
// ======================================================
// Filters popup
document.querySelector(".info-button-filters").addEventListener("click", () => {
  document.querySelector(".info-popup-filters").classList.toggle("show");
});

// Nearby popup
document.querySelector(".info-button-nearby").addEventListener("click", () => {
  document.querySelector(".info-popup-nearby").classList.toggle("show");
});

// =============================
// Close info popups on outside click
// =============================
document.addEventListener("click", function (e) {
    const filtersBtn = document.querySelector(".info-button-filters");
    const filtersPopup = document.querySelector(".info-popup-filters");

    const nearbyBtn = document.querySelector(".info-button-nearby");
    const nearbyPopup = document.querySelector(".info-popup-nearby");

    // If click is outside filters popup + button → close it
    if (
        filtersPopup &&
        !filtersPopup.contains(e.target) &&
        !filtersBtn.contains(e.target)
    ) {
        filtersPopup.classList.remove("show");
    }

    // If click is outside nearby popup + button → close it
    if (
        nearbyPopup &&
        !nearbyPopup.contains(e.target) &&
        !nearbyBtn.contains(e.target)
    ) {
        nearbyPopup.classList.remove("show");
    }
});