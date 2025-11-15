function onLotClick(campusLot, lotName) {
  map.once('moveend', function() {
    displayLotByName(lotName);
  });
  const center = campusLot.getBounds().getCenter();
  map.flyTo(center, 18, { duration: 0.75 });
}

function onHover(campusLot) {
  campusLot.setStyle({ weight: 4, fillOpacity: 1 });
}

function onOut(campusLot) {
  campusLot.setStyle({ weight: 3, fillOpacity: 0.4 });
}

function renderLeaflet() {
  // Commented this out, but this is the original map layout. I just found it to be too much info
  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

  // }).addTo(map);

  // Cleaner map design, imo.
  L.tileLayer("https://tile.openstreetmap.de/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

    // const marker = L.marker([49.808890627609614, -97.13210208927495]).addTo(map);

    // Add a popup to the marker
    // marker.bindPopup("<b>Hello!</b><br>This is Winnipeg, Canada.");
}

function buildAreas() {
  // Uncomment when all implemented
  // const filters = getFilters(); // Get all applied filters set on the ui
  // const filteredLots = getFilteredParkingLots(filters)

  filters = [];
  const filteredLots = getFilteredParkingLots(filters);

  for (const parkingLot of filteredLots) {
    coords = data[parkingLot]["area"];

    const campusPolygon = L.polygon(coords, {
      color: "blue", // outline color
      weight: 3, // outline thickness
      fillColor: "#3388ff", // inside color
      fillOpacity: 0.4, // transparency
    }).addTo(map);

    // Add text label (always visible)
    campusPolygon.bindTooltip(data[parkingLot]["map_display_name"], {
      permanent: true,
      direction: "center",
      className: "polygon-label", // optional custom style
    });

    // Create a event listener on each campusPolygon, call onLotClick function
    campusPolygon.on("click", () => {
      onLotClick(campusPolygon, parkingLot);
    });
    campusPolygon.on("mouseover", () => onHover(campusPolygon));
    campusPolygon.on("mouseout", () => onOut(campusPolygon));
  }
}

// Return all parking lots that have at least one spot where the given filters are true
// Filters are just the tags given to each parking spot, example: ["isAccessible", "isAvailiable"]
// If no filters are given returns all parking lots
function getFilteredParkingLots(filters) {
  let filteredLots = [];

  // Itterate over all parking lots
  for (const parkingLot of Object.keys(data)) {
    let parkingSpots = [];
    if ("parking_spots" in data[parkingLot]) {
      parkingSpots = data[parkingLot]["parking_spots"];
    }

    let hasAllFilters = true;

    // Make sure all filters appear at least once
    for (const filter of filters) {
      let hasFilter = false;

      // Check if the filter exists in at least one
      for (const parkingSpot of parkingSpots) {
        if (filter in parkingSpot && parkingSpot[filter] == true) {
          hasFilter = true;
          break;
        }
      }

      // Stop looping for this lot if it doesnt have this filter
      hasAllFilters = hasAllFilters && hasFilter;
      if (hasAllFilters == false) {
        break;
      }
    }

    // If this lot has all filters add it to the good list
    if (hasAllFilters) {
      filteredLots.push(parkingLot);
    }
  }

  return filteredLots;
}




const data = {

    //From this comment to the next comment, contain all public parking lots that are pay per use, no permits needed.
    "ACW Lot": {
        "map_display_name": "ACW",
        "area": [
            [
                49.809218,
                -97.1298677
            ],
            [
                49.80954,
                -97.1288914
            ],
            [
                49.8101908,
                -97.1294385
            ],
            [
                49.8098896,
                -97.1303881
            ],
            [
                49.809218,
                -97.1298677
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "AC Lot": {
        "map_display_name": "AC",
        "area": [
            [
                49.8094026,
                -97.1286105
            ],
            [
                49.8090287,
                -97.1282404
            ],
            [
                49.809323,
                -97.1274679
            ],
            [
                49.8096622,
                -97.1277522
            ],
            [
                49.8094026,
                -97.1286105
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "D Lot": {
        "map_display_name": "D",
        "area": [
            [
                49.8065038,
                -97.1322574
            ],
            [
                49.8061749,
                -97.131973
            ],
            [
                49.8063065,
                -97.1316137
            ],
            [
                49.806625,
                -97.1318819
            ],
            [
                49.8065038,
                -97.1322574
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "M Lot": {
        "map_display_name": "M",
        "area": [
            [
                49.8049848,
                -97.134439
            ],
            [
                49.8047494,
                -97.1342566
            ],
            [
                49.8050713,
                -97.1332857
            ],
            [
                49.8052998,
                -97.1334734
            ],
            [
                49.8049848,
                -97.134439
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "G Lot": {
        "map_display_name": "G",
        "area": [
            [
                49.8057984,
                -97.1366296
            ],
            [
                49.8056391,
                -97.1364848
            ],
            [
                49.8058088,
                -97.1359913
            ],
            [
                49.805975,
                -97.1361307
            ],
            [
                49.8057984,
                -97.1366296
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "ALC Lot": {
        "map_display_name": "ALC",
        "area": [
            [
                49.8068748,
                -97.1377857
            ],
            [
                49.8065459,
                -97.1375067
            ],
            [
                49.8067986,
                -97.136745
            ],
            [
                49.8071275,
                -97.1370293
            ],
            [
                49.8068748,
                -97.1377857
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "H Lot": {
        "map_display_name": "H",
        "area": [
            [
                49.8079438,
                -97.1337269
            ],
            [
                49.807801,
                -97.1336116
            ],
            [
                49.8079403,
                -97.1332052
            ],
            [
                49.8080797,
                -97.133334
            ],
            [
                49.8079438,
                -97.1337269
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "U Lot": {
        "map_display_name": "U",
        "area": [
            [
                49.8062903,
                -97.1419932
            ],
            [
                49.8060531,
                -97.1418108
            ],
            [
                49.8067126,
                -97.1399279
            ],
            [
                49.8069307,
                -97.1401156
            ],
            [
                49.8062903,
                -97.1419932
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "SD West Lot": {
        "map_display_name": "SD West",
        "area": [
            [
                49.8050535,
                -97.1502512
            ],
            [
                49.8045723,
                -97.1498649
            ],
            [
                49.8049289,
                -97.1488511
            ],
            [
                49.8053928,
                -97.1492427
            ],
            [
                49.8050535,
                -97.1502512
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "SD East Lot": {
        "map_display_name": "SD East",
        "area": [
            [
                49.8054621,
                -97.1488296
            ],
            [
                49.8046485,
                -97.1481966
            ],
            [
                49.805057,
                -97.1469628
            ],
            [
                49.8058464,
                -97.147628
            ],
            [
                49.8054621,
                -97.1488296
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "A Lot": {
        "map_display_name": "A",
        "area": [
            [
                49.8112811,
                -97.1358854
            ],
            [
                49.8107826,
                -97.1354938
            ],
            [
                49.8108623,
                -97.1352363
            ],
            [
                49.8113608,
                -97.1356279
            ],
            [
                49.8112811,
                -97.1358854
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "V Lot": {
        "map_display_name": "V",
        "area": [
            [
                49.8096609,
                -97.1397546
            ],
            [
                49.8094358,
                -97.139583
            ],
            [
                49.8095397,
                -97.1392504
            ],
            [
                49.8097612,
                -97.1394221
            ],
            [
                49.8096609,
                -97.1397546
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "Q Lot": {
        "map_display_name": "Q",
        "area": [
            [
                49.8105419,
                -97.1397609
            ],
            [
                49.8104312,
                -97.139675
            ],
            [
                49.8110681,
                -97.1378511
            ],
            [
                49.811165,
                -97.1379262
            ],
            [
                49.8105419,
                -97.1397609
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "L Lot": {
        "map_display_name": "L",
        "area": [
            [
                49.8123315,
                -97.129628
            ],
            [
                49.8113864,
                -97.1289145
            ],
            [
                49.8116184,
                -97.1281849
            ],
            [
                49.812463,
                -97.1288769
            ],
            [
                49.8123315,
                -97.129628
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "Parkade": {
        "map_display_name": "Parkade",
        "area": [
            [
                49.8096305,
                -97.136576
            ],
            [
                49.8091424,
                -97.1361791
            ],
            [
                49.8094228,
                -97.1352779
            ],
            [
                49.8099283,
                -97.1356856
            ],
            [
                49.8096305,
                -97.136576
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "B.Public Lot": {
        "map_display_name": "B (Public)",
        "area": [
            [
                49.8111745,
                -97.1292292
            ],
            [
                49.810593,
                -97.1287464
            ],
            [
                49.8106968,
                -97.1284889
            ],
            [
                49.8112472,
                -97.1290307
            ],
            [
                49.8111745,
                -97.1292292
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "Stores Lot": {
        "map_display_name": "Stores",
        "area": [
            [
                49.8053874,
                -97.1337929
            ],
            [
                49.8053182,
                -97.1337313
            ],
            [
                49.8053744,
                -97.133569
            ],
            [
                49.8054428,
                -97.133628
            ],
            [
                49.8053874,
                -97.1337929
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": true,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },               



    /*
    *
    END OF STRICTLY PUBLIC USE ONLY (PAY PER USE, NO PERMITS REQUIRED)
    This is now strictly staff only parking
    *
    */





    "B1 Lot": {
        "map_display_name": "B1",
        "area": [
            [
                49.8109535,
                -97.1299023
            ],
            [
                49.8103546,
                -97.129441
            ],
            [
                49.8105589,
                -97.1288348
            ],
            [
                49.8111508,
                -97.1293122
            ],
            [
                49.8109535,
                -97.1299023
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "K Lot": {
        "map_display_name": "K",
        "area": [
            [
                49.8121019,
                -97.1377414
            ],
            [
                49.811368,
                -97.1371782
            ],
            [
                49.8115272,
                -97.1367356
            ],
            [
                49.8119928,
                -97.1371406
            ],
            [
                49.8121019,
                -97.1377414
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "A Lot": {
        "map_display_name": "A",
        "area": [
            [
                49.8107112,
                -97.1353884
            ],
            [
                49.8103234,
                -97.1350987
            ],
            [
                49.8104031,
                -97.1348359
            ],
            [
                49.8107942,
                -97.1351148
            ],
            [
                49.8107112,
                -97.1353884
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "B2 Lot": {
        "map_display_name": "B2",
        "area": [
            [
                49.8122517,
                -97.1299037
            ],
            [
                49.811324,
                -97.1291634
            ],
            [
                49.8113829,
                -97.1289649
            ],
            [
                49.8123141,
                -97.1296677
            ],
            [
                49.8122517,
                -97.1299037
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "B3 Lot": {
        "map_display_name": "B3",
        "area": [
            [
                49.8107141,
                -97.1306186
            ],
            [
                49.8101325,
                -97.1301305
            ],
            [
                49.8101879,
                -97.1299749
            ],
            [
                49.8107695,
                -97.1304577
            ],
            [
                49.8107141,
                -97.1306186
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "B4 Lot": {
        "map_display_name": "B4",
        "area": [
            [
                49.8103541,
                -97.1303504
            ],
            [
                49.8102987,
                -97.1305167
            ],
            [
                49.8100771,
                -97.130345
            ],
            [
                49.8101395,
                -97.1301734
            ],
            [
                49.8103541,
                -97.1303504
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "B5 Lot": {
        "map_display_name": "B5",
        "area": [
            [
                49.811247,
                -97.1289595
            ],
            [
                49.8107416,
                -97.1284445
            ],
            [
                49.8110393,
                -97.1274896
            ],
            [
                49.8115793,
                -97.1279617
            ],
            [
                49.811247,
                -97.1289595
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "N Lot": {
        "map_display_name": "N",
        "area": [
            [
                49.8096936,
                -97.1334419
            ],
            [
                49.8099809,
                -97.1324656
            ],
            [
                49.8094685,
                -97.1320418
            ],
            [
                49.8091501,
                -97.1329269
            ],
            [
                49.8089839,
                -97.1327982
            ],
            [
                49.8093508,
                -97.1316287
            ],
            [
                49.8102578,
                -97.1324012
            ],
            [
                49.8098563,
                -97.1335599
            ],
            [
                49.8096936,
                -97.1334419
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "CTC Lot": {
        "map_display_name": "CTC",
        "area": [
            [
                49.8090743,
                -97.1294048
            ],
            [
                49.8089393,
                -97.1293083
            ],
            [
                49.8090743,
                -97.1288952
            ],
            [
                49.8088735,
                -97.1287343
            ],
            [
                49.8089462,
                -97.1285197
            ],
            [
                49.8092786,
                -97.1287933
            ],
            [
                49.8090743,
                -97.1294048
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "ABC Lot": {
        "map_display_name": "ABC",
        "area": [
            [
                49.8107715,
                -97.1419294
            ],
            [
                49.8106036,
                -97.1417524
            ],
            [
                49.8107196,
                -97.1414118
            ],
            [
                49.8108961,
                -97.1415647
            ],
            [
                49.8107715,
                -97.1419294
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "V Lot": {
        "map_display_name": "V",
        "area": [
            [
                49.8094919,
                -97.1403308
            ],
            [
                49.8092565,
                -97.1401377
            ],
            [
                49.8094348,
                -97.1396039
            ],
            [
                49.809665,
                -97.1397917
            ],
            [
                49.8094919,
                -97.1403308
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "P Lot": {
        "map_display_name": "P",
        "area": [
            [
                49.8090038,
                -97.138548
            ],
            [
                49.8087096,
                -97.1382905
            ],
            [
                49.80926,
                -97.1365149
            ],
            [
                49.8095854,
                -97.1367831
            ],
            [
                49.8090038,
                -97.138548
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "ALC Lot": {
        "map_display_name": "ALC",
        "area": [
            [
                49.8074377,
                -97.1374434
            ],
            [
                49.8070984,
                -97.1371859
            ],
            [
                49.8071988,
                -97.1368747
            ],
            [
                49.8068595,
                -97.1366065
            ],
            [
                49.8069253,
                -97.1364027
            ],
            [
                49.80759,
                -97.1369177
            ],
            [
                49.8074377,
                -97.1374434
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "J Lot": {
        "map_display_name": "J",
        "area": [
            [
                49.8078116,
                -97.1360701
            ],
            [
                49.8075035,
                -97.1358341
            ],
            [
                49.8075554,
                -97.1356892
            ],
            [
                49.8073442,
                -97.1355122
            ],
            [
                49.8073788,
                -97.1354103
            ],
            [
                49.8078843,
                -97.1358341
            ],
            [
                49.8078116,
                -97.1360701
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "Y Lot": {
        "map_display_name": "Y",
        "area": [
            [
                49.8054774,
                -97.1379624
            ],
            [
                49.8051969,
                -97.1377102
            ],
            [
                49.8055501,
                -97.1366266
            ],
            [
                49.805834,
                -97.1368734
            ],
            [
                49.8054774,
                -97.1379624
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "G Lot": {
        "map_display_name": "G",
        "area": [
            [
                49.8056391,
                -97.1364848
            ],
            [
                49.8055155,
                -97.1363799
            ],
            [
                49.8057613,
                -97.1354894
            ],
            [
                49.8060832,
                -97.1357683
            ],
            [
                49.8061732,
                -97.1354894
            ],
            [
                49.8064641,
                -97.1357147
            ],
            [
                49.8063048,
                -97.1363316
            ],
            [
                49.8058132,
                -97.1359453
            ],
            [
                49.8056391,
                -97.1364848
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "E Lot": {
        "map_display_name": "E",
        "area": [
            [
                49.8060832,
                -97.1357683
            ],
            [
                49.8055605,
                -97.1353177
            ],
            [
                49.8057959,
                -97.1346096
            ],
            [
                49.8063429,
                -97.1350066
            ],
            [
                49.8060832,
                -97.1357683
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "W Lot": {
        "map_display_name": "W",
        "area": [
            [
                49.8051519,
                -97.1363423
            ],
            [
                49.8048299,
                -97.1361331
            ],
            [
                49.8050619,
                -97.135425
            ],
            [
                49.8049546,
                -97.1353016
            ],
            [
                49.8050688,
                -97.1349422
            ],
            [
                49.8054843,
                -97.1352641
            ],
            [
                49.8051519,
                -97.1363423
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "S Lot": {
        "map_display_name": "S",
        "area": [
            [
                49.806478,
                -97.1339499
            ],
            [
                49.8061387,
                -97.1336387
            ],
            [
                49.806343,
                -97.1330165
            ],
            [
                49.8065092,
                -97.1331506
            ],
            [
                49.8063915,
                -97.1335583
            ],
            [
                49.806568,
                -97.1337138
            ],
            [
                49.806478,
                -97.1339499
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    },
    "D Lot": {
        "map_display_name": "D",
        "area": [
            [
                49.8063811,
                -97.1325766
            ],
            [
                49.8060314,
                -97.1322815
            ],
            [
                49.8061387,
                -97.1320133
            ],
            [
                49.8064815,
                -97.1322815
            ],
            [
                49.8063811,
                -97.1325766
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isAvailable": true,
                "isStaff": true,
                "isFaculty": false,
                "isStudent": false,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            }
        ]
    }
    

}
