// Parking Lot Data
var parkingLots = {
  "Q Lot": {
    name: "Q Lot",
    rows: 8,
    cols: 6,
    defaultSpotPrice: 12,
    specialSpots: [
      { row: 0, col: 0, status: "occupied" },
      { row: 0, col: 1, features: ["accessible", "ev"], price: 12 },
      { row: 0, col: 2, features: ["accessible"], price: 12 },
      { row: 1, col: 0, status: "occupied" },
      { row: 1, col: 1, features: ["accessible"], price: 15 },
      { row: 2, col: 4, features: ["ev"], price: 15 },
      { row: 2, col: 5, features: ["ev"], price: 15 },
      { row: 3, col: 0, features: ["empty"], price: 15 },
      { row: 3, col: 1, features: ["empty"], price: 15 },
      { row: 3, col: 2, features: ["empty"], price: 15 },
      { row: 3, col: 3, features: ["empty"], price: 15 },
      { row: 3, col: 4, features: ["empty"], price: 15 },
      { row: 3, col: 5, features: ["empty"], price: 15 },
      { row: 7, col: 5, features: ["empty"], price: 15 },
      { row: 7, col: 0, features: ["empty"], price: 15 },
    ],
  },
  "Parkade": {
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
  }
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
  ParkingState.elements.buyButton = document.getElementById("buy-button");

  // Create listeners
  ParkingState.elements.parkingLot.addEventListener("click", handleSpotClick);
  ParkingState.elements.closeButton.addEventListener("click", handleCloseClick);
  ParkingState.elements.buyButton.addEventListener("click", handleBuyClick);
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
        spotIdString = "";
      }

      // Set Feature display text
      var featureSpan = "";
      if (spot.features.length > 0 && !isEmptySpot) {
        featureSpan =
          "<span>" + spot.features.join("<br>").toUpperCase() + "</span>";
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
        spotIdString +
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
  if (!spotElement) {
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

// Function to handle close button click
function handleCloseClick() {
  ParkingState.elements.overlayContainer.style.display = "none";
}

// Function to handle buy button click
function handleBuyClick() {
  loadParkingLot(lotB);
  const selectedSpots = ParkingState.selectedSpots;
  // TODO: Return selected spot data to main app
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
    filterKey: function () {
      return true;
    },
    zoomDoubleClickSpeed: 1,
  });

  // Center the lot in panzoom view
  var container = ParkingState.elements.parkingLot.parentElement;
  var lotRect = ParkingState.elements.parkingLot.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();
  var centerX = (containerRect.width - lotRect.width) / 2;
  var centerY = (containerRect.height - lotRect.height) / 2;
  ParkingState.panzoomObject.moveTo(centerX, centerY);

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

function displayLotByName(lotName) {
  const lotData = parkingLots[lotName];
  if (lotData) {
    loadParkingLot(lotData);
  } else {
    console.error("No lot data for:", lotName);
  }
}

initializeOverlay();

