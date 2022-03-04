//START
let state = {
    zipCode: '',
    city: 'temp',
    temp: {
        kelvin: '',
        celsius: '',
        fahrenheit: '',
    },
    condition: '',
    icon: ''
}
// INPUT
function inputCheck() {
    if (!isNaN(inputBox.value) && inputBox.value.length == 5) {
        state.zipCode = inputBox.value
        updateState()
            // Handle Errors
            .catch(e => {
                console.log(e.message)
                helperText.innerText = "Please Enter a Valid Zip Code"
            });
    }
    if (!isNaN(inputBox.value)) {
        helperText.innerText = ""
    }
    if (isNaN(inputBox.value))
        helperText.innerText = "Please Enter a Number"
}

// FETCH INFO
async function getData() {
    resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + state.zipCode + ',us&appid=d12aaa77938a0595314befb479e9e7bb')
    console.log("getData")
    return resp.data
}

// SET STATE
async function updateState() {
    console.log("updateState")
    let resp = await getData()
    console.log(resp)
    state.city = resp.name
    updateView();
    
}
// UPDATE VIEW
function updateView() {
    console.log("updateView")
    // Create Elements
    cityDisplay = document.querySelector("#cityDisplay")
    cityDisplay.innerText = "City"
    cityText = document.querySelector("#cityText")
    cityText.innerText = state.city
}

// END