const viewtrack1 = document.getElementById("viewtrack1")
const viewtrack2 = document.getElementById("viewtrack2")
const viewtrack3 = document.getElementById("viewtrack3")
const viewtrack4 = document.getElementById("viewtrack4")
const viewtrack5 = document.getElementById("viewtrack5")

viewtrack1.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttontrack1")
    if(hid.className === "track1viewhidden"){
        hid.className = "track1view"
    }
    
})
viewtrack2.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttontrack1")
    if(hid.className === "track1viewhidden"){
        hid.className = "track1view"
    }
    
})
viewtrack3.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttontrack1")
    if(hid.className === "track1viewhidden"){
        hid.className = "track1view"
    }
    
})
viewtrack4.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttontrack1")
    if(hid.className === "track1viewhidden"){
        hid.className = "track1view"
    }
    
})
viewtrack5.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttontrack1")
    if(hid.className === "track1viewhidden"){
        hid.className = "track1view"
    }
    
})

const close = document.getElementById("closetrack")

close.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttontrack1")
    if(hid.className === "track1view"){
        hid.className = "track1viewhidden"
    }
})

const viewfield1 = document.getElementById("viewfield1")
const viewfield2 = document.getElementById("viewfield2")
const viewfield3 = document.getElementById("viewfield3")
const viewfield4 = document.getElementById("viewfield4")
const viewfield5 = document.getElementById("viewfield5")
const viewfield6 = document.getElementById("viewfield6")
const viewfield7 = document.getElementById("viewfield7")
const viewfield8 = document.getElementById("viewfield8")

viewfield1.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    console.log(hid.className)
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield2.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield3.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield4.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield5.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield6.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield7.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
viewfield8.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldviewhidden"){
        hid.className = "fieldview"
    }
    
})
const closefield = document.getElementById("closefield")

closefield.addEventListener("click",function(){
    console.log("hello")
    const hid = document.getElementById("viewbuttonfield")
    if(hid.className === "fieldview"){
        hid.className = "fieldviewhidden"
    }
})

const viewcombine1 = document.getElementById("viewcombine1")
const viewcombine2 = document.getElementById("viewcombine2")
const viewcombine3 = document.getElementById("viewcombine3")

viewcombine1.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttoncombine")
    if(hid.className === "combineviewhidden"){
        hid.className = "combineview"
    }
    
})
viewcombine2.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttoncombine")
    if(hid.className === "combineviewhidden"){
        hid.className = "combineview"
    }
    
})
viewcombine3.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttoncombine")
    if(hid.className === "combineviewhidden"){
        hid.className = "combineview"
    }
    
})

closecombine.addEventListener("click",function(){
    const hid = document.getElementById("viewbuttoncombine")
    if(hid.className === "combineview"){
        hid.className = "combineviewhidden"
    }
})


