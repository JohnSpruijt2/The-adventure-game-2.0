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

      thirdText: "Go into the forest <i class='fas fa-arrow-right'></i>",
      thirdOnclick: "loadlevel(3)",
      thirdClass: "options",

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
    },


    { // 4
      name: "North road - lvl 2",
        title: "North road",
        text: "You walk to the north. You enter into a clearance with in the middle a little cabin.<br><br>On the wall of the cabin you notice a shovel.",
        img: "img/cabin.jpg",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(2)",
        firstClass: "options",

        secondText: "Try the door of the cabin",
        secondOnclick: "cabinDoor()",
        secondClass: "options",

        thirdText: "Pick up a shovel",
        thirdOnclick: "pickupShovel()",
        thirdClass: "options",

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
    },

    
    { // 8
      name: "Inside cabin - lvl 6",
        title: "Inside cabin",
        text: "You can see a chest next to the oven, you also see staircase into the basement",
        img: "img/insidecabin.jpg",
        
        firstText: "Go back",
        firstOnclick: "loadlevel(4)",
        firstClass: "options",

        secondText: "investigate the chest",
        secondOnclick: "chest()",
        secondClass: "options",

        thirdText: "Go down the staircase",
        thirdOnclick: "alert('This path hasnt been programmed yet')",
        thirdClass: "options",
    },

    { // 9
        name: "QTE freeze game over - lvl 5",
        title: "You froze in place",
        text: "You see the closet falling over and freeze in terror. <br><br>You are crushed to death under the closet.",
        img: "img/insidecabin.jpg",
        
        firstText: "Restart",
        firstOnclick: "restart();",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    },

    { // 10
        name: "QTE catch game over - lvl 5",
        title: "You reacted quickly",
        text: "You steady yourself to catch the falling closet like a bodybuilder.<br><br>What actually happens is that you extend your arms to catch it and immediately get crushed to death under the closet",
        img: "img/insidecabin.jpg",
        
        firstText: "Restart",
        firstOnclick: "restart();",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    }
  ]