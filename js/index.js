const race1 = document.getElementById("100mrace")
const race2 = document.getElementById("1000mrace")
const javlinthrow = document.getElementById("javlinthrow")
const shortput = document.getElementById("shortput")
const longjump = document.getElementById("longjump")
const highjump = document.getElementById("highjump")

const race1accordion = document.getElementById("100mraceaccordion")
const race2accordion = document.getElementById("1000mraceaccordion")
const javlinthrowaccordion = document.getElementById("javlinthrowaccordion")
const shortputaccordion = document.getElementById("shortputaccordion")
const longjumpaccordion = document.getElementById("longjumpaccordion")
const highjumpaccordian = document.getElementById("highjumpaccordion")

race1accordion.className = "col"
race2accordion.className = "col d-none"
javlinthrowaccordion.className = "col d-none"
shortputaccordion.className = "col d-none"
longjumpaccordion.className = "col d-none"
highjumpaccordian.className = "col d-none"

race1.addEventListener("click",function(){
    race1.className = "100mrace bg-purple text-white rounded-3 my-2 text-center py-2 pointer shadow-m";
    race2.className = "1000mrace bg-purple text-white rounded-3 my-2 text-center py-2";
    javlinthrow.className = "javlinthrow bg-purple text-white rounded-3 my-2 text-center py-2";
    shortput.className="shortput bg-purple text-white rounded-3 my-2 text-center py-2";
    longjump.className = "longjump bg-purple text-white rounded-3 my-2 text-center py-2";
    highjump.className = "highjump bg-purple text-white rounded-3 my-2 text-center py-2";

    race1accordion.className = "col"
    race2accordion.className = "col d-none"
    javlinthrowaccordion.className = "col d-none"
    shortputaccordion.className = "col d-none"
    longjumpaccordion.className = "col d-none"
    highjumpaccordian.className = "col d-none"
})

race2.addEventListener("click",function(){
    race1.className = "100mrace bg-purple text-white rounded-3 my-2 text-center py-2 pointer";
    race2.className = "1000mrace bg-purple text-white rounded-3 my-2 text-center py-2 shadow-m";
    javlinthrow.className = "javlinthrow bg-purple text-white rounded-3 my-2 text-center py-2";
    shortput.className="shortput bg-purple text-white rounded-3 my-2 text-center py-2";
    longjump.className = "longjump bg-purple text-white rounded-3 my-2 text-center py-2";
    highjump.className = "highjump bg-purple text-white rounded-3 my-2 text-center py-2";

    race1accordion.className = "col d-none"
    race2accordion.className = "col"
    javlinthrowaccordion.className = "col d-none"
    shortputaccordion.className = "col d-none"
    longjumpaccordion.className = "col d-none"
    highjumpaccordian.className = "col d-none"
})

javlinthrow.addEventListener("click",function(){
    race1.className = "100mrace bg-purple text-white rounded-3 my-2 text-center py-2 pointer";
    race2.className = "1000mrace bg-purple text-white rounded-3 my-2 text-center py-2";
    javlinthrow.className = "javlinthrow bg-purple text-white rounded-3 my-2 text-center py-2 shadow-m";
    shortput.className="shortput bg-purple text-white rounded-3 my-2 text-center py-2";
    longjump.className = "longjump bg-purple text-white rounded-3 my-2 text-center py-2";
    highjump.className = "highjump bg-purple text-white rounded-3 my-2 text-center py-2";

    race1accordion.className = "col d-none"
    race2accordion.className = "col d-none"
    javlinthrowaccordion.className = "col"
    shortputaccordion.className = "col d-none"
    longjumpaccordion.className = "col d-none"
    highjumpaccordian.className = "col d-none"
})

shortput.addEventListener("click",function(){
    race1.className = "100mrace bg-purple text-white rounded-3 my-2 text-center py-2 pointer";
    race2.className = "1000mrace bg-purple text-white rounded-3 my-2 text-center py-2";
    javlinthrow.className = "javlinthrow bg-purple text-white rounded-3 my-2 text-center py-2";
    shortput.className="shortput bg-purple text-white rounded-3 my-2 text-center py-2 shadow-m";
    longjump.className = "longjump bg-purple text-white rounded-3 my-2 text-center py-2";
    highjump.className = "highjump bg-purple text-white rounded-3 my-2 text-center py-2";

    race1accordion.className = "col d-none"
    race2accordion.className = "col d-none"
    javlinthrowaccordion.className = "col d-none"
    shortputaccordion.className = "col"
    longjumpaccordion.className = "col d-none"
    highjumpaccordian.className = "col d-none"
})
longjump.addEventListener("click",function(){
    race1.className = "100mrace bg-purple text-white rounded-3 my-2 text-center py-2 pointer";
    race2.className = "1000mrace bg-purple text-white rounded-3 my-2 text-center py-2";
    javlinthrow.className = "javlinthrow bg-purple text-white rounded-3 my-2 text-center py-2";
    shortput.className="shortput bg-purple text-white rounded-3 my-2 text-center py-2";
    longjump.className = "longjump bg-purple text-white rounded-3 my-2 text-center py-2 shadow-m"; 
    highjump.className = "highjump bg-purple text-white rounded-3 my-2 text-center py-2";

    race1accordion.className = "col d-none"
    race2accordion.className = "col d-none"
    javlinthrowaccordion.className = "col d-none"
    shortputaccordion.className = "col d-none"
    longjumpaccordion.className = "col"
    highjumpaccordian.className = "col d-none"
})
highjump.addEventListener("click",function(){
    race1.className = "100mrace bg-purple text-white rounded-3 my-2 text-center py-2 pointer";
    race2.className = "1000mrace bg-purple text-white rounded-3 my-2 text-center py-2";
    javlinthrow.className = "javlinthrow bg-purple text-white rounded-3 my-2 text-center py-2";
    shortput.className="shortput bg-purple text-white rounded-3 my-2 text-center py-2";
    longjump.className = "longjump bg-purple text-white rounded-3 my-2 text-center py-2";
    highjump.className = "highjump bg-purple text-white rounded-3 my-2 text-center py-2 shadow-m";

    race1accordion.className = "col d-none"
    race2accordion.className = "col d-none"
    javlinthrowaccordion.className = "col d-none"
    shortputaccordion.className = "col d-none"
    longjumpaccordion.className = "col d-none"
    highjumpaccordian.className = "col"
})

const games = document.getElementById("games")

