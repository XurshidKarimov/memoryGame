let html = document.documentElement;
let darkBTN = document.querySelector(".darkBTN");

darkBTN.addEventListener("click", () => {
    html.classList.toggle("dark");
})


let animals = new Map([
    ["cow", "cow"],
])

console.log(animals);