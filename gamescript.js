//John Spruijt
//2019

function onload() {
  var inventory = document.createElement("div")
    document.getElementById("background").appendChild(inventory)
    inventory.id = "inventory"
    document.getElementById('background').style.opacity = "100"
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
    shovel.setAttribute('class',"items")
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
        chest.setAttribute('class',"items")
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
  haskey = true
}
var unlockcabin = false
var triedKey = false

function key() {
  if (lvl.name == "North road - lvl 2") {
    if (unlockcabin == false) {
      console.log("unlocked cabin")
    document.getElementById("paragraf").innerHTML += "<br><br>You unlocked the cabin door"
    unlockcabin = true
    document.getElementById("option2").innerHTML = "Go inside the cabin <i class='fas fa-arrow-up'></i>"
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
      haschest = true
    }
    else if (inspectdirt == true) {
      
    }
}


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
var haschest = false
var triedChest = false
function chest() {
  if (triedChest == false) {
    document.getElementById("paragraf").innerHTML += "<br><br>You can't seem to open or move the chest."
    console.log("investigated chest")
    triedChest = true
    haschest = false
  }
  
}


var pickedupaxe = false
function pickupaxe() {
  var axe = document.createElement("img")
  axe.src = "img/axe.png"
  document.getElementById("inventory").appendChild(axe)
  axe.id = "item3"
  axe.setAttribute('onclick',"axe()")
  axe.setAttribute('class',"items")
  pickedupaxe = true
  document.getElementById("option2").setAttribute('class',"")
  document.getElementById("paragraf").innerHTML += "<br><br>You picked up the axe."
  console.log("picked up axe - lvl 7")
}
var triedAxe = false
function axe() {
  if (lvl.name == "Work Trees - lvl 9") {
    chopping()
  }
  else {
    if (triedAxe == false) {
      document.getElementById("paragraf").innerHTML += "<br><br>There is nothing to do with your axe."
      triedAxe = true
    }
  }
  
}

var hasbucket = false
var pickedupbucket = false
var buckettries = 0
function pickupbucket() {
  if (buckettries == 0) {
    document.getElementById("paragraf").innerHTML += "<br><br>You really shouldn't pick that up."
    buckettries = 1
  }
  else if (buckettries == 1) {
    document.getElementById("paragraf").innerHTML += "<br><br>You don't know what happend to it. It is disgusting."
    buckettries =2
  }
  else if (buckettries == 2) {
    document.getElementById("paragraf").innerHTML += "<br><br>You decide to pick up the disgusting bucket."
    document.getElementById("option3").setAttribute('class',"")
    var bucket = document.createElement("img")
  bucket.src = "img/emptybucket.png"
  document.getElementById("inventory").appendChild(bucket)
  bucket.id = "item4"
  bucket.setAttribute('class',"items")
  pickedupbucket = true
  bucket.setAttribute('onclick',"bucket()")
  hasbucket = true
  console.log("picked up disgusting bucket")
  }
}
var triedbucket = false
function bucket() {
  if (triedbucket == false) {
    triedbucket = true
    document.getElementById("paragraf").innerHTML += "<br><br>What would you want to do with that?"
  }
}

function work() {
  document.getElementById("paragraf").innerHTML += "<br><br>'You could chop some firewood for some money if you had an axe.'"
  document.getElementById("option2").innerHTML = "Chop some firewood"
  document.getElementById("option2").setAttribute('onclick',"workTree()")
}
var triedWorkTries = false
function workTree() {
  if (pickedupaxe == true) {
    loadlevel(16)
  }
  else {
    if (triedWorkTrees == false){
      document.getElementById("paragraf").innerHTML += "<br><br>You don't have an axe"
      triedWorkTrees = true
    }
    
  }
}
var choppingDone = false
var firewoodChopped = 0
var chops = 3
var hasgold = false
function chopping() {
  if (chops > 0) {
    chops--
    if(chops == 0) {
      firewoodChopped++
      chops=3
    }
    document.getElementById("paragraf").innerHTML = firewoodChopped+" pieces of firewood chopped<br><br>" + chops+" chops to go"
  }
  if (firewoodChopped == 5) {
    choppingDone = true
    var gold = document.createElement("img")
    gold.src = "img/goldpouch.png"
    document.getElementById("inventory").appendChild(gold)
    gold.id = "item5"
    gold.setAttribute('class',"items")
    hasgold = true
    loadlevel(15)
    document.getElementById("paragraf").innerHTML = "You could ask for a bed.<br><br>The Inn keeper gives you some money for chopping the firewood."
  }
}

var kickedoutInn = false
function bed() {
  if (hasgold == true) {
    document.getElementById("paragraf").innerHTML += "<br><br>'Of course, it's only a few gold.'"
    document.getElementById("option1").setAttribute('class',"")
    document.getElementById("option2").setAttribute('class',"")
    document.getElementById("option3").setAttribute('class',"")
    hasgold = false
    setTimeout(function(){
      document.getElementById("item5").remove();
      loadlevel(17)
    },2000)
  }
  else {
    document.getElementById("paragraf").innerHTML += "<br><br>'I've had enough of people like you. This isn't a homeless shelter get out!"
    document.getElementById("option1").setAttribute('class',"")
    document.getElementById("option2").setAttribute('class',"")
    document.getElementById("option3").setAttribute('class',"")
    setTimeout(function() {
      kickedoutInn = true
      loadlevel(13)
      document.getElementById("paragraf").innerHTML += "<br><br>You got kicked out of the Inn"
    },2000);
    
  }
}
triedInn = false
function kickedout() {
  if (triedInn == false) {
    document.getElementById("paragraf").innerHTML += "<br><br>You probably shouldn't go in there anymore."
    triedInn = true
  }
  
}

var hasslept = false
function sleeping() {
  document.getElementById("paragraf").innerHTML += "<br><br>You decide to go to sleep"
  document.getElementById("option1").setAttribute('class',"")
  document.getElementById("option2").setAttribute('class',"")
  document.getElementById("option3").setAttribute('class',"")
  setTimeout(function() {
    hasslept = true
    loadlevel(14)
  },2000);
}
function sleptTalk() {
  if (triedTalk == false) {
    document.getElementById('paragraf').innerHTML += '<br><br>You have already talked about everything.'
    triedTalk = true
  }
}


var lifes = 1
function restart() {
  
  lifes++
  if (pickedupShovel == true) {
    document.getElementById('inventory').removeChild(item1)
  }
  if (dugdirt == true) {
    document.getElementById('inventory').removeChild(item2)
  }
  if (pickedupaxe == true) {
    document.getElementById('inventory').removeChild(item3)
  }
  if (pickedupbucket == true) {
    document.getElementById('inventory').removeChild(item4)
  }
  if (hasgold == true) {
    document.getElementById('inventory').removeChild(item5)
  }
  inspectdirt = false
    triedCabin = false
    triedShovel = false
    triedKey = false
    triedChest = false
    triedbucket = false
    triedAxe = false
    triedWorkTrees = false
    triedInn = false
    triedTalk = false
    pickedupShovel = false
    hasshovel = false
    pickedupaxe = false
    pickedupbucket = false
    dugdirt = false
    firstCabinVisit = true
    haschest = false
    hasbucket = false
    hasgold = false
    unlockcabin = false
    choppingDone = false
    hasslept = false
    haskey = false
    loadlevel(0)
  }



function endgame() {
  loadlevel(20)
  document.getElementById("buttonbox").style.display = "none"
  document.getElementById("textbox").style.height = "575px"
  if (lifes == 1) {
    document.getElementById("paragraf").innerHTML = "You got to this safe place after just one try!<br><br>"
  }
  else {
    document.getElementById("paragraf").innerHTML = "It took you " + lifes + " tries to get to this point.<br><br>"
  }
  
  var something = false
  if (pickedupShovel == true) {
    document.getElementById("paragraf").innerHTML += "You took a shovel that you found without asking.<br><br>"
    something = true
  }
  if (dugdirt == true) {
    document.getElementById("paragraf").innerHTML += "You used the shovel to dig up a chest.<br><br>"
    something = true
  }
  if (haskey == true) {
    document.getElementById("paragraf").innerHTML += "You found a key in the chest.<br><br>"
    something = true
  }
  if (unlockcabin == true) {
    document.getElementById("paragraf").innerHTML += "You used the key to open the cabin door.<br><br>"
    something = true
  }
  if (firstCabinVisit == false) {
    document.getElementById("paragraf").innerHTML += "You escaped death with your quick reflexes.<br><br>"
    something = true
  }
  if (pickedupaxe == true) {
    document.getElementById("paragraf").innerHTML += "You picked up an axe that you found in the basement of the cabin.<br><br>"
    something = true
  }
  if (pickedupbucket == true) {
    document.getElementById("paragraf").innerHTML += "You picked up a disgusting bucket that you carried around with you for no reason.<br><br>"
  }
  if (choppingDone == true) {
    document.getElementById("paragraf").innerHTML += "You worked for the Inn keeper to earn some gold.<br><br>"
  }
  if (hasslept == true) {
    document.getElementById("paragraf").innerHTML += "You immediatly spend all your gold on sleeping in a bed.<br><br>"
  }
  else if (hasgold == true) {
    document.getElementById("paragraf").innerHTML += "You saved your gold like a smart person.<br><br>"
  }
  else if (kickedoutInn == true) {
    document.getElementById("paragraf").innerHTML += "You got kicked out of the Inn.<br><br>"
  }
  if (something == false) {
    document.getElementById("paragraf").innerHTML += "You have acomplised nothing of value."
  }
}


loadlevel(0)