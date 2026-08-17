const apiKey = "cedb1b945b0787da17ef181871885e95";

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city.");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent =
            `Temperature: ${Math.round(data.main.temp)}°F`;

        document.getElementById("condition").textContent =
            `Condition: ${data.weather[0].description}`;

        document.getElementById("humidity").textContent =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `Wind: ${Math.round(data.wind.speed)} mph`;

    } catch (error) {
        alert("Could not find weather for that city.");
        console.error(error);
    }
}

searchButton.addEventListener("click", getWeather);
