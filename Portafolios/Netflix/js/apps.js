window.onload = () => {
    setTimeout(reproducirAvance, 5000);

}
var reproducirAvance = () => {
    let avance = document.getElementById("avance")
    setTimeout(() => avance.play(), 500);

}

document.getElementById("avance").addEventListener("click", reproducirAvance)


window.addEventListener("scroll", () => {
    let portada = document.getElementById("portada");
    let posicion_portada = portada.getBoundingClientRect().top;
    let header = document.getElementById("header")
    console.log(posicion_portada)
    if (posicion_portada != 0) {
        header.style.transition = "0.3s"
        header.style.background = "var(--colorprincipoal)"
    } else {
        header.style.transition = "0.5s"
        header.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(255, 255, 255, 0) 60%)'
        header.style.transition = "0.3s"
    }
    if (posicion_portada < -350) {
        document.getElementById("avance").pause();
    }
    if (posicion_portada < -100) {
        document.getElementById("avance").pause();
    }
});