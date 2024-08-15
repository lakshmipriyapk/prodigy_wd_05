const apiKey = 'a16b374d448b48b57a89676ed2a6ae52ba751529506cdcf802fe152f1baab2419fbb3ff4';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});

function getWeather(location) {
    fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').innerText = data.name;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        })
        .catch(error => {
            alert('Failed to fetch weather data. Please try again.');
            console.error(error);
        });
}

