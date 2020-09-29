console.log('Hello World!');

const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

function openPopup() {
    popup.classList.add("popup__opened");
    popup.setAttribute("style", "display:flex");
}

buttonOpenEdit.addEventListener("click", openPopup)

function closePopup() {
    popup.classList.remove("popup__opened");
    popup.removeAttribute("style", "display:flex");
  }
  buttonCloseEdit.addEventListener("click", closePopup)

/*
const popupToggle = () => {
    popup.classList.toggle(".popup__opened")
}

buttonOpenEdit.addEventListener("click", popupToggle)
buttonCloseEdit.addEventListener("click", popupToggle)


function editProfile() {
    popup.classList.add("popup__opened")
}

buttonOpenEdit.addEventListener("click", editProfile)



/*
buttonOpenEdit.addEventListener("click", popupToggle)
buttonCloseEdit.addEventListener("click", popupToggle)

*/