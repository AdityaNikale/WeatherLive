async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "2eb3d36a02240d48aa45e1e052445e84"; // 🔁 Replace this with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `
      <div class="alert alert-danger" role="alert">
        City not found. Please try again.
      </div>
    `;
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-bs-theme") === "dark";
  html.setAttribute("data-bs-theme", isDark ? "light" : "dark");
}

const quotes = [
  "Sunshine is the best medicine.",
  "Wherever you go, no matter the weather, bring your own sunshine.",
  "Every day is a new weather report. Dress for your attitude.",
  "Rain or shine, your smile is the best forecast.",
  "Clouds come floating into life, not to carry rain but to add color."
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.getElementById("quoteBox");
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = `"Thought Of The Day : ${quotes[random]}"`;
});
