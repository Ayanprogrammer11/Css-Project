let selectPlanButtons = document.querySelectorAll(".plan button");
let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");



for(i = 0; i <= selectPlanButtons.length; i++) {
    if(selectPlanButtons[i]) {
    selectPlanButtons[i].addEventListener("click", () => {
       backdrop.style.display =  "block";
        modal.style.display = "block";
    })
}
}


const closeModal = () => {
    backdrop.style.display = "none";
    if(modal) {
    modal.style.display = "none";
    }
}

backdrop.addEventListener("click", () => {
    mobileNav.style.display = "none";
    closeModal();
})

if(modalNoButton) modalNoButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
    mobileNav.style.display = "block";
    backdrop.style.display = "block"; 
})



