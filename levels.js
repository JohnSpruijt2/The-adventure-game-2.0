var levels = [
    { // 0
        name: "Home screen",
        title: "The goblin road ",
        text: "The adventure game with goblins",
        img: "img/frontGoblin.png",
        
        firstText: "Start Game",
        firstOnclick: "loadlevel(2)",
        firstClass: "options",

        secondText: "Credits",
        secondOnclick: "loadlevel(1)",
        secondClass: "options",

        thirdText: "Help",
        thirdOnclick: "loadlevel(11)",
        thirdClass: "options",
    },


    { // 1
        name: "Credits",
        title: "Credits ",
        text: "Artwork by: Google images<br>Game design: John Spruijt <br>Game developed by: John Spruijt",
        img: "img/frontGoblin.png",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
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
        thirdOnclick: "loadlevel(13)",
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
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(4)",
        firstClass: "options",

        secondText: "investigate the chest",
        secondOnclick: "chest()",
        secondClass: "options",

        thirdText: "Go down the staircase",
        thirdOnclick: "loadlevel(12)",
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
    },
    
    { // 11
        name: "Help screen",
        title: "Help screen",
        text: "This is a text adventure game. You win the game by getting further into the game without dying. <br><br>You click the black buttons in order to do something.<br><br>When you have something in your inventory you can click on it in order to interact with it.",
        img: "img/frontGoblin.png",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(0)",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    }, 

    { // 12
      name: "cabin basement - lvl 7",
        title: "Cabin Basement",
        text: "There is an axe sitting next to the staircase. There is also a very filfthy looking bucket in the corner.",
        img: "img/basement.png",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(8)",
        firstClass: "options",

        secondText: "Pick up the axe",
        secondOnclick: "pickupaxe()",
        secondClass: "options",

        thirdText: "Pick up the bucket",
        thirdOnclick: "pickupbucket()",
        thirdClass: "options",
    },

    { // 13
      name: "village - lvl 8",
        title: "village path",
        text: "The forest comes to an end and you find yourself in a village. You see an Inn called 'The winking skeever'.",
        img: "img/village.jpg",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(5)",
        firstClass: "options",

        secondText: "Go inside the inn",
        secondOnclick: "loadlevel(14)",
        secondClass: "options",

        thirdText: "continue traveling",
        thirdOnclick: "loadlevel(18)",
        thirdClass: "options",
    },

    { // 14
      name: "Inside the inn - lvl 9",
        title: "Inside the winking skeever Inn",
        text: "You could talk to the Innkeeper.",
        img: "img/Inn.png",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(13)",
        firstClass: "options",

        secondText: "Talk to the Innkeeper",
        secondOnclick: "loadlevel(15)",
        secondClass: "options",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    },

    { // 15
      name: "Innkeeper - lvl 9",
        title: "Innkeeper",
        text: "You could ask for a bed or work for some money",
        img: "img/Inn.png",
        
        firstText: "Go back <i class='fas fa-undo'></i>",
        firstOnclick: "loadlevel(14)",
        firstClass: "options",

        secondText: "Ask about work",
        secondOnclick: "work()",
        secondClass: "options",

        thirdText: "Ask for a bed",
        thirdOnclick: "bed()",
        thirdClass: "options",
    },

    { // 16
      name: "Work Trees - lvl 9",
        title: "Chopping firewood",
        text: "You hold your axe in hand ready to chop",
        img: "img/woodChopping.png",
        
        firstText: "Go back",
        firstOnclick: "loadlevel(15)",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    },

    { // 17
      name: "Bed - lvl 9",
        title: "Bedroom",
        text: "There is a nice and comfy bed.",
        img: "img/Inn.png",
        
        firstText: "Go to sleep",
        firstOnclick: "sleeping()",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    },

    {
      name: "Continue traveling - lvl 10",
        title: "Continue",
        text: "You continue travelling",
        img: "img/woodChopping.png",
        
        firstText: "Go back",
        firstOnclick: "loadlevel(13)",
        firstClass: "options",

        secondText: "",
        secondOnclick: "",
        secondClass: "",

        thirdText: "",
        thirdOnclick: "",
        thirdClass: "",
    }
  ]