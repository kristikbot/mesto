
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
buttonOpenEdit.addEventListener("click", openPopup);


//функция закрытия попап
function closePopup() {
  popup.classList.remove("popup_opened");
}
buttonCloseEdit.addEventListener("click", closePopup);

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


/*
//форма попап
const buttonNewCard = document.querySelector(".profile__add-btn");
buttonNewCard.addEventListener("click", openPopup);*/


const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const listElements = document.querySelector('.elements');

function renderList() {
  let newHTML = ' ';

  newHTML = initialCards.map(item => {
      return `<li class="element">
      <img src="${item.link}" alt="Мандалай" class="element__image">
      <div class="element__card">
          <h2 class="element__title">${item.name}</h2>
          <button type="button" class="element__like" aria-label="Нравится"></button>
      </div>
      </li>`
  }).join('')
  listElements.insertAdjacentHTML('afterbegin', newHTML);
}
renderList();

