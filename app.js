var display = document.getElementById("display")

var zero_button = document.getElementById("0")
var one_button = document.getElementById("1")
var two_button = document.getElementById("2")
var three_button = document.getElementById("3")
var four_button = document.getElementById("4")
var five_button = document.getElementById("5")
var six_button = document.getElementById("6")
var seven_button = document.getElementById("7")
var eight_button = document.getElementById("8")
var nine_button = document.getElementById("9")
var ac_button = document.getElementById("ac")
var plusminus_button = document.getElementById("+/-")
var percent_button = document.getElementById("%")
var divide_button = document.getElementById("/")
var multiply_button = document.getElementById("*")
var minus_button = document.getElementById("-")
var plus_button = document.getElementById("+")
var equals_button = document.getElementById("=")
var other_number
var operation

plusminus_button.addEventListener("click", function(){
  display.value = -display.value
})

zero_button.addEventListener("click", function(){
  display.value = display.value + "0"
})

one_button.addEventListener("click", function(){
  display.value = display.value + "1"
})

two_button.addEventListener("click", function(){
  display.value = display.value + "2"
})

three_button.addEventListener("click", function(){
  display.value = display.value + "3"
})

four_button.addEventListener("click", function(){
  display.value = display.value + "4"
})

five_button.addEventListener("click", function(){
  display.value = display.value + "5"
})

six_button.addEventListener("click", function(){
  display.value = display.value + "6"
})

seven_button.addEventListener("click", function(){
  display.value = display.value + "7"
})

eight_button.addEventListener("click", function(){
  display.value = display.value + "8"
})

nine_button.addEventListener("click", function(){
  display.value = display.value + "9"
})

ac_button.addEventListener("click", function(){
display.value = " "
})


plus_button.addEventListener("click", function(){
other_number = display.value
display.value = " "
operation = "+"
})

minus_button.addEventListener("click", function(){
  other_number = display.value
  display.value = " "
  operation = "-"
})

divide_button.addEventListener("click", function(){
  other_number = display.value
  display.value = " "
  operation = "/"
})

multiply_button.addEventListener("click", function(){
  other_number = display.value
  display.value = " "
  operation = "*"
})


equals_button.addEventListener("click", function(){
  if(operation=="+"){
    display.value = Number(other_number) + Number(display.value)
  }
  if(operation=="-"){
    display.value = Number(other_number) - Number(display.value)
  }
  if(operation=="/"){
    display.value = Number(other_number) / Number(display.value)
  }
  if(operation=="*"){
    display.value = Number(other_number) * Number(display.value)
  }
  if (operation=="%"){
  display.value = Number(display.value) * 100 + "%"
  }
})
