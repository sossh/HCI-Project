function onLotClick(campusLot) {
    // Option A: smooth zoom + pan to the polygon's center
    const center = campusLot.getBounds().getCenter();
    map.flyTo(center, Math.max(map.getZoom(), 18), { duration: 0.75 });
}




function renderLeaflet() {

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
    "Parcade": {
        "map_display_name": "Parcade",
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
    }
}