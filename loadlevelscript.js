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