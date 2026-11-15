// Interaktivna potvrda prijave za IT klub
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Sprečava ponovno učitavanje stranice
            
            const ime = document.getElementById("ime").value;
            
            statusMsg.textContent = "Hvala, " + ime + "! Vaša prijava za IT klub je uspješno poslana.";
            statusMsg.style.color = "#38bdf8";
            statusMsg.style.fontWeight = "bold";
            statusMsg.style.marginTop = "1rem";
            
            form.reset(); // Očisti polja forme
        });
    }
});