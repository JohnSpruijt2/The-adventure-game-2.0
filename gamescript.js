function onload() {
  document.getElementById("background").style.opacity = "100"
  var inventory = document.createElement("div")
    document.getElementById("background").appendChild(inventory)
    inventory.id = "inventory"
}
  

var pickedupShovel = false
var hasshovel = false
function pickupShovel() {
  
  console.log("picked up shovel in lvl 2")
  pickedupShovel = true
  hasshovel = true

    var shovel = document.createElement("img")
    shovel.src = "img/shovel.png"
    document.getElementById("inventory").appendChild(shovel)
    shovel.id = "item1"
    shovel.style.opacity = "100"
    document.getElementById("item1").setAttribute('onclick',"shovelclick()")
    document.getElementById("option3").setAttribute('class',"")
    document.getElementById("paragraf").innerHTML += "<br><br>You picked up a shovel"
}
var triedShovel = false
function shovelclick() {
  if (hasshovel == true){
    if (triedShovel == false) {
      if (lvl.name == "left path - lvl 4") {
        console.log("dug the dirt in lvl 4")
        console.log("Obtained chest in lvl 4")
        document.getElementById("option2").setAttribute('class',"none")
        document.getElementById("paragraf").innerHTML += "<br><br>You found a box with something rattling inside.<br>Your shovel broke during digging."
        document.getElementById("item1").src = "img/brokenshovel.png"

        var chest = document.createElement("img")
        chest.src = "img/chest.png"
        document.getElementById("inventory").appendChild(chest)
        chest.id = "item2"
        chest.style.opacity = "100"
        chest.setAttribute('onclick',"keychest()")
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
  console.log("opened chest to find key")
}
var unlockcabin = false
var triedKey = false

function key() {
  if (lvl.name == "North road - lvl 2") {
    if (unlockcabin == false) {
      console.log("unlocked cabin")
    document.getElementById("paragraf").innerHTML += "<br><br>You unlocked the cabin door"
    unlockcabin = true
    document.getElementById("option2").innerHTML = "Go inside the cabin"
    document.getElementById("option2").setAttribute('onclick',"firstcabincheck()")
    document.getElementById("option2").setAttribute('class',lvl.secondClass)
    }
  }
  else if (lvl.name == "Inside cabin - lvl 6") {
    if (triedKey == false) {
      console.log("tried golden key on chest")
      document.getElementById("paragraf").innerHTML += "<br><br>You try the key on the chest, but it doesn't fit."
      triedKey = true
    }
    
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
var QTE
var firstCabinVisit = true
function QTEfreeze() {
  clearTimeout(QTE)
  loadlevel(9)
}
function QTEcatch() {
  clearTimeout(QTE)
  loadlevel(10)
}
function QTEjump() {
  clearTimeout(QTE)
  loadlevel(8)
}
function QTElost() {
  loadlevel(9)
}

var triedChest = false
function chest() {
  if (triedChest == false) {
    document.getElementById("paragraf").innerHTML += "<br><br>You can't seem to open or move the chest."
    console.log("investigated chest")
    triedChest = true
  }
  
}


var pickedupaxe = false
function pickupaxe() {
  var axe = document.createElement("img")
  axe.src = "img/axe.png"
  document.getElementById("inventory").appendChild(axe)
  axe.id = "item3"
  axe.style.opacity = "100"
  pickedupaxe = true
  document.getElementById("option2").setAttribute('class',"")
  document.getElementById("paragraf").innerHTML += "<br><br>You picked up the axe."
}


var buckettries = 0
function pickupbucket() {
  if (buckettries == 0) {
    document.getElementById("paragraf").innerHTML += "<br>You really shouldn't pick that up."
    buckettries = 1
  }
  else if (buckettries == 1) {
    document.getElementById("paragraf").innerHTML += "<br>You don't know what happend to it. It is disgusting."
    buckettries =2
  }
  else if (buckettries == 2) {
    document.getElementById("paragraf").innerHTML += "<br>You decide to pick up the disgusting bucket."
    document.getElementById("button3").setAttribute('class',"")
  }
}




function restart() {
  location.reload()
}

//var btn4 = document.createElement("button")
//    btn4.innerHTML = "help"
//    document.getElementById("buttonbox").appendChild(btn4); 
//    btn4.setAttribute('id',"option4")

//var btn5 = document.createElement("button")
//    btn5.innerHTML = "help"
//    document.getElementById("buttonbox").appendChild(btn5); 
//    btn5.setAttribute('id',"option5")

//var btn6 = document.createElement("button")
//    btn6.innerHTML = "help"
//    document.getElementById("buttonbox").appendChild(btn6); 
//    btn6.setAttribute('id',"option6")



loadlevel(0)