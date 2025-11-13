// ******** UI Elements ********
const distanceValue = document.getElementById("distance-value");
const trafficValue = document.getElementById("traffic-value");

const buildingDropdown = document.getElementById("building-list");
const lotDropdown = document.getElementById("lot-selector");

const prevLotBtn = document.getElementById("prev-lot");
const nextLotBtn = document.getElementById("next-lot");

const activeFiltersContainer = document.getElementById("active-filters");

// ******** LOT SELECTOR SETUP ********
const lots = Array.from(lotDropdown.options).map(opt => opt.text);
let currentLotIndex = lotDropdown.selectedIndex;

// Dropdown listener for lots
lotDropdown.addEventListener("change", () => {
    currentLotIndex = lotDropdown.selectedIndex;
    const selectedLot = lotDropdown.value;

    console.log("Lot selected from dropdown:", selectedLot);
    onLotSelected(selectedLot);
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



// ******** CHECKBOXES ********
document.querySelectorAll(".filters input[type='checkbox']").forEach(cb => {
    cb.addEventListener("change", () => {
        console.log(`Filter '${cb.id}' is now: ${cb.checked}`);
    });
});



// ******** SLIDERS ********

// Distance Slider
document.getElementById("distance-range").addEventListener("input", (e) => {
    const value = e.target.value;
    distanceValue.textContent = value + "m";
    console.log("Distance changed to:", value);
});

// Traffic Slider
document.getElementById("traffic-range").addEventListener("input", (e) => {
    const value = e.target.value;
    trafficValue.textContent = value;
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

// ******** Overlay Icons ********
// Map filter IDs → icon paths
const filterIcons = {
    faculty: "images/faculty.png",
    student: "images/student.png",
    visitor: "images/visitor.png",
    bike: "images/covered.png",
    electric: "images/electric.png",
    accessible: "images/accessible.png"
};

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
    });
});

// Hide on page load
updateActiveFiltersVisibility();