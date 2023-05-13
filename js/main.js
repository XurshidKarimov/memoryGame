let html = document.documentElement;
let darkBTN = document.querySelector(".darkBTN");

darkBTN.addEventListener("click", () => {
    html.classList.toggle("dark");
})

let animalsArray = ["cow","elephant","flamingo","horse","lynx","panda-bear","rabbit","sheep","tiger","zebra"];

function shuffle(arr){
    return [...arr].sort(() => Math.random() - 0.5);
}

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

console.log(animals);