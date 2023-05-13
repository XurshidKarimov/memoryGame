let html = document.documentElement;
let darkBTN = document.querySelector(".darkBTN");
let turned = false;
let cardsBlock = document.querySelector(".cards-block");

darkBTN.addEventListener("click", () => {
    html.classList.toggle("dark");
})

let animalsArray = [{ name: "cow", },{ name: "elephant", },{ name: "flamingo", }, { name: "horse", }, { name: "lynx", }, { name: "panda-bear",},
    { name: "rabbit", }, { name: "sheep", }, { name: "tiger", }, { name: "zebra", } ]
    .map(element => {
        element.imgsrc = `./assets/img/tinified/${element.name}.png`;
        element.alt = element.name;

        return element;
    });

animalsArray = animalsArray.concat(animalsArray);

// animalsArray.forEach(element => {
//     addClickEvent(element);
// })

function shuffle(arr){
    return [...arr].sort(() => Math.random() - 0.5);
}

function elementDataCheck(element1, element2){
    return (element1.dataset.animalName === element2.dataset.animalName);
}

// function addClickEvent(element){
//     element.addEventListener("click", () => {
//         element.classList.add("turn");
//     })
// }

function cardRender(parent, arr){
   
    let fragment = new DocumentFragment();
    

    for(let x = 0; x < arr.length; x++){
        let cardTemplate = document.querySelector("#cardTemplate").cloneNode(true).content;
        let cardElement = cardTemplate.querySelector(".card");
        let cardIMG = cardElement.querySelector("img");

        cardElement.setAttribute("data-animalName", arr[x].name);
        cardIMG.setAttribute("src", arr[x].imgsrc);
        cardIMG.setAttribute("alt", arr[x].alt);

        fragment.append(cardElement);
    }

    parent.append(fragment);
}

cardRender(cardsBlock, shuffle(animalsArray));


let animals = new Map([
    ["cow", "cow"],
    ["elephant", "elephant"],
    ["flamingo", "flamingo"],
    ["horse", "horse"],
    ["lynx", "lynx"],
    ["panda-bear", "panda-bear"],
    ["rabbit", "rabbit"],
    ["sheep", "sheep"],
    ["tiger", "tiger"],
    ["zebra", "zebra"],
])