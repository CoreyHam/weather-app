let zipCode = 40513;
let resp;
async function getData(){
    resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&appid=d12aaa77938a0595314befb479e9e7bb')
    
    applyData(resp)
}


function applyData(resp){
    //  Make Names Readable
    
    //  API
    let city = resp.data.name
    let tempK = resp.data.main.temp
    let tempC = Math.round(tempK -273)
    let tempF = Math.round(9/5*tempC+32)
    console.log(tempF)
    
    //  HTML
    let inputBox = document.getElementById("inputBox")
    
    let headerText = document.getElementById("headerText")
    let helperText = document.getElementById("helperText")
    
    //  Put it together with easy readibility 
    headerText.innerText = city
}

function inputCheck(){
    if(!isNaN(inputBox.value) && inputBox.value.length == 5){
        zipCode = inputBox.value
        getData()
        .catch(e => {
            helperText.innerText = "Please Enter a Valid Zip Code"
        });
        
    }
    // Handle Errors
    if(!isNaN(inputBox.value)){
        helperText.innerText = ""
    }
    if(isNaN(inputBox.value))
    helperText.innerText = "Please Enter a Number"
}

getData()
.catch(e => {
    console.log(e);
  });