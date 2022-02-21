const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation",
        platimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox",
        platimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png",
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch",
        platimg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png",
    }
];

function VideoGames(platform, image, platImge, price, name, desc, platColor) {

    // creating main elements
    let that = this;
    this.ele1 = document.createElement("div");
    this.ele1.classList.add("product", platform)

    this.gameImg = document.createElement("img");
    this.gameImg.classList.add("prdImg");
    this.gameImg.src = image;

    this.platformImg = document.createElement("img");
    this.platformImg.classList.add("plat");
    this.platformImg.src = platImge

    this.gameDivPrice = document.createElement("h3");
    this.gameDivPrice.innerHTML = price;

    //Creating popUp menu items
    this.ele2 = document.createElement("div");

    this.popUpimg = document.createElement("img");
    this.popUpimg.src = image;

    this.popUpdivName = document.createElement("h1");
    this.popUpdivName.innerHTML = name;

    this.popUpPrice = document.createElement("h2");
    this.popUpPrice.innerHTML = price;

    this.popUpDesc = document.createElement("p");
    this.popUpDesc.innerHTML = desc;

    this.popUpPlat = document.createElement("p");
    this.popUpPlat.innerHTML = platform;
    this.popUpPlat.style.color = platColor;

    //Creating eventListener for popUp menu
    this.ele1.addEventListener("click", function () {
        that.VideoGamesPopupMenu()
    })

    //Creating eventListener to remove popUp menu
    this.ele2.addEventListener("click", function () {
        document.body.innerHTML = "";
        writeGames();
        that.ele2.classList.remove("popUp2");
    })

    //Appending main elements to the body
    this.ele1.appendChild(this.gameImg);
    this.ele1.appendChild(this.gameDivPrice);
    this.ele1.appendChild(this.platformImg);
    document.body.appendChild(this.ele1);
}

//prototype function for the popup menu on the click
VideoGames.prototype.VideoGamesPopupMenu = function (){
    //Adding style to the popup menu
    this.ele2.classList.toggle("popUp2");
    this.popUpimg.classList.add("prdImg", "product");

    //Appending popup menu elements
    this.ele2.appendChild(this.popUpimg);
    this.ele2.appendChild(this.popUpdivName);
    this.ele2.appendChild(this.popUpPrice);
    this.ele2.appendChild(this.popUpDesc);
    this.ele2.appendChild(this.popUpPlat);
    document.body.appendChild(this.ele2);
}

// Creating the 3 instance of VideoGames()
function writeGames() {
    // Creating array to save the 3 instances
    let gameArray = [];
    // Creating color array for styling platform text color
    let colorArray = ["blue", "green", "red"];
    //for loop to call the Vediogames function
    for (let i = 0; i < games.length; i++) {
        gameArray.push(new VideoGames(
            games[i].platform,
            games[i].img,
            games[i].platimg,
            games[i].price,
            games[i].name,
            games[i].description,
            colorArray[i]
        ));
    }
}
writeGames();
