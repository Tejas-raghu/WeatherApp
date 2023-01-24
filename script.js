
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3f155dcfdmshe28b590df70e807p1ad455jsn7bda3882d8fb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeatherData = (city) => {
	console.log({city});
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		temp.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		max_temp.innerHTML = response.max_temp;
		min_temp.innerHTML = response.min_temp;
		cloud_pct.innerHTML = response.cloud_pct;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
		temp.innerHTML = response.temp;
		wind_degrees.innerHTML = response.wind_degrees;
		wind_speed.innerHTML = response.wind_speed;
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (event) => {
	console.log(event.target.value)
	event.preventDefault(); 
	getWeatherData(city.value)
})