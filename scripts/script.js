
//открытие попап
const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

//значение формы
const popupForm = popup.querySelector(".popup__form");
const inputName = document.querySelector('.popup__input-name');
const inputAbout = document.querySelector('.popup__input-about');
const buttonSave = popup.querySelector(".popup__save");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__caption");
const profileContainer = document.querySelector(".profile__info-container");

//функция открытия попап
function openPopup() {
  openFormHandler();
  popup.classList.add("popup_opened");
}
buttonOpenEdit.addEventListener("click", openPopup)

//функция закрытия попап
function closePopup() {
  popup.classList.remove("popup_opened");
}
buttonCloseEdit.addEventListener("click", closePopup)

//функция которая связывает значение профиля с формой
function openFormHandler() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}


// Находим форму в DOM
let formElement = popup.querySelector(".popup__form"); 
// Обработчик «отправки» формы, 
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 
