//global variable
window.visibleLots = [];

// ******** UI Elements ********
const distanceValue = document.getElementById("distance-value");
const trafficValue = document.getElementById("traffic-value");

const buildingDropdown = document.getElementById("building-list");
const lotDropdown = document.getElementById("lot-selector");

const prevLotBtn = document.getElementById("prev-lot");
const nextLotBtn = document.getElementById("next-lot");

const activeFiltersContainer = document.getElementById("active-filters");

// ******** MAPPING ********
// Map filter IDs → icon paths
const filterIcons = {
    faculty: "images/faculty.png",
    student: "images/student.png",
    visitor: "images/visitor.png",
    covered: "images/covered.png",
    electric: "images/electric.png",
    accessible: "images/accessible.png"
};

// ******** LOT SELECTOR SETUP ********
const lots = Array.from(lotDropdown.options).map(opt => opt.text);
let currentLotIndex = lotDropdown.selectedIndex;

// Dropdown listener for lots
lotDropdown.addEventListener("change", () => {
    const selectedKey = lotDropdown.value;
    const lot = window.nameLot[selectedKey];

    if (!lot) return;

    // Move map to the polygon
    const center = lot.polygon.getBounds().getCenter();
    map.flyTo(center, 18, { duration: 0.75 });

    // Trigger your lot selected logic
    onLotSelected(selectedKey);
});

// Prev button
prevLotBtn.addEventListener("click", () => {
    currentLotIndex--;
    if (currentLotIndex < 0) currentLotIndex = lots.length - 1;

    lotDropdown.selectedIndex = currentLotIndex;

    console.log("Prev clicked Now selected:", lotDropdown.value);
    onLotSelected(lotDropdown.value);
});

// Next button
nextLotBtn.addEventListener("click", () => {
    currentLotIndex++;
    if (currentLotIndex >= lots.length) currentLotIndex = 0;

    lotDropdown.selectedIndex = currentLotIndex;

    console.log("Next clicked Now selected:", lotDropdown.value);
    onLotSelected(lotDropdown.value);
});

// Placeholder for backend teammates
function onLotSelected(lotName) {
    console.log("onLotSelected() placeholder:", lotName);
}



// ******** SLIDERS ********

// Distance Slider
document.getElementById("distance-range").addEventListener("input", (e) => {
    const value = e.target.value;
    distanceValue.textContent = value + "m";
    applyFilters();
    console.log("Distance changed to:", value);
});

// Traffic Slider
document.getElementById("traffic-range").addEventListener("input", (e) => {
    const value = e.target.value;
    trafficValue.textContent = value;
    applyFilters();
    console.log("Traffic changed to:", value);
});



// ******** BUILDING DROPDOWN ********
buildingDropdown.addEventListener("change", (e) => {
    const building = e.target.value;
    console.log("Building selected:", building);
    onBuildingSelected(building);
});

// Backend placeholder
function onBuildingSelected(buildingName) {
    console.log("onBuildingSelected() placeholder:", buildingName);
}


// ******** CHECKBOXES ********
// ******** Overlay Icons ********

function updateActiveFiltersVisibility() {
    if (activeFiltersContainer.children.length === 0) {
        activeFiltersContainer.classList.add("hidden");
    } else {
        activeFiltersContainer.classList.remove("hidden");
    }
}

// Update overlay when checkbox changes
document.querySelectorAll(".filters input[type='checkbox']").forEach(cb => {
    cb.addEventListener("change", () => {
        console.log(`Filter '${cb.id}' is now: ${cb.checked}`);

        if (cb.checked) {
            // Add icon
            const img = document.createElement("img");
            img.src = filterIcons[cb.id];
            img.id = "icon-" + cb.id;
            activeFiltersContainer.appendChild(img);
        } else {
            // Remove icon
            const icon = document.getElementById("icon-" + cb.id);
            if (icon) icon.remove();
        }

        updateActiveFiltersVisibility();
        applyFilters();
    });
});

// Hide on page load
updateActiveFiltersVisibility();

// apply the filters based in the checkboxes
function applyFilters() {
    console.log("Applying filters...");

    const wantsCovered  = document.getElementById("covered").checked;
    const wantsElectric = document.getElementById("electric").checked;
    const wantsAccess   = document.getElementById("accessible").checked;

    window.visibleLots = []; // reset list

    Object.keys(window.nameLot).forEach(lotKey => {
        const lot = window.nameLot[lotKey];
        let matches = true;

        if (wantsCovered && !lot.isCovered) matches = false;
        if (wantsElectric && !lot.isElectric) matches = false;
        if (wantsAccess && !lot.isAccessible) matches = false;

        if (matches) {
            window.visibleLots.push(lotKey);

            // FULLY visible + clickable
            lot.polygon.setStyle({
                opacity: 1,
                fillOpacity: 0.5
            });

            lot.polygon._clickDisabled = false;
            lot.polygon._hoverDisabled = false;
        } else {
            // DIMMED + DISABLED
            lot.polygon.setStyle({
                opacity: 0.15,
                fillOpacity: 0.05
            });

            lot.polygon._clickDisabled = true;
            lot.polygon._hoverDisabled = true;
        }
    });

    updateLotDropdown();
}

function updateLotDropdown() {
    let dropdown = document.getElementById("lot-selector");
    const prevSelected = dropdown.value;

    dropdown.innerHTML = ""; 

    window.visibleLots.forEach(lotKey => {
        const lot = window.nameLot[lotKey];
        const opt = document.createElement("option");

        opt.value = lotKey;
        opt.textContent = lot.map_display_name;

        dropdown.appendChild(opt);
    });

    // Restore selection if still visible
    if (window.visibleLots.includes(prevSelected)) {
        dropdown.value = prevSelected;
    } else if (window.visibleLots.length > 0) {
        dropdown.selectedIndex = 0;

        // Auto-focus first visible lot
        const first = window.nameLot[window.visibleLots[0]];
        const center = first.polygon.getBounds().getCenter();
        map.flyTo(center, 18, { duration: 0.75 });
    }
}