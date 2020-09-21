// Search Function
function citySearch() {

    var searchCity = document.querySelector('#searchCity').value;
    localStorage.setItem("firstCity", searchCity);
    var todaysDate = moment().format('MMMM Do, YYYY')
    var key = '3b8b89ea1c58e015ec1e991df3b833ae';

    // Weather API
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + ',us' + '&appid=' + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.dir(data);

            // Variables
            var srchdCty = data.city.name;
            var date1 = todaysDate;
            var day1 = moment().format("MM/DD/YYYY")
            var desc1 = data.list[0].weather[0].description;
            var humid1 = data.list[0].main.humidity;
            var temp1 = data.list[0].main.temp;
            var speed1 = data.list[0].wind.speed;
            var lat = data.city.coord.lat;
            var lon = data.city.coord.lon;
            var conD1 = desc1;
            var day2 = moment().add(1, 'days').format("MM/DD/YYYY");
            var desc2 = data.list[1].weather[0].description;
            var humid2 = data.list[1].main.humidity;
            var temp2 = data.list[1].main.temp;
            var speed2 = data.list[1].wind.speed;
            var conD2 = desc2;
            var day3 = moment().add(2, 'days').format("MM/DD/YYYY");
            var desc3 = data.list[2].weather[0].description;
            var humid3 = data.list[2].main.humidity;
            var temp3 = data.list[2].main.temp;
            var speed3 = data.list[2].wind.speed;
            var conD3 = desc3;
            var day4 = moment().add(3, 'days').format("MM/DD/YYYY");
            var desc4 = data.list[3].weather[0].description;
            var humid4 = data.list[3].main.humidity;
            var temp4 = data.list[3].main.temp;
            var speed4 = data.list[3].wind.speed;
            var conD4 = desc4;
            var day5 = moment().add(4, 'days').format("MM/DD/YYYY");
            var desc5 = data.list[4].weather[0].description;
            var humid5 = data.list[4].main.humidity;
            var temp5 = data.list[4].main.temp;
            var speed5 = data.list[4].wind.speed;
            var conD5 = desc5;

            //UV Index from weather API
            fetch('http://api.openweathermap.org/data/2.5/uvi?appid=' + key + '&lat=' + lat + '&lon=' + lon)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.dir(data);
                    var uvIndex = data.value;
                    document.getElementById("uvCon").innerHTML = "UV Index: " + uvIndex;
                    if (uvIndex >= 0 && uvIndex <= 2) {
                        $("#uvCon").addClass("favorable");
                    } else if (uvIndex >= 3 && uvIndex <= 7) {
                        $("#uvCon").addClass("moderate");
                    } else {
                        $("#uvCon").addClass("severe");
                    };
                })

            $("#previousSearch").prepend("<p>" + srchdCty + "</p>");

            // Conditional Icons
            switch (conD1) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("curIcn").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("curIcn").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };
            
            switch (conD1) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle1").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle1").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle1").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle1").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle1").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("wthrIcn1").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("wthrIcn1").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle1").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            switch (conD2) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle2").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle2").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle2").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle2").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle2").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("wthrIcn2").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("wthrIcn2").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle2").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };
                        
            switch (conD3) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle3").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle3").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle3").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle3").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle3").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("wthrIcn3").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("wthrIcn3").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle3").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            switch (conD4) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle4").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle4").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle4").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle4").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle4").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("wthrIcn4").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("wthrIcn4").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle4").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            switch (conD5) {
                case 'clear sky':
                    function currentIcon1() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/01d.png";
                        $("#conditionStyle5").addClass("favorable");
                    };
                    currentIcon1();
                    break;
                case 'few clouds':
                    function currentIcon2() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/02d.png";
                        $("#conditionStyle5").addClass("favorable");
                    };
                    currentIcon2();
                    break;
                case 'scattered clouds':
                    function currentIcon3() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/03d.png";
                        $("#conditionStyle5").addClass("moderate");
                    };
                    currentIcon3();
                    break;
                case 'broken clouds':
                    function currentIcon4() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/04d.png";
                        $("#conditionStyle5").addClass("moderate");
                    };
                    currentIcon4();
                    break;
                case 'shower rain':
                    function currentIcon5() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/09d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon5();
                    break;
                case 'rain':
                    function currentIcon6() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/10d.png";
                        $("#conditionStyle5").addClass("moderate");
                    };
                    currentIcon6();
                    break;
                case 'thunderstorm':
                    function currentIcon7() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/11d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon7();
                    break;
                case 'snow':
                    function currentIcon8() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/13d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon8();
                    break;
                case 'mist':
                    function currentIcon9() {
                        document.getElementById("wthrIcn5").src = "http://openweathermap.org/img/wn/50d.png";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon9();
                    break;
                default:
                    function currentIcon10() {
                        document.getElementById("wthrIcn5").src = "./assets/images/zombies.jpg";
                        $("#conditionStyle5").addClass("severe");
                    };
                    currentIcon10();
                    break;
            };

            // 5 Day Forecast innerHTML elements
            document.getElementById("todaysWeather").innerHTML =
                srchdCty + " (" + date1 + ")" + "<br />" +
                "Condition: " + desc1 + "<br />" +
                "Humidity: " + humid1 + "<br />" +
                "Temperature: " + temp1 + "<br />" +
                "Wind Speed: " + speed1;

            document.getElementById("forcDay1").innerHTML =
                day1 + "<br />" +
                "Cond: " + desc1 + "<br />" +
                "Humidity: " + humid1 + "<br />" +
                "Temp: " + temp1 + "<br />" +
                "Wind: " + speed1;

            document.getElementById("forcDay2").innerHTML =
                day2 + "<br />" +
                "Cond: " + desc2 + "<br />" +
                "Humidity: " + humid2 + "<br />" +
                "Temp: " + temp2 + "<br />" +
                "Wind: " + speed2;

            document.getElementById("forcDay3").innerHTML =
                day3 + "<br />" +
                "Cond: " + desc3 + "<br />" +
                "Humidity: " + humid3 + "<br />" +
                "Temp: " + temp3 + "<br />" +
                "Wind: " + speed3;

            document.getElementById("forcDay4").innerHTML =
                day4 + "<br />" +
                "Cond: " + desc4 + "<br />" +
                "Humidity: " + humid4 + "<br />" +
                "Temp: " + temp4 + "<br />" +
                "Wind: " + speed4;

            document.getElementById("forcDay5").innerHTML =
                day5 + "<br />" +
                "Cond: " + desc5 + "<br />" +
                "Humidity: " + humid5 + "<br />" +
                "Temp: " + temp5 + "<br />" +
                "Wind: " + speed5;
            

            // Local storage items
            localStorage.setItem("Day1", day1);
            localStorage.setItem("Weather Desc1", desc1);
            localStorage.setItem("Humidity1", humid1);
            localStorage.setItem("Temperature1", temp1);
            localStorage.setItem("Wind speed1", speed1); 
            localStorage.setItem("Day2", day2);
            localStorage.setItem("Weather Desc2", desc2);
            localStorage.setItem("Humidity2", humid2);
            localStorage.setItem("Temperature2", temp2);
            localStorage.setItem("Wind speed2", speed2);
            localStorage.setItem("Day3", day3);
            localStorage.setItem("Weather Desc3", desc3);
            localStorage.setItem("Humidity3", humid3);
            localStorage.setItem("Temperature3", temp3);
            localStorage.setItem("Wind speed3", speed3);
            localStorage.setItem("Day4", day4);
            localStorage.setItem("Weather desc4", desc4);
            localStorage.setItem("Humidity4", humid4);
            localStorage.setItem("Temperature4", temp4);
            localStorage.setItem("Wind speed4", speed4);
            localStorage.setItem("Day5", day5);
            localStorage.setItem("Weather descr5", desc5);
            localStorage.setItem("Humidity5", humid5);
            localStorage.setItem("Temperature5", temp5);
            localStorage.setItem("Wind speed5", speed5);

        })
};

//Event Listener for search button
document.getElementById("searchBtn").addEventListener("click", function () {
    citySearch();
});