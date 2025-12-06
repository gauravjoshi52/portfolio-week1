// Dynamic Greeting based on time
const greeting = document.getElementById("greetingMessage");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "🌅 Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "☀️ Good Afternoon!";
} else {
    greeting.textContent = "🌙 Good Evening!";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "" || !email.includes("@")) {
        alert("Please enter a valid Name and Email.");
    } else {
        document.getElementById("successMsg").innerText = "Thank you! Your message has been submitted.";
        this.reset();
    }
});

// Scroll To Top Button Functionality
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

