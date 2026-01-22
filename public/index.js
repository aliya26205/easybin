const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const speed = 150; // bigger = slower (try 200–300)

    const updateCounter = () => {
        const increment = target / speed;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 20); // delay between updates
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});


function toggleTheme() {
    document.body.classList.toggle("dark");

    // Save user preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
};

const btn = document.getElementById("themeBtn");

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}
