// Parking Lot Data
var parkingLots = {
  "U Lot": {
  name: "U Lot",
  rows: 12,
  cols: 16,
  defaultSpotPrice: 2,
  specialSpots: [
    { row: 0, col: 0, features: ["ev"], price: 4 },
    { row: 0, col: 1, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 0, col: 2, features: ["ev"], price: 4 },
    { row: 0, col: 3, features: ["ev"], price: 4 },
    { row: 0, col: 4, features: ["ev"], price: 4 },
    { row: 0, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 0, col: 6, features: ["ev"], price: 4 },
    { row: 0, col: 7, features: ["ev"], price: 4 },
    { row: 0, col: 8, features: ["empty"], price: 0 },
    { row: 0, col: 9, features: ["empty"], price: 0 },
    { row: 0, col: 10, features: ["accessible"], price: 7 },
    { row: 0, col: 11, features: ["accessible"], price: 7 },
    { row: 0, col: 12, features: ["accessible"], price: 7 },
    { row: 0, col: 13, features: ["empty"], price: 0 },
    { row: 0, col: 14, features: ["empty"], price: 0 },
    { row: 0, col: 15, features: ["empty"], price: 0 },
    { row: 1, col: 0, features: ["ev"], price: 4 },
    { row: 1, col: 1, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 1, col: 2, features: ["ev"], price: 4 },
    { row: 1, col: 3, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 1, col: 4, features: ["ev"], price: 4 },
    { row: 1, col: 5, features: ["ev"], price: 4 },
    { row: 1, col: 6, features: ["ev"], price: 4 },
    { row: 1, col: 7, features: ["ev"], price: 4 },
    { row: 1, col: 8, features: ["empty"], price: 0 },
    { row: 1, col: 9, features: ["empty"], price: 0 },
    { row: 1, col: 10, features: ["empty"], price: 0 },
    { row: 1, col: 11, features: ["empty"], price: 0 },
    { row: 1, col: 12, features: ["empty"], price: 0 },
    { row: 1, col: 13, features: ["empty"], price: 0 },
    { row: 1, col: 14, features: ["empty"], price: 0 },
    { row: 1, col: 15, features: ["empty"], price: 0 },
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
    { row: 2, col: 13, features: ["empty"], price: 0 },
    { row: 2, col: 14, features: ["empty"], price: 0 },
    { row: 2, col: 15, features: ["empty"], price: 0 },
    { row: 3, col: 0, features: ["empty"], price: 0 },
    { row: 3, col: 1, features: ["empty"], price: 0 },
    { row: 3, col: 2, features: ["empty"], price: 0 },
    { row: 3, col: 3, features: ["empty"], price: 0 },
    { row: 3, col: 4, features: ["empty"], price: 0 },
    { row: 3, col: 5, features: ["empty"], price: 0 },
    { row: 3, col: 6, features: ["empty"], price: 0 },
    { row: 3, col: 7, features: ["empty"], price: 0 },
    { row: 3, col: 8, features: ["empty"], price: 0 },
    { row: 3, col: 9, features: ["empty"], price: 0 },
    { row: 3, col: 10, features: ["empty"], price: 0 },
    { row: 3, col: 11, features: ["empty"], price: 0 },
    { row: 3, col: 12, features: ["empty"], price: 0 },
    { row: 3, col: 13, features: ["empty"], price: 0 },
    { row: 3, col: 14, features: ["empty"], price: 0 },
    { row: 3, col: 15, features: ["empty"], price: 0 },
    { row: 4, col: 0, features: ["ev"], price: 4 },
    { row: 4, col: 1, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 2, features: ["ev"], price: 4 },
    { row: 4, col: 3, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 4, features: ["ev"], price: 4 },
    { row: 4, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 6, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 7, features: ["ev"], price: 4 },
    { row: 4, col: 8, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 9, features: ["ev"], price: 4 },
    { row: 4, col: 10, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 11, features: ["ev"], price: 4 },
    { row: 4, col: 12, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 13, features: ["ev"], price: 4 },
    { row: 4, col: 14, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 4, col: 15, features: ["empty"], price: 0 },
    { row: 5, col: 0, features: ["ev"], price: 4 },
    { row: 5, col: 1, features: ["ev"], price: 4 },
    { row: 5, col: 2, features: ["ev"], price: 4 },
    { row: 5, col: 3, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 5, col: 4, features: ["ev"], price: 4 },
    { row: 5, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 5, col: 6, features: ["ev"], price: 4 },
    { row: 5, col: 7, features: ["ev"], price: 4 },
    { row: 5, col: 8, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 5, col: 9, features: ["ev"], price: 4 },
    { row: 5, col: 10, features: ["ev"], price: 4 },
    { row: 5, col: 11, features: ["ev"], price: 4 },
    { row: 5, col: 12, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 5, col: 13, features: ["empty"], price: 0 },
    { row: 5, col: 14, features: ["empty"], price: 0 },
    { row: 5, col: 15, features: ["empty"], price: 0 },
    { row: 6, col: 0, features: ["ev"], price: 4 },
    { row: 6, col: 1, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 2, features: ["ev"], price: 4 },
    { row: 6, col: 3, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 4, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 6, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 7, features: ["ev"], price: 4 },
    { row: 6, col: 8, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 9, features: ["ev"], price: 4 },
    { row: 6, col: 10, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 6, col: 11, features: ["empty"], price: 0 },
    { row: 6, col: 12, features: ["empty"], price: 0 },
    { row: 6, col: 13, features: ["empty"], price: 0 },
    { row: 6, col: 14, features: ["empty"], price: 0 },
    { row: 6, col: 15, features: ["empty"], price: 0 },
    { row: 7, col: 0, features: ["ev"], price: 4 },
    { row: 7, col: 1, features: ["ev"], price: 4 },
    { row: 7, col: 2, features: ["ev"], price: 4 },
    { row: 7, col: 3, features: ["ev"], price: 4 },
    { row: 7, col: 4, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 7, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 7, col: 6, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 7, col: 7, features: ["ev"], price: 4 },
    { row: 7, col: 8, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 7, col: 9, features: ["ev"], price: 4 },
    { row: 7, col: 10, features: ["ev"], price: 4 },
    { row: 7, col: 11, features: ["empty"], price: 0 },
    { row: 7, col: 12, features: ["empty"], price: 0 },
    { row: 7, col: 13, features: ["empty"], price: 0 },
    { row: 7, col: 14, features: ["empty"], price: 0 },
    { row: 7, col: 15, features: ["empty"], price: 0 },
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
    { row: 8, col: 10, features: ["empty"], price: 0 },
    { row: 8, col: 11, features: ["empty"], price: 0 },
    { row: 8, col: 12, features: ["empty"], price: 0 },
    { row: 8, col: 13, features: ["empty"], price: 0 },
    { row: 8, col: 14, features: ["empty"], price: 0 },
    { row: 8, col: 15, features: ["empty"], price: 0 },
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
    { row: 9, col: 10, features: ["empty"], price: 0 },
    { row: 9, col: 11, features: ["empty"], price: 0 },
    { row: 9, col: 12, features: ["empty"], price: 0 },
    { row: 9, col: 13, features: ["empty"], price: 0 },
    { row: 9, col: 14, features: ["empty"], price: 0 },
    { row: 9, col: 15, features: ["empty"], price: 0 },
    { row: 10, col: 0, features: ["ev"], price: 4 },
    { row: 10, col: 1, features: ["ev"], price: 4 },
    { row: 10, col: 2, features: ["ev"], price: 4 },
    { row: 10, col: 3, features: ["ev"], price: 4 },
    { row: 10, col: 4, features: ["ev"], price: 4 },
    { row: 10, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 10, col: 6, features: ["ev"], price: 4 },
    { row: 10, col: 7, features: ["ev"], price: 4 },
    { row: 10, col: 8, features: ["ev"], price: 4 },
    { row: 10, col: 9, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 10, col: 10, features: ["ev"], price: 4 },
    { row: 10, col: 11, features: ["ev"], price: 4 },
    { row: 10, col: 12, features: ["ev"], price: 4 },
    { row: 10, col: 13, features: ["empty"], price: 0 },
    { row: 10, col: 14, features: ["empty"], price: 0 },
    { row: 10, col: 15, features: ["empty"], price: 0 },
    { row: 11, col: 0, features: ["ev"], price: 4 },
    { row: 11, col: 1, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 2, features: ["ev"], price: 4 },
    { row: 11, col: 3, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 4, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 5, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 6, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 7, features: ["ev"], price: 4 },
    { row: 11, col: 8, features: ["ev"], price: 4 },
    { row: 11, col: 9, features: ["ev"], price: 4 },
    { row: 11, col: 10, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 11, features: ["ev"], price: 4 },
    { row: 11, col: 12, status: "occupied" ,  features: ["ev"], price: 4},
    { row: 11, col: 13, features: ["empty"], price: 0 },
    { row: 11, col: 14, features: ["empty"], price: 0 },
    { row: 11, col: 15, features: ["empty"], price: 0 }
  ],
},
  "P Lot": {
    name: "P Lot",
    rows: 8,
    cols: 16,
    defaultSpotPrice: 1,
    specialSpots: [
      { row: 0, col: 1, status: "occupied" },
      { row: 0, col: 3, status: "occupied" },
      { row: 0, col: 4, status: "occupied" },
      { row: 0, col: 5, status: "occupied" },
      { row: 0, col: 6, status: "occupied" },
      { row: 0, col: 8, status: "occupied" },
      { row: 0, col: 10, status: "occupied" },
      { row: 0, col: 12, status: "occupied" },
      { row: 0, col: 14, status: "occupied" },
      { row: 0, col: 15, status: "occupied" },
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
      { row: 1, col: 13, features: ["empty"], price: 0 },
      { row: 1, col: 14, features: ["empty"], price: 0 },
      { row: 1, col: 15, features: ["empty"], price: 0 },
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
      { row: 2, col: 13, features: ["empty"], price: 0 },
      { row: 2, col: 14, features: ["empty"], price: 0 },
      { row: 2, col: 15, features: ["empty"], price: 0 },
      { row: 3, col: 0, features: ["empty"], price: 0 },
      { row: 3, col: 1, status: "occupied" },
      { row: 3, col: 2, status: "occupied" },
      { row: 3, col: 3, status: "occupied" },
      { row: 3, col: 4, status: "occupied" },
      { row: 3, col: 5, status: "occupied" },
      { row: 3, col: 7, status: "occupied" },
      { row: 3, col: 8, status: "occupied" },
      { row: 3, col: 11, status: "occupied" },
      { row: 3, col: 14, status: "occupied" },
      { row: 3, col: 15, features: ["empty"], price: 0 },
      { row: 4, col: 0, features: ["empty"], price: 0 },
      { row: 4, col: 2, status: "occupied" },
      { row: 4, col: 3, status: "occupied" },
      { row: 4, col: 5, status: "occupied" },
      { row: 4, col: 6, status: "occupied" },
      { row: 4, col: 7, status: "occupied" },
      { row: 4, col: 8, status: "occupied" },
      { row: 4, col: 9, status: "occupied" },
      { row: 4, col: 11, status: "occupied" },
      { row: 4, col: 13, status: "occupied" },
      { row: 4, col: 15, features: ["empty"], price: 0 },
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
      { row: 5, col: 10, features: ["empty"], price: 0 },
      { row: 5, col: 11, features: ["empty"], price: 0 },
      { row: 5, col: 12, features: ["empty"], price: 0 },
      { row: 5, col: 13, features: ["empty"], price: 0 },
      { row: 5, col: 14, features: ["empty"], price: 0 },
      { row: 5, col: 15, features: ["empty"], price: 0 },
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
      { row: 6, col: 10, features: ["empty"], price: 0 },
      { row: 6, col: 11, features: ["empty"], price: 0 },
      { row: 6, col: 12, features: ["empty"], price: 0 },
      { row: 6, col: 13, features: ["empty"], price: 0 },
      { row: 6, col: 14, features: ["empty"], price: 0 },
      { row: 6, col: 15, features: ["empty"], price: 0 },
      { row: 7, col: 1, status: "occupied" },
      { row: 7, col: 3, status: "occupied" },
      { row: 7, col: 6, status: "occupied" },
      { row: 7, col: 7, status: "occupied" },
      { row: 7, col: 8, status: "occupied" },
      { row: 7, col: 12, status: "occupied" },
      { row: 7, col: 13, status: "occupied" },
      { row: 7, col: 14, status: "occupied" },
    ],
  },

  "K Lot": {
    name: "K Lot",
    rows: 7,
    cols: 15,
    defaultSpotPrice: 1,
    specialSpots: [
      { row: 0, col: 0, features: ["empty"], price: 0 },
      { row: 0, col: 1, features: ["empty"], price: 0 },
      { row: 0, col: 2, features: ["empty"], price: 0 },
      { row: 0, col: 3, features: ["empty"], price: 0 },
      { row: 0, col: 4, features: ["empty"], price: 0 },
      { row: 0, col: 5, features: ["empty"], price: 0 },
      { row: 0, col: 6, features: ["empty"], price: 0 },
      { row: 0, col: 7, status: "occupied" },
      { row: 0, col: 10, status: "occupied" },
      { row: 0, col: 12, status: "occupied" },
      { row: 0, col: 13, status: "occupied" },
      { row: 1, col: 0, features: ["empty"], price: 0 },
      { row: 1, col: 1, features: ["empty"], price: 0 },
      { row: 1, col: 2, features: ["empty"], price: 0 },
      { row: 1, col: 3, features: ["empty"], price: 0 },
      { row: 1, col: 4, features: ["empty"], price: 0 },
      { row: 1, col: 6, status: "occupied" },
      { row: 1, col: 8, status: "occupied" },
      { row: 1, col: 11, status: "occupied" },
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
      { row: 2, col: 13, features: ["empty"], price: 0 },
      { row: 2, col: 14, features: ["empty"], price: 0 },
      { row: 3, col: 0, features: ["empty"], price: 0 },
      { row: 3, col: 1, features: ["empty"], price: 0 },
      { row: 3, col: 2, features: ["empty"], price: 0 },
      { row: 3, col: 5, status: "occupied" },
      { row: 3, col: 7, status: "occupied" },
      { row: 3, col: 11, status: "occupied" },
      { row: 4, col: 0, features: ["empty"], price: 0 },
      { row: 4, col: 1, features: ["empty"], price: 0 },
      { row: 4, col: 5, status: "occupied" },
      { row: 4, col: 6, status: "occupied" },
      { row: 4, col: 9, status: "occupied" },
      { row: 4, col: 10, status: "occupied" },
      { row: 4, col: 11, status: "occupied" },
      { row: 4, col: 13, status: "occupied" },
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
      { row: 5, col: 10, features: ["empty"], price: 0 },
      { row: 5, col: 11, features: ["empty"], price: 0 },
      { row: 5, col: 12, features: ["empty"], price: 0 },
      { row: 5, col: 13, features: ["empty"], price: 0 },
      { row: 5, col: 14, features: ["empty"], price: 0 },
      { row: 6, col: 6, status: "occupied" },
      { row: 6, col: 9, status: "occupied" },
      { row: 6, col: 11, status: "occupied" },
      { row: 6, col: 13, status: "occupied" },
      { row: 6, col: 14, status: "occupied" },
    ],
  },
  "ALC Lot": {
    name: "ALC Lot",
    rows: 9,
    cols: 15,
    defaultSpotPrice: 3,
    specialSpots: [
      { row: 0, col: 0, features: ["empty"], price: 0 },
      { row: 0, col: 1, features: ["empty"], price: 0 },
      { row: 0, col: 2, features: ["empty"], price: 0 },
      { row: 0, col: 3, features: ["empty"], price: 0 },
      { row: 0, col: 4, features: ["empty"], price: 0 },
      { row: 0, col: 5, features: ["empty"], price: 0 },
      { row: 0, col: 6, features: ["empty"], price: 0 },
      { row: 0, col: 7, features: ["empty"], price: 0 },
      { row: 0, col: 8, features: ["empty"], price: 0 },
      { row: 0, col: 9, status: "occupied" },
      { row: 0, col: 10, features: ["accessible"], price: 3 },
      { row: 0, col: 11, features: ["accessible"], price: 3 },
      { row: 0, col: 13, status: "occupied" },
      { row: 0, col: 14, features: ["accessible"], price: 3 },
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
      { row: 1, col: 13, features: ["empty"], price: 0 },
      { row: 1, col: 14, features: ["empty"], price: 0 },
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
      { row: 2, col: 13, features: ["empty"], price: 0 },
      { row: 2, col: 14, features: ["empty"], price: 0 },
      { row: 3, col: 0, features: ["empty"], price: 0 },
      { row: 3, col: 1, features: ["empty"], price: 0 },
      { row: 3, col: 2, features: ["empty"], price: 0 },
      { row: 3, col: 3, features: ["empty"], price: 0 },
      { row: 3, col: 4, features: ["empty"], price: 0 },
      { row: 3, col: 5, features: ["empty"], price: 0 },
      { row: 3, col: 6, features: ["empty"], price: 0 },
      { row: 3, col: 7, features: ["empty"], price: 0 },
      { row: 3, col: 8, features: ["empty"], price: 0 },
      { row: 3, col: 9, features: ["empty"], price: 0 },
      { row: 3, col: 10, features: ["empty"], price: 0 },
      { row: 3, col: 11, features: ["empty"], price: 0 },
      { row: 3, col: 12, features: ["empty"], price: 0 },
      { row: 3, col: 13, features: ["empty"], price: 0 },
      { row: 3, col: 14, features: ["empty"], price: 0 },
      { row: 4, col: 0, features: ["accessible"], price: 3 },
      { row: 4, col: 4, status: "occupied" },
      { row: 4, col: 11, status: "occupied" },
      { row: 4, col: 13, status: "occupied" },
      { row: 5, col: 0, features: ["accessible"], price: 3 },
      { row: 5, col: 2, status: "occupied" },
      { row: 5, col: 7, status: "occupied" },
      { row: 5, col: 9, status: "occupied" },
      { row: 5, col: 11, status: "occupied" },
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
      { row: 6, col: 10, features: ["empty"], price: 0 },
      { row: 6, col: 11, features: ["empty"], price: 0 },
      { row: 6, col: 12, features: ["empty"], price: 0 },
      { row: 6, col: 13, features: ["empty"], price: 0 },
      { row: 6, col: 14, features: ["empty"], price: 0 },
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
      { row: 7, col: 10, features: ["empty"], price: 0 },
      { row: 7, col: 11, features: ["empty"], price: 0 },
      { row: 7, col: 12, features: ["empty"], price: 0 },
      { row: 7, col: 13, features: ["empty"], price: 0 },
      { row: 7, col: 14, features: ["empty"], price: 0 },
      { row: 8, col: 0, features: ["accessible"], price: 3 },
      { row: 8, col: 1, features: ["accessible"], price: 3 },
      { row: 8, col: 2, features: ["accessible"], price: 3 },
      { row: 8, col: 4, status: "occupied" },
      { row: 8, col: 6, status: "occupied" },
      { row: 8, col: 8, status: "occupied" },
      { row: 8, col: 9, status: "occupied" },
      { row: 8, col: 13, status: "occupied" },
      { row: 8, col: 14, status: "occupied" },
    ],
  },

  "Q Lot": {
    name: "Q Lot",
    rows: 2,
    cols: 22,
    defaultSpotPrice: 5,
    specialSpots: [
      { row: 0, col: 0, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 1, features: ["ev"], price: 5 },
      { row: 0, col: 2, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 3, features: ["ev"], price: 5 },
      { row: 0, col: 4, features: ["ev"], price: 5 },
      { row: 0, col: 5, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 6, features: ["ev"], price: 5 },
      { row: 0, col: 7, features: ["ev"], price: 5 },
      { row: 0, col: 8, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 9, features: ["ev"], price: 5 },
      { row: 0, col: 10, features: ["ev"], price: 5 },
      { row: 0, col: 11, features: ["ev"], price: 5 },
      { row: 0, col: 12, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 13, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 14, features: ["ev"], price: 5 },
      { row: 0, col: 15, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 16, features: ["ev"], price: 5 },
      { row: 0, col: 17, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 18, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 19, status: "occupied", features: ["ev"], price: 5 },
      { row: 0, col: 20, features: ["ev"], price: 5 },
      { row: 0, col: 21, status: "occupied", features: ["ev"], price: 5 },
      { row: 1, col: 0, features: ["ev"], price: 5 },
      { row: 1, col: 1, features: ["ev"], price: 5 },
      { row: 1, col: 2, features: ["ev"], price: 5 },
      { row: 1, col: 3, features: ["ev"], price: 5 },
      { row: 1, col: 4, features: ["ev"], price: 5 },
      { row: 1, col: 5, features: ["ev"], price: 5 },
      { row: 1, col: 6, features: ["ev"], price: 5 },
      { row: 1, col: 7, features: ["ev"], price: 5 },
      { row: 1, col: 8, features: ["ev"], price: 5 },
      { row: 1, col: 9, features: ["ev"], price: 5 },
      { row: 1, col: 10, features: ["ev"], price: 5 },
      { row: 1, col: 11, features: ["ev"], price: 5 },
      { row: 1, col: 12, features: ["ev"], price: 5 },
      { row: 1, col: 13, features: ["ev"], price: 5 },
      { row: 1, col: 14, features: ["ev"], price: 5 },
      { row: 1, col: 15, features: ["ev"], price: 5 },
      { row: 1, col: 16, features: ["ev"], price: 5 },
      { row: 1, col: 17, status: "occupied", features: ["ev"], price: 5 },
      { row: 1, col: 18, status: "occupied", features: ["ev"], price: 5 },
      { row: 1, col: 19, status: "occupied", features: ["ev"], price: 5 },
      { row: 1, col: 20, features: ["ev"], price: 5 },
      { row: 1, col: 21, status: "occupied", features: ["ev"], price: 5 },
    ],
  },
  "Q Lot 1": {
    name: "Q Lot 1",
    rows: 18,
    cols: 16,
    defaultSpotPrice: 2,
    specialSpots: [
      { row: 0, col: 0, status: "occupied" },
      { row: 0, col: 2, status: "occupied" },
      { row: 0, col: 3, status: "occupied" },
      { row: 0, col: 4, status: "occupied" },
      { row: 0, col: 5, status: "occupied" },
      { row: 0, col: 6, status: "occupied" },
      { row: 0, col: 8, status: "occupied" },
      { row: 0, col: 9, status: "occupied" },
      { row: 0, col: 11, status: "occupied" },
      { row: 0, col: 12, status: "occupied" },
      { row: 0, col: 13, status: "occupied" },
      { row: 0, col: 15, status: "occupied" },
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
      { row: 1, col: 13, features: ["empty"], price: 0 },
      { row: 1, col: 14, features: ["empty"], price: 0 },
      { row: 1, col: 15, features: ["empty"], price: 0 },
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
      { row: 2, col: 13, features: ["empty"], price: 0 },
      { row: 2, col: 14, features: ["empty"], price: 0 },
      { row: 2, col: 15, features: ["empty"], price: 0 },
      { row: 3, col: 1, status: "occupied" },
      { row: 3, col: 2, status: "occupied" },
      { row: 3, col: 4, status: "occupied" },
      { row: 3, col: 5, status: "occupied" },
      { row: 3, col: 6, status: "occupied" },
      { row: 3, col: 7, status: "occupied" },
      { row: 3, col: 8, status: "occupied" },
      { row: 3, col: 9, status: "occupied" },
      { row: 3, col: 10, status: "occupied" },
      { row: 3, col: 11, status: "occupied" },
      { row: 3, col: 12, status: "occupied" },
      { row: 3, col: 13, status: "occupied" },
      { row: 3, col: 14, status: "occupied" },
      { row: 3, col: 15, status: "occupied" },
      { row: 4, col: 0, status: "occupied" },
      { row: 4, col: 4, status: "occupied" },
      { row: 4, col: 5, status: "occupied" },
      { row: 4, col: 6, status: "occupied" },
      { row: 4, col: 8, status: "occupied" },
      { row: 4, col: 9, status: "occupied" },
      { row: 4, col: 10, status: "occupied" },
      { row: 4, col: 11, status: "occupied" },
      { row: 4, col: 12, status: "occupied" },
      { row: 4, col: 14, status: "occupied" },
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
      { row: 5, col: 10, features: ["empty"], price: 0 },
      { row: 5, col: 11, features: ["empty"], price: 0 },
      { row: 5, col: 12, features: ["empty"], price: 0 },
      { row: 5, col: 13, features: ["empty"], price: 0 },
      { row: 5, col: 14, features: ["empty"], price: 0 },
      { row: 5, col: 15, features: ["empty"], price: 0 },
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
      { row: 6, col: 10, features: ["empty"], price: 0 },
      { row: 6, col: 11, features: ["empty"], price: 0 },
      { row: 6, col: 12, features: ["empty"], price: 0 },
      { row: 6, col: 13, features: ["empty"], price: 0 },
      { row: 6, col: 14, features: ["empty"], price: 0 },
      { row: 6, col: 15, features: ["empty"], price: 0 },
      { row: 7, col: 0, status: "occupied" },
      { row: 7, col: 2, status: "occupied" },
      { row: 7, col: 4, status: "occupied" },
      { row: 7, col: 6, status: "occupied" },
      { row: 7, col: 7, status: "occupied" },
      { row: 7, col: 8, status: "occupied" },
      { row: 7, col: 13, status: "occupied" },
      { row: 7, col: 14, status: "occupied" },
      { row: 8, col: 1, status: "occupied" },
      { row: 8, col: 3, status: "occupied" },
      { row: 8, col: 4, status: "occupied" },
      { row: 8, col: 6, status: "occupied" },
      { row: 8, col: 8, status: "occupied" },
      { row: 8, col: 10, status: "occupied" },
      { row: 8, col: 11, status: "occupied" },
      { row: 8, col: 12, status: "occupied" },
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
      { row: 9, col: 10, features: ["empty"], price: 0 },
      { row: 9, col: 11, features: ["empty"], price: 0 },
      { row: 9, col: 12, features: ["empty"], price: 0 },
      { row: 9, col: 13, features: ["empty"], price: 0 },
      { row: 9, col: 14, features: ["empty"], price: 0 },
      { row: 9, col: 15, features: ["empty"], price: 0 },
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
      { row: 10, col: 10, features: ["empty"], price: 0 },
      { row: 10, col: 11, features: ["empty"], price: 0 },
      { row: 10, col: 12, features: ["empty"], price: 0 },
      { row: 10, col: 13, features: ["empty"], price: 0 },
      { row: 10, col: 14, features: ["empty"], price: 0 },
      { row: 10, col: 15, features: ["empty"], price: 0 },
      { row: 11, col: 0, features: ["empty"], price: 0 },
      { row: 11, col: 1, features: ["empty"], price: 0 },
      { row: 11, col: 2, status: "occupied" },
      { row: 11, col: 4, features: ["empty"], price: 0 },
      { row: 11, col: 5, features: ["empty"], price: 0 },
      { row: 11, col: 8, features: ["empty"], price: 0 },
      { row: 11, col: 9, features: ["empty"], price: 0 },
      { row: 11, col: 11, status: "occupied" },
      { row: 11, col: 12, features: ["empty"], price: 0 },
      { row: 11, col: 13, features: ["empty"], price: 0 },
      { row: 11, col: 14, status: "occupied" },
      { row: 12, col: 0, features: ["empty"], price: 0 },
      { row: 12, col: 1, features: ["empty"], price: 0 },
      { row: 12, col: 2, status: "occupied" },
      { row: 12, col: 4, features: ["empty"], price: 0 },
      { row: 12, col: 5, features: ["empty"], price: 0 },
      { row: 12, col: 8, features: ["empty"], price: 0 },
      { row: 12, col: 9, features: ["empty"], price: 0 },
      { row: 12, col: 12, features: ["empty"], price: 0 },
      { row: 12, col: 13, features: ["empty"], price: 0 },
      { row: 13, col: 0, features: ["empty"], price: 0 },
      { row: 13, col: 1, features: ["empty"], price: 0 },
      { row: 13, col: 2, status: "occupied" },
      { row: 13, col: 3, status: "occupied" },
      { row: 13, col: 4, features: ["empty"], price: 0 },
      { row: 13, col: 5, features: ["empty"], price: 0 },
      { row: 13, col: 8, features: ["empty"], price: 0 },
      { row: 13, col: 9, features: ["empty"], price: 0 },
      { row: 13, col: 10, status: "occupied" },
      { row: 13, col: 12, features: ["empty"], price: 0 },
      { row: 13, col: 13, features: ["empty"], price: 0 },
      { row: 13, col: 15, status: "occupied" },
      { row: 14, col: 0, features: ["empty"], price: 0 },
      { row: 14, col: 1, features: ["empty"], price: 0 },
      { row: 14, col: 2, status: "occupied" },
      { row: 14, col: 4, features: ["empty"], price: 0 },
      { row: 14, col: 5, features: ["empty"], price: 0 },
      { row: 14, col: 7, status: "occupied" },
      { row: 14, col: 8, features: ["empty"], price: 0 },
      { row: 14, col: 9, features: ["empty"], price: 0 },
      { row: 14, col: 10, status: "occupied" },
      { row: 14, col: 12, features: ["empty"], price: 0 },
      { row: 14, col: 13, features: ["empty"], price: 0 },
      { row: 14, col: 15, status: "occupied" },
      { row: 15, col: 0, features: ["empty"], price: 0 },
      { row: 15, col: 1, features: ["empty"], price: 0 },
      { row: 15, col: 3, status: "occupied" },
      { row: 15, col: 4, features: ["empty"], price: 0 },
      { row: 15, col: 5, features: ["empty"], price: 0 },
      { row: 15, col: 6, status: "occupied" },
      { row: 15, col: 8, features: ["empty"], price: 0 },
      { row: 15, col: 9, features: ["empty"], price: 0 },
      { row: 15, col: 12, features: ["empty"], price: 0 },
      { row: 15, col: 13, features: ["empty"], price: 0 },
      { row: 16, col: 0, features: ["empty"], price: 0 },
      { row: 16, col: 1, features: ["empty"], price: 0 },
      { row: 16, col: 4, features: ["empty"], price: 0 },
      { row: 16, col: 5, features: ["empty"], price: 0 },
      { row: 16, col: 6, status: "occupied" },
      { row: 16, col: 7, status: "occupied" },
      { row: 16, col: 8, features: ["empty"], price: 0 },
      { row: 16, col: 9, features: ["empty"], price: 0 },
      { row: 16, col: 11, status: "occupied" },
      { row: 16, col: 12, features: ["empty"], price: 0 },
      { row: 16, col: 13, features: ["empty"], price: 0 },
      { row: 16, col: 14, status: "occupied" },
      { row: 17, col: 0, features: ["empty"], price: 0 },
      { row: 17, col: 1, features: ["empty"], price: 0 },
      { row: 17, col: 4, features: ["empty"], price: 0 },
      { row: 17, col: 5, features: ["empty"], price: 0 },
      { row: 17, col: 6, status: "occupied" },
      { row: 17, col: 7, status: "occupied" },
      { row: 17, col: 8, features: ["empty"], price: 0 },
      { row: 17, col: 9, features: ["empty"], price: 0 },
      { row: 17, col: 12, features: ["empty"], price: 0 },
      { row: 17, col: 13, features: ["empty"], price: 0 },
    ],
  },
  Parkade: {
    name: "Parkade",
    rows: 16,
    cols: 16,
    defaultSpotPrice: 4,
    specialSpots: [
      { row: 0, col: 0, features: ["covered"], price: 4 },
      { row: 0, col: 1, status: "occupied", features: ["covered"], price: 4 },
      { row: 0, col: 2, status: "occupied", features: ["covered"], price: 4 },
      { row: 0, col: 3, features: ["covered"], price: 4 },
      { row: 0, col: 4, status: "occupied", features: ["covered"], price: 4 },
      { row: 0, col: 5, features: ["covered"], price: 4 },
      { row: 0, col: 6, features: ["covered"], price: 4 },
      { row: 0, col: 7, features: ["covered"], price: 4 },
      { row: 0, col: 8, features: ["covered"], price: 4 },
      { row: 0, col: 9, status: "occupied", features: ["covered"], price: 4 },
      { row: 0, col: 10, features: ["covered"], price: 4 },
      { row: 0, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 0, col: 12, status: "occupied", features: ["covered"], price: 4 },
      { row: 0, col: 13, features: ["covered"], price: 4 },
      { row: 0, col: 14, features: ["covered"], price: 4 },
      { row: 0, col: 15, features: ["covered"], price: 4 },
      { row: 1, col: 0, features: ["covered"], price: 4 },
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
      { row: 1, col: 13, features: ["empty"], price: 0 },
      { row: 1, col: 14, features: ["empty"], price: 0 },
      { row: 1, col: 15, features: ["covered"], price: 4 },
      { row: 2, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 2, col: 1, features: ["empty"], price: 0 },
      { row: 2, col: 2, features: ["empty"], price: 0 },
      { row: 2, col: 3, features: ["covered"], price: 4 },
      { row: 2, col: 4, features: ["covered"], price: 4 },
      { row: 2, col: 5, features: ["empty"], price: 0 },
      { row: 2, col: 6, features: ["empty"], price: 0 },
      { row: 2, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 2, col: 8, features: ["covered"], price: 4 },
      { row: 2, col: 9, features: ["empty"], price: 0 },
      { row: 2, col: 10, features: ["empty"], price: 0 },
      { row: 2, col: 11, features: ["covered"], price: 4 },
      { row: 2, col: 12, features: ["covered"], price: 4 },
      { row: 2, col: 13, features: ["empty"], price: 0 },
      { row: 2, col: 14, features: ["empty"], price: 0 },
      { row: 2, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 3, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 3, col: 1, features: ["empty"], price: 0 },
      { row: 3, col: 2, features: ["empty"], price: 0 },
      { row: 3, col: 3, features: ["covered"], price: 4 },
      { row: 3, col: 4, features: ["covered"], price: 4 },
      { row: 3, col: 5, features: ["empty"], price: 0 },
      { row: 3, col: 6, features: ["empty"], price: 0 },
      { row: 3, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 3, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 3, col: 9, features: ["empty"], price: 0 },
      { row: 3, col: 10, features: ["empty"], price: 0 },
      { row: 3, col: 11, features: ["covered"], price: 4 },
      { row: 3, col: 12, features: ["covered"], price: 4 },
      { row: 3, col: 13, features: ["empty"], price: 0 },
      { row: 3, col: 14, features: ["empty"], price: 0 },
      { row: 3, col: 15, features: ["covered"], price: 4 },
      { row: 4, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 4, col: 1, features: ["empty"], price: 0 },
      { row: 4, col: 2, features: ["empty"], price: 0 },
      { row: 4, col: 3, status: "occupied", features: ["covered"], price: 4 },
      { row: 4, col: 4, features: ["covered"], price: 4 },
      { row: 4, col: 5, features: ["empty"], price: 0 },
      { row: 4, col: 6, features: ["empty"], price: 0 },
      { row: 4, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 4, col: 8, features: ["covered"], price: 4 },
      { row: 4, col: 9, features: ["empty"], price: 0 },
      { row: 4, col: 10, features: ["empty"], price: 0 },
      { row: 4, col: 11, features: ["covered"], price: 4 },
      { row: 4, col: 12, features: ["covered"], price: 4 },
      { row: 4, col: 13, features: ["empty"], price: 0 },
      { row: 4, col: 14, features: ["empty"], price: 0 },
      { row: 4, col: 15, features: ["covered"], price: 4 },
      { row: 5, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 5, col: 1, features: ["empty"], price: 0 },
      { row: 5, col: 2, features: ["empty"], price: 0 },
      { row: 5, col: 3, status: "occupied", features: ["covered"], price: 4 },
      { row: 5, col: 4, features: ["covered"], price: 4 },
      { row: 5, col: 5, features: ["empty"], price: 0 },
      { row: 5, col: 6, features: ["empty"], price: 0 },
      { row: 5, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 5, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 5, col: 9, features: ["empty"], price: 0 },
      { row: 5, col: 10, features: ["empty"], price: 0 },
      { row: 5, col: 11, features: ["covered"], price: 4 },
      { row: 5, col: 12, features: ["covered"], price: 4 },
      { row: 5, col: 13, features: ["empty"], price: 0 },
      { row: 5, col: 14, features: ["empty"], price: 0 },
      { row: 5, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 6, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 6, col: 1, features: ["empty"], price: 0 },
      { row: 6, col: 2, features: ["empty"], price: 0 },
      { row: 6, col: 3, status: "occupied", features: ["covered"], price: 4 },
      { row: 6, col: 4, features: ["covered"], price: 4 },
      { row: 6, col: 5, features: ["empty"], price: 0 },
      { row: 6, col: 6, features: ["empty"], price: 0 },
      { row: 6, col: 7, features: ["covered"], price: 4 },
      { row: 6, col: 8, features: ["covered"], price: 4 },
      { row: 6, col: 9, features: ["empty"], price: 0 },
      { row: 6, col: 10, features: ["empty"], price: 0 },
      { row: 6, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 6, col: 12, features: ["covered"], price: 4 },
      { row: 6, col: 13, features: ["empty"], price: 0 },
      { row: 6, col: 14, features: ["empty"], price: 0 },
      { row: 6, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 7, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 7, col: 1, features: ["empty"], price: 0 },
      { row: 7, col: 2, features: ["empty"], price: 0 },
      { row: 7, col: 3, status: "occupied", features: ["covered"], price: 4 },
      { row: 7, col: 4, features: ["covered"], price: 4 },
      { row: 7, col: 5, features: ["empty"], price: 0 },
      { row: 7, col: 6, features: ["empty"], price: 0 },
      { row: 7, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 7, col: 8, features: ["covered"], price: 4 },
      { row: 7, col: 9, features: ["empty"], price: 0 },
      { row: 7, col: 10, features: ["empty"], price: 0 },
      { row: 7, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 7, col: 12, features: ["covered"], price: 4 },
      { row: 7, col: 13, features: ["empty"], price: 0 },
      { row: 7, col: 14, features: ["empty"], price: 0 },
      { row: 7, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 8, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 8, col: 1, features: ["empty"], price: 0 },
      { row: 8, col: 2, features: ["empty"], price: 0 },
      { row: 8, col: 3, features: ["covered"], price: 4 },
      { row: 8, col: 4, features: ["covered"], price: 4 },
      { row: 8, col: 5, features: ["empty"], price: 0 },
      { row: 8, col: 6, features: ["empty"], price: 0 },
      { row: 8, col: 7, features: ["covered"], price: 4 },
      { row: 8, col: 8, features: ["covered"], price: 4 },
      { row: 8, col: 9, features: ["empty"], price: 0 },
      { row: 8, col: 10, features: ["empty"], price: 0 },
      { row: 8, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 8, col: 12, features: ["covered"], price: 4 },
      { row: 8, col: 13, features: ["empty"], price: 0 },
      { row: 8, col: 14, features: ["empty"], price: 0 },
      { row: 8, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 9, col: 0, status: "occupied", features: ["covered"], price: 4 },
      { row: 9, col: 1, features: ["empty"], price: 0 },
      { row: 9, col: 2, features: ["empty"], price: 0 },
      { row: 9, col: 3, features: ["covered"], price: 4 },
      { row: 9, col: 4, features: ["covered"], price: 4 },
      { row: 9, col: 5, features: ["empty"], price: 0 },
      { row: 9, col: 6, features: ["empty"], price: 0 },
      { row: 9, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 9, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 9, col: 9, features: ["empty"], price: 0 },
      { row: 9, col: 10, features: ["empty"], price: 0 },
      { row: 9, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 9, col: 12, features: ["covered"], price: 4 },
      { row: 9, col: 13, features: ["empty"], price: 0 },
      { row: 9, col: 14, features: ["empty"], price: 0 },
      { row: 9, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 10, col: 0, features: ["covered"], price: 4 },
      { row: 10, col: 1, features: ["empty"], price: 0 },
      { row: 10, col: 2, features: ["empty"], price: 0 },
      { row: 10, col: 3, status: "occupied", features: ["covered"], price: 4 },
      { row: 10, col: 4, features: ["covered"], price: 4 },
      { row: 10, col: 5, features: ["empty"], price: 0 },
      { row: 10, col: 6, features: ["empty"], price: 0 },
      { row: 10, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 10, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 10, col: 9, features: ["empty"], price: 0 },
      { row: 10, col: 10, features: ["empty"], price: 0 },
      { row: 10, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 10, col: 12, features: ["covered"], price: 4 },
      { row: 10, col: 13, features: ["empty"], price: 0 },
      { row: 10, col: 14, features: ["empty"], price: 0 },
      { row: 10, col: 15, features: ["covered"], price: 4 },
      { row: 11, col: 0, features: ["covered"], price: 4 },
      { row: 11, col: 1, features: ["empty"], price: 0 },
      { row: 11, col: 2, features: ["empty"], price: 0 },
      { row: 11, col: 3, status: "occupied", features: ["covered"], price: 4 },
      { row: 11, col: 4, features: ["covered"], price: 4 },
      { row: 11, col: 5, features: ["empty"], price: 0 },
      { row: 11, col: 6, features: ["empty"], price: 0 },
      { row: 11, col: 7, features: ["covered"], price: 4 },
      { row: 11, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 11, col: 9, features: ["empty"], price: 0 },
      { row: 11, col: 10, features: ["empty"], price: 0 },
      { row: 11, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 11, col: 12, features: ["covered"], price: 4 },
      { row: 11, col: 13, features: ["empty"], price: 0 },
      { row: 11, col: 14, features: ["empty"], price: 0 },
      { row: 11, col: 15, features: ["covered"], price: 4 },
      { row: 12, col: 0, features: ["covered"], price: 4 },
      { row: 12, col: 1, features: ["empty"], price: 0 },
      { row: 12, col: 2, features: ["empty"], price: 0 },
      { row: 12, col: 3, features: ["covered"], price: 4 },
      { row: 12, col: 4, features: ["covered"], price: 4 },
      { row: 12, col: 5, features: ["empty"], price: 0 },
      { row: 12, col: 6, features: ["empty"], price: 0 },
      { row: 12, col: 7, features: ["covered"], price: 4 },
      { row: 12, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 12, col: 9, features: ["empty"], price: 0 },
      { row: 12, col: 10, features: ["empty"], price: 0 },
      { row: 12, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 12, col: 12, features: ["covered"], price: 4 },
      { row: 12, col: 13, features: ["empty"], price: 0 },
      { row: 12, col: 14, features: ["empty"], price: 0 },
      { row: 12, col: 15, features: ["covered"], price: 4 },
      { row: 13, col: 0, features: ["covered"], price: 4 },
      { row: 13, col: 1, features: ["empty"], price: 0 },
      { row: 13, col: 2, features: ["empty"], price: 0 },
      { row: 13, col: 3, features: ["covered"], price: 4 },
      { row: 13, col: 4, features: ["covered"], price: 4 },
      { row: 13, col: 5, features: ["empty"], price: 0 },
      { row: 13, col: 6, features: ["empty"], price: 0 },
      { row: 13, col: 7, features: ["covered"], price: 4 },
      { row: 13, col: 8, features: ["covered"], price: 4 },
      { row: 13, col: 9, features: ["empty"], price: 0 },
      { row: 13, col: 10, features: ["empty"], price: 0 },
      { row: 13, col: 11, status: "occupied", features: ["covered"], price: 4 },
      { row: 13, col: 12, features: ["covered"], price: 4 },
      { row: 13, col: 13, features: ["empty"], price: 0 },
      { row: 13, col: 14, features: ["empty"], price: 0 },
      { row: 13, col: 15, status: "occupied", features: ["covered"], price: 4 },
      { row: 14, col: 0, features: ["covered"], price: 4 },
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
      { row: 14, col: 13, features: ["empty"], price: 0 },
      { row: 14, col: 14, features: ["empty"], price: 0 },
      { row: 14, col: 15, features: ["covered"], price: 4 },
      { row: 15, col: 0, features: ["covered"], price: 4 },
      { row: 15, col: 1, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 2, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 3, features: ["covered"], price: 4 },
      { row: 15, col: 4, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 5, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 6, features: ["covered"], price: 4 },
      { row: 15, col: 7, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 8, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 9, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 10, status: "occupied", features: ["covered"], price: 4 },
      { row: 15, col: 11, features: ["covered"], price: 4 },
      { row: 15, col: 12, features: ["covered"], price: 4 },
      { row: 15, col: 13, features: ["ev"], price: 12 },
      { row: 15, col: 14, features: ["ev"], price: 12 },
      { row: 15, col: 15, status: "occupied", features: ["covered"], price: 4 },
    ],
  },
  "N Lot": {
    name: "N Lot",
    rows: 16,
    cols: 14,
    defaultSpotPrice: 2,
    specialSpots: [
      { row: 0, col: 0, status: "occupied", features: ["accessible"] },
      { row: 0, col: 1, features: ["accessible"] },
      { row: 0, col: 12, features: ["ev"], price: 4.75 },
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
      { row: 1, col: 13, features: ["ev"], price: 4.75 },
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
      { row: 3, col: 0, features: ["accessible"] },
      { row: 3, col: 1, features: ["accessible"] },
      { row: 3, col: 2, features: ["accessible"] },
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
      { row: 6, col: 13, features: ["accessible"] },
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
      { row: 7, col: 13, features: ["accessible"] },
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
      { row: 8, col: 13, features: ["accessible"] },
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
      { row: 9, col: 13, features: ["accessible"] },
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
      { row: 12, col: 0, features: ["accessible"] },
      { row: 12, col: 1, features: ["accessible"] },
      { row: 12, col: 2, features: ["accessible"] },
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
      { row: 14, col: 13, features: ["ev"], price: 4.75 },
      { row: 15, col: 12, features: ["ev"], price: 4.75 },
      { row: 15, col: 13, features: ["empty"], price: 0 },
    ],
  },
};

// State of current instance of lot overlay
var ParkingState = {
  spotGrid: [],
  lotName: "None",
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
      var spotprice = "$" + spot.price + "/h";
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
        '" id="' +
        spot.id +
        '" data-row="' +
        r +
        '" data-col="' +
        c +
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
  ParkingState.elements.overlayContainer.classList.remove("show");
}

// Function to handle buy button click
function handleBuyClick() {
  if (ParkingState.selectedSpots.size === 0) {
    return;
  }

  const selectedSpotID = ParkingState.selectedSpots.values().next().value;
  const selectedSpot = getSpotDataById(selectedSpotID);
  const spotElement = document.getElementById(selectedSpotID);

  const row = parseInt(spotElement.dataset.row, 10);
  const col = parseInt(spotElement.dataset.col, 10);

  parkingLots[ParkingState.lotName].specialSpots.push({
    row: row,
    col: col,
    status: "occupied",
  });

  resetPaymentPage(selectedSpot.id, ParkingState.lotName, selectedSpot.price);
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
    ParkingState.elements.overlayContainer.classList.add("show");
  }

  // Set panning state
  ParkingState.isPanning = false;

  // Remove old panzoom if exists
  if (ParkingState.panzoomObject) {
    ParkingState.panzoomObject.dispose();
  }

  // Set lot name
  ParkingState.elements.lotName.textContent = lotData.name;
  ParkingState.lotName = lotData.name;

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

  if (!ParkingState.elements.legendContainer.classList.contains("open")) {
    handleLegendClick();
  }

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

  // Need scale zoom to fit lot on screen
  // Scale by how many lotRects you can fit in containerRect
  // Zoom Factor is based on lotRect
  var scaleX = containerRect.width / lotRect.width;
  var scaleY = containerRect.height / lotRect.height;
  var bestFitScale = Math.min(scaleX, scaleY);
  bestFitScale -= 0.05;

  // Need to account for scaling
  var scaledLotWidth = lotRect.width * bestFitScale;
  var scaledLotHeight = lotRect.height * bestFitScale;

  // Calc:
  // containerWidth - lotWidth = empty space to the elft
  // Need to halve to "give away" half of the empty width to the right (to center)
  var finalX = (containerRect.width - scaledLotWidth) / 2;
  var finalY = (containerRect.height - scaledLotHeight) / 2;

  // Absolute move
  ParkingState.panzoomObject.moveTo(finalX, finalY);
  // Focal points, Absolute scale
  if (scaleX > scaleY) {
    ParkingState.panzoomObject.zoomAbs(finalX, finalY, bestFitScale);
  } else {
    ParkingState.panzoomObject.zoomAbs(0, 0, bestFitScale);
  }
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
