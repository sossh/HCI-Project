document.getElementById("login-submit").addEventListener("click", () => {
    const email = document.getElementById("login-email").value.trim();
    const pass  = document.getElementById("login-password").value.trim();

    // Find user in registeredUsers
    const user = window.registeredUsers.find(
        u => u.email === email && u.password === pass
    );

    if (!user) {
        alert("Invalid email or password");
        return;
    }

    // Save user globally
    window.currentUser = {
        email: user.email,
        permit: user.permit
    };

    // Hide login, show app
    document.getElementById("login-page").style.display = "none";
    document.getElementById("app-container").style.display = "block";

    // MAP FIX (same as guest)
    setTimeout(() => {
        map.invalidateSize();
        applyFilters();
    }, 150);
});

document.getElementById("guest-login").addEventListener("click", () => {

    // Set user as visitor (public parking only)
    window.currentUser = {
        permit: "visitor"
    };

    // Hide login, show app
    document.getElementById("login-page").style.display = "none";
    document.getElementById("app-container").style.display = "block";

    // Refresh map
    setTimeout(() => {
        map.invalidateSize(true);
        applyFilters();
    }, 150);
});

document.getElementById("logout-btn").addEventListener("click", () => {

    // 1. Remove user
    window.currentUser = null;

    // 2. Hide the entire app
    document.getElementById("app-container").style.display = "none";

    // 3. Show the login page again
    document.getElementById("login-page").style.display = "flex";

    // 4. Reset fields
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";

    // 5. Reset map filters and UI states
    document.getElementById("covered").checked = false;
    document.getElementById("electric").checked = false;
    document.getElementById("accessible").checked = false;

    // reset active filters UI bar
    document.getElementById("active-filters").innerHTML = "";

    // 6. Reset building selector + radius
    document.getElementById("building-list").value = "none";

    if (window.buildingCircle) {
        map.removeLayer(window.buildingCircle);
        window.buildingCircle = null;
    }
    if (window.buildingMarker) {
        map.removeLayer(window.buildingMarker);
        window.buildingMarker = null;
    }

    window.currentBuilding = null;

    // 7. Reapply filters WITHOUT USER filter
    applyFilters();

    // Reset zoom back to campus
    map.setView([49.8088906, -97.132102], 16);
});