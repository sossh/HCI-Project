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

    // Hide login, show app
    document.getElementById("login-page").style.display = "none";
    document.getElementById("app-container").style.display = "block";

    // IMPORTANT FIX — force Leaflet to re-render
    setTimeout(() => {
        map.invalidateSize(true);
        // Removes the zoom to the first parking lot on the drop down
        // applyFilters()
    }, 150);   // 150ms = safe delay for layout to settle
});