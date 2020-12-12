
//профиль попапа
const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector("#popup-profile-close");
const popup = document.querySelector(".popup");
const popupForm = popup.querySelector(".edit-profile");
const inputName = document.querySelector('.popup__input-name');
const inputAbout = document.querySelector('.popup__input-about');
const buttonSave = popup.querySelector(".popup__save");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__caption");
const profileContainer = document.querySelector(".profile__info-container");
const editProfilePopup = document.querySelector(".popup-profile");

//карточка попап
const addButton = document.querySelector(".profile__add-btn");
const buttonCloseCard = document.querySelector("#popup-cards-close");
const addCardPopup = document.querySelector(".popup-card");
const inputPlace = document.querySelector("#card-name");
const inputLink = document.querySelector("#link");
const buttonSubmit =popup.querySelector("#card-submit");


//функция открытия попап профиля
function popupOpen(popup) {
  openFormHandler();
  popup.classList.add('popup_opened');
}
buttonOpenEdit.addEventListener('click', ()=>popupOpen(editProfilePopup));
addButton.addEventListener('click', ()=>popupOpen(addCardPopup));


//функция закрытия попап профиля
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
buttonCloseEdit.addEventListener("click", ()=> closePopup(editProfilePopup));
buttonCloseCard.addEventListener("click", ()=> closePopup(addCardPopup));

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


const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челяба',
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
      name: 'Холмогорск',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const listElements = document.querySelector('.elements');
const templateCard = document.querySelector('#templateCards');

//отрисовка дефолтных карточек 
function rederCardList() {
  const cardItems = initialCards.map(composeCard);
  listElements.append(...cardItems);
};

//формируем карточку 
function composeCard({name, link})  {
  const newItem =  templateCard.content.cloneNode(true);
  const cardTitle = newItem.querySelector(".element__title");
  const cardImage = newItem.querySelector(".element__image");
  const cardLike = newItem.querySelector(".element__like");
  //card cardDeleteBtn = 
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  //попап открытия фото
  return newItem;
};

rederCardList();








/*
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
function renderList(){
  const templateCards = document.querySelector('#templateCards').content;
  const elementCard = templateCards.cloneNode(true);

  elementCard.querySelector('.element__image').link = initialCards.link;
  elementCard.querySelector('.element__title').textContent = initialCards.name;
  listElements.append(elementCard);

}
renderList();
*/