document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    document.getElementById("contactMeButton").addEventListener("click", function () {
        contactForm.style.display = "flex";
    });

    document.getElementById("closeForm").addEventListener("click", function () {
        contactForm.style.display = "none";
    });
});
