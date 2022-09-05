//do not share your API key publicly

const API_KEY = `2b50604d2183de73c868181adff377aa`

const loadTemparaute = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data=>showTemp(data.main.temp))
}

const showTemp = (temp) => {
    // console.log(temp)
    const currentTemp = document.getElementById('Temparature')
    currentTemp.innerText = `${temp}`
}

loadTemparaute('dhaka')