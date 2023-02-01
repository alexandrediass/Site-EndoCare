let imghome = document.querySelector("#imghome")
let imginfo = document.querySelector("#imginfo")
let imgexercise = document.querySelector("#imgexercise")
let imgcomida = document.querySelector("#imgcomida")
let box_filho_1 = document.querySelector("#box-filho-1")
let box_filho_2 = document.querySelector("#box-filho-2")
let ifvideo = document.querySelector("#ifvideo")

imghome.addEventListener("click",function(){
    window.location.href = "/index.html"

})

imginfo.addEventListener("click",function(){
    window.location.href = "/paginas/informacoes.html"

})

imgexercise.addEventListener("click",function(){
    window.location.href = "/paginas/exercicios.html"
})

imgcomida.addEventListener("click", function(){
    window.location.href = "/paginas/alimentacao.html"
})

box_filho_1.addEventListener("click",function(){
    ifvideo.src = "/videos/exercicios/video1.mp4"
    
})

box_filho_2.addEventListener("click",function(){
    ifvideo.src = "/videos/exercicios/video2.mp4"
    
})

