// js/header.js
document.addEventListener("DOMContentLoaded", function() {
    // This looks for the header.html file and inserts it into the placeholder
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
