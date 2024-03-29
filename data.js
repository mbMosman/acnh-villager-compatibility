// Manually query for data, then convert via https://www.convertsimple.com/convert-json-to-javascript/
// 'https://nookipedia.com/w/api.php?action=cargoquery&format=json&limit=500&tables=nh_villager&fields=name,image_url,species,personality,sub_personality,gender,birthday,sign,quote,catchphrase,clothing,fav_color1,fav_color2,fav_style1,fav_style2'
// Data pulled on 09/11/22

let acnhData = [
  {
    title: {
      name: "Ace",
      image_url: "https://dodo.ac/np/images/9/91/Ace_amiibo.png",
      species: "Bird",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 11",
      sign: "Leo",
      quote: "If you love something, let it go. Then chase it down. What were you thinking?",
      catchphrase: "ace",
      clothing: "Kung-Fu Tee",
      fav_color1: "Aqua",
      fav_color2: "Green",
      fav_style1: "Active",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Admiral",
      image_url: "https://dodo.ac/np/images/e/ed/Admiral_NH.png",
      species: "Bird",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "January 27",
      sign: "Aquarius",
      quote: "Only quitters give up.",
      catchphrase: "aye aye",
      clothing: "Hanten Jacket",
      fav_color1: "Black",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Agent S",
      image_url: "https://dodo.ac/np/images/a/a7/Agent_S_NH.png",
      species: "Squirrel",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 2",
      sign: "Cancer",
      quote: "You gotta put the pedal to the metal!",
      catchphrase: "sidekick",
      clothing: "No. 2 Shirt",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Agnes",
      image_url: "https://dodo.ac/np/images/4/42/Agnes_NH.png",
      species: "Pig",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 21",
      sign: "Taurus",
      quote: "You reap what you sow.",
      catchphrase: "snuffle",
      clothing: "Striped Halter Dress",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Al",
      image_url: "https://dodo.ac/np/images/c/c4/Al_NH.png",
      species: "Gorilla",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 18",
      sign: "Libra",
      quote: "Life is a buffet. Always go back for seconds.",
      catchphrase: "ayyyeee",
      clothing: "Athletic Jacket",
      fav_color1: "Red",
      fav_color2: "White",
      fav_style1: "Active",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Alfonso",
      image_url: "https://dodo.ac/np/images/e/e4/Alfonso_NH.png",
      species: "Alligator",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 9",
      sign: "Gemini",
      quote: "Slow and steady wins the race.",
      catchphrase: "it'sa me",
      clothing: "Simple Parka",
      fav_color1: "Red",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Alice",
      image_url: "https://dodo.ac/np/images/e/e1/Alice_NH.png",
      species: "Koala",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 19",
      sign: "Leo",
      quote: "Treat others as you would like to be treated.",
      catchphrase: "guvnor",
      clothing: "Striped Maxi Dress",
      fav_color1: "Red",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Alli",
      image_url: "https://dodo.ac/np/images/8/8e/Alli_NH.png",
      species: "Alligator",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 8",
      sign: "Scorpio",
      quote: "Think before you act.",
      catchphrase: "graaagh",
      clothing: "Leopard Tee",
      fav_color1: "Yellow",
      fav_color2: "Brown",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Amelia",
      image_url: "https://dodo.ac/np/images/a/ab/Amelia_NH.png",
      species: "Eagle",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 19",
      sign: "Scorpio",
      quote: "Pampering yourself is as important as food, water, and shelter!",
      catchphrase: "cuz",
      clothing: "Aran-Knit Sweater",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Anabelle",
      image_url: "https://dodo.ac/np/images/d/d8/Anabelle_NH.png",
      species: "Anteater",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 16",
      sign: "Aquarius",
      quote: "Dance like no one's watching!",
      catchphrase: "snorty",
      clothing: "Bold Muumuu",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Anchovy",
      image_url: "https://dodo.ac/np/images/e/ea/Anchovy_NH.png",
      species: "Bird",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "March 4",
      sign: "Pisces",
      quote: "Why do today what you can put off until tomorrow?",
      catchphrase: "chuurp",
      clothing: "Yodel Sweater",
      fav_color1: "Colorful",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Angus",
      image_url: "https://dodo.ac/np/images/5/5f/Angus_NH.png",
      species: "Bull",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "April 30",
      sign: "Taurus",
      quote: "Even strong bulls cry.",
      catchphrase: "macmoo",
      clothing: "Flame Tee",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Anicotti",
      image_url: "https://dodo.ac/np/images/8/80/Anicotti_NH.png",
      species: "Mouse",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 24",
      sign: "Pisces",
      quote: "The walls have ears.",
      catchphrase: "cannoli",
      clothing: "Colorful Striped Sweater",
      fav_color1: "Red",
      fav_color2: "Pink",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Ankha",
      image_url: "https://dodo.ac/np/images/5/56/Ankha_NH.png",
      species: "Cat",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 22",
      sign: "Virgo",
      quote: "All that glitters is not gold.",
      catchphrase: "me meow",
      clothing: "Palatial Tank Dress",
      fav_color1: "Colorful",
      fav_color2: "Brown",
      fav_style1: "Gorgeous",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Annalisa",
      image_url: "https://dodo.ac/np/images/f/f0/Annalisa_NH.png",
      species: "Anteater",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 6",
      sign: "Aquarius",
      quote: "Home is where the heart is.",
      catchphrase: "gumdrop",
      clothing: "Blossoming Kimono",
      fav_color1: "Red",
      fav_color2: "Pink",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Annalise",
      image_url: "https://dodo.ac/np/images/c/c4/Annalise_NH.png",
      species: "Horse",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 2",
      sign: "Sagittarius",
      quote: "Let gossip go in one ear and out the other.",
      catchphrase: "nipper",
      clothing: "Bold Muumuu",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Active",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Antonio",
      image_url: "https://dodo.ac/np/images/d/d4/Antonio_NH.png",
      species: "Anteater",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 20",
      sign: "Libra",
      quote: "Always go for the burn!",
      catchphrase: "honk",
      clothing: "Bone Tee",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Apollo",
      image_url: "https://dodo.ac/np/images/0/0e/Apollo_NH_Transparent.png",
      species: "Eagle",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 4",
      sign: "Cancer",
      quote: "What goes up must come down.",
      catchphrase: "pah",
      clothing: "Flight Jacket",
      fav_color1: "Black",
      fav_color2: "",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Apple",
      image_url: "https://dodo.ac/np/images/5/57/Apple_NH.png",
      species: "Hamster",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "September 24",
      sign: "Libra",
      quote: "One rotten apple spoils the barrel.",
      catchphrase: "cheekers",
      clothing: "Marble-Dots Tee",
      fav_color1: "Colorful",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Astrid",
      image_url: "https://dodo.ac/np/images/d/d5/Astrid_NH.png",
      species: "Kangaroo",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 8",
      sign: "Virgo",
      quote: "The apple doesn't fall far from the tree.",
      catchphrase: "my pet",
      clothing: "Tee Dress",
      fav_color1: "Black",
      fav_color2: "Colorful",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Audie",
      image_url: "https://dodo.ac/np/images/1/1b/Audie_NH.png",
      species: "Wolf",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "August 31",
      sign: "Virgo",
      quote: "Be the kind of person your future self won't regret having been.",
      catchphrase: "foxtrot",
      clothing: "Tropical Muumuu",
      fav_color1: "Green",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Aurora",
      image_url: "https://dodo.ac/np/images/5/59/Aurora_NH.png",
      species: "Penguin",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 27",
      sign: "Aquarius",
      quote: "Always keep your cool.",
      catchphrase: "b-b-baby",
      clothing: "Plover Cardigan",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Ava",
      image_url: "https://dodo.ac/np/images/c/cc/Ava_NH.png",
      species: "Chicken",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 28",
      sign: "Taurus",
      quote: "Early to bed, early to rise.",
      catchphrase: "beaker",
      clothing: "Checkered Jumper Dress",
      fav_color1: "Red",
      fav_color2: "Gray",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Avery",
      image_url: "https://dodo.ac/np/images/d/dd/Avery_NH.png",
      species: "Eagle",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 22",
      sign: "Pisces",
      quote: "What goes around comes around.",
      catchphrase: "skree-haw",
      clothing: "Oversized Shawl Overshirt",
      fav_color1: "Orange",
      fav_color2: "Brown",
      fav_style1: "Simple",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Axel",
      image_url: "https://dodo.ac/np/images/0/09/Axel_NH.png",
      species: "Elephant",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "March 23",
      sign: "Aries",
      quote: "Do not compare a fly with an elephant.",
      catchphrase: "WHONK",
      clothing: "Kanji Tee",
      fav_color1: "Green",
      fav_color2: "White",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Azalea",
      image_url: "https://dodo.ac/np/images/e/ef/Azalea_amiibo.png",
      species: "Rhinoceros",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 18",
      sign: "Sagittarius",
      quote: "Colorful petals, deep roots.",
      catchphrase: "merci",
      clothing: "Sleeveless Tunic",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Baabara",
      image_url: "https://dodo.ac/np/images/d/df/Baabara_NH.png",
      species: "Sheep",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 28",
      sign: "Aries",
      quote: "Don't just follow the flock.",
      catchphrase: "daahling",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Purple",
      fav_color2: "Blue",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Bam",
      image_url: "https://dodo.ac/np/images/2/2b/Bam_NH.png",
      species: "Deer",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 7",
      sign: "Scorpio",
      quote: "Get while the getting's good.",
      catchphrase: "kablang",
      clothing: "Athletic Jacket",
      fav_color1: "Green",
      fav_color2: "Brown",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Bangle",
      image_url: "https://dodo.ac/np/images/6/68/Bangle_NH.png",
      species: "Tiger",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 27",
      sign: "Virgo",
      quote: "Don't blink or you'll miss it.",
      catchphrase: "growf",
      clothing: "Tropical Muumuu",
      fav_color1: "Yellow",
      fav_color2: "Green",
      fav_style1: "Gorgeous",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Barold",
      image_url: "https://dodo.ac/np/images/9/9d/Barold_NH.png",
      species: "Cub",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 2",
      sign: "Pisces",
      quote: "Please DO feed the bears!",
      catchphrase: "cubby",
      clothing: "Animal-Stripes Tee",
      fav_color1: "Yellow",
      fav_color2: "Black",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Bea",
      image_url: "https://dodo.ac/np/images/c/c2/Bea_NH.png",
      species: "Dog",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 15",
      sign: "Libra",
      quote: "The perfect pair complements each other.",
      catchphrase: "bingo",
      clothing: "Striped Maxi Dress",
      fav_color1: "Aqua",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Beardo",
      image_url: "https://dodo.ac/np/images/c/c0/Beardo_NH.png",
      species: "Bear",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "September 27",
      sign: "Libra",
      quote: "Fashion first!",
      catchphrase: "whiskers",
      clothing: "Tweed Jacket",
      fav_color1: "Brown",
      fav_color2: "Blue",
      fav_style1: "Elegant",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Beau",
      image_url: "https://dodo.ac/np/images/d/d4/Beau_NH.png",
      species: "Deer",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 5",
      sign: "Aries",
      quote: "You snooze, you lose.",
      catchphrase: "saltlick",
      clothing: "Reindeer Sweater",
      fav_color1: "Beige",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Becky",
      image_url: "https://dodo.ac/np/images/7/74/Becky_NH.png",
      species: "Chicken",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 9",
      sign: "Sagittarius",
      quote: "A fool and his Bells are soon parted.",
      catchphrase: "chicklet",
      clothing: "Renaissance Dress",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Bella",
      image_url: "https://dodo.ac/np/images/c/c0/Bella_NH.png",
      species: "Mouse",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 28",
      sign: "Capricorn",
      quote: "A glamour shot is worth a thousand words.",
      catchphrase: "eeks",
      clothing: "Tee Dress",
      fav_color1: "Black",
      fav_color2: "Purple",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Benedict",
      image_url: "https://dodo.ac/np/images/3/3a/Benedict_NH.png",
      species: "Chicken",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 10",
      sign: "Libra",
      quote: "Don't put all your eggs in one basket.",
      catchphrase: "uh-hoo",
      clothing: "Two-Ball Tee",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Benjamin",
      image_url: "https://dodo.ac/np/images/9/97/Benjamin_NH.png",
      species: "Dog",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 3",
      sign: "Leo",
      quote: "A good dog deserves a good treat.",
      catchphrase: "alrighty",
      clothing: "Striped Shirt",
      fav_color1: "Red",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Bertha",
      image_url: "https://dodo.ac/np/images/a/a7/Bertha_NH.png",
      species: "Hippo",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 25",
      sign: "Taurus",
      quote: "The best part of spring is the picnics!",
      catchphrase: "bloop",
      clothing: "Pintuck-Pleated Dress",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Bettina",
      image_url: "https://dodo.ac/np/images/b/bd/Bettina_NH.png",
      species: "Mouse",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 12",
      sign: "Gemini",
      quote: "No time like the present!",
      catchphrase: "eekers",
      clothing: "Chef's Outfit",
      fav_color1: "White",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Bianca",
      image_url: "https://dodo.ac/np/images/6/6f/Bianca_NH.png",
      species: "Tiger",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "December 13",
      sign: "Sagittarius",
      quote: "There is such a thing as love at first sight.",
      catchphrase: "glimmer",
      clothing: "Front-Tie Button-Down Shirt",
      fav_color1: "Pink",
      fav_color2: "Orange",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Biff",
      image_url: "https://dodo.ac/np/images/9/9c/Biff_NH.png",
      species: "Hippo",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "March 29",
      sign: "Aries",
      quote: "Eighth place is just the seventh loser.",
      catchphrase: "squirt",
      clothing: "Gold-Print Tee",
      fav_color1: "Black",
      fav_color2: "Blue",
      fav_style1: "Gorgeous",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Big Top",
      image_url: "https://dodo.ac/np/images/8/80/Big_Top_NH.png",
      species: "Elephant",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 3",
      sign: "Libra",
      quote: "A big nose never spoiled a handsome face.",
      catchphrase: "villain",
      clothing: "No. 3 Shirt",
      fav_color1: "Green",
      fav_color2: "",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Bill",
      image_url: "https://dodo.ac/np/images/c/c1/Bill_NH.png",
      species: "Duck",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "February 1",
      sign: "Aquarius",
      quote: "Even though there's no 'I' in team, there is a 'me'!",
      catchphrase: "quacko",
      clothing: "Basketball Tank",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Active",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Billy",
      image_url: "https://dodo.ac/np/images/2/26/Billy_NH.png",
      species: "Goat",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 25",
      sign: "Aries",
      quote: "Old dogs can learn new tricks.",
      catchphrase: "dagnaabit",
      clothing: "Hanten Jacket",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Biskit",
      image_url: "https://dodo.ac/np/images/7/78/Biskit_NH.png",
      species: "Dog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 13",
      sign: "Taurus",
      quote: "Let sleeping dogs lie.",
      catchphrase: "dawg",
      clothing: "Meme Shirt",
      fav_color1: "Purple",
      fav_color2: "Colorful",
      fav_style1: "Gorgeous",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Bitty",
      image_url: "https://dodo.ac/np/images/7/74/Bitty_NH.png",
      species: "Hippo",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 6",
      sign: "Libra",
      quote: "Necessity is the mother of all invention.",
      catchphrase: "my dear",
      clothing: "Frilly Dress",
      fav_color1: "Pink",
      fav_color2: "Orange",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Blaire",
      image_url: "https://dodo.ac/np/images/7/73/Blaire_NH.png",
      species: "Squirrel",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 3",
      sign: "Cancer",
      quote: "Practice makes perfect.",
      catchphrase: "nutlet",
      clothing: "Layered Tank Dress",
      fav_color1: "Orange",
      fav_color2: "Brown",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Blanche",
      image_url: "https://dodo.ac/np/images/d/df/Blanche_NH.png",
      species: "Ostrich",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "December 21",
      sign: "Sagittarius",
      quote: "Nothing beats personal experience.",
      catchphrase: "quite so",
      clothing: "Butterfly Visiting Kimono",
      fav_color1: "Black",
      fav_color2: "Brown",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Bluebear",
      image_url: "https://dodo.ac/np/images/4/49/Bluebear_NH.png",
      species: "Cub",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 24",
      sign: "Cancer",
      quote: "Candy makes the world go 'round.",
      catchphrase: "peach",
      clothing: "Aran-Knit Sweater",
      fav_color1: "White",
      fav_color2: "Blue",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Bob",
      image_url: "https://dodo.ac/np/images/e/ea/Bob_NH.png",
      species: "Cat",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 1",
      sign: "Capricorn",
      quote: "You only live once...or nine times.",
      catchphrase: "pthhpth",
      clothing: "Blossom Tee",
      fav_color1: "Colorful",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Bonbon",
      image_url: "https://dodo.ac/np/images/c/cc/Bonbon_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 3",
      sign: "Pisces",
      quote: "Hindsight is always 20/20.",
      catchphrase: "deelish",
      clothing: "Sleeveless Tunic",
      fav_color1: "Aqua",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Bones",
      image_url: "https://dodo.ac/np/images/2/2b/Bones_NH.png",
      species: "Dog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 4",
      sign: "Leo",
      quote: "A snack a day keeps the vacuum away.",
      catchphrase: "yip yip",
      clothing: "Printed Fleece Sweater",
      fav_color1: "Beige",
      fav_color2: "Brown",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Boomer",
      image_url: "https://dodo.ac/np/images/7/7d/Boomer_NH.png",
      species: "Penguin",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 7",
      sign: "Aquarius",
      quote: "Flying is believing.",
      catchphrase: "human",
      clothing: "Flight Jacket",
      fav_color1: "Brown",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Boone",
      image_url: "https://dodo.ac/np/images/1/19/Boone_NH.png",
      species: "Gorilla",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 12",
      sign: "Virgo",
      quote: "Never settle for second best.",
      catchphrase: "baboom",
      clothing: "Cycling Shirt",
      fav_color1: "Colorful",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Boots",
      image_url: "https://dodo.ac/np/images/3/3e/Boots_NH.png",
      species: "Alligator",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 7",
      sign: "Leo",
      quote: "Strength lies in muscles.",
      catchphrase: "munchie",
      clothing: "Jester Costume",
      fav_color1: "Colorful",
      fav_color2: "Purple",
      fav_style1: "Gorgeous",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Boris",
      image_url: "https://dodo.ac/np/images/e/ef/Boris_NH.png",
      species: "Pig",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 6",
      sign: "Scorpio",
      quote: "Life's short. Eat chocolate.",
      catchphrase: "schnort",
      clothing: "Desert Outfit",
      fav_color1: "Purple",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Boyd",
      image_url: "https://dodo.ac/np/images/2/21/Boyd_NH.png",
      species: "Gorilla",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 1",
      sign: "Libra",
      quote: "There's always time to take a second look.",
      catchphrase: "uh-oh",
      clothing: "Three-Ball Tee",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Bree",
      image_url: "https://dodo.ac/np/images/1/12/Bree_NH.png",
      species: "Mouse",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 7",
      sign: "Cancer",
      quote: "The gift says more about the giver.",
      catchphrase: "cheeseball",
      clothing: "Sweetheart Dress",
      fav_color1: "Black",
      fav_color2: "Blue",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Broccolo",
      image_url: "https://dodo.ac/np/images/6/69/Broccolo_NH.png",
      species: "Mouse",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 30",
      sign: "Cancer",
      quote: "One nap leads to another.",
      catchphrase: "eat it",
      clothing: "Raglan Shirt",
      fav_color1: "Colorful",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Broffina",
      image_url: "https://dodo.ac/np/images/7/7a/Broffina_NH.png",
      species: "Chicken",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 24",
      sign: "Scorpio",
      quote: "Don't peck the hand that feeds you.",
      catchphrase: "cluckadoo",
      clothing: "Rumba Dress",
      fav_color1: "Black",
      fav_color2: "Red",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Bruce",
      image_url: "https://dodo.ac/np/images/0/08/Bruce_NH.png",
      species: "Deer",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 26",
      sign: "Gemini",
      quote: "Nobody's perfect.",
      catchphrase: "gruff",
      clothing: "After-School Jacket",
      fav_color1: "Black",
      fav_color2: "Red",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Bubbles",
      image_url: "https://dodo.ac/np/images/0/0e/Bubbles_NH.png",
      species: "Hippo",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 18",
      sign: "Virgo",
      quote: "It's best to keep your lips and purse sealed.",
      catchphrase: "hipster",
      clothing: "Grape Dress",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Active",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Buck",
      image_url: "https://dodo.ac/np/images/7/7f/Buck_NH.png",
      species: "Horse",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "April 4",
      sign: "Aries",
      quote: "Keep your eyes on the prize.",
      catchphrase: "pardner",
      clothing: "Sweatshirt",
      fav_color1: "Gray",
      fav_color2: "Brown",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Bud",
      image_url: "https://dodo.ac/np/images/1/1f/Bud_NH.png",
      species: "Lion",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 8",
      sign: "Leo",
      quote: "You're not living unless you're sweating!",
      catchphrase: "shredded",
      clothing: "Pineapple Aloha Shirt",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Bunnie",
      image_url: "https://dodo.ac/np/images/b/b2/Bunnie_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 9",
      sign: "Taurus",
      quote: "Hare today, gone tomorrow.",
      catchphrase: "tee-hee",
      clothing: "Lively Plaid Dress",
      fav_color1: "Green",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Butch",
      image_url: "https://dodo.ac/np/images/2/2b/Butch_NH.png",
      species: "Dog",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 1",
      sign: "Scorpio",
      quote: "A house without either a cat or a dog is a sad house indeed.",
      catchphrase: "ROOOOOWF",
      clothing: "Argyle Vest",
      fav_color1: "Blue",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Buzz",
      image_url: "https://dodo.ac/np/images/0/05/Buzz_NH.png",
      species: "Eagle",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 7",
      sign: "Sagittarius",
      quote: "Pride'll put you in a pickle.",
      catchphrase: "captain",
      clothing: "Nine-Ball Tee",
      fav_color1: "Yellow",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cally",
      image_url: "https://dodo.ac/np/images/a/a6/Cally_NH.png",
      species: "Squirrel",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 4",
      sign: "Virgo",
      quote: "It's always teatime somewhere.",
      catchphrase: "WHEE",
      clothing: "Fairy-Tale Dress",
      fav_color1: "Red",
      fav_color2: "Green",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Camofrog",
      image_url: "https://dodo.ac/np/images/e/e1/Camofrog_NH.png",
      species: "Frog",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 5",
      sign: "Gemini",
      quote: "What you can't see can't hurt you.",
      catchphrase: "ten-hut",
      clothing: "MVP Tee",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Canberra",
      image_url: "https://dodo.ac/np/images/e/e6/Canberra_NH.png",
      species: "Koala",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 14",
      sign: "Taurus",
      quote: "It's never too late to start over.",
      catchphrase: "nuh uh",
      clothing: "Striped Tank",
      fav_color1: "Green",
      fav_color2: "Aqua",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Candi",
      image_url: "https://dodo.ac/np/images/5/57/Candi_NH.png",
      species: "Mouse",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 13",
      sign: "Aries",
      quote: "The players may change, but the music stays the same.",
      catchphrase: "sweetie",
      clothing: "Bohemian Tunic Dress",
      fav_color1: "Aqua",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Carmen",
      image_url: "https://dodo.ac/np/images/e/eb/Carmen_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 6",
      sign: "Capricorn",
      quote: "Absence makes the heart grow fonder.",
      catchphrase: "nougat",
      clothing: "Plaid-Print Dress",
      fav_color1: "Green",
      fav_color2: "Beige",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Caroline",
      image_url: "https://dodo.ac/np/images/2/26/Caroline_NH.png",
      species: "Squirrel",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 15",
      sign: "Cancer",
      quote: "New brooms sweep clean.",
      catchphrase: "hulaaaa",
      clothing: "Striped Maxi Dress",
      fav_color1: "Colorful",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Carrie",
      image_url: "https://dodo.ac/np/images/6/6a/Carrie_NH.png",
      species: "Kangaroo",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "December 5",
      sign: "Sagittarius",
      quote: "A mother's work is never done.",
      catchphrase: "little one",
      clothing: "Simple-Dots Dress",
      fav_color1: "Red",
      fav_color2: "Colorful",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cashmere",
      image_url: "https://dodo.ac/np/images/e/eb/Cashmere_NH.png",
      species: "Sheep",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 2",
      sign: "Aries",
      quote: "100% Wool.",
      catchphrase: "baaaby",
      clothing: "Sleeveless Tunic",
      fav_color1: "Purple",
      fav_color2: "Beige",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Celia",
      image_url: "https://dodo.ac/np/images/0/00/Celia_NH.png",
      species: "Eagle",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 25",
      sign: "Aries",
      quote: "It's the thought that counts.",
      catchphrase: "feathers",
      clothing: "Alpinist Dress",
      fav_color1: "Pink",
      fav_color2: "Green",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cephalobot",
      image_url: "https://dodo.ac/np/images/b/b5/Cephalobot_amiibo.png",
      species: "Octopus",
      personality: "Smug",
      sub_personality: "B",
      gender: "Male",
      birthday: "April 1",
      sign: "Aries",
      quote: "Take me to your pizza.",
      catchphrase: "donk donk",
      clothing: "Retro Sweater",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Cesar",
      image_url: "https://dodo.ac/np/images/2/23/Cesar_NH.png",
      species: "Gorilla",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 6",
      sign: "Virgo",
      quote: "As soon as you can grow a mustache, do it.",
      catchphrase: "highness",
      clothing: "A Tee",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Chabwick",
      image_url: "https://dodo.ac/np/images/6/60/Chabwick_amiibo.png",
      species: "Penguin",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 24",
      sign: "Capricorn",
      quote: "Live, laugh, lasagna.",
      catchphrase: "blargh",
      clothing: "Nine-Ball Tee",
      fav_color1: "Yellow",
      fav_color2: "Gray",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Chadder",
      image_url: "https://dodo.ac/np/images/3/32/Chadder_NH.png",
      species: "Mouse",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 15",
      sign: "Sagittarius",
      quote: "Meeting is just the start of us saying goodbye.",
      catchphrase: "fromage",
      clothing: "Tailcoat",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Chai",
      image_url: "",
      species: "Elephant",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 6",
      sign: "Pisces",
      quote: "He who chases two rabbits catches none.",
      catchphrase: "flap flap",
      clothing: "Cinnamoroll Puffy Blouse",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Charlise",
      image_url: "https://dodo.ac/np/images/a/ac/Charlise_NH.png",
      species: "Bear",
      personality: "Big sister",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 17",
      sign: "Aries",
      quote: "Actions speak louder than words.",
      catchphrase: "urgh",
      clothing: "Athletic Jacket",
      fav_color1: "Red",
      fav_color2: "Orange",
      fav_style1: "Active",
      fav_style2: "Cute",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Chelsea",
      image_url: "",
      species: "Deer",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 18",
      sign: "Capricorn",
      quote: "Always look a gift horse in the mouth.",
      catchphrase: "pound cake",
      clothing: "My Melody Shirt",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Cheri",
      image_url: "https://dodo.ac/np/images/d/d5/Cheri_NH.png",
      species: "Cub",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 17",
      sign: "Pisces",
      quote: "Good things come in small packages.",
      catchphrase: "tralala",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Yellow",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Cherry",
      image_url: "https://dodo.ac/np/images/3/3e/Cherry_NH.png",
      species: "Dog",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 11",
      sign: "Taurus",
      quote: "One dog barks at something, the rest bark at him.",
      catchphrase: "what what",
      clothing: "Spider-Web Tee",
      fav_color1: "Black",
      fav_color2: "Purple",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Chester",
      image_url: "https://dodo.ac/np/images/a/af/Chester_NH.png",
      species: "Cub",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 6",
      sign: "Leo",
      quote: "Sleep early. Wake late.",
      catchphrase: "rookie",
      clothing: "Dragon Suit",
      fav_color1: "Yellow",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Chevre",
      image_url: "https://dodo.ac/np/images/c/c9/Chevre_NH.png",
      species: "Goat",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 6",
      sign: "Pisces",
      quote: "If you're gonna dream, dream big.",
      catchphrase: "la baa",
      clothing: "Poncho Coat",
      fav_color1: "Red",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Chief",
      image_url: "https://dodo.ac/np/images/1/13/Chief_NH.png",
      species: "Wolf",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 19",
      sign: "Sagittarius",
      quote: "Don't wish it were easier; wish you were better.",
      catchphrase: "harrumph",
      clothing: "Sweater on Shirt",
      fav_color1: "White",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Chops",
      image_url: "https://dodo.ac/np/images/3/32/Chops_NH.png",
      species: "Pig",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 13",
      sign: "Libra",
      quote: "You can't have your cake and eat it too.",
      catchphrase: "zoink",
      clothing: "Military Uniform",
      fav_color1: "Red",
      fav_color2: "Green",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Chow",
      image_url: "https://dodo.ac/np/images/d/d1/Chow_NH.png",
      species: "Bear",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 22",
      sign: "Cancer",
      quote: "All good things must come to an end.",
      catchphrase: "aiya",
      clothing: "Gold-Print Tee",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Chrissy",
      image_url: "https://dodo.ac/np/images/6/6a/Chrissy_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 28",
      sign: "Virgo",
      quote: "A fool and their Bells are soon parted.",
      catchphrase: "sparkles",
      clothing: "Marble-Dots Dress",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Claude",
      image_url: "https://dodo.ac/np/images/1/1f/Claude_NH.png",
      species: "Rabbit",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 3",
      sign: "Sagittarius",
      quote: "Don't judge a rabbit by its ears.",
      catchphrase: "hopalong",
      clothing: "Marble-Dots Tee",
      fav_color1: "Black",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Claudia",
      image_url: "https://dodo.ac/np/images/d/d6/Claudia_NH.png",
      species: "Tiger",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "November 22",
      sign: "Scorpio",
      quote: "A tiger can't change its stripes.",
      catchphrase: "ooh la la",
      clothing: "Lacy Dress",
      fav_color1: "Purple",
      fav_color2: "White",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Clay",
      image_url: "https://dodo.ac/np/images/6/6c/Clay_NH.png",
      species: "Hamster",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 19",
      sign: "Libra",
      quote: "Life is just a bowl of cherries.",
      catchphrase: "thump",
      clothing: "Poncho-Style Sweater",
      fav_color1: "Beige",
      fav_color2: "Brown",
      fav_style1: "Elegant",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cleo",
      image_url: "https://dodo.ac/np/images/e/e9/Cleo_NH.png",
      species: "Horse",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 9",
      sign: "Aquarius",
      quote: "There's something lovable in all of us.",
      catchphrase: "sugar",
      clothing: "Floral Lace Dress",
      fav_color1: "Aqua",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Clyde",
      image_url: "https://dodo.ac/np/images/b/bb/Clyde_NH.png",
      species: "Horse",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 1",
      sign: "Taurus",
      quote: "The grass is always greener.",
      catchphrase: "clip clawp",
      clothing: "Madras Plaid Shirt",
      fav_color1: "Green",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Coach",
      image_url: "https://dodo.ac/np/images/c/c1/Coach_NH.png",
      species: "Bull",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 29",
      sign: "Taurus",
      quote: "Fool me once, shame on you. Fool me twice, shame on me.",
      catchphrase: "stubble",
      clothing: "Relay Tank",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Active",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Cobb",
      image_url: "https://dodo.ac/np/images/9/9d/Cobb_NH.png",
      species: "Pig",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 7",
      sign: "Libra",
      quote: "Might makes right.",
      catchphrase: "hot dog",
      clothing: "Flannel Shirt",
      fav_color1: "White",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Coco",
      image_url: "https://dodo.ac/np/images/8/83/Coco_NH.png",
      species: "Rabbit",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 1",
      sign: "Pisces",
      quote: "Don't put off till tomorrow what you can do today.",
      catchphrase: "doyoing",
      clothing: "Layered Tank Dress",
      fav_color1: "Beige",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Cole",
      image_url: "https://dodo.ac/np/images/f/f6/Cole_NH.png",
      species: "Rabbit",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 10",
      sign: "Leo",
      quote: "Little pitchers have big ears.",
      catchphrase: "coooooool",
      clothing: "Orange Dress",
      fav_color1: "Orange",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Colton",
      image_url: "https://dodo.ac/np/images/8/8c/Colton_NH.png",
      species: "Horse",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 22",
      sign: "Gemini",
      quote: "Make hay while the sun shines.",
      catchphrase: "check it",
      clothing: "Prince's Tunic",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cookie",
      image_url: "https://dodo.ac/np/images/d/d9/Cookie_NH.png",
      species: "Dog",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 18",
      sign: "Gemini",
      quote: "Don't lose sight of what you're really after.",
      catchphrase: "arfer",
      clothing: "Retro Dress",
      fav_color1: "Green",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Cousteau",
      image_url: "https://dodo.ac/np/images/1/1c/Cousteau_NH.png",
      species: "Frog",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 17",
      sign: "Sagittarius",
      quote: "Jump first, ask questions later.",
      catchphrase: "oui oui",
      clothing: "Silk Shirt",
      fav_color1: "Green",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Cranston",
      image_url: "https://dodo.ac/np/images/b/b7/Cranston_NH.png",
      species: "Ostrich",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "September 23",
      sign: "Libra",
      quote: "Hard work beats talent.",
      catchphrase: "sweatband",
      clothing: "Oversized Shawl Overshirt",
      fav_color1: "Beige",
      fav_color2: "Brown",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Croque",
      image_url: "https://dodo.ac/np/images/7/70/Croque_NH.png",
      species: "Frog",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 18",
      sign: "Cancer",
      quote: "Where there's smoke, there's fire.",
      catchphrase: "as if",
      clothing: "Silk Shirt",
      fav_color1: "Red",
      fav_color2: "Orange",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cube",
      image_url: "https://dodo.ac/np/images/1/10/Cube_NH.png",
      species: "Penguin",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 29",
      sign: "Aquarius",
      quote: "Sometimes you gotta learn to chill.",
      catchphrase: "brainfreeze",
      clothing: "Simple-Dots Tee",
      fav_color1: "Yellow",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Curlos",
      image_url: "https://dodo.ac/np/images/3/37/Curlos_NH.png",
      species: "Sheep",
      personality: "Smug",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 8",
      sign: "Taurus",
      quote: "If you want to know yourself better, ask your neighbors.",
      catchphrase: "shearly",
      clothing: "Zigzag Shirt",
      fav_color1: "Red",
      fav_color2: "Green",
      fav_style1: "Active",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Curly",
      image_url: "https://dodo.ac/np/images/3/3d/Curly_NH.png",
      species: "Pig",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 26",
      sign: "Leo",
      quote: "Get fired up!",
      catchphrase: "nyoink",
      clothing: "Energetic Sweater",
      fav_color1: "Yellow",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Curt",
      image_url: "https://dodo.ac/np/images/2/27/Curt_NH.png",
      species: "Bear",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 1",
      sign: "Cancer",
      quote: "A Bell saved is a Bell earned.",
      catchphrase: "fuzzball",
      clothing: "MVP Tee",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Cyd",
      image_url: "https://dodo.ac/np/images/5/5d/Cyd_NH.png",
      species: "Elephant",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 9",
      sign: "Gemini",
      quote: "Do what you want, but do it loud!",
      catchphrase: "rockin'",
      clothing: "Dragon Jacket",
      fav_color1: "Black",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Cyrano",
      image_url: "https://dodo.ac/np/images/4/48/Cyrano_NH.png",
      species: "Anteater",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "March 9",
      sign: "Pisces",
      quote: "Don't punch your nose to spite your face.",
      catchphrase: "ah-CHOO",
      clothing: "Judogi",
      fav_color1: "Yellow",
      fav_color2: "Beige",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Daisy",
      image_url: "https://dodo.ac/np/images/9/96/Daisy_NH.png",
      species: "Dog",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 16",
      sign: "Scorpio",
      quote: "It's not always a dog-eat-dog world.",
      catchphrase: "bow-WOW",
      clothing: "Colorful Striped Sweater",
      fav_color1: "Colorful",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Deena",
      image_url: "https://dodo.ac/np/images/b/b8/Deena_NH.png",
      species: "Duck",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 27",
      sign: "Cancer",
      quote: "Duck...duck...GOOSE!",
      catchphrase: "woowoo",
      clothing: "Overall Dress",
      fav_color1: "Colorful",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Deirdre",
      image_url: "https://dodo.ac/np/images/3/3c/Deirdre_NH.png",
      species: "Deer",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 4",
      sign: "Taurus",
      quote: "Legs of an antelope, heart of an eagle.",
      catchphrase: "whatevs",
      clothing: "Flower Sweater",
      fav_color1: "Orange",
      fav_color2: "",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Del",
      image_url: "https://dodo.ac/np/images/4/46/Del_NH.png",
      species: "Alligator",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 27",
      sign: "Gemini",
      quote: "The hero is brave in deeds as well as words.",
      catchphrase: "gronk",
      clothing: "Striped Shirt",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Deli",
      image_url: "https://dodo.ac/np/images/3/30/Deli_NH.png",
      species: "Monkey",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 24",
      sign: "Gemini",
      quote: "Righty tighty, lefty loosey.",
      catchphrase: "monch",
      clothing: "Argyle Vest",
      fav_color1: "Purple",
      fav_color2: "Brown",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Derwin",
      image_url: "https://dodo.ac/np/images/9/98/Derwin_NH.png",
      species: "Duck",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 25",
      sign: "Gemini",
      quote: "Everything in moderation. Except for snacks.",
      catchphrase: "derrrr",
      clothing: "Striped Tank",
      fav_color1: "Yellow",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Diana",
      image_url: "https://dodo.ac/np/images/1/1f/Diana_NH.png",
      species: "Deer",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 4",
      sign: "Capricorn",
      quote: "Sometimes you have to lose to win.",
      catchphrase: "no doy",
      clothing: "Mysterious Dress",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Diva",
      image_url: "https://dodo.ac/np/images/4/44/Diva_NH.png",
      species: "Frog",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 2",
      sign: "Libra",
      quote: "Eyes are the windows to the soul.",
      catchphrase: "ya know",
      clothing: "Palatial Tank Dress",
      fav_color1: "Purple",
      fav_color2: "Aqua",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Dizzy",
      image_url: "https://dodo.ac/np/images/6/63/Dizzy_NH.png",
      species: "Elephant",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 14",
      sign: "Cancer",
      quote: "Keep it mellow.",
      catchphrase: "woo-oo",
      clothing: "Bone Tee",
      fav_color1: "Yellow",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Dobie",
      image_url: "https://dodo.ac/np/images/7/76/Dobie_NH.png",
      species: "Wolf",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "February 17",
      sign: "Aquarius",
      quote: "Old longings never truly fade.",
      catchphrase: "ohmmm",
      clothing: "Fuzzy Vest",
      fav_color1: "Brown",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Doc",
      image_url: "https://dodo.ac/np/images/c/cd/Doc_NH.png",
      species: "Rabbit",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "March 16",
      sign: "Pisces",
      quote: "One cannot live on carrots alone.",
      catchphrase: "old bunny",
      clothing: "Flannel Shirt",
      fav_color1: "Gray",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Dom",
      image_url: "https://dodo.ac/np/images/7/75/Dom_NH.png",
      species: "Sheep",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 18",
      sign: "Pisces",
      quote: "Be true to your most shiny self.",
      catchphrase: "indeedaroo",
      clothing: "Tie-Dye Shirt",
      fav_color1: "Red",
      fav_color2: "Colorful",
      fav_style1: "Active",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Dora",
      image_url: "https://dodo.ac/np/images/d/de/Dora_NH.png",
      species: "Mouse",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 18",
      sign: "Aquarius",
      quote: "The squeaky wheel gets the cheese.",
      catchphrase: "squeaky",
      clothing: "Sea Hanten Shirt",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Dotty",
      image_url: "https://dodo.ac/np/images/c/cc/Dotty_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 14",
      sign: "Pisces",
      quote: "It's always a good hare day.",
      catchphrase: "wee one",
      clothing: "Sleeveless Tunic",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Drago",
      image_url: "https://dodo.ac/np/images/f/f9/Drago_NH.png",
      species: "Alligator",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "February 12",
      sign: "Aquarius",
      quote: "There is no room for two dragons in one pond.",
      catchphrase: "burrrn",
      clothing: "Dragon Suit",
      fav_color1: "Orange",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Drake",
      image_url: "https://dodo.ac/np/images/e/e0/Drake_NH.png",
      species: "Duck",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 25",
      sign: "Cancer",
      quote: "...Quack.",
      catchphrase: "quacko",
      clothing: "Yodel Sweater",
      fav_color1: "Brown",
      fav_color2: "Red",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Drift",
      image_url: "https://dodo.ac/np/images/a/ac/Drift_NH.png",
      species: "Frog",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 9",
      sign: "Libra",
      quote: "Always go for the gold!",
      catchphrase: "dribbit",
      clothing: "Six-Ball Tee",
      fav_color1: "Orange",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Ed",
      image_url: "https://dodo.ac/np/images/c/c9/Ed_NH.png",
      species: "Horse",
      personality: "Smug",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 16",
      sign: "Virgo",
      quote: "Beauty is pretty!",
      catchphrase: "greenhorn",
      clothing: "Collarless Shirt",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Egbert",
      image_url: "https://dodo.ac/np/images/3/3f/Egbert_NH.png",
      species: "Chicken",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 14",
      sign: "Libra",
      quote: "You gotta break a few eggs to make an omelet.",
      catchphrase: "doodle-duh",
      clothing: "Folk Shirt",
      fav_color1: "Beige",
      fav_color2: "Brown",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Elise",
      image_url: "https://dodo.ac/np/images/0/0c/Elise_NH.png",
      species: "Monkey",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 21",
      sign: "Aries",
      quote: "Do as I say, not as I do.",
      catchphrase: "puh-lease",
      clothing: "Elegant Dress",
      fav_color1: "Purple",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Ellie",
      image_url: "https://dodo.ac/np/images/3/38/Ellie_NH.png",
      species: "Elephant",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 12",
      sign: "Taurus",
      quote: "You need the sour to highlight the sweet.",
      catchphrase: "li'l one",
      clothing: "Aran-Knit Sweater",
      fav_color1: "Gray",
      fav_color2: "Pink",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Elmer",
      image_url: "https://dodo.ac/np/images/6/60/Elmer_NH.png",
      species: "Horse",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 5",
      sign: "Libra",
      quote: "The horse doesn't pull the cart, the oats do.",
      catchphrase: "tenderfoot",
      clothing: "Boa Fleece",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Eloise",
      image_url: "https://dodo.ac/np/images/b/b1/Eloise_NH.png",
      species: "Elephant",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 8",
      sign: "Sagittarius",
      quote: "An elephant never forgets.",
      catchphrase: "tooooot",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Green",
      fav_color2: "Orange",
      fav_style1: "Elegant",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Elvis",
      image_url: "https://dodo.ac/np/images/c/cc/Elvis_NH.png",
      species: "Lion",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 23",
      sign: "Leo",
      quote: "Better a live coward than a forgotten hero.",
      catchphrase: "unh-hunh",
      clothing: "Royal Shirt",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Erik",
      image_url: "https://dodo.ac/np/images/8/88/Erik_NH.png",
      species: "Deer",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 27",
      sign: "Leo",
      quote: "If you're afraid of wolves, don't go to the woods.",
      catchphrase: "chow down",
      clothing: "Yodel Sweater",
      fav_color1: "Beige",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Étoile",
      image_url: "",
      species: "Sheep",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "December 25",
      sign: "Capricorn",
      quote: "Who knows what the stars have in store for us?",
      catchphrase: "fuzzy",
      clothing: "Kiki &amp; Lala Tee",
      fav_color1: "Aqua",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Eugene",
      image_url: "https://dodo.ac/np/images/a/ab/Eugene_NH.png",
      species: "Koala",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 26",
      sign: "Scorpio",
      quote: "Imitation is the sincerest form of flattery.",
      catchphrase: "yeah buddy",
      clothing: "Biker Jacket",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Eunice",
      image_url: "https://dodo.ac/np/images/9/97/Eunice_NH.png",
      species: "Sheep",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 3",
      sign: "Aries",
      quote: "There is a point to every encounter.",
      catchphrase: "lambchop",
      clothing: "Aran-Knit Cardigan",
      fav_color1: "Beige",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Faith",
      image_url: "https://dodo.ac/np/images/5/58/Faith_amiibo.png",
      species: "Koala",
      personality: "Big sister",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 21",
      sign: "Aries",
      quote: "Never let your mind be what holds you back.",
      catchphrase: "aloha",
      clothing: "Hula Top",
      fav_color1: "Red",
      fav_color2: "White",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Fang",
      image_url: "https://dodo.ac/np/images/9/9d/Fang_NH.png",
      species: "Wolf",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 18",
      sign: "Sagittarius",
      quote: "You mess with the wolf, you get the fangs.",
      catchphrase: "cha-chomp",
      clothing: "Snowy Sweater",
      fav_color1: "White",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Fauna",
      image_url: "https://dodo.ac/np/images/9/91/Fauna_NH.png",
      species: "Deer",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 26",
      sign: "Aries",
      quote: "The first step is always the hardest.",
      catchphrase: "dearie",
      clothing: "Bohemian Tunic Dress",
      fav_color1: "Beige",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Felicity",
      image_url: "https://dodo.ac/np/images/c/c7/Felicity_NH.png",
      species: "Cat",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 30",
      sign: "Aries",
      quote: "Love has no bounds.",
      catchphrase: "mimimi",
      clothing: "Tweed Dress",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Filbert",
      image_url: "https://dodo.ac/np/images/8/81/Filbert_NH.png",
      species: "Squirrel",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 3",
      sign: "Gemini",
      quote: "Don't go nuts or anything.",
      catchphrase: "bucko",
      clothing: "Tree Sweater",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Flip",
      image_url: "https://dodo.ac/np/images/c/c3/Flip_NH.png",
      species: "Monkey",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 21",
      sign: "Scorpio",
      quote: "See no donut, hear no donut, speak no donut.",
      catchphrase: "rerack",
      clothing: "Muscle Tank",
      fav_color1: "Blue",
      fav_color2: "Yellow",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Flo",
      image_url: "https://dodo.ac/np/images/b/bb/Flo_NH.png",
      species: "Penguin",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "September 2",
      sign: "Virgo",
      quote: "Always keep a straight face.",
      catchphrase: "cha",
      clothing: "Folk Shirt",
      fav_color1: "Red",
      fav_color2: "Purple",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Flora",
      image_url: "https://dodo.ac/np/images/8/8e/Flora_NH.png",
      species: "Ostrich",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 9",
      sign: "Aquarius",
      quote: "Pink is the new black.",
      catchphrase: "pinky",
      clothing: "Gumdrop Dress",
      fav_color1: "Colorful",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Flurry",
      image_url: "https://dodo.ac/np/images/0/03/Flurry_NH.png",
      species: "Hamster",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 30",
      sign: "Aquarius",
      quote: "Squeak your mind, even if your voice shakes.",
      catchphrase: "powderpuff",
      clothing: "Flower Sweater",
      fav_color1: "Red",
      fav_color2: "Pink",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Francine",
      image_url: "https://dodo.ac/np/images/3/34/Francine_NH.png",
      species: "Rabbit",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 22",
      sign: "Aquarius",
      quote: "You can't have wise folks if you don't have fools too.",
      catchphrase: "karat",
      clothing: "Marble-Dots Dress",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Frank",
      image_url: "https://dodo.ac/np/images/7/75/Frank_NH.png",
      species: "Eagle",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 30",
      sign: "Leo",
      quote: "Today is the last day of the rest of your life.",
      catchphrase: "crushy",
      clothing: "Letter Jacket",
      fav_color1: "Brown",
      fav_color2: "Yellow",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Freckles",
      image_url: "https://dodo.ac/np/images/7/7d/Freckles_NH.png",
      species: "Duck",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 19",
      sign: "Pisces",
      quote: "Act now before you change your mind!",
      catchphrase: "ducky",
      clothing: "Flower-Print Dress",
      fav_color1: "Green",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Frett",
      image_url: "https://dodo.ac/np/images/b/b3/Frett_amiibo.png",
      species: "Dog",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 30",
      sign: "Scorpio",
      quote: "I'm in the prime of my life.",
      catchphrase: "goshers",
      clothing: "Gingham Picnic Shirt",
      fav_color1: "Gray",
      fav_color2: "Brown",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Freya",
      image_url: "https://dodo.ac/np/images/e/ee/Freya_NH.png",
      species: "Wolf",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 14",
      sign: "Sagittarius",
      quote: "Don't stray too far from the pack.",
      catchphrase: "uff da",
      clothing: "Reindeer Sweater",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Friga",
      image_url: "https://dodo.ac/np/images/8/8c/Friga_NH.png",
      species: "Penguin",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "October 16",
      sign: "Libra",
      quote: "You can't learn a life lesson from a fortune cookie.",
      catchphrase: "brrrmph",
      clothing: "Simple Checkered Dress",
      fav_color1: "Pink",
      fav_color2: "Black",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Frita",
      image_url: "https://dodo.ac/np/images/d/d5/Frita_NH.png",
      species: "Sheep",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "July 16",
      sign: "Cancer",
      quote: "Don't sweat the small potatoes.",
      catchphrase: "oh ewe",
      clothing: "Hot-Dog Costume",
      fav_color1: "Yellow",
      fav_color2: "Red",
      fav_style1: "Active",
      fav_style2: "Cute",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Frobert",
      image_url: "https://dodo.ac/np/images/3/3b/Frobert_NH.png",
      species: "Frog",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 8",
      sign: "Aquarius",
      quote: "Always aim high!",
      catchphrase: "fribbit",
      clothing: "Striped Tee",
      fav_color1: "Blue",
      fav_color2: "Colorful",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Fuchsia",
      image_url: "https://dodo.ac/np/images/6/67/Fuchsia_NH.png",
      species: "Deer",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "September 19",
      sign: "Virgo",
      quote: "It takes one to know one.",
      catchphrase: "precious",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Pink",
      fav_color2: "",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Gabi",
      image_url: "https://dodo.ac/np/images/8/86/Gabi_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 16",
      sign: "Sagittarius",
      quote: "The more the merrier.",
      catchphrase: "honeybun",
      clothing: "Gingham Picnic Shirt",
      fav_color1: "Brown",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Gala",
      image_url: "https://dodo.ac/np/images/e/e6/Gala_NH.png",
      species: "Pig",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 5",
      sign: "Pisces",
      quote: "Still waters run deep.",
      catchphrase: "snortie",
      clothing: "Flower-Print Dress",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Gaston",
      image_url: "https://dodo.ac/np/images/5/59/Gaston_NH.png",
      species: "Rabbit",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 28",
      sign: "Scorpio",
      quote: "An ear for an ear makes it hard to hear.",
      catchphrase: "mon chou",
      clothing: "Color-Block Dress Shirt",
      fav_color1: "Brown",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Gayle",
      image_url: "https://dodo.ac/np/images/5/5e/Gayle_NH.png",
      species: "Alligator",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 17",
      sign: "Taurus",
      quote: "An ounce of prevention is worth a pound of cure.",
      catchphrase: "snacky",
      clothing: "Lace-Up Dress",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Genji",
      image_url: "https://dodo.ac/np/images/6/67/Genji_NH.png",
      species: "Rabbit",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 21",
      sign: "Aquarius",
      quote: "Fall down seven times, get up eight.",
      catchphrase: "mochi",
      clothing: "Misty Tee",
      fav_color1: "Green",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Gigi",
      image_url: "https://dodo.ac/np/images/8/86/Gigi_NH.png",
      species: "Frog",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 11",
      sign: "Leo",
      quote: "Look at the world through rose-colored glasses.",
      catchphrase: "ribbette",
      clothing: "Full-Length Dress with Pearls",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Gladys",
      image_url: "https://dodo.ac/np/images/3/35/Gladys_NH.png",
      species: "Ostrich",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 15",
      sign: "Capricorn",
      quote: "Smiles are free.",
      catchphrase: "stretch",
      clothing: "Misty Tee",
      fav_color1: "Green",
      fav_color2: "Pink",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Gloria",
      image_url: "https://dodo.ac/np/images/1/14/Gloria_NH.png",
      species: "Duck",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 12",
      sign: "Leo",
      quote: "Time is money.",
      catchphrase: "quacker",
      clothing: "Floral Lace Dress",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Goldie",
      image_url: "https://dodo.ac/np/images/8/83/Goldie_NH.png",
      species: "Dog",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 27",
      sign: "Capricorn",
      quote: "A little bit of happiness is better than a lot of anguish.",
      catchphrase: "woof",
      clothing: "Tweed Dress",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Gonzo",
      image_url: "https://dodo.ac/np/images/0/09/Gonzo_NH.png",
      species: "Koala",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 13",
      sign: "Libra",
      quote: "Brothers are brothers, cheese is cheese.",
      catchphrase: "mate",
      clothing: "Reindeer Sweater",
      fav_color1: "Black",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Goose",
      image_url: "https://dodo.ac/np/images/9/91/Goose_NH.png",
      species: "Chicken",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 4",
      sign: "Libra",
      quote: "Birds of a feather crow together.",
      catchphrase: "buh-kay",
      clothing: "Bold Aloha Shirt",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Graham",
      image_url: "https://dodo.ac/np/images/a/a1/Graham_NH.png",
      species: "Hamster",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 20",
      sign: "Gemini",
      quote: "Knowledge is power.",
      catchphrase: "indeed",
      clothing: "Madras Plaid Shirt",
      fav_color1: "Green",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Greta",
      image_url: "https://dodo.ac/np/images/b/bd/Greta_NH.png",
      species: "Mouse",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "September 5",
      sign: "Virgo",
      quote: "The world is a stage.",
      catchphrase: "yelp",
      clothing: "Pinafore",
      fav_color1: "Pink",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Grizzly",
      image_url: "https://dodo.ac/np/images/4/4b/Grizzly_NH.png",
      species: "Bear",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 31",
      sign: "Leo",
      quote: "Those who live in glass houses shouldn't throw stones.",
      catchphrase: "grrr",
      clothing: "Flannel Shirt",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Groucho",
      image_url: "https://dodo.ac/np/images/1/1d/Groucho_NH.png",
      species: "Bear",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 23",
      sign: "Libra",
      quote: "Rocky road is more than just a flavor of ice cream.",
      catchphrase: "grumble",
      clothing: "Dragon Jacket",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Gruff",
      image_url: "https://dodo.ac/np/images/2/25/Gruff_NH.png",
      species: "Goat",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 29",
      sign: "Virgo",
      quote: "Don't burn bridges.",
      catchphrase: "bleh eh eh",
      clothing: "Old-School Jacket",
      fav_color1: "Purple",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Gwen",
      image_url: "https://dodo.ac/np/images/b/be/Gwen_NH.png",
      species: "Penguin",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 23",
      sign: "Aquarius",
      quote: "Mind your manners, or someone else will.",
      catchphrase: "h-h-h-hon",
      clothing: "Retro Dress",
      fav_color1: "Green",
      fav_color2: "White",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Hamlet",
      image_url: "https://dodo.ac/np/images/4/46/Hamlet_NH.png",
      species: "Hamster",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 30",
      sign: "Gemini",
      quote: "The ear's the thing.",
      catchphrase: "hammie",
      clothing: "Big-Star Tee",
      fav_color1: "Purple",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Hamphrey",
      image_url: "https://dodo.ac/np/images/a/a9/Hamphrey_NH.png",
      species: "Hamster",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "February 25",
      sign: "Pisces",
      quote: "Children should be seen and not heard.",
      catchphrase: "snort",
      clothing: "Fuzzy Vest",
      fav_color1: "Gray",
      fav_color2: "Beige",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Hans",
      image_url: "https://dodo.ac/np/images/1/15/Hans_NH.png",
      species: "Gorilla",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 5",
      sign: "Sagittarius",
      quote: "One good turn deserves another.",
      catchphrase: "groovy",
      clothing: "Down Ski Jacket",
      fav_color1: "Gray",
      fav_color2: "Blue",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Harry",
      image_url: "https://dodo.ac/np/images/1/1a/Harry_NH.png",
      species: "Hippo",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 7",
      sign: "Capricorn",
      quote: "Patience is a virtue for folks with time.",
      catchphrase: "beach bum",
      clothing: "Camo Tee",
      fav_color1: "Green",
      fav_color2: "Orange",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Hazel",
      image_url: "https://dodo.ac/np/images/1/17/Hazel_NH.png",
      species: "Squirrel",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "August 30",
      sign: "Virgo",
      quote: "Never say never!",
      catchphrase: "uni-wow",
      clothing: "Athletic Jacket",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Active",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Henry",
      image_url: "https://dodo.ac/np/images/2/26/Henry_NH.png",
      species: "Frog",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "September 21",
      sign: "Virgo",
      quote: "The way to a frog's heart is through his stomach.",
      catchphrase: "snoozit",
      clothing: "Denim Jacket",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Hippeux",
      image_url: "https://dodo.ac/np/images/2/26/Hippeux_NH.png",
      species: "Hippo",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 15",
      sign: "Libra",
      quote: "Mottoes are for the unoriginal.",
      catchphrase: "natch",
      clothing: "Emblem Blazer",
      fav_color1: "Brown",
      fav_color2: "Green",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Hopkins",
      image_url: "https://dodo.ac/np/images/c/c1/Hopkins_NH.png",
      species: "Rabbit",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 11",
      sign: "Pisces",
      quote: "A wise mammal gives danger a wide berth.",
      catchphrase: "thumper",
      clothing: "Striped Shirt",
      fav_color1: "Blue",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Hopper",
      image_url: "https://dodo.ac/np/images/c/cb/Hopper_NH.png",
      species: "Penguin",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "April 6",
      sign: "Aries",
      quote: "Always have a comeback.",
      catchphrase: "slushie",
      clothing: "Dragon Suit",
      fav_color1: "Yellow",
      fav_color2: "Red",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Hornsby",
      image_url: "https://dodo.ac/np/images/9/95/Hornsby_NH.png",
      species: "Rhinoceros",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 20",
      sign: "Pisces",
      quote: "You can't hit a mosquito with a horseshoe.",
      catchphrase: "schnozzle",
      clothing: "Argyle Sweater",
      fav_color1: "Green",
      fav_color2: "Brown",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Huck",
      image_url: "https://dodo.ac/np/images/1/17/Huck_NH.png",
      species: "Frog",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 9",
      sign: "Cancer",
      quote: "Cold coffee makes for a cold demeanor.",
      catchphrase: "hopper",
      clothing: "Striped Tank",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Hugh",
      image_url: "https://dodo.ac/np/images/b/b6/Hugh_NH.png",
      species: "Pig",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 30",
      sign: "Capricorn",
      quote: "Keep it real. Real chill.",
      catchphrase: "snortle",
      clothing: "Camo Tee",
      fav_color1: "Beige",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Iggly",
      image_url: "https://dodo.ac/np/images/6/68/Iggly_NH.png",
      species: "Penguin",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 2",
      sign: "Scorpio",
      quote: "Six of one, half dozen of the other.",
      catchphrase: "waddler",
      clothing: "Rugby Uniform",
      fav_color1: "Red",
      fav_color2: "Blue",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Ike",
      image_url: "https://dodo.ac/np/images/3/34/Ike_NH.png",
      species: "Bear",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 16",
      sign: "Taurus",
      quote: "The higher you climb, the smaller things look.",
      catchphrase: "roadie",
      clothing: "Camo Bomber-Style Jacket",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Ione",
      image_url: "https://dodo.ac/np/images/4/40/Ione_amiibo.png",
      species: "Squirrel",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 11",
      sign: "Virgo",
      quote: "I was born under a lucky star.",
      catchphrase: "gleam",
      clothing: "Astro Dress",
      fav_color1: "White",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Jacob",
      image_url: "https://dodo.ac/np/images/3/3e/Jacob_NH.png",
      species: "Bird",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 24",
      sign: "Virgo",
      quote: "Your greatest strength can be your greatest weakness.",
      catchphrase: "ya feel",
      clothing: "Camo Bomber-Style Jacket",
      fav_color1: "Green",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Jacques",
      image_url: "https://dodo.ac/np/images/0/03/Jacques_NH.png",
      species: "Bird",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 22",
      sign: "Cancer",
      quote: "Better to have loved and squawked than to have never loved at all.",
      catchphrase: "zut alors",
      clothing: "Puffy Vest",
      fav_color1: "Green",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Jambette",
      image_url: "https://dodo.ac/np/images/3/35/Jambette_NH.png",
      species: "Frog",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "October 27",
      sign: "Scorpio",
      quote: "It takes more muscles to frown than smile.",
      catchphrase: "croak-kay",
      clothing: "Shell Dress",
      fav_color1: "Brown",
      fav_color2: "",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Jay",
      image_url: "https://dodo.ac/np/images/7/7f/Jay_NH.png",
      species: "Bird",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 17",
      sign: "Cancer",
      quote: "He who hesitates has lost.",
      catchphrase: "heeeeeyy",
      clothing: "Six-Ball Tee",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Active",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Jeremiah",
      image_url: "https://dodo.ac/np/images/9/93/Jeremiah_NH.png",
      species: "Frog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 8",
      sign: "Cancer",
      quote: "Sleep before you leap.",
      catchphrase: "nee-deep",
      clothing: "Gingham Picnic Shirt",
      fav_color1: "Orange",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Jitters",
      image_url: "https://dodo.ac/np/images/a/a6/Jitters_NH.png",
      species: "Bird",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 2",
      sign: "Aquarius",
      quote: "When you're a team of one, you're always captain!",
      catchphrase: "bzzert",
      clothing: "Soccer-Uniform Top",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Active",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Joey",
      image_url: "https://dodo.ac/np/images/6/66/Joey_NH.png",
      species: "Duck",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 3",
      sign: "Capricorn",
      quote: "Don't get your feathers all ruffled. Just chill.",
      catchphrase: "bleeeeeck",
      clothing: "Bear Tee",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Judy",
      image_url: "https://dodo.ac/np/images/d/d4/Judy_NH.png",
      species: "Cub",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 10",
      sign: "Pisces",
      quote: "I'm dancing my dreams away.",
      catchphrase: "myohmy",
      clothing: "Fairy-Tale Dress",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Julia",
      image_url: "https://dodo.ac/np/images/4/42/Julia_NH.png",
      species: "Ostrich",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "July 31",
      sign: "Leo",
      quote: "Cut once, measure twice... Wait— reverse that.",
      catchphrase: "dahling",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Purple",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Julian",
      image_url: "https://dodo.ac/np/images/f/f2/Julian_NH.png",
      species: "Horse",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 15",
      sign: "Pisces",
      quote: "Never trot when you can prance.",
      catchphrase: "glitter",
      clothing: "Space Parka",
      fav_color1: "Purple",
      fav_color2: "Blue",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "June",
      image_url: "https://dodo.ac/np/images/8/85/June_NH.png",
      species: "Cub",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 21",
      sign: "Gemini",
      quote: "Dream big, expect little.",
      catchphrase: "rainbow",
      clothing: "Hibiscus Muumuu",
      fav_color1: "White",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Kabuki",
      image_url: "https://dodo.ac/np/images/2/2a/Kabuki_NH.png",
      species: "Cat",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 29",
      sign: "Sagittarius",
      quote: "If you make your opponent flinch, you have already won.",
      catchphrase: "meooo-OH",
      clothing: "Kabuki-Actor Yukata",
      fav_color1: "Purple",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Katt",
      image_url: "https://dodo.ac/np/images/c/c9/Katt_NH.png",
      species: "Cat",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 27",
      sign: "Taurus",
      quote: "MeowMEOWmeow!",
      catchphrase: "purrty",
      clothing: "Old-School Jacket",
      fav_color1: "Purple",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Keaton",
      image_url: "https://dodo.ac/np/images/3/3b/Keaton_NH.png",
      species: "Eagle",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 1",
      sign: "Gemini",
      quote: "Even in a room full of fools, someone is the smartest.",
      catchphrase: "wingo",
      clothing: "Fuzzy Vest",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Ken",
      image_url: "https://dodo.ac/np/images/e/e0/Ken_NH.png",
      species: "Chicken",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 23",
      sign: "Capricorn",
      quote: "C'est la vie!",
      catchphrase: "no doubt",
      clothing: "Ninja Costume",
      fav_color1: "Purple",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Ketchup",
      image_url: "https://dodo.ac/np/images/4/42/Ketchup_NH.png",
      species: "Duck",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "July 27",
      sign: "Leo",
      quote: "When in doubt, eat a tomato!",
      catchphrase: "bitty",
      clothing: "Lacy Dress",
      fav_color1: "Aqua",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Kevin",
      image_url: "https://dodo.ac/np/images/7/71/Kevin_NH.png",
      species: "Pig",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 26",
      sign: "Taurus",
      quote: "Sometimes it's OK to get dirty.",
      catchphrase: "weeweewee",
      clothing: "After-School Jacket",
      fav_color1: "Black",
      fav_color2: "Red",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Kid Cat",
      image_url: "https://dodo.ac/np/images/c/c3/Kid_Cat_NH.png",
      species: "Cat",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 1",
      sign: "Leo",
      quote: "Crime doesn't pay!",
      catchphrase: "psst",
      clothing: "No. 1 Shirt",
      fav_color1: "Red",
      fav_color2: "",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Kidd",
      image_url: "https://dodo.ac/np/images/7/7a/Kidd_NH.png",
      species: "Goat",
      personality: "Smug",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 28",
      sign: "Cancer",
      quote: "Be yourself, everyone else is already taken.",
      catchphrase: "wut",
      clothing: "Tailored Jacket",
      fav_color1: "Gray",
      fav_color2: "White",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Kiki",
      image_url: "https://dodo.ac/np/images/c/c5/Kiki_NH.png",
      species: "Cat",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "October 8",
      sign: "Libra",
      quote: "Nothing ventured, nothing gained.",
      catchphrase: "kitty cat",
      clothing: "Argyle Sweater",
      fav_color1: "Brown",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Kitt",
      image_url: "https://dodo.ac/np/images/7/75/Kitt_NH.png",
      species: "Kangaroo",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "October 11",
      sign: "Libra",
      quote: "Funny parents have funny kids.",
      catchphrase: "child",
      clothing: "Striped Halter Dress",
      fav_color1: "Purple",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Kitty",
      image_url: "https://dodo.ac/np/images/2/21/Kitty_NH.png",
      species: "Cat",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 15",
      sign: "Aquarius",
      quote: "If you want something done well, do it yourself.",
      catchphrase: "mrowrr",
      clothing: "Loose Fall Dress",
      fav_color1: "Green",
      fav_color2: "Gray",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Klaus",
      image_url: "https://dodo.ac/np/images/5/5c/Klaus_NH.png",
      species: "Bear",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 31",
      sign: "Aries",
      quote: "Pride goes before a fall.",
      catchphrase: "strudel",
      clothing: "Toga",
      fav_color1: "Gray",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Knox",
      image_url: "https://dodo.ac/np/images/0/03/Knox_NH.png",
      species: "Chicken",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 23",
      sign: "Sagittarius",
      quote: "A chicken's coop is its castle.",
      catchphrase: "cluckling",
      clothing: "Cavalier Shirt",
      fav_color1: "Brown",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Kody",
      image_url: "https://dodo.ac/np/images/2/20/Kody_NH.png",
      species: "Cub",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 28",
      sign: "Libra",
      quote: "The sky's the limit!",
      catchphrase: "grah grah",
      clothing: "Western Shirt",
      fav_color1: "Colorful",
      fav_color2: "White",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Kyle",
      image_url: "https://dodo.ac/np/images/4/46/Kyle_NH.png",
      species: "Wolf",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 6",
      sign: "Sagittarius",
      quote: "Never trust a sheep in wolf's clothing.",
      catchphrase: "alpha",
      clothing: "Gilet and Shirt",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Leonardo",
      image_url: "https://dodo.ac/np/images/0/0a/Leonardo_NH.png",
      species: "Tiger",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 15",
      sign: "Taurus",
      quote: "That's the way the energy bar crumbles.",
      catchphrase: "flexin'",
      clothing: "Hawk Jacket",
      fav_color1: "Red",
      fav_color2: "Blue",
      fav_style1: "Active",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Leopold",
      image_url: "https://dodo.ac/np/images/3/3a/Leopold_NH.png",
      species: "Lion",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 14",
      sign: "Leo",
      quote: "The bigger the fish, the bigger your dinner.",
      catchphrase: "lion cub",
      clothing: "Tennis Sweater",
      fav_color1: "Purple",
      fav_color2: "Green",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Lily",
      image_url: "https://dodo.ac/np/images/4/42/Lily_NH.png",
      species: "Frog",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 4",
      sign: "Aquarius",
      quote: "Don't jump to conclusions!",
      catchphrase: "toady",
      clothing: "Tropical Muumuu",
      fav_color1: "White",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Limberg",
      image_url: "https://dodo.ac/np/images/b/b0/Limberg_NH.png",
      species: "Mouse",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 17",
      sign: "Libra",
      quote: "Don't build a better mousetrap.",
      catchphrase: "squinky",
      clothing: "Hanten Jacket",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Lionel",
      image_url: "https://dodo.ac/np/images/b/bb/Lionel_NH.png",
      species: "Lion",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 29",
      sign: "Leo",
      quote: "Love is blind.",
      catchphrase: "precisely",
      clothing: "Noble Coat",
      fav_color1: "Green",
      fav_color2: "Gray",
      fav_style1: "Gorgeous",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Lobo",
      image_url: "https://dodo.ac/np/images/d/d1/Lobo_NH.png",
      species: "Wolf",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 5",
      sign: "Scorpio",
      quote: "If it's not one thing, it's another.",
      catchphrase: "ah-rooooo",
      clothing: "Bomber-Style Jacket",
      fav_color1: "Black",
      fav_color2: "Beige",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Lolly",
      image_url: "https://dodo.ac/np/images/1/16/Lolly_NH.png",
      species: "Cat",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 27",
      sign: "Aries",
      quote: "Laughter is the best medicine.",
      catchphrase: "bonbon",
      clothing: "Snowy Sweater",
      fav_color1: "Gray",
      fav_color2: "Pink",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Lopez",
      image_url: "https://dodo.ac/np/images/5/53/Lopez_NH.png",
      species: "Deer",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 20",
      sign: "Leo",
      quote: "Always look both ways before crossing the street.",
      catchphrase: "badoom",
      clothing: "Chimayo Vest",
      fav_color1: "Gray",
      fav_color2: "",
      fav_style1: "Gorgeous",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Louie",
      image_url: "https://dodo.ac/np/images/5/5a/Louie_NH.png",
      species: "Gorilla",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 26",
      sign: "Aries",
      quote: "It's all about the muscle.",
      catchphrase: "hoo hoo ha",
      clothing: "Muscle Tank",
      fav_color1: "Gray",
      fav_color2: "Red",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Lucha",
      image_url: "https://dodo.ac/np/images/4/4a/Lucha_NH.png",
      species: "Bird",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 12",
      sign: "Sagittarius",
      quote: "Birds of a feather, et cetera, et cetera...",
      catchphrase: "cacaw",
      clothing: "Athletic Jacket",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Lucky",
      image_url: "https://dodo.ac/np/images/5/59/Lucky_NH.png",
      species: "Dog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 4",
      sign: "Scorpio",
      quote: "Don't bite the hand that feeds you.",
      catchphrase: "rrr-owch",
      clothing: "Open-Collar Shirt",
      fav_color1: "Beige",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Lucy",
      image_url: "https://dodo.ac/np/images/e/e5/Lucy_NH.png",
      species: "Pig",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 2",
      sign: "Gemini",
      quote: "The best is yet to come.",
      catchphrase: "snoooink",
      clothing: "Frilly Dress",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Lyman",
      image_url: "https://dodo.ac/np/images/a/a5/Lyman_NH.png",
      species: "Koala",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 12",
      sign: "Libra",
      quote: "Eucalyptus is the spice of life.",
      catchphrase: "chips",
      clothing: "Vertical-Stripes Shirt",
      fav_color1: "Aqua",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Mac",
      image_url: "https://dodo.ac/np/images/a/ab/Mac_NH.png",
      species: "Dog",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 11",
      sign: "Scorpio",
      quote: "Sometimes life is rough.",
      catchphrase: "woo woof",
      clothing: "Raglan Shirt",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Maddie",
      image_url: "https://dodo.ac/np/images/0/06/Maddie_NH.png",
      species: "Dog",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 11",
      sign: "Capricorn",
      quote: "The IT revolution is under way.",
      catchphrase: "yippee",
      clothing: "Layered Sleeveless Dress",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Maelle",
      image_url: "https://dodo.ac/np/images/9/93/Maelle_NH.png",
      species: "Duck",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 8",
      sign: "Aries",
      quote: "A wise duck takes care of its bill.",
      catchphrase: "duckling",
      clothing: "Flower Sweater",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Maggie",
      image_url: "https://dodo.ac/np/images/b/b8/Maggie_NH.png",
      species: "Pig",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "September 3",
      sign: "Virgo",
      quote: "All a plant needs is love...and sun and water and soil.",
      catchphrase: "schep",
      clothing: "Pintuck-Pleated Dress",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Mallary",
      image_url: "https://dodo.ac/np/images/2/28/Mallary_NH.png",
      species: "Duck",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 17",
      sign: "Scorpio",
      quote: "Purple is the color of royalty.",
      catchphrase: "quackpth",
      clothing: "Striped Shirt",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Maple",
      image_url: "https://dodo.ac/np/images/a/a2/Maple_NH.png",
      species: "Bear cub",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 15",
      sign: "Gemini",
      quote: "Waste not, want not.",
      catchphrase: "honey",
      clothing: "Tree Sweater",
      fav_color1: "Beige",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Marcel",
      image_url: "https://dodo.ac/np/images/3/3e/Marcel_NH.png",
      species: "Dog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 31",
      sign: "Capricorn",
      quote: "There's not a dog so bad that he won't wag his tail.",
      catchphrase: "non",
      clothing: "Sea Hanten Shirt",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Marcie",
      image_url: "https://dodo.ac/np/images/2/2b/Marcie_NH.png",
      species: "Kangaroo",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 31",
      sign: "Gemini",
      quote: "The road to a friend's house is never long.",
      catchphrase: "pouches",
      clothing: "Heart Apron",
      fav_color1: "Pink",
      fav_color2: "Beige",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Margie",
      image_url: "https://dodo.ac/np/images/5/54/Margie_NH.png",
      species: "Elephant",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 28",
      sign: "Aquarius",
      quote: "Keep your feet on the ground.",
      catchphrase: "tootie",
      clothing: "Silk Floral-Print Shirt",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Marina",
      image_url: "https://dodo.ac/np/images/2/25/Marina_NH.png",
      species: "Octopus",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 26",
      sign: "Cancer",
      quote: "If you can't say something nice, don't say anything at all.",
      catchphrase: "blurp",
      clothing: "Dreamy Sweater",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Marlo",
      image_url: "https://dodo.ac/np/images/c/c1/Marlo_amiibo.png",
      species: "Hamster",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 26",
      sign: "Cancer",
      quote: "You gotta walk the walk if you're gonna talk the talk.",
      catchphrase: "gabeesh",
      clothing: "Doublet",
      fav_color1: "Black",
      fav_color2: "Brown",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Marshal",
      image_url: "https://dodo.ac/np/images/d/da/Marshal_NH.png",
      species: "Squirrel",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "September 29",
      sign: "Libra",
      quote: "Seize the day.",
      catchphrase: "sulky",
      clothing: "Puffy Vest",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Marty",
      image_url: "",
      species: "Bear cub",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 16",
      sign: "Aries",
      quote: "Just wait until I get started!",
      catchphrase: "pompom",
      clothing: "Pompompurin Tee",
      fav_color1: "Brown",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Mathilda",
      image_url: "https://dodo.ac/np/images/5/58/Mathilda_NH.png",
      species: "Kangaroo",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 12",
      sign: "Scorpio",
      quote: "Nail polish is thicker than water.",
      catchphrase: "wee baby",
      clothing: "Sleeveless Sweater Dress",
      fav_color1: "White",
      fav_color2: "Red",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Megan",
      image_url: "https://dodo.ac/np/images/5/55/Megan_NH.png",
      species: "Bear",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 13",
      sign: "Pisces",
      quote: "Take a page out of someone else's book, if it's a good book.",
      catchphrase: "sundae",
      clothing: "Dollhouse Dress",
      fav_color1: "Yellow",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Melba",
      image_url: "https://dodo.ac/np/images/4/43/Melba_NH.png",
      species: "Koala",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 12",
      sign: "Aries",
      quote: "A friend who shares is a friend who cares.",
      catchphrase: "toasty",
      clothing: "Plaid-Print Dress",
      fav_color1: "White",
      fav_color2: "Green",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Merengue",
      image_url: "https://dodo.ac/np/images/0/0c/Merengue_NH.png",
      species: "Rhinoceros",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 19",
      sign: "Pisces",
      quote: "Life is a piece of cake.",
      catchphrase: "shortcake",
      clothing: "Chef's Outfit",
      fav_color1: "White",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Merry",
      image_url: "https://dodo.ac/np/images/4/4f/Merry_NH.png",
      species: "Cat",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 29",
      sign: "Cancer",
      quote: "A smile increases your face value.",
      catchphrase: "mweee",
      clothing: "Dreamy Sweater",
      fav_color1: "Pink",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Midge",
      image_url: "https://dodo.ac/np/images/a/af/Midge_NH.png",
      species: "Bird",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 12",
      sign: "Pisces",
      quote: "When the world gets cold, just fly south.",
      catchphrase: "tweedledee",
      clothing: "Silk Shirt",
      fav_color1: "Pink",
      fav_color2: "",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Mint",
      image_url: "https://dodo.ac/np/images/5/5b/Mint_NH.png",
      species: "Squirrel",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 2",
      sign: "Taurus",
      quote: "Always lead by example.",
      catchphrase: "ahhhhhh",
      clothing: "Gumdrop Dress",
      fav_color1: "Pink",
      fav_color2: "Purple",
      fav_style1: "Gorgeous",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Mira",
      image_url: "https://dodo.ac/np/images/d/d1/Mira_NH.png",
      species: "Rabbit",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "July 6",
      sign: "Cancer",
      quote: "Always help a friend in need.",
      catchphrase: "cottontail",
      clothing: "Noble Zap Suit",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Miranda",
      image_url: "https://dodo.ac/np/images/8/8c/Miranda_NH.png",
      species: "Duck",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 23",
      sign: "Taurus",
      quote: "If the world is flooded, it will be easy for the duck.",
      catchphrase: "quackulous",
      clothing: "Sleeveless Shirtdress",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Mitzi",
      image_url: "https://dodo.ac/np/images/6/63/Mitzi_NH.png",
      species: "Cat",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 25",
      sign: "Libra",
      quote: "Practice makes purrrfect!",
      catchphrase: "mew",
      clothing: "Gumdrop Dress",
      fav_color1: "Brown",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Moe",
      image_url: "https://dodo.ac/np/images/a/a4/Moe_NH.png",
      species: "Cat",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 12",
      sign: "Capricorn",
      quote: "Ignorance is bliss.",
      catchphrase: "myawn",
      clothing: "Simple Parka",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Molly",
      image_url: "https://dodo.ac/np/images/2/29/Molly_NH.png",
      species: "Duck",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 7",
      sign: "Pisces",
      quote: "Like water off a duck's back.",
      catchphrase: "quackidee",
      clothing: "Pintuck-Pleated Dress",
      fav_color1: "Yellow",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Monique",
      image_url: "https://dodo.ac/np/images/c/cc/Monique_NH.png",
      species: "Cat",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 30",
      sign: "Libra",
      quote: "All publicity is good publicity!",
      catchphrase: "pffffft",
      clothing: "Flapper Dress",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Monty",
      image_url: "https://dodo.ac/np/images/d/d7/Monty_NH.png",
      species: "Monkey",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 7",
      sign: "Sagittarius",
      quote: "No news is good news.",
      catchphrase: "g'tang",
      clothing: "Guayabera Shirt",
      fav_color1: "Yellow",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Moose",
      image_url: "https://dodo.ac/np/images/e/ee/Moose_NH.png",
      species: "Mouse",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 13",
      sign: "Virgo",
      quote: "A cornered rat will summon the courage to bite a cat.",
      catchphrase: "shorty",
      clothing: "Big-Star Tee",
      fav_color1: "Purple",
      fav_color2: "Red",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Mott",
      image_url: "https://dodo.ac/np/images/b/b8/Mott_NH.png",
      species: "Lion",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 10",
      sign: "Cancer",
      quote: "The lion's share goes to the lion.",
      catchphrase: "cagey",
      clothing: "College Cardigan",
      fav_color1: "Blue",
      fav_color2: "Green",
      fav_style1: "Active",
      fav_style2: "Elegant",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Muffy",
      image_url: "https://dodo.ac/np/images/1/16/Muffy_NH.png",
      species: "Sheep",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 14",
      sign: "Aquarius",
      quote: "There's a black sheep in every family.",
      catchphrase: "nightshade",
      clothing: "Ruffled Dress",
      fav_color1: "Black",
      fav_color2: "Purple",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Murphy",
      image_url: "https://dodo.ac/np/images/7/7c/Murphy_NH.png",
      species: "Bear cub",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 29",
      sign: "Capricorn",
      quote: "More money, more problems.",
      catchphrase: "malarkey",
      clothing: "Puffy Vest",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Nan",
      image_url: "https://dodo.ac/np/images/b/b8/Nan_NH.png",
      species: "Goat",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 24",
      sign: "Virgo",
      quote: "Nanny-nanny boo-boo!",
      catchphrase: "kid",
      clothing: "Tweed Dress",
      fav_color1: "Orange",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Nana",
      image_url: "https://dodo.ac/np/images/b/b1/Nana_NH.png",
      species: "Monkey",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 23",
      sign: "Virgo",
      quote: "Bread always falls peanut-butter side down.",
      catchphrase: "po po",
      clothing: "Pom-Pom Sweater",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Naomi",
      image_url: "https://dodo.ac/np/images/f/f6/Naomi_NH.png",
      species: "Cow",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 28",
      sign: "Pisces",
      quote: "Moo like there's no tomorrow.",
      catchphrase: "moolah",
      clothing: "Marble-Print Dress",
      fav_color1: "Colorful",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Nate",
      image_url: "https://dodo.ac/np/images/5/55/Nate_NH.png",
      species: "Bear",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 16",
      sign: "Leo",
      quote: "Be true to yourself.",
      catchphrase: "yawwwn",
      clothing: "Reindeer Sweater",
      fav_color1: "White",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Nibbles",
      image_url: "https://dodo.ac/np/images/9/97/Nibbles_NH.png",
      species: "Squirrel",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 19",
      sign: "Cancer",
      quote: "Appearances are, like, totally deceiving.",
      catchphrase: "niblet",
      clothing: "Watermelon Dress",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Norma",
      image_url: "https://dodo.ac/np/images/e/e7/Norma_NH.png",
      species: "Cow",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "September 20",
      sign: "Virgo",
      quote: "If you want what you have, then you'll have what you want.",
      catchphrase: "hoof hoo",
      clothing: "Plaid-Print Dress",
      fav_color1: "White",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "O'Hare",
      image_url: "https://dodo.ac/np/images/c/cf/O%27Hare_NH.png",
      species: "Rabbit",
      personality: "Smug",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 24",
      sign: "Leo",
      quote: "It's not old; it's vintage.",
      catchphrase: "amigo",
      clothing: "Pineapple Aloha Shirt",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Octavian",
      image_url: "https://dodo.ac/np/images/1/1b/Octavian_NH.png",
      species: "Octopus",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 20",
      sign: "Virgo",
      quote: "Don't be a sucker!",
      catchphrase: "sucker",
      clothing: "Gold-Print Tee",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Olaf",
      image_url: "https://dodo.ac/np/images/1/11/Olaf_NH.png",
      species: "Anteater",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 19",
      sign: "Taurus",
      quote: "Keep your nose clean.",
      catchphrase: "whiffa",
      clothing: "Suit of Lights",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Olive",
      image_url: "https://dodo.ac/np/images/5/5c/Olive_NH.png",
      species: "Bear cub",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "July 12",
      sign: "Cancer",
      quote: "Sticky fingers attract bees.",
      catchphrase: "sweet pea",
      clothing: "Plover Dress",
      fav_color1: "Brown",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Olivia",
      image_url: "https://dodo.ac/np/images/3/36/Olivia_NH.png",
      species: "Cat",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 3",
      sign: "Aquarius",
      quote: "There's an exception to every rule.",
      catchphrase: "purrr",
      clothing: "Sweetheart Dress",
      fav_color1: "White",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Opal",
      image_url: "https://dodo.ac/np/images/c/ce/Opal_NH.png",
      species: "Elephant",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 20",
      sign: "Aquarius",
      quote: "However little you think of an elephant, you can't say it won't fill a pot.",
      catchphrase: "snoot",
      clothing: "Front-Tie Tee",
      fav_color1: "Black",
      fav_color2: "Orange",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Ozzie",
      image_url: "https://dodo.ac/np/images/3/3a/Ozzie_NH.png",
      species: "Koala",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 7",
      sign: "Taurus",
      quote: "Half a loaf is better than none.",
      catchphrase: "ol' bear",
      clothing: "Energetic Sweater",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Pancetti",
      image_url: "https://dodo.ac/np/images/e/ec/Pancetti_NH.png",
      species: "Pig",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "November 14",
      sign: "Scorpio",
      quote: "Always get it in writing.",
      catchphrase: "sooey",
      clothing: "Dollhouse Dress",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Pango",
      image_url: "https://dodo.ac/np/images/d/d5/Pango_NH.png",
      species: "Anteater",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 9",
      sign: "Scorpio",
      quote: "A thing of beauty is a joy forever.",
      catchphrase: "snooooof",
      clothing: "Oversized Print Dress",
      fav_color1: "Orange",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Paolo",
      image_url: "https://dodo.ac/np/images/5/59/Paolo_NH.png",
      species: "Elephant",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 5",
      sign: "Taurus",
      quote: "When it works, it works.",
      catchphrase: "pal",
      clothing: "Simple Parka",
      fav_color1: "Gray",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Papi",
      image_url: "https://dodo.ac/np/images/a/a7/Papi_NH.png",
      species: "Horse",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "January 10",
      sign: "Capricorn",
      quote: "Never say neigh.",
      catchphrase: "haaay",
      clothing: "Colorful Striped Sweater",
      fav_color1: "Orange",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Pashmina",
      image_url: "https://dodo.ac/np/images/3/3e/Pashmina_NH.png",
      species: "Goat",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "December 26",
      sign: "Capricorn",
      quote: "Before you judge someone, walk a mile in their hooves.",
      catchphrase: "kidders",
      clothing: "Rainbow Sweater",
      fav_color1: "Red",
      fav_color2: "Colorful",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Pate",
      image_url: "https://dodo.ac/np/images/6/6b/Pate_NH.png",
      species: "Duck",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 23",
      sign: "Pisces",
      quote: "A duck won't bite you.",
      catchphrase: "quackle",
      clothing: "Sunflower Dress",
      fav_color1: "Yellow",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Patty",
      image_url: "https://dodo.ac/np/images/f/f1/Patty_NH.png",
      species: "Cow",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 10",
      sign: "Taurus",
      quote: "A friend in need is a friend indeed!",
      catchphrase: "how-now",
      clothing: "Orange Dress",
      fav_color1: "Orange",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Paula",
      image_url: "https://dodo.ac/np/images/0/0f/Paula_NH.png",
      species: "Bear",
      personality: "Big sister",
      sub_personality: "B",
      gender: "Female",
      birthday: "March 22",
      sign: "Aries",
      quote: "Trends always make a comeback.",
      catchphrase: "yodelay",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Orange",
      fav_color2: "Green",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Peaches",
      image_url: "https://dodo.ac/np/images/0/0d/Peaches_NH.png",
      species: "Horse",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 28",
      sign: "Sagittarius",
      quote: "Every day is a gift.",
      catchphrase: "neighbor",
      clothing: "Long Denim Cardigan",
      fav_color1: "Colorful",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Peanut",
      image_url: "https://dodo.ac/np/images/d/d5/Peanut_NH.png",
      species: "Squirrel",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 8",
      sign: "Gemini",
      quote: "Never take a nibble when you can take a bite.",
      catchphrase: "slacker",
      clothing: "Striped Maxi Dress",
      fav_color1: "Red",
      fav_color2: "Colorful",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Pecan",
      image_url: "https://dodo.ac/np/images/6/60/Pecan_NH.png",
      species: "Squirrel",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 10",
      sign: "Virgo",
      quote: "Promises are like pie crusts— they're made to be broken.",
      catchphrase: "chipmunk",
      clothing: "Milkmaid Dress",
      fav_color1: "Purple",
      fav_color2: "Beige",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Peck",
      image_url: "https://dodo.ac/np/images/4/44/Peck_NH.png",
      species: "Bird",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 25",
      sign: "Leo",
      quote: "The best defense is a good offense.",
      catchphrase: "crunch",
      clothing: "Raglan Shirt",
      fav_color1: "Beige",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Peewee",
      image_url: "https://dodo.ac/np/images/2/2a/Peewee_NH.png",
      species: "Gorilla",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 11",
      sign: "Virgo",
      quote: "Look behind you.",
      catchphrase: "li'l bitty baby",
      clothing: "Five-Ball Tee",
      fav_color1: "Orange",
      fav_color2: "Blue",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Peggy",
      image_url: "https://dodo.ac/np/images/2/28/Peggy_NH.png",
      species: "Pig",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 23",
      sign: "Gemini",
      quote: "We're all diamonds in the rough.",
      catchphrase: "shweetie",
      clothing: "Aran-Knit Sweater",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Pekoe",
      image_url: "https://dodo.ac/np/images/d/df/Pekoe_NH.png",
      species: "Bear cub",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 18",
      sign: "Taurus",
      quote: "Let bygones be bygones.",
      catchphrase: "bud",
      clothing: "Sleeveless Silk Dress",
      fav_color1: "Red",
      fav_color2: "Beige",
      fav_style1: "Elegant",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Penelope",
      image_url: "https://dodo.ac/np/images/1/15/Penelope_NH.png",
      species: "Mouse",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 5",
      sign: "Aquarius",
      quote: "One mile or a thousand makes no difference to love.",
      catchphrase: "oh bow",
      clothing: "Oversized Print Dress",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Petri",
      image_url: "https://dodo.ac/np/images/7/7e/Petri_amiibo.png",
      species: "Mouse",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 23",
      sign: "Libra",
      quote: "Our DNA is only the beginning of the story.",
      catchphrase: "mmmhmm",
      clothing: "Doctor's Coat",
      fav_color1: "White",
      fav_color2: "Gray",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Phil",
      image_url: "https://dodo.ac/np/images/f/f2/Phil_NH.png",
      species: "Ostrich",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 27",
      sign: "Sagittarius",
      quote: "Best not to say too much.",
      catchphrase: "hurk",
      clothing: "Fischerhemd",
      fav_color1: "Green",
      fav_color2: "Red",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Phoebe",
      image_url: "https://dodo.ac/np/images/5/50/Phoebe_NH.png",
      species: "Ostrich",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 22",
      sign: "Taurus",
      quote: "You can't keep a good bird down.",
      catchphrase: "sparky",
      clothing: "Front-Tie Tee",
      fav_color1: "Black",
      fav_color2: "Red",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Pierce",
      image_url: "https://dodo.ac/np/images/8/80/Pierce_NH.png",
      species: "Eagle",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 8",
      sign: "Capricorn",
      quote: "When someone says fly, you ask how high!",
      catchphrase: "hawkeye",
      clothing: "Tennis Sweater",
      fav_color1: "Orange",
      fav_color2: "Yellow",
      fav_style1: "Elegant",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Pietro",
      image_url: "https://dodo.ac/np/images/f/fb/Pietro_NH.png",
      species: "Sheep",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 19",
      sign: "Aries",
      quote: "Be the class clown.",
      catchphrase: "honk honk",
      clothing: "Jester Costume",
      fav_color1: "Colorful",
      fav_color2: "Red",
      fav_style1: "Gorgeous",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Pinky",
      image_url: "https://dodo.ac/np/images/b/bf/Pinky_NH.png",
      species: "Bear",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 9",
      sign: "Virgo",
      quote: "Time spent with friends is time well spent.",
      catchphrase: "wah",
      clothing: "Silk Floral-Print Shirt",
      fav_color1: "Red",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Piper",
      image_url: "https://dodo.ac/np/images/0/09/Piper_NH.png",
      species: "Bird",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 18",
      sign: "Aries",
      quote: "Where there's life, there's hope.",
      catchphrase: "chickadee",
      clothing: "Lacy Shirt",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Pippy",
      image_url: "https://dodo.ac/np/images/a/a1/Pippy_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 14",
      sign: "Gemini",
      quote: "Fake it till you make it.",
      catchphrase: "li'l hare",
      clothing: "Overall Dress",
      fav_color1: "Green",
      fav_color2: "Brown",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Plucky",
      image_url: "https://dodo.ac/np/images/6/63/Plucky_NH.png",
      species: "Chicken",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 12",
      sign: "Libra",
      quote: "Keep your crumbs out of the bed.",
      catchphrase: "chicky-poo",
      clothing: "Bold Muumuu",
      fav_color1: "Aqua",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Pompom",
      image_url: "https://dodo.ac/np/images/3/32/Pompom_NH.png",
      species: "Duck",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 11",
      sign: "Aquarius",
      quote: "Happiness is a rainy day!",
      catchphrase: "rah rah",
      clothing: "Parka Dress",
      fav_color1: "Pink",
      fav_color2: "Aqua",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Poncho",
      image_url: "https://dodo.ac/np/images/f/f0/Poncho_NH.png",
      species: "Bear cub",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 2",
      sign: "Capricorn",
      quote: "Fortune favors the brave!",
      catchphrase: "li'l bear",
      clothing: "Energetic Sweater",
      fav_color1: "Orange",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Poppy",
      image_url: "https://dodo.ac/np/images/c/c4/Poppy_NH.png",
      species: "Squirrel",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 5",
      sign: "Leo",
      quote: "It's all about positive thinking!",
      catchphrase: "nutty",
      clothing: "Alpinist Dress",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Portia",
      image_url: "https://dodo.ac/np/images/c/ce/Portia_NH.png",
      species: "Dog",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "October 25",
      sign: "Scorpio",
      quote: "Charity begins at home.",
      catchphrase: "ruffian",
      clothing: "Rad Power Skirt Suit",
      fav_color1: "Purple",
      fav_color2: "Black",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Prince",
      image_url: "https://dodo.ac/np/images/a/a6/Prince_NH.png",
      species: "Frog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 21",
      sign: "Cancer",
      quote: "Catch more flies with honey than vinegar.",
      catchphrase: "burrup",
      clothing: "Striped Shirt",
      fav_color1: "Yellow",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Puck",
      image_url: "https://dodo.ac/np/images/5/53/Puck_NH.png",
      species: "Penguin",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 21",
      sign: "Pisces",
      quote: "A bad attitude will land you in the penalty box.",
      catchphrase: "brrrrrrrrr",
      clothing: "Ice-Hockey Uniform",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Puddles",
      image_url: "https://dodo.ac/np/images/f/f9/Puddles_NH.png",
      species: "Frog",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 13",
      sign: "Capricorn",
      quote: "Look before you leap.",
      catchphrase: "splish",
      clothing: "Retro Dress",
      fav_color1: "Green",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Pudge",
      image_url: "https://dodo.ac/np/images/8/87/Pudge_NH.png",
      species: "Bear cub",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 11",
      sign: "Gemini",
      quote: "There's no such thing as a free lunch.",
      catchphrase: "pudgy",
      clothing: "Letter Jacket",
      fav_color1: "Green",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Punchy",
      image_url: "https://dodo.ac/np/images/6/6d/Punchy_NH.png",
      species: "Cat",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "April 11",
      sign: "Aries",
      quote: "There's always more fish in the sea!",
      catchphrase: "mrmpht",
      clothing: "Madras Plaid Shirt",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Purrl",
      image_url: "https://dodo.ac/np/images/a/a2/Purrl_NH.png",
      species: "Cat",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 29",
      sign: "Gemini",
      quote: "Let them drink cream.",
      catchphrase: "kitten",
      clothing: "Kung-Fu Tee",
      fav_color1: "Gray",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Queenie",
      image_url: "https://dodo.ac/np/images/f/f1/Queenie_NH.png",
      species: "Ostrich",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 13",
      sign: "Scorpio",
      quote: "You never get a second chance to make a first impression.",
      catchphrase: "chicken",
      clothing: "Shirtdress",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Quillson",
      image_url: "https://dodo.ac/np/images/e/e4/Quillson_NH.png",
      species: "Duck",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 22",
      sign: "Capricorn",
      quote: "There is beauty in everything.",
      catchphrase: "ridukulous",
      clothing: "Checkered Muffler",
      fav_color1: "Beige",
      fav_color2: "Orange",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Quinn",
      image_url: "https://dodo.ac/np/images/a/a2/Quinn_amiibo.png",
      species: "Eagle",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 20",
      sign: "Aquarius",
      quote: "Step on a violet, and you'll smell forgiveness.",
      catchphrase: "proper",
      clothing: "Collarless Shirt",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Raddle",
      image_url: "https://dodo.ac/np/images/7/7a/Raddle_NH.png",
      species: "Frog",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 6",
      sign: "Gemini",
      quote: "A healthy mind makes for a healthy body.",
      catchphrase: "aaach—",
      clothing: "Doctor's Coat",
      fav_color1: "White",
      fav_color2: "Gray",
      fav_style1: "Elegant",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Rasher",
      image_url: "https://dodo.ac/np/images/e/e1/Rasher_NH.png",
      species: "Pig",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "April 7",
      sign: "Aries",
      quote: "Don't judge a book by its cover.",
      catchphrase: "swine",
      clothing: "Pineapple Aloha Shirt",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Raymond",
      image_url: "https://dodo.ac/np/images/2/2a/Raymond_NH.png",
      species: "Cat",
      personality: "Smug",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 1",
      sign: "Libra",
      quote: "Stay on brand!",
      catchphrase: "crisp",
      clothing: "Waistcoat",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Renée",
      image_url: "https://dodo.ac/np/images/e/ef/Ren%C3%A9e_NH.png",
      species: "Rhinoceros",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "May 28",
      sign: "Gemini",
      quote: "Reckless youth makes rueful age.",
      catchphrase: "yo yo yo",
      clothing: "Sailor's Tee",
      fav_color1: "Purple",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Reneigh",
      image_url: "https://dodo.ac/np/images/9/92/Reneigh_NH.png",
      species: "Horse",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "June 4",
      sign: "Gemini",
      quote: "You can only be you, so be the best you that you can be.",
      catchphrase: "ayup yup",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Black",
      fav_color2: "Purple",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Rex",
      image_url: "https://dodo.ac/np/images/7/78/Rex_NH.png",
      species: "Lion",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 24",
      sign: "Leo",
      quote: "Three wrongs don't make a right, but three rights make a left.",
      catchphrase: "cool cat",
      clothing: "Striped Shirt",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Rhonda",
      image_url: "https://dodo.ac/np/images/d/df/Rhonda_NH.png",
      species: "Rhinoceros",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 24",
      sign: "Aquarius",
      quote: "Don't look down your nose at people!",
      catchphrase: "bigfoot",
      clothing: "Ruffled Dress",
      fav_color1: "Purple",
      fav_color2: "Black",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Ribbot",
      image_url: "https://dodo.ac/np/images/9/94/Ribbot_NH.png",
      species: "Frog",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 13",
      sign: "Aquarius",
      quote: "Never rest, never rust.",
      catchphrase: "zzrrbbit",
      clothing: "Simple Parka",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Ricky",
      image_url: "https://dodo.ac/np/images/8/8d/Ricky_NH.png",
      species: "Squirrel",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 14",
      sign: "Virgo",
      quote: "You gotta break a few shells to get to the nut.",
      catchphrase: "nutcase",
      clothing: "Three-Ball Tee",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Rilla",
      image_url: "",
      species: "Gorilla",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "November 1",
      sign: "Scorpio",
      quote: "Where there's a will, there's a way.",
      catchphrase: "hello",
      clothing: "Hello Kitty Tee",
      fav_color1: "Red",
      fav_color2: "Blue",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Rio",
      image_url: "https://dodo.ac/np/images/7/7e/Rio_amiibo.png",
      species: "Ostrich",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 10",
      sign: "Virgo",
      quote: "Self-care? Best care.",
      catchphrase: "li'l chick",
      clothing: "Zigzag-Print Dress",
      fav_color1: "Orange",
      fav_color2: "Green",
      fav_style1: "Cool",
      fav_style2: "Cute",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Rizzo",
      image_url: "https://dodo.ac/np/images/6/69/Rizzo_NH.png",
      species: "Mouse",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 17",
      sign: "Capricorn",
      quote: "Evil lurks everywhere.",
      catchphrase: "squee",
      clothing: "Ninja Costume",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Roald",
      image_url: "https://dodo.ac/np/images/6/63/Roald_NH.png",
      species: "Penguin",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 5",
      sign: "Capricorn",
      quote: "You must learn to waddle before you can swim.",
      catchphrase: "b-b-buddy",
      clothing: "Flannel Shirt",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Robin",
      image_url: "https://dodo.ac/np/images/8/85/Robin_NH.png",
      species: "Bird",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 4",
      sign: "Sagittarius",
      quote: "Always keep your wings manicured so you can fly away.",
      catchphrase: "la-di-da",
      clothing: "Front-Tie Tee",
      fav_color1: "Aqua",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Rocco",
      image_url: "https://dodo.ac/np/images/0/02/Rocco_NH.png",
      species: "Hippo",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 18",
      sign: "Leo",
      quote: "The only thing to fear is fear itself... and wasps!",
      catchphrase: "hippie",
      clothing: "Danger Tank",
      fav_color1: "Yellow",
      fav_color2: "Black",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Rocket",
      image_url: "https://dodo.ac/np/images/5/58/Rocket_NH.png",
      species: "Gorilla",
      personality: "Big sister",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 14",
      sign: "Aries",
      quote: "Art feeds the soul. So does pizza.",
      catchphrase: "vroom",
      clothing: "No. 4 Shirt",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Rod",
      image_url: "https://dodo.ac/np/images/e/ea/Rod_NH.png",
      species: "Mouse",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 14",
      sign: "Leo",
      quote: "If you can't beat 'em, work harder.",
      catchphrase: "ace",
      clothing: "Striped Tank",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Rodeo",
      image_url: "https://dodo.ac/np/images/6/6c/Rodeo_NH.png",
      species: "Bull",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "October 29",
      sign: "Scorpio",
      quote: "Zzzzzzzzzzzzzzzzz...",
      catchphrase: "chaps",
      clothing: "Graduation Gown",
      fav_color1: "Black",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Rodney",
      image_url: "https://dodo.ac/np/images/3/35/Rodney_NH.png",
      species: "Hamster",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 10",
      sign: "Scorpio",
      quote: "Everything is temporary.",
      catchphrase: "le ham",
      clothing: "Striped Tank",
      fav_color1: "Pink",
      fav_color2: "Colorful",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Rolf",
      image_url: "https://dodo.ac/np/images/9/93/Rolf_NH.png",
      species: "Tiger",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 22",
      sign: "Leo",
      quote: "Don't skip lunch. Ever.",
      catchphrase: "grrrolf",
      clothing: "Down Jacket",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Rooney",
      image_url: "https://dodo.ac/np/images/7/79/Rooney_NH.png",
      species: "Kangaroo",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 1",
      sign: "Sagittarius",
      quote: "Bob and weave! Bob and weave!",
      catchphrase: "punches",
      clothing: "Sleeveless Parka",
      fav_color1: "Gray",
      fav_color2: "Black",
      fav_style1: "Active",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Rory",
      image_url: "https://dodo.ac/np/images/d/db/Rory_NH.png",
      species: "Lion",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 7",
      sign: "Leo",
      quote: "Set 'em up and knock 'em down.",
      catchphrase: "capital",
      clothing: "Sea Hanten Shirt",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Roscoe",
      image_url: "https://dodo.ac/np/images/8/8e/Roscoe_NH.png",
      species: "Horse",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 16",
      sign: "Gemini",
      quote: "Trouble rides a fast horse.",
      catchphrase: "nay",
      clothing: "Biker Jacket",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Rosie",
      image_url: "https://dodo.ac/np/images/6/67/Rosie_NH.png",
      species: "Cat",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 27",
      sign: "Pisces",
      quote: "One good purr deserves another.",
      catchphrase: "silly",
      clothing: "Dazed Dress",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Roswell",
      image_url: "https://dodo.ac/np/images/d/df/Roswell_amiibo.png",
      species: "Alligator",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "May 2",
      sign: "Taurus",
      quote: "Keep your eyes on the skies.",
      catchphrase: "spaaace",
      clothing: "Pineapple Aloha Shirt",
      fav_color1: "Beige",
      fav_color2: "Brown",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Rowan",
      image_url: "https://dodo.ac/np/images/d/df/Rowan_NH.png",
      species: "Tiger",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 26",
      sign: "Virgo",
      quote: "Refuse to lose.",
      catchphrase: "mango",
      clothing: "Simple-Dots Tee",
      fav_color1: "Aqua",
      fav_color2: "Gray",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Ruby",
      image_url: "https://dodo.ac/np/images/4/41/Ruby_NH.png",
      species: "Rabbit",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "December 25",
      sign: "Capricorn",
      quote: "You can always take the red-eye.",
      catchphrase: "li'l ears",
      clothing: "Rabbit Tee",
      fav_color1: "Aqua",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Rudy",
      image_url: "https://dodo.ac/np/images/7/7e/Rudy_NH.png",
      species: "Cat",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 20",
      sign: "Sagittarius",
      quote: "Always land on your feet!",
      catchphrase: "mush",
      clothing: "Simple Parka",
      fav_color1: "Yellow",
      fav_color2: "Beige",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Sally",
      image_url: "https://dodo.ac/np/images/a/a3/Sally_NH.png",
      species: "Squirrel",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 19",
      sign: "Gemini",
      quote: "Even the smallest acorn may grow into the tallest tree.",
      catchphrase: "nutmeg",
      clothing: "Snowy Sweater",
      fav_color1: "White",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Samson",
      image_url: "https://dodo.ac/np/images/9/9b/Samson_NH.png",
      species: "Mouse",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 5",
      sign: "Cancer",
      quote: "Squeak softly and carry a big stick.",
      catchphrase: "pipsqueak",
      clothing: "Kanji Tee",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Sandy",
      image_url: "https://dodo.ac/np/images/a/a9/Sandy_NH.png",
      species: "Ostrich",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 21",
      sign: "Libra",
      quote: "Soaring through the sky takes more than a pair of wings.",
      catchphrase: "speedy",
      clothing: "Striped Tank",
      fav_color1: "Aqua",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Sasha",
      image_url: "https://dodo.ac/np/images/9/90/Sasha_amiibo.png",
      species: "Rabbit",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 19",
      sign: "Taurus",
      quote: "Timing is everything.",
      catchphrase: "hoppity",
      clothing: "Letter Jacket",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Savannah",
      image_url: "https://dodo.ac/np/images/4/46/Savannah_NH.png",
      species: "Horse",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 25",
      sign: "Aquarius",
      quote: "Keep your chin up!",
      catchphrase: "y'all",
      clothing: "Top Coat",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Scoot",
      image_url: "https://dodo.ac/np/images/e/ec/Scoot_NH.png",
      species: "Duck",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 13",
      sign: "Gemini",
      quote: "Some birds avoid the water, ducks look for it.",
      catchphrase: "zip zoom",
      clothing: "Frog Tee",
      fav_color1: "Beige",
      fav_color2: "Blue",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Shari",
      image_url: "https://dodo.ac/np/images/7/72/Shari_NH.png",
      species: "Monkey",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 10",
      sign: "Aries",
      quote: "A good start leads to a good end.",
      catchphrase: "cheeky",
      clothing: "Garden Tank",
      fav_color1: "Aqua",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Sheldon",
      image_url: "https://dodo.ac/np/images/c/ce/Sheldon_NH.png",
      species: "Squirrel",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "February 26",
      sign: "Pisces",
      quote: "Winners don't quit, and quitters never win.",
      catchphrase: "cardio",
      clothing: "Tiger Jacket",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Shep",
      image_url: "https://dodo.ac/np/images/c/c1/Shep_NH.png",
      species: "Dog",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 24",
      sign: "Sagittarius",
      quote: "Even dogs won't get in the middle of true love.",
      catchphrase: "baa baa baa",
      clothing: "Denim Vest",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Sherb",
      image_url: "https://dodo.ac/np/images/1/18/Sherb_NH.png",
      species: "Goat",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "January 18",
      sign: "Capricorn",
      quote: "Forty winks is never enough.",
      catchphrase: "bawwww",
      clothing: "Snowy Sweater",
      fav_color1: "Gray",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Shino",
      image_url: "https://dodo.ac/np/images/2/26/Shino_amiibo.png",
      species: "Deer",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 31",
      sign: "Scorpio",
      quote: "Better the demon you know than the one you do not.",
      catchphrase: "okaaay",
      clothing: "Morning-Glory Yukata",
      fav_color1: "Red",
      fav_color2: "Black",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Simon",
      image_url: "https://dodo.ac/np/images/6/68/Simon_NH.png",
      species: "Monkey",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "January 19",
      sign: "Capricorn",
      quote: "Friends go together like peanut butter and bananas.",
      catchphrase: "zzzook",
      clothing: "Striped Tank",
      fav_color1: "Red",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Skye",
      image_url: "https://dodo.ac/np/images/d/d1/Skye_NH.png",
      species: "Wolf",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "March 24",
      sign: "Aries",
      quote: "Love makes the world go 'round.",
      catchphrase: "airmail",
      clothing: "Peasant Blouse",
      fav_color1: "Blue",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Sly",
      image_url: "https://dodo.ac/np/images/7/70/Sly_NH.png",
      species: "Alligator",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 15",
      sign: "Scorpio",
      quote: "Don't bite off more than you can chew.",
      catchphrase: "hoo-rah",
      clothing: "Camo Tee",
      fav_color1: "Brown",
      fav_color2: "Green",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Snake",
      image_url: "https://dodo.ac/np/images/e/ec/Snake_NH.png",
      species: "Rabbit",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 3",
      sign: "Scorpio",
      quote: "A good ninja is neither seen nor heard.",
      catchphrase: "bunyip",
      clothing: "Ninja Costume",
      fav_color1: "Black",
      fav_color2: "Blue",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Snooty",
      image_url: "https://dodo.ac/np/images/6/63/Snooty_NH.png",
      species: "Anteater",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 24",
      sign: "Scorpio",
      quote: "Request forgiveness, not permission.",
      catchphrase: "sniffff",
      clothing: "Misty Tee",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Soleil",
      image_url: "https://dodo.ac/np/images/d/de/Soleil_NH.png",
      species: "Hamster",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "August 9",
      sign: "Leo",
      quote: "Sometimes dreams are merely dreams.",
      catchphrase: "tarnation",
      clothing: "Sari",
      fav_color1: "Red",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Sparro",
      image_url: "https://dodo.ac/np/images/3/32/Sparro_NH.png",
      species: "Bird",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "November 20",
      sign: "Scorpio",
      quote: "The proof of the pudding is in the eating.",
      catchphrase: "like whoa",
      clothing: "Earbuds Combo",
      fav_color1: "Green",
      fav_color2: "Gray",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Spike",
      image_url: "https://dodo.ac/np/images/f/f1/Spike_NH.png",
      species: "Rhinoceros",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 17",
      sign: "Gemini",
      quote: "Keep your eye on the ball.",
      catchphrase: "punk",
      clothing: "Gold-Print Tee",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Spork",
      image_url: "https://dodo.ac/np/images/c/c2/Spork_NH.png",
      species: "Pig",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 3",
      sign: "Virgo",
      quote: "It's never too late for a snack.",
      catchphrase: "snork",
      clothing: "Layered Shirt",
      fav_color1: "Green",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Sprinkle",
      image_url: "https://dodo.ac/np/images/4/44/Sprinkle_NH.png",
      species: "Penguin",
      personality: "Peppy",
      sub_personality: "A",
      gender: "Female",
      birthday: "February 20",
      sign: "Pisces",
      quote: "Frosting is just the icing on the cake.",
      catchphrase: "frappe",
      clothing: "Snowy Sweater",
      fav_color1: "Aqua",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Sprocket",
      image_url: "https://dodo.ac/np/images/8/8b/Sprocket_NH.png",
      species: "Ostrich",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 1",
      sign: "Sagittarius",
      quote: "Strike while the iron is hot.",
      catchphrase: "zort",
      clothing: "Jumper Work Suit",
      fav_color1: "Orange",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Static",
      image_url: "https://dodo.ac/np/images/6/68/Static_NH.png",
      species: "Squirrel",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "July 9",
      sign: "Cancer",
      quote: "Lightning never strikes twice.",
      catchphrase: "krzzt",
      clothing: "Dragon Jacket",
      fav_color1: "Black",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Stella",
      image_url: "https://dodo.ac/np/images/9/95/Stella_NH.png",
      species: "Sheep",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "April 9",
      sign: "Aries",
      quote: "100% Natural Fiber.",
      catchphrase: "baa-dabing",
      clothing: "Flower Sweater",
      fav_color1: "Yellow",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Sterling",
      image_url: "https://dodo.ac/np/images/4/4f/Sterling_NH.png",
      species: "Eagle",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 11",
      sign: "Sagittarius",
      quote: "Discretion is the better part of valor.",
      catchphrase: "skraaaaw",
      clothing: "Cavalier Shirt",
      fav_color1: "Blue",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Elegant",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Stinky",
      image_url: "https://dodo.ac/np/images/9/9c/Stinky_NH.png",
      species: "Cat",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 17",
      sign: "Leo",
      quote: "If the mask fits, wear it!",
      catchphrase: "GAAHHH",
      clothing: "Athletic Jacket",
      fav_color1: "Red",
      fav_color2: "Blue",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Stitches",
      image_url: "https://dodo.ac/np/images/5/56/Stitches_NH.png",
      species: "Bear cub",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "February 10",
      sign: "Aquarius",
      quote: "A stitch in time saves nine.",
      catchphrase: "stuffin'",
      clothing: "Starry Tank",
      fav_color1: "Colorful",
      fav_color2: "White",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Stu",
      image_url: "https://dodo.ac/np/images/f/fa/Stu_NH.png",
      species: "Bull",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 20",
      sign: "Taurus",
      quote: "As a cow grows, so do its nostrils.",
      catchphrase: "mrooooo",
      clothing: "Yodel Sweater",
      fav_color1: "Brown",
      fav_color2: "Beige",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Sydney",
      image_url: "https://dodo.ac/np/images/3/3f/Sydney_NH.png",
      species: "Koala",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 21",
      sign: "Gemini",
      quote: "Sail wherever the wind takes you.",
      catchphrase: "sunshine",
      clothing: "Overall Dress",
      fav_color1: "Beige",
      fav_color2: "Yellow",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Sylvana",
      image_url: "https://dodo.ac/np/images/f/fc/Sylvana_NH.png",
      species: "Squirrel",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 22",
      sign: "Libra",
      quote: "Remember to see the forest between the trees.",
      catchphrase: "hubbub",
      clothing: "Kiwi Dress",
      fav_color1: "Green",
      fav_color2: "Purple",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Sylvia",
      image_url: "https://dodo.ac/np/images/9/93/Sylvia_NH.png",
      species: "Kangaroo",
      personality: "Big sister",
      sub_personality: "B",
      gender: "Female",
      birthday: "May 3",
      sign: "Taurus",
      quote: "Hop first; ask questions later.",
      catchphrase: "boing",
      clothing: "Tropical Muumuu",
      fav_color1: "Yellow",
      fav_color2: "Green",
      fav_style1: "Simple",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "T-Bone",
      image_url: "https://dodo.ac/np/images/e/e0/T-Bone_NH.png",
      species: "Bull",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 20",
      sign: "Taurus",
      quote: "Don't have a cow.",
      catchphrase: "moocher",
      clothing: "Hanten Jacket",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Tabby",
      image_url: "https://dodo.ac/np/images/2/2f/Tabby_NH.png",
      species: "Cat",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 13",
      sign: "Leo",
      quote: "You can never have too much of a good thing!",
      catchphrase: "me-WOW",
      clothing: "Tee Dress",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Active",
      fav_style2: "Cool",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Tad",
      image_url: "https://dodo.ac/np/images/6/67/Tad_NH.png",
      species: "Frog",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 3",
      sign: "Leo",
      quote: "Take a leap!",
      catchphrase: "sluuuurp",
      clothing: "One-Ball Tee",
      fav_color1: "Yellow",
      fav_color2: "Colorful",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Tammi",
      image_url: "https://dodo.ac/np/images/a/a8/Tammi_NH.png",
      species: "Monkey",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 2",
      sign: "Aries",
      quote: "Always be down to monkey around!",
      catchphrase: "chimpy",
      clothing: "Silk Floral-Print Shirt",
      fav_color1: "Purple",
      fav_color2: "Green",
      fav_style1: "Cute",
      fav_style2: "Active",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Tammy",
      image_url: "https://dodo.ac/np/images/a/aa/Tammy_NH.png",
      species: "Bear cub",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "June 23",
      sign: "Cancer",
      quote: "If a job is worth doing, do it right!",
      catchphrase: "ya heard",
      clothing: "Hawk Jacket",
      fav_color1: "Red",
      fav_color2: "Purple",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Tangy",
      image_url: "https://dodo.ac/np/images/6/6f/Tangy_NH.png",
      species: "Cat",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "June 17",
      sign: "Gemini",
      quote: "When life gives you lemons, make lemonade!",
      catchphrase: "reeeeOWR",
      clothing: "Retro Dress",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Tank",
      image_url: "https://dodo.ac/np/images/d/d9/Tank_NH.png",
      species: "Rhinoceros",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "May 6",
      sign: "Taurus",
      quote: "Remember to keep your core muscles engaged!",
      catchphrase: "kerPOW",
      clothing: "No. 1 Shirt",
      fav_color1: "Red",
      fav_color2: "Green",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Tasha",
      image_url: "https://dodo.ac/np/images/3/35/Tasha_NH.png",
      species: "Squirrel",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "November 30",
      sign: "Sagittarius",
      quote: "There's no such thing as a safe secret.",
      catchphrase: "nice nice",
      clothing: "Collarless Coat",
      fav_color1: "Beige",
      fav_color2: "Gray",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Teddy",
      image_url: "https://dodo.ac/np/images/b/b9/Teddy_NH.png",
      species: "Bear",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "September 26",
      sign: "Libra",
      quote: "No pain, no gain!",
      catchphrase: "grooof",
      clothing: "Energetic Sweater",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Tex",
      image_url: "https://dodo.ac/np/images/4/44/Tex_NH.png",
      species: "Penguin",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 6",
      sign: "Libra",
      quote: "Rules were made to be broken.",
      catchphrase: "picante",
      clothing: "Letter Jacket",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Tia",
      image_url: "https://dodo.ac/np/images/0/0d/Tia_NH.png",
      species: "Elephant",
      personality: "Normal",
      sub_personality: "A",
      gender: "Female",
      birthday: "November 18",
      sign: "Scorpio",
      quote: "Tea is a cup of life.",
      catchphrase: "teacup",
      clothing: "Maid Dress",
      fav_color1: "Black",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Tiansheng",
      image_url: "https://dodo.ac/np/images/5/5d/Tiansheng_amiibo.png",
      species: "Monkey",
      personality: "Jock",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 18",
      sign: "Leo",
      quote: "The world is more swole than you will ever fully know.",
      catchphrase: "wuwu",
      clothing: "Dragon Suit",
      fav_color1: "Green",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Tiffany",
      image_url: "https://dodo.ac/np/images/f/f0/Tiffany_NH.png",
      species: "Rabbit",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 9",
      sign: "Capricorn",
      quote: "What is cheap is most costly.",
      catchphrase: "bunbun",
      clothing: "Chic Tuxedo Dress",
      fav_color1: "Black",
      fav_color2: "Red",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Timbra",
      image_url: "https://dodo.ac/np/images/6/6f/Timbra_NH.png",
      species: "Sheep",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "October 21",
      sign: "Libra",
      quote: "Don't pine for the past.",
      catchphrase: "pine nut",
      clothing: "Aran-Knit Sweater",
      fav_color1: "Green",
      fav_color2: "Brown",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Tipper",
      image_url: "https://dodo.ac/np/images/7/75/Tipper_NH.png",
      species: "Cow",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 25",
      sign: "Virgo",
      quote: "It takes two to tango.",
      catchphrase: "pushy",
      clothing: "Retro Sweater",
      fav_color1: "Colorful",
      fav_color2: "Pink",
      fav_style1: "Gorgeous",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Toby",
      image_url: "",
      species: "Rabbit",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "July 10",
      sign: "Cancer",
      quote: "Toby or not Toby? I don't know, I'm asking you.",
      catchphrase: "ribbit",
      clothing: "Kerokerokeroppi Tank Top",
      fav_color1: "Green",
      fav_color2: "Orange",
      fav_style1: "Cute",
      fav_style2: "Elegant",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Tom",
      image_url: "https://dodo.ac/np/images/d/d1/Tom_NH.png",
      species: "Cat",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "December 10",
      sign: "Sagittarius",
      quote: "There's no use crying over spilled milk.",
      catchphrase: "me-YOWZA",
      clothing: "Bulldog Jacket",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Truffles",
      image_url: "https://dodo.ac/np/images/e/eb/Truffles_NH.png",
      species: "Pig",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 28",
      sign: "Leo",
      quote: "The best things in life are free.",
      catchphrase: "snoutie",
      clothing: "Tee-Parka Combo",
      fav_color1: "Green",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Tucker",
      image_url: "https://dodo.ac/np/images/7/7c/Tucker_NH.png",
      species: "Elephant",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "September 7",
      sign: "Virgo",
      quote: "Time makes fossils of us all.",
      catchphrase: "fuzzers",
      clothing: "Caveman Tank",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Tutu",
      image_url: "https://dodo.ac/np/images/9/93/Tutu_NH.png",
      species: "Bear",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 15",
      sign: "Virgo",
      quote: "Even the best of friends start out as strangers.",
      catchphrase: "twinkles",
      clothing: "Heart Sweater",
      fav_color1: "Pink",
      fav_color2: "Red",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Twiggy",
      image_url: "https://dodo.ac/np/images/6/67/Twiggy_NH.png",
      species: "Bird",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 13",
      sign: "Cancer",
      quote: "It's the early bird that catches the worm!",
      catchphrase: "cheepers",
      clothing: "Striped Tank",
      fav_color1: "Pink",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Tybalt",
      image_url: "https://dodo.ac/np/images/0/0f/Tybalt_NH.png",
      species: "Tiger",
      personality: "Jock",
      sub_personality: "A",
      gender: "Male",
      birthday: "August 19",
      sign: "Leo",
      quote: "There's no excuse for half-baked potatoes.",
      catchphrase: "grrrRAH",
      clothing: "Simple Parka",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Ursala",
      image_url: "https://dodo.ac/np/images/6/65/Ursala_NH.png",
      species: "Bear",
      personality: "Big sister",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 16",
      sign: "Capricorn",
      quote: "Surround yourself with things you love.",
      catchphrase: "grooomph",
      clothing: "Striped Maxi Dress",
      fav_color1: "Red",
      fav_color2: "Orange",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Velma",
      image_url: "https://dodo.ac/np/images/5/59/Velma_NH.png",
      species: "Goat",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 14",
      sign: "Capricorn",
      quote: "Work smarter, not harder.",
      catchphrase: "blih",
      clothing: "Prim Outfit",
      fav_color1: "Aqua",
      fav_color2: "Purple",
      fav_style1: "Elegant",
      fav_style2: "Gorgeous",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Vesta",
      image_url: "https://dodo.ac/np/images/7/7c/Vesta_NH.png",
      species: "Sheep",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "April 16",
      sign: "Aries",
      quote: "No sweater off my back.",
      catchphrase: "baaaffo",
      clothing: "Hand-Knit Tank",
      fav_color1: "Orange",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Vic",
      image_url: "https://dodo.ac/np/images/1/1d/Vic_NH.png",
      species: "Bull",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "December 29",
      sign: "Capricorn",
      quote: "You mess with the bull, you get the horns.",
      catchphrase: "cud",
      clothing: "Viking Top",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Victoria",
      image_url: "https://dodo.ac/np/images/d/da/Victoria_NH.png",
      species: "Horse",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 11",
      sign: "Cancer",
      quote: "Don't put the cart before the horse.",
      catchphrase: "sugar cube",
      clothing: "One-Ball Tee",
      fav_color1: "Yellow",
      fav_color2: "Orange",
      fav_style1: "Active",
      fav_style2: "Simple",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Violet",
      image_url: "https://dodo.ac/np/images/6/6b/Violet_NH.png",
      species: "Gorilla",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 1",
      sign: "Virgo",
      quote: "Pearls are a pink gorilla's best friend.",
      catchphrase: "sweetie",
      clothing: "Poncho-Style Sweater",
      fav_color1: "Purple",
      fav_color2: "Pink",
      fav_style1: "Gorgeous",
      fav_style2: "Cool",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Vivian",
      image_url: "https://dodo.ac/np/images/2/24/Vivian_NH.png",
      species: "Wolf",
      personality: "Snooty",
      sub_personality: "A",
      gender: "Female",
      birthday: "January 26",
      sign: "Aquarius",
      quote: "Onwards and upwards!",
      catchphrase: "piffle",
      clothing: "Peacoat-and-Skirt Combo",
      fav_color1: "Gray",
      fav_color2: "Purple",
      fav_style1: "Gorgeous",
      fav_style2: "Elegant",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Vladimir",
      image_url: "https://dodo.ac/np/images/7/75/Vladimir_NH.png",
      species: "Bear cub",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 2",
      sign: "Leo",
      quote: "Trouble never comes alone.",
      catchphrase: "nyet",
      clothing: "Striped Shirt",
      fav_color1: "Yellow",
      fav_color2: "Colorful",
      fav_style1: "Simple",
      fav_style2: "Cool",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Wade",
      image_url: "https://dodo.ac/np/images/5/52/Wade_NH.png",
      species: "Penguin",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "October 30",
      sign: "Scorpio",
      quote: "Which came first, the seeds or the sunflower?",
      catchphrase: "so it goes",
      clothing: "Frog Tee",
      fav_color1: "Aqua",
      fav_color2: "Blue",
      fav_style1: "Simple",
      fav_style2: "Gorgeous",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Walker",
      image_url: "https://dodo.ac/np/images/0/0f/Walker_NH.png",
      species: "Dog",
      personality: "Lazy",
      sub_personality: "B",
      gender: "Male",
      birthday: "June 10",
      sign: "Gemini",
      quote: "The dog wags his tail, not for you, but for your bread.",
      catchphrase: "wuh",
      clothing: "Five-Ball Tee",
      fav_color1: "Orange",
      fav_color2: "Red",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Play"
    }
  },
  {
    title: {
      name: "Walt",
      image_url: "https://dodo.ac/np/images/b/bf/Walt_NH.png",
      species: "Kangaroo",
      personality: "Cranky",
      sub_personality: "A",
      gender: "Male",
      birthday: "April 24",
      sign: "Taurus",
      quote: "Take the good with the bad.",
      catchphrase: "pockets",
      clothing: "Casual Kimono",
      fav_color1: "Black",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "",
      hobby: "Fitness"
    }
  },
  {
    title: {
      name: "Wart Jr.",
      image_url: "https://dodo.ac/np/images/2/21/Wart_Jr._NH.png",
      species: "Frog",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "August 21",
      sign: "Leo",
      quote: "Age before beauty.",
      catchphrase: "grr-ribbit",
      clothing: "Hanten Jacket",
      fav_color1: "Blue",
      fav_color2: "Purple",
      fav_style1: "Simple",
      fav_style2: "",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Weber",
      image_url: "https://dodo.ac/np/images/6/66/Weber_NH.png",
      species: "Duck",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 30",
      sign: "Cancer",
      quote: "Today's adults are yesterday's children.",
      catchphrase: "quaa",
      clothing: "Striped Shirt",
      fav_color1: "Blue",
      fav_color2: "Black",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Nature"
    }
  },
  {
    title: {
      name: "Wendy",
      image_url: "https://dodo.ac/np/images/2/23/Wendy_NH.png",
      species: "Sheep",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "August 15",
      sign: "Leo",
      quote: "Every cloud has a silver lining.",
      catchphrase: "lambkins",
      clothing: "Watermelon Dress",
      fav_color1: "Red",
      fav_color2: "Green",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Whitney",
      image_url: "https://dodo.ac/np/images/3/36/Whitney_NH.png",
      species: "Wolf",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "September 17",
      sign: "Virgo",
      quote: "Don't cry wolf unless you mean it.",
      catchphrase: "snappy",
      clothing: "Sleeveless Shirtdress",
      fav_color1: "Blue",
      fav_color2: "Aqua",
      fav_style1: "Elegant",
      fav_style2: "Cool",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Willow",
      image_url: "https://dodo.ac/np/images/6/62/Willow_NH.png",
      species: "Sheep",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "November 26",
      sign: "Sagittarius",
      quote: "You can't fight your genes.",
      catchphrase: "bo peep",
      clothing: "Pom-Pom Sweater",
      fav_color1: "White",
      fav_color2: "Pink",
      fav_style1: "Cute",
      fav_style2: "Gorgeous",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Winnie",
      image_url: "https://dodo.ac/np/images/b/b8/Winnie_NH.png",
      species: "Horse",
      personality: "Peppy",
      sub_personality: "B",
      gender: "Female",
      birthday: "January 31",
      sign: "Aquarius",
      quote: "Smile, and the world smiles with you.",
      catchphrase: "hay-OK",
      clothing: "Faux-Hair Sweater",
      fav_color1: "White",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Simple",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Wolfgang",
      image_url: "https://dodo.ac/np/images/a/aa/Wolfgang_NH.png",
      species: "Wolf",
      personality: "Cranky",
      sub_personality: "B",
      gender: "Male",
      birthday: "November 25",
      sign: "Sagittarius",
      quote: "Don't be afraid to show your fangs.",
      catchphrase: "snarrrl",
      clothing: "Flight Jacket",
      fav_color1: "Black",
      fav_color2: "Green",
      fav_style1: "Cool",
      fav_style2: "Active",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Yuka",
      image_url: "https://dodo.ac/np/images/c/ca/Yuka_NH.png",
      species: "Koala",
      personality: "Snooty",
      sub_personality: "B",
      gender: "Female",
      birthday: "July 20",
      sign: "Cancer",
      quote: "Beauty is in the eye of the beholder.",
      catchphrase: "tsk tsk",
      clothing: "Aran-Knit Sweater",
      fav_color1: "Orange",
      fav_color2: "Yellow",
      fav_style1: "Cool",
      fav_style2: "Elegant",
      hobby: "Fashion"
    }
  },
  {
    title: {
      name: "Zell",
      image_url: "https://dodo.ac/np/images/c/c0/Zell_NH.png",
      species: "Deer",
      personality: "Smug",
      sub_personality: "A",
      gender: "Male",
      birthday: "June 7",
      sign: "Gemini",
      quote: "Clothes totally make the mammal.",
      catchphrase: "pronk",
      clothing: "Gilet and Shirt",
      fav_color1: "Purple",
      fav_color2: "Gray",
      fav_style1: "Cool",
      fav_style2: "Gorgeous",
      hobby: "Music"
    }
  },
  {
    title: {
      name: "Zoe",
      image_url: "https://dodo.ac/np/images/0/0b/Zoe_amiibo.png",
      species: "Anteater",
      personality: "Normal",
      sub_personality: "B",
      gender: "Female",
      birthday: "February 10",
      sign: "Aquarius",
      quote: "Don't sign until you've read the whole thing.",
      catchphrase: "zoozooroo",
      clothing: "Silk Floral-Print Shirt",
      fav_color1: "Pink",
      fav_color2: "White",
      fav_style1: "Cute",
      fav_style2: "Simple",
      hobby: "Education"
    }
  },
  {
    title: {
      name: "Zucker",
      image_url: "https://dodo.ac/np/images/7/7f/Zucker_NH.png",
      species: "Octopus",
      personality: "Lazy",
      sub_personality: "A",
      gender: "Male",
      birthday: "March 8",
      sign: "Pisces",
      quote: "There's no such thing as luck.",
      catchphrase: "bloop",
      clothing: "Happi Tee",
      fav_color1: "Blue",
      fav_color2: "Yellow",
      fav_style1: "Simple",
      fav_style2: "Cute",
      hobby: "Nature"
    }
  }
];

console.log('ACNH Data:', acnhData);