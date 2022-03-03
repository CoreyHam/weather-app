let state = {
    zipCode: '40513',
    city: '',
    temp: {
        fahrenheit: '',
        celsius: '',
        kelvin: '',
    },
    condition: ''
}

async function getData() {
    resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + state.zipCode + ',us&appid=d12aaa77938a0595314befb479e9e7bb')
    return resp.data
}

async function updateWeather(){
    let data = await getData()
    console.log(data)
}

updateWeather();