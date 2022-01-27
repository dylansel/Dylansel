
const xhr = new XMLHttpRequest();
const apiKey = '108f05631cc6fb2ecf5a39813cbd8536'
var latitude,longitude,geo,temperature,locat
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success,error)
}else{
    alert('No es compatible con geolocalizacion')
}

function success(geoloc){
    latitude = geoloc.coords.latitude.toString()
    longitude = geoloc.coords.longitude.toString()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    xhr.addEventListener("load",onRequestHandler);
    xhr.open("GET",apiUrl)
    xhr.send()
    return true
}
function error(error){
    console.error("Error de geolocalizacion")
    alert('Es necesario activar la geolocacion para determinar la temperatura segun tu zona. Todos los datos son confidenciales y no se guardaran')
}

function onRequestHandler(){
    if(this.readyState == 4 && this.status === 200){
        let data = JSON.parse(this.response)
        console.log(data)
        temperature = Math.trunc(data.main.temp)
        locat = data.name
        console.log(temperature)
        console.log(locat)
        cargartemp()
    }
}

function cargartemp(){
    
    let color = 0
    let red = 0,green = 0,blue = 255;
    
    for (i = -30; i <50; i++){
        if(temperature == i){
            if (temperature >=20 && temperature<=26){
            red = i*3
            blue -= i*6
            green = i*9
        }else{
           red = i*6.5
            blue -= i*6.5 
            green = red + blue - i*5
        }
            
            
        }
        if (Math.sign(red) == -1){red = 0}
        if(Math.sign(green)== -1){green = 0}
        if (Math.sign(blue) == -1){blue = 0}
        if(red >255){red = 255}
        if(blue >255){blue = 255}
        if(green >255){green = 255}
    }
    color = `${red},${green},${blue}`
    document.getElementById('body').style.background=`rgb(${color})`
    document.getElementById('contTemperatura').innerHTML = temperature
    document.getElementById('contLugar').innerHTML = locat
    
}

