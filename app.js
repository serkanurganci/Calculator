const calcInput = document.querySelector("#calcInput")
const calcTable = document.querySelector("#table")
const calcNumber = document.querySelectorAll(".number")
const calcOpt = document.querySelectorAll(".operation")

function insert(num){
    calcInput.value = calcInput.value+num
}

function equal(){
    let exp = calcInput.value
    calcInput.value = eval(exp)
}

function clean(){
    calcInput.value = ""
}
