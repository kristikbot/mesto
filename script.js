console.log('Hello World!');

const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

const inputName = document.querySelector('.popup__text_name');
const inputAbout = document.querySelector('.ppopup__text_about');

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


  console.log(typeof document.querySelector('.popup__text_name').value);

/*
const popupToggle = () => {
    console.log("#1");
    popup.classList.toggle("popup__opened")
}

buttonOpenEdit.addEventListener("click", popupToggle)
buttonCloseEdit.addEventListener("click", popupToggle)

*/