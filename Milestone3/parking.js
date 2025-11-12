      
function onLotClick(campusLot) {
    const center = campusLot.getBounds().getCenter();
    map.flyTo(center, 18, {duration: 0.75 });
}

function onHover(campusLot){
    campusLot.setStyle({weight: 4, fillOpacity: 1});
}

function onOut(campusLot){
    campusLot.setStyle({weight: 3, fillOpacity: 0.4});
}


function renderLeaflet() {

    // Commented this out, but this is the original map layout. I just found it to be too much info
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        
    // }).addTo(map);

    // Cleaner map design, imo.
    L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([49.808890627609614, -97.13210208927495]).addTo(map);

    // Add a popup to the marker
    marker.bindPopup("<b>Hello!</b><br>This is Winnipeg, Canada.");
}


function buildAreas() {
    for (const parkingLot in data) {
        coords = data[parkingLot]["area"]

        const campusPolygon = L.polygon(coords, {
            color: 'blue',         // outline color
            weight: 3,             // outline thickness
            fillColor: '#3388ff',  // inside color
            fillOpacity: 0.4       // transparency
        }).addTo(map);

        // Add text label (always visible)
        campusPolygon.bindTooltip(data[parkingLot]["map_display_name"], {
            permanent: true,
            direction: "center",
            className: "polygon-label" // optional custom style
        });

        // Create a event listener on each campusPolygon, call onLotClick function
        campusPolygon.on('click', () => onLotClick(campusPolygon));
        campusPolygon.on('mouseover', () => onHover(campusPolygon));
        campusPolygon.on('mouseout', () => onOut(campusPolygon));
    }
}
const data = {

    "Q Lot": {
        "map_display_name": "Q",
        "area": [
            [
                49.81053658195796,
                -97.13971235417583
            ],
            [
                49.81120112488122,
                -97.13780756760048
            ],
            [
                49.811073062631785,
                -97.13770025568071
            ],
            [
                49.81040505675611,
                -97.13962113904404
            ]
        ],
        "parking_spots": [
            {
                "spot_id": 1,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": true,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 2,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": true,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": true
            },
            {
                "spot_id": 3,
                "isAvailiable": true,
                "isFaculty": false,
                "isStudent": true,
                "isVisitor": false,
                "isCovered": false,
                "isElectric": false,
                "isAccessible": false
            }
        ]
    },
    "V Lot": {
        "map_display_name": "V",
        "area": [
            [
                49.80990292736153,
                -97.13932111329251
            ],
            [
                49.809677946880036,
                -97.13910648945301
            ],
            [
                49.809515316186875,
                -97.1395838755394
            ],
            [
                49.80973332678789,
                -97.13979328573936
            ]
        ]
    },
    "Parkade": {
        "map_display_name": "Parkade",
        "area": [
            [
                49.809937344775626,
                -97.13554956342881
            ],
            [
                49.809414696575395,
                -97.1350988533659
            ],
            [
                49.80911356557963,
                -97.13598417670377
            ],
            [
                49.80964313952938,
                -97.13644025236265
            ]
        ]
    },
    "L Lot": {
        "map_display_name": "L",
        "area": [
            [
                49.81236108497562,
                -97.12967009530256
            ],
            [
                49.81135044655476,
                -97.1288813526925
            ],
            [
                49.81157888037254,
                -97.1281355348503
            ],
            [
                49.812485682771694,
                -97.12888671828847
            ]
        ]
    },
    "A Lot": {
        "map_display_name": "A",
        "area": [
            [
                49.810806218035400,
                -97.13514277821943
            ],
            [
                49.810744300913875,
                -97.13535203646293
            ],
            [
                49.811218478876384,
                -97.135738359374
            ],
            [
                49.811284240416775,
                -97.13554519791845
            ]
        ]
    },
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
        ]
    },
    "B Lot": {
        "map_display_name": "B",
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
        ]
    }
}