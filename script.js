const buttons = document.getElementsByClassName("button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__action--negative");

console.log(closeModal)
console.log(buttons);

backdrop.addEventListener("click", () => {
    backdrop.style.display =  "none";
        modal.style.display = "none";
})

closeModal.addEventListener("click", () => {
        backdrop.style.display =  "none";
        modal.style.display = "none";
})

for(i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
       backdrop.style.display =  "block";
        modal.style.display = "block";
    })
}



