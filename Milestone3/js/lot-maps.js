// Parking Lot Data
var parkingLots = {
  "Q Lot": {
    name: "Q Lot",
    rows: 8,
    cols: 6,
    defaultSpotPrice: 12,
    specialSpots: [
      { row: 0, col: 0, status: "occupied" },
      { row: 0, col: 1, features: ["accessible"], price: 12 },
      { row: 0, col: 2, features: ["accessible"], price: 12 },
      { row: 1, col: 0, status: "occupied" },
      { row: 1, col: 1, features: ["accessible"], price: 15 },
      { row: 2, col: 4, features: ["ev"], price: 15 },
      { row: 2, col: 5, features: ["ev"], price: 15 },
      { row: 3, col: 0, features: ["covered"], price: 15 },
      { row: 3, col: 1, features: ["empty"], price: 15 },
      { row: 3, col: 2, features: ["empty"], price: 15 },
      { row: 3, col: 3, features: ["empty"], price: 15 },
      { row: 3, col: 4, features: ["empty"], price: 15 },
      { row: 3, col: 5, features: ["empty"], price: 15 },
      { row: 7, col: 5, features: ["empty"], price: 15 },
      { row: 7, col: 0, features: ["empty"], price: 15 },
    ],
  },
  Parkade: {
    name: "Parkade",
    rows: 10,
    cols: 10,
    defaultSpotPrice: 5,
    specialSpots: [
      { row: 0, col: 0, status: "occupied" },
      { row: 1, col: 1, status: "occupied" },
      { row: 2, col: 2, status: "occupied" },
      { row: 3, col: 3, status: "occupied" },
      { row: 4, col: 4, status: "occupied" },
      { row: 5, col: 5, status: "occupied" },
      { row: 9, col: 0, features: ["accessible"], price: 5 },
      { row: 9, col: 1, features: ["accessible"], price: 5 },
    ],
  },
  "N Lot": {
    name: "N Lot",
    rows: 16,
    cols: 14,
    defaultSpotPrice: 12,
    specialSpots: [
      { row: 0, col: 0, status: "occupied", features: ["accessible"], price: 12 },
      { row: 0, col: 1, features: ["accessible"], price: 12 },
      { row: 0, col: 12, features: ["ev"], price: 15 },
      { row: 0, col: 13, features: ["empty"], price: 0 },
      { row: 1, col: 0, features: ["empty"], price: 0 },
      { row: 1, col: 1, features: ["empty"], price: 0 },
      { row: 1, col: 2, features: ["empty"], price: 0 },
      { row: 1, col: 3, features: ["empty"], price: 0 },
      { row: 1, col: 4, features: ["empty"], price: 0 },
      { row: 1, col: 5, features: ["empty"], price: 0 },
      { row: 1, col: 6, features: ["empty"], price: 0 },
      { row: 1, col: 7, features: ["empty"], price: 0 },
      { row: 1, col: 8, features: ["empty"], price: 0 },
      { row: 1, col: 9, features: ["empty"], price: 0 },
      { row: 1, col: 10, features: ["empty"], price: 0 },
      { row: 1, col: 11, features: ["empty"], price: 0 },
      { row: 1, col: 12, features: ["empty"], price: 0 },
      { row: 1, col: 13, features: ["ev"], price: 15 },
      { row: 2, col: 0, features: ["empty"], price: 0 },
      { row: 2, col: 1, features: ["empty"], price: 0 },
      { row: 2, col: 2, features: ["empty"], price: 0 },
      { row: 2, col: 3, features: ["empty"], price: 0 },
      { row: 2, col: 4, features: ["empty"], price: 0 },
      { row: 2, col: 5, features: ["empty"], price: 0 },
      { row: 2, col: 6, features: ["empty"], price: 0 },
      { row: 2, col: 7, features: ["empty"], price: 0 },
      { row: 2, col: 8, features: ["empty"], price: 0 },
      { row: 2, col: 9, features: ["empty"], price: 0 },
      { row: 2, col: 10, features: ["empty"], price: 0 },
      { row: 2, col: 11, features: ["empty"], price: 0 },
      { row: 2, col: 12, features: ["empty"], price: 0 },
      { row: 3, col: 0, features: ["accessible"], price: 12 },
      { row: 3, col: 1, features: ["accessible"], price: 12 },
      { row: 3, col: 2, features: ["accessible"], price: 12 },
      { row: 3, col: 10, features: ["empty"], price: 0 },
      { row: 3, col: 11, features: ["empty"], price: 0 },
      { row: 3, col: 12, features: ["empty"], price: 0 },
      { row: 4, col: 0, features: ["empty"], price: 0 },
      { row: 4, col: 1, features: ["empty"], price: 0 },
      { row: 4, col: 2, features: ["empty"], price: 0 },
      { row: 4, col: 3, features: ["empty"], price: 0 },
      { row: 4, col: 4, features: ["empty"], price: 0 },
      { row: 4, col: 5, features: ["empty"], price: 0 },
      { row: 4, col: 6, features: ["empty"], price: 0 },
      { row: 4, col: 7, features: ["empty"], price: 0 },
      { row: 4, col: 8, features: ["empty"], price: 0 },
      { row: 4, col: 9, features: ["empty"], price: 0 },
      { row: 4, col: 11, features: ["empty"], price: 0 },
      { row: 4, col: 12, features: ["empty"], price: 0 },
      { row: 5, col: 0, features: ["empty"], price: 0 },
      { row: 5, col: 1, features: ["empty"], price: 0 },
      { row: 5, col: 2, features: ["empty"], price: 0 },
      { row: 5, col: 3, features: ["empty"], price: 0 },
      { row: 5, col: 4, features: ["empty"], price: 0 },
      { row: 5, col: 5, features: ["empty"], price: 0 },
      { row: 5, col: 6, features: ["empty"], price: 0 },
      { row: 5, col: 7, features: ["empty"], price: 0 },
      { row: 5, col: 8, features: ["empty"], price: 0 },
      { row: 5, col: 9, features: ["empty"], price: 0 },
      { row: 5, col: 11, features: ["empty"], price: 0 },
      { row: 5, col: 12, features: ["empty"], price: 0 },
      { row: 6, col: 0, features: ["empty"], price: 0 },
      { row: 6, col: 1, features: ["empty"], price: 0 },
      { row: 6, col: 2, features: ["empty"], price: 0 },
      { row: 6, col: 3, features: ["empty"], price: 0 },
      { row: 6, col: 4, features: ["empty"], price: 0 },
      { row: 6, col: 5, features: ["empty"], price: 0 },
      { row: 6, col: 6, features: ["empty"], price: 0 },
      { row: 6, col: 7, features: ["empty"], price: 0 },
      { row: 6, col: 8, features: ["empty"], price: 0 },
      { row: 6, col: 9, features: ["empty"], price: 0 },
      { row: 6, col: 11, features: ["empty"], price: 0 },
      { row: 6, col: 12, features: ["empty"], price: 0 },
      { row: 6, col: 13, features: ["accessible"], price: 12 },
      { row: 7, col: 0, features: ["empty"], price: 0 },
      { row: 7, col: 1, features: ["empty"], price: 0 },
      { row: 7, col: 2, features: ["empty"], price: 0 },
      { row: 7, col: 3, features: ["empty"], price: 0 },
      { row: 7, col: 4, features: ["empty"], price: 0 },
      { row: 7, col: 5, features: ["empty"], price: 0 },
      { row: 7, col: 6, features: ["empty"], price: 0 },
      { row: 7, col: 7, features: ["empty"], price: 0 },
      { row: 7, col: 8, features: ["empty"], price: 0 },
      { row: 7, col: 9, features: ["empty"], price: 0 },
      { row: 7, col: 11, features: ["empty"], price: 0 },
      { row: 7, col: 12, features: ["empty"], price: 0 },
      { row: 7, col: 13, features: ["accessible"], price: 12 },
      { row: 8, col: 0, features: ["empty"], price: 0 },
      { row: 8, col: 1, features: ["empty"], price: 0 },
      { row: 8, col: 2, features: ["empty"], price: 0 },
      { row: 8, col: 3, features: ["empty"], price: 0 },
      { row: 8, col: 4, features: ["empty"], price: 0 },
      { row: 8, col: 5, features: ["empty"], price: 0 },
      { row: 8, col: 6, features: ["empty"], price: 0 },
      { row: 8, col: 7, features: ["empty"], price: 0 },
      { row: 8, col: 8, features: ["empty"], price: 0 },
      { row: 8, col: 9, features: ["empty"], price: 0 },
      { row: 8, col: 11, features: ["empty"], price: 0 },
      { row: 8, col: 12, features: ["empty"], price: 0 },
      { row: 8, col: 13, features: ["accessible"], price: 12 },
      { row: 9, col: 0, features: ["empty"], price: 0 },
      { row: 9, col: 1, features: ["empty"], price: 0 },
      { row: 9, col: 2, features: ["empty"], price: 0 },
      { row: 9, col: 3, features: ["empty"], price: 0 },
      { row: 9, col: 4, features: ["empty"], price: 0 },
      { row: 9, col: 5, features: ["empty"], price: 0 },
      { row: 9, col: 6, features: ["empty"], price: 0 },
      { row: 9, col: 7, features: ["empty"], price: 0 },
      { row: 9, col: 8, features: ["empty"], price: 0 },
      { row: 9, col: 9, features: ["empty"], price: 0 },
      { row: 9, col: 11, features: ["empty"], price: 0 },
      { row: 9, col: 12, features: ["empty"], price: 0 },
      { row: 9, col: 13, features: ["accessible"], price: 12 },
      { row: 10, col: 0, features: ["empty"], price: 0 },
      { row: 10, col: 1, features: ["empty"], price: 0 },
      { row: 10, col: 2, features: ["empty"], price: 0 },
      { row: 10, col: 3, features: ["empty"], price: 0 },
      { row: 10, col: 4, features: ["empty"], price: 0 },
      { row: 10, col: 5, features: ["empty"], price: 0 },
      { row: 10, col: 6, features: ["empty"], price: 0 },
      { row: 10, col: 7, features: ["empty"], price: 0 },
      { row: 10, col: 8, features: ["empty"], price: 0 },
      { row: 10, col: 9, features: ["empty"], price: 0 },
      { row: 10, col: 11, features: ["empty"], price: 0 },
      { row: 10, col: 12, features: ["empty"], price: 0 },
      { row: 11, col: 0, features: ["empty"], price: 0 },
      { row: 11, col: 1, features: ["empty"], price: 0 },
      { row: 11, col: 2, features: ["empty"], price: 0 },
      { row: 11, col: 3, features: ["empty"], price: 0 },
      { row: 11, col: 4, features: ["empty"], price: 0 },
      { row: 11, col: 5, features: ["empty"], price: 0 },
      { row: 11, col: 6, features: ["empty"], price: 0 },
      { row: 11, col: 7, features: ["empty"], price: 0 },
      { row: 11, col: 8, features: ["empty"], price: 0 },
      { row: 11, col: 9, features: ["empty"], price: 0 },
      { row: 11, col: 11, features: ["empty"], price: 0 },
      { row: 11, col: 12, features: ["empty"], price: 0 },
      { row: 12, col: 0, features: ["accessible"], price: 12 },
      { row: 12, col: 1, features: ["accessible"], price: 12 },
      { row: 12, col: 2, features: ["accessible"], price: 12 },
      { row: 12, col: 10, features: ["empty"], price: 0 },
      { row: 12, col: 11, features: ["empty"], price: 0 },
      { row: 12, col: 12, features: ["empty"], price: 0 },
      { row: 13, col: 0, features: ["empty"], price: 0 },
      { row: 13, col: 1, features: ["empty"], price: 0 },
      { row: 13, col: 2, features: ["empty"], price: 0 },
      { row: 13, col: 3, features: ["empty"], price: 0 },
      { row: 13, col: 4, features: ["empty"], price: 0 },
      { row: 13, col: 5, features: ["empty"], price: 0 },
      { row: 13, col: 6, features: ["empty"], price: 0 },
      { row: 13, col: 7, features: ["empty"], price: 0 },
      { row: 13, col: 8, features: ["empty"], price: 0 },
      { row: 13, col: 9, features: ["empty"], price: 0 },
      { row: 13, col: 10, features: ["empty"], price: 0 },
      { row: 13, col: 11, features: ["empty"], price: 0 },
      { row: 13, col: 12, features: ["empty"], price: 0 },
      { row: 14, col: 0, features: ["empty"], price: 0 },
      { row: 14, col: 1, features: ["empty"], price: 0 },
      { row: 14, col: 2, features: ["empty"], price: 0 },
      { row: 14, col: 3, features: ["empty"], price: 0 },
      { row: 14, col: 4, features: ["empty"], price: 0 },
      { row: 14, col: 5, features: ["empty"], price: 0 },
      { row: 14, col: 6, features: ["empty"], price: 0 },
      { row: 14, col: 7, features: ["empty"], price: 0 },
      { row: 14, col: 8, features: ["empty"], price: 0 },
      { row: 14, col: 9, features: ["empty"], price: 0 },
      { row: 14, col: 10, features: ["empty"], price: 0 },
      { row: 14, col: 11, features: ["empty"], price: 0 },
      { row: 14, col: 12, features: ["empty"], price: 0 },
      { row: 14, col: 13, features: ["ev"], price: 15 },
      { row: 15, col: 12, features: ["ev"], price: 15 },
      { row: 15, col: 13, features: ["empty"], price: 0 },
    ],
  },
};

// State of current instance of lot overlay
var ParkingState = {
  spotGrid: [],
  selectedSpots: new Set(),
  panzoomObject: null,
  totalAvailableSpots: 0,
  isPanning: false,
  elements: {
    overlayContainer: null,
    lotName: null,
    parkingLot: null,
    totalSpots: null,
    selectedSpots: null,
    totalPrice: null,
    closeButton: null,
    buyButton: null,
  },
};

// Reset stae for a new lot
function initializeOverlay() {
  // Get Elements
  ParkingState.elements.overlayContainer = document.getElementById(
    "parking-overlay-container"
  );
  ParkingState.elements.lotName = document.getElementById("lot-name");
  ParkingState.elements.parkingLot = document.getElementById("parking-lot");
  ParkingState.elements.totalSpots = document.getElementById("total-spots");
  ParkingState.elements.selectedSpots =
    document.getElementById("selected-spots");
  ParkingState.elements.totalPrice = document.getElementById("total-price");
  ParkingState.elements.closeButton = document.getElementById("close-button");
  ParkingState.elements.infoButton = document.getElementById("info-button");
  ParkingState.elements.info = document.getElementById("info");
  ParkingState.elements.legendButton = document.getElementById("legend-button");
  ParkingState.elements.legendContainer =
    document.getElementById("legend-container");
  ParkingState.elements.legend = document.getElementById("legend");
  ParkingState.elements.buyButton = document.getElementById("buy-button");

  // Create listeners
  ParkingState.elements.parkingLot.addEventListener("click", handleSpotClick);
  ParkingState.elements.closeButton.addEventListener("click", handleCloseClick);
  ParkingState.elements.buyButton.addEventListener("click", handleBuyClick);
  ParkingState.elements.infoButton.addEventListener("click", handleinfoClick);
  ParkingState.elements.legendButton.addEventListener(
    "click",
    handleLegendClick
  );
}

// Create grid from lot data
function createLotGrid(lotData) {
  var rows = lotData.rows;
  var cols = lotData.cols;
  var defaultSpotPrice = lotData.defaultSpotPrice;
  var specialSpots = lotData.specialSpots;

  var grid = [];

  var rowIncrement = 0; // To handle empty rows
  // Loop through rows and columns of grid
  for (var r = 0; r < rows; r++) {
    var rowLetter = String.fromCharCode(65 + rowIncrement);
    var colId = 1; // To handle empty spots
    var row = [];
    var emptyRow = true; // To check if the entire row is empty

    // Loop through columns
    for (var c = 0; c < cols; c++) {
      // Check if this spot is special
      var special = null;
      for (var s = 0; s < specialSpots.length; s++) {
        if (specialSpots[s].row === r && specialSpots[s].col === c) {
          special = specialSpots[s];
          break;
        }
      }

      // Create spot object
      var spot = {
        price: defaultSpotPrice,
        status: "available",
        features: [],
        id: null,
        row: r,
        col: c,
      };

      // Apply special properties
      if (special) {
        spot.price = special.price ?? defaultSpotPrice;
        spot.status = special.status ?? "available";
        spot.features = special.features ?? [];
      }

      // Assign ID
      var isEmpty = false;
      for (var f = 0; f < spot.features.length; f++) {
        if (spot.features[f] === "empty") {
          isEmpty = true;
          break;
        }
      }
      if (isEmpty) {
        spot.id = "null";
      } else {
        spot.id = rowLetter + colId;
        colId++;
        emptyRow = false;
      }

      row.push(spot);
    }
    grid.push(row);
    // Only increment row letter if the row is not empty
    if (!emptyRow) {
      rowIncrement++;
    }
  }

  return grid;
}

// Convert grid to HTML
function showLot() {
  var lotElement = ParkingState.elements.parkingLot; // Get the lot element
  var gridString = ""; // HTML for the grid

  // Set grid formatting
  var lotCols = ParkingState.spotGrid[0].length;
  lotElement.style.gridTemplateColumns = "repeat(" + lotCols + ", auto)";

  // Build HTML grid
  for (var r = 0; r < ParkingState.spotGrid.length; r++) {
    for (var c = 0; c < ParkingState.spotGrid[r].length; c++) {
      var spot = ParkingState.spotGrid[r][c];

      // Get classes for this spot
      var classList = "spot";
      var spotIdString = spot.id;
      var spotprice = "$"+spot.price;
      var isEmptySpot = false;

      if (spot.status === "occupied") {
        classList += " occupied";
      }

      // Check features for spot and add to HTML class list
      for (var f = 0; f < spot.features.length; f++) {
        var feature = spot.features[f];
        classList += " " + feature;
        if (feature === "empty") {
          isEmptySpot = true;
        }
      }


      // No text for empty spots
      if (isEmptySpot) {
        spotprice = "";
      }

      // Set Feature display text
      var featureSpan = "";
      // if (spot.features.length > 0 && !isEmptySpot) {
      //   featureSpan =
      //     "<span>" + spot.features.join("<br>").toUpperCase() + "</span>";
      // }

      if (spot.features.includes("accessible")) {
        featureSpan +=
          '<img src="images/lot-map-accessible.svg" class="accessible-icon">';
      }

      if (spot.features.includes("ev")) {
        featureSpan +=
          '<img src="images/lot-map-electric.svg" class="ev-icon">';
      }

      if (spot.features.includes("covered")) {
        featureSpan +=
          '<img src="images/lot-map-covered.svg" class="covered-icon">';
      }

      // Add single spot to grid HTML
      gridString +=
        '<div class="' +
        classList +
        '"' +
        ' id="' +
        spot.id +
        '"' +
        '">' +
        spotprice +
        featureSpan +
        "</div>";
    }
  }

  // Set the HTML fro the lot (Also removes old lot)
  lotElement.innerHTML = gridString;
}

// Get spot data by ID
function getSpotDataById(spotId) {
  for (var r = 0; r < ParkingState.spotGrid.length; r++) {
    for (var c = 0; c < ParkingState.spotGrid[r].length; c++) {
      var spot = ParkingState.spotGrid[r][c];
      if (spot.id === spotId) {
        return spot;
      }
    }
  }
  return null;
}

// Function to handle spot clicks
function handleSpotClick(event) {
  var spotElement = event.target.closest(".spot");
  if (!spotElement || ParkingState.isPanning) {
    return;
  }

  const spotId = spotElement.id;
  if (!spotId || spotId === "null") {
    return;
  }

  // Get spot data
  const spotData = getSpotDataById(spotId);

  // Ignore if occupied
  if (!spotData || spotData.status === "occupied") {
    return;
  }

  // Change selection state
  if (ParkingState.selectedSpots.has(spotId)) {
    ParkingState.selectedSpots.delete(spotId);
    spotElement.classList.remove("selected");
  } else {
    if (ParkingState.selectedSpots.size > 0) {
      var oldSpotElement = document.getElementById(
        ParkingState.selectedSpots.values().next().value
      );
      if (oldSpotElement) {
        oldSpotElement.classList.remove("selected");
      }
      ParkingState.selectedSpots.clear();
    }
    ParkingState.selectedSpots.add(spotId);
    spotElement.classList.add("selected");
  }

  updateSelectionAndPrice(); // Update summary
}

// Function to handle info button click
function handleinfoClick() {
  ParkingState.elements.info.classList.toggle("show");
}

// Function to handle legend button click
function handleLegendClick() {
  ParkingState.elements.legendContainer.classList.toggle("open");
  ParkingState.elements.legend.classList.toggle("show");
}

// Function to handle clicks outside info to close it
document.addEventListener("click", function (event) {
  const infoText = ParkingState.elements.info;
  const infoButton = ParkingState.elements.infoButton;

  // If the click is outside the info text and not on the info button, hide the info text
  if (!infoText.contains(event.target) && event.target !== infoButton) {
    infoText.classList.remove("show");
  }
});

// Function to handle close button click
function handleCloseClick() {
  ParkingState.elements.overlayContainer.style.display = "none";
}

// Function to handle buy button click
function handleBuyClick() {
  if(ParkingState.selectedSpots.size === 0){
    return;
  }
  const selectedSpotID = ParkingState.selectedSpots.values().next().value;
  const selectedSpot = getSpotDataById(selectedSpotID);
  console.log(selectedSpot.price + " " + selectedSpot.id);
}

// Update selection count and total price
function updateSelectionAndPrice() {
  var id = ParkingState.selectedSpots.values().next().value || "None";
  var totalPrice = 0;

  // Get total price
  for (const spotId of ParkingState.selectedSpots) {
    const spotData = getSpotDataById(spotId);
    if (spotData) {
      totalPrice += spotData.price;
    }
  }

  ParkingState.elements.selectedSpots.textContent = id;
  ParkingState.elements.totalPrice.textContent = "$" + totalPrice.toFixed(2);
}

// Load a parking lot into the overlay
function loadParkingLot(lotData) {
  // Unhide overlay
  if (ParkingState.elements.overlayContainer) {
    ParkingState.elements.overlayContainer.style.display = "flex";
  }

  // Set panning state
  ParkingState.isPanning = false;

  // Remove old panzoom if exists
  if (ParkingState.panzoomObject) {
    ParkingState.panzoomObject.dispose();
  }

  // Set lot name
  ParkingState.elements.lotName.textContent = lotData.name;

  // Create spot grid for lot
  ParkingState.spotGrid = createLotGrid(lotData);

  // Calculate total available spots
  ParkingState.totalAvailableSpots = 0;
  for (var r = 0; r < ParkingState.spotGrid.length; r++) {
    for (var c = 0; c < ParkingState.spotGrid[r].length; c++) {
      if (
        ParkingState.spotGrid[r][c].status === "available" &&
        !ParkingState.spotGrid[r][c].features.includes("empty")
      ) {
        ParkingState.totalAvailableSpots++;
      }
    }
  }

  // Clear selected spots
  ParkingState.selectedSpots.clear();

  // Show the lot
  showLot();

  // Reset summary info
  ParkingState.elements.totalSpots.textContent =
    ParkingState.totalAvailableSpots;
  updateSelectionAndPrice();

  // Create panzoom instance
  ParkingState.panzoomObject = panzoom(ParkingState.elements.parkingLot, {
    bounds: true,
    boundsPadding: 0.1,
    maxZoom: 2,
    minZoom: 0.5,
    smoothScroll: false,
    filterKey: function () {
      return true;
    },
    zoomDoubleClickSpeed: 1,
  });

  handleLegendClick();

  // Center Screen after everything loads
  requestAnimationFrame(function () {
  requestAnimationFrame(function () {
    centerScreen();
  });
});

  // Event listeners for panzoom
  ParkingState.panzoomObject.on("panstart", function () {
    ParkingState.isPanning = true;
  });
  ParkingState.panzoomObject.on("panend", function () {
    setTimeout(function () {
      ParkingState.isPanning = false;
    }, 50);
  });
}

// Center Screen to lot
function centerScreen() {
var container = ParkingState.elements.parkingLot.parentElement;
var lotRect = ParkingState.elements.parkingLot.getBoundingClientRect();
var containerRect = container.getBoundingClientRect();

// Need scale zoom to fit lot vertically 
// Scale by how many lotRects you can fit in containerRect
// Zoom Factor is based on lotRect
var scaleY = containerRect.height / lotRect.height;
scaleY = scaleY - 0.1;

// Need to account for scaling
var scaledLotWidth = lotRect.width * scaleY;
var scaledLotHeight = lotRect.height * scaleY;

// Calc:
// containerWidth - lotWidth = empty space to the elft
// Need to halve to "give away" half of the empty width to the right (to center) 
var finalX = (containerRect.width - scaledLotWidth) / 2;
var finalY = (containerRect.height - scaledLotHeight) / 2;

// Absolute move
ParkingState.panzoomObject.moveTo(finalX, finalY);
// Focal points, Absolute scale
ParkingState.panzoomObject.zoomAbs(finalX, finalY, scaleY);
}

function displayLotByName(lotName) {
  const lotData = parkingLots[lotName];
  if (lotData) {
    loadParkingLot(lotData);
  } else {
    console.error("No lot data for:", lotName);
  }
}

initializeOverlay();
