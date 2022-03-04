let zipCode;
let resp;
let setTemp;
async function getData() {
    resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=d12aaa77938a0595314befb479e9e7bb')

    applyData(resp)
    
}


function applyData(resp) {
    //  Make Names Readable

    //  API
    let city = resp.data.name
    let tempK = resp.data.main.temp
    let tempC = Math.round(tempK - 273)
    let tempF = Math.round(9 / 5 * tempC + 32)
    let condition = resp.data.weather[0].description
    let icon = resp.data.weather[0].icon
    console.log(tempF)

    //  HTML
    let inputBox = document.getElementById("inputBox")

    let headerText = document.getElementById("headerText")
    let helperText = document.getElementById("helperText")
    let cityDisplay = document.getElementById("city")
    let tempDisplay = document.getElementById("temp")
    let conditionDisplay = document.getElementById("condition")
    //  Put it together with easy readibility 
    headerText.innerText = ""
    cityDisplay.innerText = city
    tempDisplay.innerText = Math.round(tempK) + "°K " + tempF + "°F " + tempC + "°C"
    conditionDisplay.innerHTML = condition + '<br><img src=" http://openweathermap.org/img/wn/'+icon+'@4x.png" alt=""></img>' 
    switch(icon){
        case '01d':
            document.body.className = "clearSky"
            break;
        case '02d':
            document.body.className = "fewClouds"
            break;
        case '03d':
            document.body.className = "scatteredClouds"
            break;
        case '04d':
            document.body.className = "brokenClouds"
            break;
        case '09d':
            document.body.className = "showerRain"
            break;
        case '10d':
            document.body.className = "rain"
            break;
        case '11d':
            document.body.className = "thunderstorm"
            break;
        case '13d':
            document.body.className = "snow"
            break;
        case '50d':
            document.body.className = "mist"
            break;
    }
    console.log(condition)
}

function inputCheck() {
    if (!isNaN(inputBox.value) && inputBox.value.length == 5) {
        zipCode = inputBox.value
        getData()
        showItems()
            .catch(e => {
                helperText.innerText = "Please Enter a Valid Zip Code"
            });

    }
    // Handle Errors
    if (!isNaN(inputBox.value)) {
        helperText.innerText = ""
    }
    if (isNaN(inputBox.value))
        helperText.innerText = "Please Enter a Number"
}

// function tempChange(type){
//     console.log("Temp Change")
//     switch(type){
//         case 'k':
//             setTemp = tempK
//             break;
//         case 'f':
//             setTemp = tempF
//             break;
//         case 'c':
//             setTemp = tempC
//             break;
//     }
// }

function showItems(){
    if (city.innerText != undefined){
        document.getElementById("showHide").style.display = "initial";
    }
}

getData()
    .catch(e => {
        console.log(e);
    });
