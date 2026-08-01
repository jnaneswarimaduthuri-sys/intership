// Welcome Message
window.onload = function () {
    alert("Welcome to My Portfolio!");
};

// Hire Me Button
document.getElementById("hireBtn").addEventListener("click", function () {
    alert("Thank you for your interest! Please contact me using the contact form.");
});

// Download Resume Button
function downloadResume() {
    // Replace "resume.pdf" with your actual resume file name
    window.open("resume.pdf", "_blank");
}

// Change Welcome Title on Click
document.getElementById("welcomeTitle").addEventListener("click", function () {
    this.innerHTML = "Welcome to My Portfolio!";
});

// Contact Form Submit
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");

    form.reset();
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

// Show button when scrolling
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll smoothly to top
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Highlight Navigation Link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.style.color = "white");
        this.style.color = "yellow";
    });
});