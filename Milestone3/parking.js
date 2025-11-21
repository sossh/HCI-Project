//global varable for lot names
window.nameLot = {};

function onLotClick(campusLot, lotKey) {
    const lot = window.nameLot[lotKey];

    // If lot is dimmed, ignore the click
    if (campusLot._clickDisabled) {
        console.log("Click ignored (lot dimmed):", lotKey);
        return;
    }

    console.log("Lot clicked:", lotKey);

    // Update the dropdown to show this lot
    const dropdown = document.getElementById("lot-selector");

    // Find the index of this lot in the visible list
    const index = window.visibleLots.indexOf(lotKey);
    if (index !== -1) {
        dropdown.selectedIndex = index;
    }

    // Fly to the lot and open the panel
    map.once('moveend', function () {
        const original = window.nameLot[lotKey].originalName;
        displayLotByName(original);
    });

    const center = campusLot.getBounds().getCenter();

        //fixes map shake when already on same lot clicked
    if(map.getCenter().lat.toFixed(4) != center.lat.toFixed(4) 
        && map.getCenter().lng.toFixed(4) != center.lng.toFixed(4)){
            map.flyTo(center, 18, {duration: 0.75 });
    }
}


function onHover(campusLot) {
    // If filters disabled this lot: ignore hover
    if (campusLot._hoverDisabled) return;

    campusLot.setStyle({ 
        weight: 4, 
        fillOpacity: 1 
    });
}

function onOut(campusLot) {
    // If filters disabled this lot: ignore out
    if (campusLot._hoverDisabled) return;

    campusLot.setStyle({ 
        weight: 3, 
        fillOpacity: 0.4 
    });
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

    drawLots(publicLots, '#3388ff');
    drawLots(staffLots, '#ff3388');
    drawLots(studentLot, '#ffaa33');
    
}

function drawLots(lotGroup, color) {
    const lotNames = Object.keys(lotGroup);

    for (const lotName of lotNames) {
        const lot = lotGroup[lotName];
        const coords = lot.area;

        // AUTO-DETECT CATEGORY
        let category = "public";
        if (lot.isStaff) category = "staff";
        if (lot.isStudent) category = "student";
        if (lot.isFaculty) category = "faculty";
        if (lot.isVisitor) category = "public";

        const prefixedName = `${category}-${lotName}`;

        // Draw the polygon
        const polygon = L.polygon(coords, {
            color: "grey",
            weight: 3,
            fillColor: color,
            fillOpacity: 0.4,
        }).addTo(map);

        polygon.bindTooltip(lot.map_display_name, {
            permanent: true,
            direction: "center",
            className: "polygon-label",
        });

        polygon.on("click", () => onLotClick(polygon, prefixedName));
        polygon.on("mouseover", () => onHover(polygon));
        polygon.on("mouseout", () => onOut(polygon));

        window.nameLot[prefixedName] = {
            ...lot,
            polygon: polygon,
            category: category,
            originalName: lotName
        };

        polygon.options.lotName = prefixedName;
    }
}

function applyLotVisibility(polygon, isVisible) {
    // store custom state
    polygon._visible = isVisible;
    polygon._clickDisabled = !isVisible;
    polygon._hoverDisabled = !isVisible;
    polygon._labelDisabled = !isVisible;

    // Apply polygon dimming
    polygon.setStyle({
        fillOpacity: isVisible ? 0.4 : 0.05,
        opacity: isVisible ? 1 : 0.15,
    });

    // Apply label visibility
    const tooltip = polygon.getTooltip();
    if (tooltip && tooltip._container) {
        tooltip._container.style.display = isVisible ? "block" : "none";
    }
}

// Return all parking lots that have at least one spot where the given filters are true
// Filters are just the tags given to each parking spot, example: ["isAccessible", "isAvailiable"]
// If no filters are given returns all parking lots
function getFilteredParkingLots(filters, nameLot){

    let filteredLots = []

    // Itterate over all parking lots
    for(const parkingLot of Object.keys(nameLot)){

        let parkingSpots = [];
        if("parking_spots" in nameLot[parkingLot]){
            parkingSpots = nameLot[parkingLot]["parking_spots"];
        }
        
        let hasAllFilters = true;
        

        // Make sure all filters appear at least once
        for(const filter of filters){

            let hasFilter = false;
                
            // Check if the filter exists in at least one 
            for(const parkingSpot of parkingSpots){
                if(filter in parkingSpot && parkingSpot[filter] == true){
                    hasFilter = true;
                    break;
                }

            }

            // Stop looping for this lot if it doesnt have this filter
            hasAllFilters = hasAllFilters && hasFilter;
            if(hasAllFilters == false){
                break;
            }
        }

        // If this lot has all filters add it to the good list
        if(hasAllFilters){
            filteredLots.push(parkingLot)
        }

    }

    return filteredLots
    
}

const publicLots = {
    "ACW Lot": {
        map_display_name: "ACW",
        area: [
            [49.809218, -97.1298677],
            [49.80954, -97.1288914],
            [49.8101908, -97.1294385],
            [49.8098896, -97.1303881],
            [49.809218, -97.1298677]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "AC Lot": {
        map_display_name: "AC",
        area: [
            [49.8094026, -97.1286105],
            [49.8090287, -97.1282404],
            [49.809323, -97.1274679],
            [49.8096622, -97.1277522],
            [49.8094026, -97.1286105]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "D Lot": {
        map_display_name: "D",
        area: [
            [49.8065038, -97.1322574],
            [49.8061749, -97.131973],
            [49.8063065, -97.1316137],
            [49.806625, -97.1318819],
            [49.8065038, -97.1322574]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "M Lot": {
        map_display_name: "M",
        area: [
            [49.8049848, -97.134439],
            [49.8047494, -97.1342566],
            [49.8050713, -97.1332857],
            [49.8052998, -97.1334734],
            [49.8049848, -97.134439]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "G Lot": {
        map_display_name: "G",
        area: [
            [49.8057984, -97.1366296],
            [49.8056391, -97.1364848],
            [49.8058088, -97.1359913],
            [49.805975, -97.1361307],
            [49.8057984, -97.1366296]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "ALC Lot": {
        map_display_name: "ALC",
        area: [
            [49.8068748, -97.1377857],
            [49.8065459, -97.1375067],
            [49.8067986, -97.136745],
            [49.8071275, -97.1370293],
            [49.8068748, -97.1377857]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "H Lot": {
        map_display_name: "H",
        area: [
            [49.8079438, -97.1337269],
            [49.807801, -97.1336116],
            [49.8079403, -97.1332052],
            [49.8080797, -97.133334],
            [49.8079438, -97.1337269]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: true,
        isAccessible: true
    },

    "U Lot": {
        map_display_name: "U",
        area: [
            [49.8062903, -97.1419932],
            [49.8060531, -97.1418108],
            [49.8067126, -97.1399279],
            [49.8069307, -97.1401156],
            [49.8062903, -97.1419932]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "SD West Lot": {
        map_display_name: "SD West",
        area: [
            [49.8050535, -97.1502512],
            [49.8045723, -97.1498649],
            [49.8049289, -97.1488511],
            [49.8053928, -97.1492427],
            [49.8050535, -97.1502512]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "SD East Lot": {
        map_display_name: "SD East",
        area: [
            [49.8054621, -97.1488296],
            [49.8046485, -97.1481966],
            [49.805057, -97.1469628],
            [49.8058464, -97.147628],
            [49.8054621, -97.1488296]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "A Lot": {
        map_display_name: "A",
        area: [
            [49.8112811, -97.1358854],
            [49.8107826, -97.1354938],
            [49.8108623, -97.1352363],
            [49.8113608, -97.1356279],
            [49.8112811, -97.1358854]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "V Lot": {
        map_display_name: "V",
        area: [
            [49.8096609, -97.1397546],
            [49.8094358, -97.139583],
            [49.8095397, -97.1392504],
            [49.8097612, -97.1394221],
            [49.8096609, -97.1397546]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Q Lot": {
        map_display_name: "Q",
        area: [
            [49.8105419, -97.1397609],
            [49.8104312, -97.139675],
            [49.8110681, -97.1378511],
            [49.811165, -97.1379262],
            [49.8105419, -97.1397609]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: true,
        isAccessible: true
    },

    "L Lot": {
        map_display_name: "L",
        area: [
            [49.8123315, -97.129628],
            [49.8113864, -97.1289145],
            [49.8116184, -97.1281849],
            [49.812463, -97.1288769],
            [49.8123315, -97.129628]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Parkade": {
        map_display_name: "Parkade",
        area: [
            [49.8096305, -97.136576],
            [49.8091424, -97.1361791],
            [49.8094228, -97.1352779],
            [49.8099283, -97.1356856],
            [49.8096305, -97.136576]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: true,
        isElectric: false,
        isAccessible: true
    },

    "B.Public Lot": {
        map_display_name: "B (Public)",
        area: [
            [49.8111745, -97.1292292],
            [49.810593, -97.1287464],
            [49.8106968, -97.1284889],
            [49.8112472, -97.1290307],
            [49.8111745, -97.1292292]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Stores Lot": {
        map_display_name: "Stores",
        area: [
            [49.8053874, -97.1337929],
            [49.8053182, -97.1337313],
            [49.8053744, -97.133569],
            [49.8054428, -97.133628],
            [49.8053874, -97.1337929]
        ],
        isAvailable: true,
        isVisitor: true,
        isStudent: false,
        isFaculty: false,
        isStaff: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    }
};

const staffLots = {
    "B1 Lot": {
        map_display_name: "B1",
        area: [
            [49.8109535, -97.1299023],
            [49.8103546, -97.129441],
            [49.8105589, -97.1288348],
            [49.8111508, -97.1293122],
            [49.8109535, -97.1299023]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: false
    },

    "K Lot": {
        map_display_name: "K",
        area: [
            [49.8121019, -97.1377414],
            [49.811368, -97.1371782],
            [49.8115272, -97.1367356],
            [49.8119928, -97.1371406],
            [49.8121019, -97.1377414]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "A Lot": {
        map_display_name: "A",
        area: [
            [49.8107112, -97.1353884],
            [49.8103234, -97.1350987],
            [49.8104031, -97.1348359],
            [49.8107942, -97.1351148],
            [49.8107112, -97.1353884]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "B2 Lot": {
        map_display_name: "B2",
        area: [
            [49.8122517, -97.1299037],
            [49.811324, -97.1291634],
            [49.8113829, -97.1289649],
            [49.8123141, -97.1296677],
            [49.8122517, -97.1299037]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: true,
        isAccessible: false
    },

    "B3 Lot": {
        map_display_name: "B3",
        area: [
            [49.8107141, -97.1306186],
            [49.8101325, -97.1301305],
            [49.8101879, -97.1299749],
            [49.8107695, -97.1304577],
            [49.8107141, -97.1306186]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: false
    },

    "B4 Lot": {
        map_display_name: "B4",
        area: [
            [49.8103541, -97.1303504],
            [49.8102987, -97.1305167],
            [49.8100771, -97.130345],
            [49.8101395, -97.1301734],
            [49.8103541, -97.1303504]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "B5 Lot": {
        map_display_name: "B5",
        area: [
            [49.811247, -97.1289595],
            [49.8107416, -97.1284445],
            [49.8110393, -97.1274896],
            [49.8115793, -97.1279617],
            [49.811247, -97.1289595]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "N Lot": {
        map_display_name: "N",
        area: [
            [49.8096936, -97.1334419],
            [49.8099809, -97.1324656],
            [49.8094685, -97.1320418],
            [49.8091501, -97.1329269],
            [49.8089839, -97.1327982],
            [49.8093508, -97.1316287],
            [49.8102578, -97.1324012],
            [49.8098563, -97.1335599],
            [49.8096936, -97.1334419]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "CTC Lot": {
        map_display_name: "CTC",
        area: [
            [49.8090743, -97.1294048],
            [49.8089393, -97.1293083],
            [49.8090743, -97.1288952],
            [49.8088735, -97.1287343],
            [49.8089462, -97.1285197],
            [49.8092786, -97.1287933],
            [49.8090743, -97.1294048]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "ABC Lot": {
        map_display_name: "ABC",
        area: [
            [49.8107715, -97.1419294],
            [49.8106036, -97.1417524],
            [49.8107196, -97.1414118],
            [49.8108961, -97.1415647],
            [49.8107715, -97.1419294]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: true,
        isAccessible: true
    },

    "V Lot": {
        map_display_name: "V",
        area: [
            [49.8094919, -97.1403308],
            [49.8092565, -97.1401377],
            [49.8094348, -97.1396039],
            [49.809665, -97.1397917],
            [49.8094919, -97.1403308]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "P Lot": {
        map_display_name: "P",
        area: [
            [49.8090038, -97.138548],
            [49.8087096, -97.1382905],
            [49.80926, -97.1365149],
            [49.8095854, -97.1367831],
            [49.8090038, -97.138548]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "ALC Lot": {
        map_display_name: "ALC",
        area: [
            [49.8074377, -97.1374434],
            [49.8070984, -97.1371859],
            [49.8071988, -97.1368747],
            [49.8068595, -97.1366065],
            [49.8069253, -97.1364027],
            [49.80759, -97.1369177],
            [49.8074377, -97.1374434]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: true,
        isAccessible: true
    },

    "J Lot": {
        map_display_name: "J",
        area: [
            [49.8078116, -97.1360701],
            [49.8075035, -97.1358341],
            [49.8075554, -97.1356892],
            [49.8073442, -97.1355122],
            [49.8073788, -97.1354103],
            [49.8078843, -97.1358341],
            [49.8078116, -97.1360701]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Y Lot": {
        map_display_name: "Y",
        area: [
            [49.8054774, -97.1379624],
            [49.8051969, -97.1377102],
            [49.8055501, -97.1366266],
            [49.805834, -97.1368734],
            [49.8054774, -97.1379624]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "G Lot": {
        map_display_name: "G",
        area: [
            [49.8056391, -97.1364848],
            [49.8055155, -97.1363799],
            [49.8057613, -97.1354894],
            [49.8060832, -97.1357683],
            [49.8061732, -97.1354894],
            [49.8064641, -97.1357147],
            [49.8063048, -97.1363316],
            [49.8058132, -97.1359453],
            [49.8056391, -97.1364848]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "E Lot": {
        map_display_name: "E",
        area: [
            [49.8060832, -97.1357683],
            [49.8055605, -97.1353177],
            [49.8057959, -97.1346096],
            [49.8063429, -97.1350066],
            [49.8060832, -97.1357683]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "W Lot": {
        map_display_name: "W",
        area: [
            [49.8051519, -97.1363423],
            [49.8048299, -97.1361331],
            [49.8050619, -97.135425],
            [49.8049546, -97.1353016],
            [49.8050688, -97.1349422],
            [49.8054843, -97.1352641],
            [49.8051519, -97.1363423]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "S Lot": {
        map_display_name: "S",
        area: [
            [49.806478, -97.1339499],
            [49.8061387, -97.1336387],
            [49.806343, -97.1330165],
            [49.8065092, -97.1331506],
            [49.8063915, -97.1335583],
            [49.806568, -97.1337138],
            [49.806478, -97.1339499]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "D Lot": {
        map_display_name: "D",
        area: [
            [49.8063811, -97.1325766],
            [49.8060314, -97.1322815],
            [49.8061387, -97.1320133],
            [49.8064815, -97.1322815],
            [49.8063811, -97.1325766]
        ],
        isAvailable: true,
        isStaff: true,
        isFaculty: false,
        isStudent: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    }
};

const studentLot = {

    "U Lot": {
        map_display_name: "U",
        area: [
            [49.8056292, -97.1439425],
            [49.804549, -97.1430842],
            [49.8051861, -97.1412925],
            [49.8052969, -97.141389],
            [49.8053661, -97.1412281],
            [49.8052068, -97.1411208],
            [49.8055877, -97.1399943],
            [49.8061485, -97.1404663],
            [49.8063147, -97.1399514],
            [49.8064878, -97.1400694],
            [49.8065709, -97.1398655],
            [49.8066678, -97.1399621],
            [49.8059754, -97.141904],
            [49.8062385, -97.1421078],
            [49.8056292, -97.1439425]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Q Lot 1": {
        map_display_name: "Q1",
        area: [
            [49.811575, -97.1406484],
            [49.8105988, -97.139758],
            [49.8114158, -97.137301],
            [49.8121081, -97.1378589],
            [49.812212, -97.1387602],
            [49.811575, -97.1406484]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: false
    },

    "I Lot": {
        map_display_name: "I",
        area: [
            [49.8087827, -97.1403754],
            [49.8088658, -97.1401072],
            [49.8091877, -97.1403539],
            [49.8092466, -97.1401769],
            [49.8094993, -97.14037],
            [49.8098213, -97.1393669],
            [49.8101397, -97.139619],
            [49.8096655, -97.141003],
            [49.8087827, -97.1403754]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Q Lot 2": {
        map_display_name: "Q2",
        area: [
            [49.807892, -97.134597],
            [49.8074835, -97.1344093],
            [49.8075355, -97.1342859],
            [49.8079301, -97.1344683],
            [49.807892, -97.134597]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: false
    },

    "ACE Lot": {
        map_display_name: "ACE",
        area: [
            [49.8105926, -97.1283983],
            [49.8093844, -97.1274059],
            [49.8094952, -97.127068],
            [49.8107068, -97.1280443],
            [49.8105926, -97.1283983]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "Y Lot": {
        map_display_name: "Y",
        area: [
            [49.8058015, -97.1366189],
            [49.805817, -97.1360019],
            [49.805972, -97.1361253],
            [49.8058015, -97.1366189]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: true
    },

    "W Lot": {
        map_display_name: "W",
        area: [
            [49.805159, -97.1363306],
            [49.8050793, -97.1349412],
            [49.8054887, -97.1352711],
            [49.805159, -97.1363306]
        ],
        isAvailable: true,
        isStudent: true,
        isStaff: false,
        isFaculty: false,
        isVisitor: false,
        isCovered: false,
        isElectric: false,
        isAccessible: false
    }
};