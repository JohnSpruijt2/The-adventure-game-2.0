var levels = [
    { // 0
        name: "Home screen",
        title: "The goblin road ",
        text: "The adventure game 2.0",
        img: "img/frontGoblin.png",
        
        firstText: "Start Game",
        firstOnclick: "loadlevel(2)",
        firstClass: "options",

        secondText: "Credits",
        secondOnclick: "loadlevel(1)",
        secondClass: "options",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },


    { // 1
        name: "Credits",
        title: "Credits ",
        text: "Made by: John Spruijt <br> ©2019",
        img: "img/frontGoblin.png",
        
        firstText: "Go back",
        firstOnclick: "loadlevel(0)",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },


    { // 2
      name: "forest road - lvl 1",
      title: "Forest road",
      text: "You are standing on a long road with next to it a dense forest.",
      img: "img/forestroad.jpg",

      firstText: "Go north up the road <i class='fas fa-arrow-up'></i>",
      firstOnclick: "loadlevel(4)",
      firstClass: "options",

      secondText: "Go south down the road <i class='fas fa-arrow-down'></i>",
      secondOnclick: "loadlevel(5)",
      secondClass: "options",

      thirdText: "",
      thirdOnclick: "",
      thirdClass: "",

      fourthText: "Go into the forest <i class='fas fa-arrow-right'></i>",
      fourthOnclick: "loadlevel(3)",
      fourthClass: "options",

      fifthText: "",
      fifthOnclick: "",
      fifthClass: "",

      sixText: "",
      sixOnclick: "",
      sixClass: ""
    },


    { // 3
      name: "Forest Game over - lvl 1",
        title: "Forest ",
        text: "Ignoring the rumors about the goblins you decide to go into the forest.<br> After a while of walking around aimlessly your suroundings begin to look familiar.Then it hits you, you are lost.<br><br>You are wandering aimlessly around in the forest until you hear some noises nearby. Considering you dont have many options you decide to go towards the noise. You notice too late that the noise is coming from the rumored goblins and you dont have anything to fight them off with.<br><br>You are kidnapped and put inside a gaint vat of water and put above the fire. You are boiled alive. Look on the bright side the goblins have new meal to eat.",
        img: "img/forest.jpg",
        
        firstText: "Restart",
        firstOnclick: "restart();",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },


    { // 4
      name: "North road - lvl 2",
        title: "North road",
        text: "You walk to the north. You enter into a clearance with in the middle a little cabin.<br><br>On the wall of the cabin you notice a shovel.",
        img: "img/cabin.jpg",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(2)",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "Pick up a shovel",
        thirdOnclick: "pickupShovel()",
        thirdClass: "options",

        fourthText: "Try the door of the cabin",
        fourthOnclick: "cabinDoor()",
        fourthClass: "options",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },


    { // 5
      name: "South road - lvl 3",
        title: "South road",
        text: "You walk to the south. <br><br>The road splits into two small paths.",
        img: "img/southroad.jpg",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(2)",
        firstClass: "options",

        secondText: "Take the left path <i class='fas fa-arrow-left'></i>",
        secondOnclick: "loadlevel(6)",
        secondClass: "options",

        thirdText: "Take the right path <i class='fas fa-arrow-right'></i>",
        thirdOnclick: "alert('This path hasnt been programmed yet')",
        thirdClass: "options",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },


    { // 6
      name: "left path - lvl 4",
        title: "The left path ",
        text: "You enter a clearing in the forest and notice a mount of dirt",
        img: "img/leftpath.jpg",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(5)",
        firstClass: "options",

        secondText: "Inspect the mount of dirt",
        secondOnclick: "dirtmount()",
        secondClass: "options",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },


    { // 7
      name: "QTE - lvl 5",
        title: "Watch out!",
        text: "You enter the cabin and accidently knock down down a old closet standing next to the door. <br><br><a id='QTEprompt'>ACT QUICKLY</a>",
        img: "img/insidecabin.jpg",
        
        firstText: "Freeze and do nothing",
        firstOnclick: "QTEfreeze()",
        firstClass: "options",

        secondText: "Catch the closet",
        secondOnclick: "QTEcatch()",
        secondClass: "options",

        thirdText: "Jump out the way",
        thirdOnclick: "QTEjump()",
        thirdClass: "options",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    },

    
    { // 8
      name: "Inside cabin - lvl 6",
        title: "Inside cabin",
        text: "Made by: John Spruijt <br> ©2019",
        img: "img/insidecabin.jpg",
        
        firstText: "Go back",
        firstOnclick: "loadlevel(4)",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",

        fourthText: "",
        fourthOnclick: "",
        fourthClass: "",

        fifthText: "",
        fifthOnclick: "",
        fifthClass: "",

        sixText: "",
        sixOnclick: "",
        sixClass: ""
    }
  ]
  
function loadlevel(levelnummer) {
    var lvl = levels[levelnummer];
    console.log(lvl.name)
    document.getElementById("picture").src = lvl.img;
    document.getElementById("paragraf").innerHTML = lvl.text
    document.getElementById("titleId").innerHTML = lvl.title

    document.getElementById("option1").innerHTML = lvl.firstText
    document.getElementById("option1").setAttribute('onclick',lvl.firstOnclick)
    document.getElementById("option1").setAttribute('class',lvl.firstClass)
    
    if (lvl.name == "left path - lvl 4") {
      if (dugdirt == false) {
        document.getElementById("option2").innerHTML = lvl.secondText
        document.getElementById("option2").setAttribute('onclick',lvl.secondOnclick)
        document.getElementById("option2").setAttribute('class',lvl.secondClass)
      }
      else if (dugdirt == true) {
        document.getElementById("option2").setAttribute('class',"")
      }
    }
    else {
      document.getElementById("option2").innerHTML = lvl.secondText
      document.getElementById("option2").setAttribute('onclick',lvl.secondOnclick)
      document.getElementById("option2").setAttribute('class',lvl.secondClass)
    }
    

    if (lvl.name == "North road - lvl 2") {
      if (pickedupShovel == true) {
        document.getElementById("option3").innerHTML = lvl.thirdText
        document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
        document.getElementById("option3").setAttribute('class',"none")
      }
      else {
        document.getElementById("option3").innerHTML = lvl.thirdText
        document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
        document.getElementById("option3").setAttribute('class',lvl.thirdClass)
      }
    }
    else {
      document.getElementById("option3").innerHTML = lvl.thirdText
      document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
      document.getElementById("option3").setAttribute('class',lvl.thirdClass)
    }
    
    if (lvl.name == "North road - lvl 2") {
      if (unlockcabin == true) {
        document.getElementById("option4").innerHTML = "Go inside the cabin"
        document.getElementById("option4").setAttribute('onclick',"firstcabincheck()")
        document.getElementById("option4").setAttribute('class',lvl.fourthClass)

      }
      else {
        document.getElementById("option4").innerHTML = lvl.fourthText
        document.getElementById("option4").setAttribute('onclick',lvl.fourthOnclick)
        document.getElementById("option4").setAttribute('class',lvl.fourthClass)
      }
    }
    else {
      document.getElementById("option4").innerHTML = lvl.fourthText
      document.getElementById("option4").setAttribute('onclick',lvl.fourthOnclick)
      document.getElementById("option4").setAttribute('class',lvl.fourthClass)
    }
    
    document.getElementById("option5").innerHTML = lvl.fifthText
    document.getElementById("option5").setAttribute('onclick',lvl.fifthOnclick)
    document.getElementById("option5").setAttribute('class',lvl.fifthClass)

    document.getElementById("option6").innerHTML = lvl.sixText
    document.getElementById("option6").setAttribute('onclick',lvl.sixOnclick)
    document.getElementById("option6").setAttribute('class',lvl.sixClass)

    inspectdirt = false
    triedCabin = false
    triedShovel = false
    triedKey = false
    if (lvl.name == "left path - lvl 4") {
      shovelLevel = true
    }
    else {
      shovelLevel = false
    }

    if (lvl.name == "North road - lvl 2") {
      cabindoorlevel = true
    }
    else {
      cabindoorlevel = false
    }
    if (lvl.name == "QTE - lvl 5") {
      if (firstCabinVisit == true) {
        QTE = setTimeout(QTElost, 2000)
        firstCabinVisit = false
      }
    }
}

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
var shovelLevel = false
var triedShovel = false
function shovelclick() {
  if (hasshovel == true){
    if (triedShovel == false) {
      if (shovelLevel == false) {
        document.getElementById("paragraf").innerHTML += "<br><br>you can't dig here"
        triedShovel = true
      }
      else if (shovelLevel == true) {
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
var cabindoorlevel = false
function key() {
  if (cabindoorlevel == true) {
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
loadlevel(0)