
var pickedupShovel = false
var hasshovel = false
function pickupShovel() {
  console.log("picked up shovel in lvl 2")
  pickedupShovel = true
  hasshovel = true
    document.getElementById("item1").src = "img/shovel.png"
    document.getElementById("item1").setAttribute('onclick',"shovelclick()")
    document.getElementById("option3").setAttribute('class',"")
    document.getElementById("paragraf").innerHTML += "<br><br>You picked up a shovel"
}
var triedShovel = false
function shovelclick() {
  alert(lvl.name)
  if (hasshovel == true){
    if (triedShovel == false) {
      if (lvl.name == "left path - lvl 4") {
        console.log("dug the dirt in lvl 4")
        console.log("Obtained chest in lvl 4")
        document.getElementById("option2").setAttribute('class',"none")
        document.getElementById("paragraf").innerHTML += "<br><br>You found a box with something rattling inside.<br>Your shovel broke during digging."
        document.getElementById("item1").src = "img/brokenshovel.png"
        document.getElementById("item2").src = "img/chest.png"
        document.getElementById("item2").setAttribute('onclick',"keychest()")
        hasshovel = false
        dugdirt = true

        
      }
      else {
        document.getElementById("paragraf").innerHTML += "<br><br>you can't dig here"
        triedShovel = true
      }
    }
  }
  
  
}

function keychest() {
  document.getElementById("paragraf").innerHTML += "<br><br>You pry the chest open, and inside you find a key."
  document.getElementById("item2").src = "img/key.png"
  document.getElementById("item2").setAttribute('onclick',"key()")
  console.log("opend chest to find key")
}
var unlockcabin = false
var triedKey = false

function key() {
  if (lvl.name == "North road - lvl 2") {
    console.log("unlocked cabin")
    document.getElementById("paragraf").innerHTML += "<br><br>You unlocked the cabin door"
    document.getElementById("item2").setAttribute('onclick',"")
    unlockcabin = true
    document.getElementById("option4").innerHTML = "Go inside the cabin"
    document.getElementById("option4").setAttribute('onclick',"firstcabincheck()")
    document.getElementById("option4").setAttribute('class',lvl.fourthClass)
  }
  else {
    if (triedKey == false) {
      document.getElementById("paragraf").innerHTML += "<br><br>You can't use the key here."
      triedKey = true
    }
  }
    
  
}
function firstcabincheck() {
  if (firstCabinVisit == true) {
    loadlevel(7)
  }
  else if (firstCabinVisit == false) {
    loadlevel(8)
  }
}



var dugdirt = false
var inspectdirt = false
function dirtmount() {
    if (inspectdirt == false) {
      console.log("inspected dirt mount in lvl 4")
      document.getElementById("paragraf").innerHTML += "<br><br>It apears something is buried here. You could try digging if you had a shovel."
      inspectdirt = true
    }
    else if (inspectdirt == true) {
      
    }
  
}


var canCabin = false
var triedCabin = false
function cabinDoor() {
    if (triedCabin == false) {
      triedCabin = true
      document.getElementById("paragraf").innerHTML += "<br><br>The door seems to be locked. You will need to find a key to open the door."
    }
    else {
      return;
    }
}


var haskey = false

var QTE = ""
var firstCabinVisit = true
function QTEfreeze() {
  alert("YOU DIED!")
  clearTimeout(QTE)
}
function QTEcatch() {
  alert("YOU DIED!")
  clearTimeout(QTE)
}
function QTEjump() {
  clearTimeout(QTE)
  loadlevel(8)
}
function QTElost() {
  alert("YOU DIED!")
}



function restart() {
  location.reload()
}

var btn4 = document.createElement("button")
    btn4.innerHTML = "help"
    document.getElementById("buttonbox").appendChild(btn4); 
    btn4.setAttribute('id',"option4")

var btn5 = document.createElement("button")
    btn5.innerHTML = "help"
    document.getElementById("buttonbox").appendChild(btn5); 
    btn5.setAttribute('id',"option5")

var btn6 = document.createElement("button")
    btn6.innerHTML = "help"
    document.getElementById("buttonbox").appendChild(btn6); 
    btn6.setAttribute('id',"option6")



loadlevel(0)