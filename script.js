document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '0d76170c4c60bad9f16b802aac5d48bb';
    // Function to fetch weather data based on selected location
    function fetchWeather(location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                document.getElementById('description').textContent = `Description: ${description}`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
            })
            .catch(error => console.log('Error fetching weather data:', error));
    }

    // Event listener for changes in the dropdown menu
    document.getElementById('location').addEventListener('change', function () {
        const selectedLocation = this.value;
        fetchWeather(selectedLocation);
    });

    // Fetch weather data for the initial location
    const initialLocation = document.getElementById('location').value;
    fetchWeather(initialLocation);
});
