
// let input = document.querySelector(".input")
let form = document.querySelector(".main-container")
form.addEventListener("submit",(e)=>{
e.preventDefault();
let mo = document.getElementById("matric-obt").value
let mt = document.getElementById("matric-total").value
let io = document.getElementById("inter-obt").value
let it = document.getElementById("inter-total").value
let eo = document.getElementById("entry-obt").value
let et = document.getElementById("entry-total").value

let for_m = (((mo/mt)*(25/100)))
let for_i = (((io/it)*(45/100)))
let for_e = (((eo/et)*(30/100)))
console.log(for_m)
console.log(for_i)
console.log(for_e)
let score = for_e + for_i + for_m
console.log(score)
let aggr_value = (score*(100/100)*100)
console.log(aggr_value)
let aggr =document.querySelector(".aggr")
aggr.innerHTML = aggr_value.toFixed(3)
})