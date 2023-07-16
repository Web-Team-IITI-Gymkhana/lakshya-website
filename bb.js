const view = document.getElementById('viewbutton')
const button= document.getElementById('frameDiv')
const text=document.getElementById('text')

function onClick(){
    console.log(1)
    if(button.className==="mx-3 d-none"){
        button.className = "mx-3"
        view.innerHTML = "close"
    }else {
        button.className = "mx-3 d-none"
        view.innerHTML = "view"
    }
    console.log(button.className)
   if(text.className === "d-flex justify-content-center text-white d-none"){
    text.className = "d-flex justify-content-center text-white"
   }else{
    text.className = "d-flex justify-content-center text-white d-none"
   }
    
}

view.addEventListener("click",onClick)