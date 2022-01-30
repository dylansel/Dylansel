//animation typing title
var typing = document.getElementById("typing")
const textTyping = typing.innerHTML
const sWidth = screen.width;
const sHeight = screen.height;
typing.innerHTML = textTyping.substr(0,1)
const typingTitle = ()=>{
    for(let i = 1;i<=(textTyping.length-1);i++){
        setTimeout(()=>{typing.innerHTML += textTyping[i]},150*i)
    }
    setTimeout(()=>{
    for(let i in textTyping){
    setTimeout(()=>{typing.innerHTML = textTyping.substr(0,textTyping.length - i)},150*i)
    }
    },250*textTyping.length)
   
}
typingTitle()
setInterval(()=> typingTitle(),700*textTyping.length)
if(sWidth<=900){setTimeout(animationProduct, 2000)}
let img1 = document.getElementById("img-1")
img1.addEventListener("mouseenter",animationProduct)
function animationProduct(){
    
    img1.style.transform = (sWidth>=900)?"translate(0,15px)":"translate(0)";
    document.getElementById("productDescription").style.transform = (sWidth>=900)?"translate(0)":"translate(0)";
    img1.removeEventListener("mouseenter",MouseEvent);
}

function navResActive(){
    nav = document.getElementById("nav");
    iNav = document.getElementById("icon-nav");
    nav.classList.toggle("nav-active");
    iNav.classList.toggle("icon-nav-avtive");
    
    

}

