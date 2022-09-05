//do not share your API key publicly

const API_KEY = `2b50604d2183de73c868181adff377aa`

const loadTemparaute = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => showTemp(data))

}

const showTemp = (data) => {
    // console.log(data.main.temp)
    // const temparature = document.getElementById('Temparature');
    // temparature.innerText = data.main.temp;
    setInnerTextById('Temparature', data.main.temp)
    setInnerTextById('condition',data.weather[0].main)
    // console.log(data.weather[0].main)
 }

const setInnerTextById = (id, text)=>{
    const temparature = document.getElementById(id);
    temparature.innerText = text;
 }

document.getElementById('search-btn').addEventListener('click', function () {
    //set temparature
    const searchField = document.getElementById('search-text')
    const city = searchField.value;
    
    // set cities
    document.getElementById('cities').innerText = city;
    loadTemparaute(city);
    
})

loadTemparaute('dhaka')