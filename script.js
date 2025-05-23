document.getElementById("weatherForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const city = document.getElementById("cityInput").value;
    const apiKey = "your_api_key_here"; // Get a free key from https://openweathermap.org/api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const result = document.getElementById("weatherResult");
        if (data.cod === 200) {
          result.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temp: ${data.main.temp}°C</p>
            <p>☁ Weather: ${data.weather[0].main}</p>
            <p>💨 Wind: ${data.wind.speed} m/s</p>
          `;
        } else {
          result.innerHTML = `<p style="color:red;">City not found!</p>`;
        }
      })
      .catch(() => {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Error fetching weather!</p>`;
      });
  });
  