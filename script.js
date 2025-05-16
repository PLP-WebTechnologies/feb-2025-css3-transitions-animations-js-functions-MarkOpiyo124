// Animate the box on button click
document.getElementById("animate-btn").addEventListener("click", () => {
  const box = document.getElementById("box");

  // Reset animation
  box.style.animation = "none";
  void box.offsetWidth; // trigger reflow to restart animation
  box.style.animation = "bounce 1s ease";
});

// Save theme to localStorage
function saveTheme() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("theme", selectedTheme);
  applyTheme(selectedTheme);
  alert(`Theme saved: ${selectedTheme}`);
}

// Apply theme from localStorage on page load
function applyTheme(theme) {
  document.body.className = theme;
}

// On load, check localStorage for saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.getElementById("theme").value = savedTheme;
  applyTheme(savedTheme);
};
