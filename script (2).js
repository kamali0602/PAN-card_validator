function validatePAN() {
    const panInput = document.getElementById('pan-input').value.trim();
    const result = document.getElementById('result');

    // Regular expression for PAN card validation
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (panRegex.test(panInput)) {
        result.textContent = "Valid PAN Number";
        result.style.color = "green";
    } else {
        result.textContent = "Invalid PAN Number";
        result.style.color = "red";
    }
}
