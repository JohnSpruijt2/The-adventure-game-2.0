function loadlevel(levelnummer) {
    window.lvl = levels[levelnummer];
    console.log(lvl.name)
    document.getElementById("picture").src = lvl.img;
    document.getElementById("paragraf").innerHTML = lvl.text
    document.getElementById("titleId").innerHTML = lvl.title

    document.getElementById("option1").innerHTML = lvl.firstText
    document.getElementById("option1").setAttribute('onclick',lvl.firstOnclick)
    document.getElementById("option1").setAttribute('class',lvl.firstClass)

    document.getElementById("option2").innerHTML = lvl.secondText
    document.getElementById("option2").setAttribute('onclick',lvl.secondOnclick)
    document.getElementById("option2").setAttribute('class',lvl.secondClass)
    
    document.getElementById("option3").innerHTML = lvl.thirdText
    document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
    document.getElementById("option3").setAttribute('class',lvl.thirdClass)
    loadlevelscript()
}





function loadlevelscript() {
    inspectdirt = false
    triedCabin = false
    triedShovel = false
    triedKey = false
    triedChest = false
    triedbucket = false
    triedAxe = false
    triedWorkTrees = false

    if (lvl.name == "QTE - lvl 5") {
      if (firstCabinVisit == true) {
        QTE = setTimeout(QTElost, 2000)
        firstCabinVisit = false
      }
    }
    else if (lvl.name == "North road - lvl 2") {
      if (pickedupShovel == true) {
        document.getElementById("paragraf").innerHTML = "You walk to the north. You enter into a clearance with in the middle a little cabin."
        if (unlockcabin == true ) {
          document.getElementById("option2").innerHTML = "Go inside the cabin"
          document.getElementById("option2").setAttribute('onclick',"firstcabincheck()")
          document.getElementById("option2").setAttribute('class',lvl.secondClass)
          document.getElementById("option3").setAttribute('class',"none")
        }
        else {
          document.getElementById("option3").innerHTML = lvl.thirdText
          document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
          document.getElementById("option3").setAttribute('class',"none")
        }
        
      }
      else {
        
      }
    }
    else if (lvl.name == "left path - lvl 4") {
      if (dugdirt == false) {
        document.getElementById("option2").innerHTML = lvl.secondText
        document.getElementById("option2").setAttribute('onclick',lvl.secondOnclick)
        document.getElementById("option2").setAttribute('class',lvl.secondClass)
      }
      else if (dugdirt == true) {
        document.getElementById("option2").setAttribute('class',"")
      }
    }
    else if(lvl.name == "North road - lvl 2") {
      if (unlockcabin == true) {
        document.getElementById("option2").innerHTML = "Go inside the cabin"
        document.getElementById("option2").setAttribute('onclick',"firstcabincheck()")
        document.getElementById("option2").setAttribute('class',lvl.secondClass)

      }
      else {
        
      }
    }
    else if (lvl.name == "cabin basement - lvl 7") {
      if (pickedupaxe == true) {
        document.getElementById("option2").setAttribute('class',"")
      }
      if (hasbucket == true) {
        document.getElementById("option3").setAttribute('class',"")
      }
    }
    else if (lvl.name == "Innkeeper - lvl 9") {
      if (choppingDone == true){
        document.getElementById("option2").setAttribute('class',"")
      }
    }
    else {
      
    }
}