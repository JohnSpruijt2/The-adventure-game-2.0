var levels = [
    {
        name: "Home screen",
        title: "The goblin road ",
        text: " ",
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


    {
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


    {
      name: "level 1 - forest road",
      title: "Forest road",
      text: "You look around and you notice you are standing on a dirt road, and next to you is a dense forest. You can see a shovel in the ground. <br><br>You can't seem to remember how you got here or who you are.",
      img: "img/forestroad.jpg",

      firstText: "Go north up the road <i class='fas fa-arrow-up'></i>",
      firstOnclick: "alert('you clicked a button')",
      firstClass: "options",

      secondText: "Go south down the road <i class='fas fa-arrow-down'></i>",
      secondOnclick: "alert('you clicked a button')",
      secondClass: "options",

      thirdText: "Pick up a shovel",
      thirdOnclick: "pickupShovel()",
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

    document.getElementById("option2").innerHTML = lvl.secondText
    document.getElementById("option2").setAttribute('onclick',lvl.secondOnclick)
    document.getElementById("option2").setAttribute('class',lvl.secondClass)

    if (levelnummer == 1) {
      if (pickedupShovel == true) {
        document.getElementById("option3").innerHTML = lvl.thirdText
        document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
        document.getElementById("option3").setAttribute('class',"")
      }
    }
    document.getElementById("option3").innerHTML = lvl.thirdText
    document.getElementById("option3").setAttribute('onclick',lvl.thirdOnclick)
    document.getElementById("option3").setAttribute('class',lvl.thirdClass)
    
    document.getElementById("option4").innerHTML = lvl.fourthText
    document.getElementById("option4").setAttribute('onclick',lvl.fourthOnclick)
    document.getElementById("option4").setAttribute('class',lvl.fourthClass)
    
    document.getElementById("option5").innerHTML = lvl.fifthText
    document.getElementById("option5").setAttribute('onclick',lvl.fifthOnclick)
    document.getElementById("option5").setAttribute('class',lvl.fifthClass)

    document.getElementById("option6").innerHTML = lvl.sixText
    document.getElementById("option6").setAttribute('onclick',lvl.sixOnclick)
    document.getElementById("option6").setAttribute('class',lvl.sixClass)
}
var pickedupShovel = false
var hasshovel = false
function pickupShovel() {
  pickedupShovel = true
  hasshovel = true
    document.getElementById("shovel").src = "img/shovel.png"
    document.getElementById("option3").setAttribute('class',"")
}


loadlevel(0)