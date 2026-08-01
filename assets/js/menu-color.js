/*===== ACCENT COLOR PICKER (click to open, more reliable than hover) =====*/
const toggleColor = document.getElementById("toggle-color");
const colorPicker = document.getElementById("color-picker");
const colorTrigger = document.getElementById("color-trigger");
const rootStyle = document.documentElement.style;

colorTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    colorPicker.classList.toggle("open");
});

toggleColor.addEventListener("click", (e) => {
    const target = e.target.closest('[data-color]');
    if (!target) return;
    rootStyle.setProperty('--first-color', target.dataset.color);
    if (target.dataset.color2) {
        rootStyle.setProperty('--accent-2', target.dataset.color2);
    }
    colorPicker.classList.remove("open");
});

document.addEventListener("click", (e) => {
    if (!colorPicker.contains(e.target)) {
        colorPicker.classList.remove("open");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") colorPicker.classList.remove("open");
});
