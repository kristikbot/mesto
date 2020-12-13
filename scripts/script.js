
//профиль попапа
const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector("#popup-profile-close");
const popup = document.querySelector(".popup");

const profileForm = popup.querySelector("#edit-profile");
const cardForm = document.querySelector("#add-card");

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
/*let formElement = popup.querySelector("#edit-profile"); */
// Обработчик «отправки» формы, 
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}
profileForm.addEventListener('submit', formSubmitHandler); 


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
  //лайк
  //удаление
  return newItem;
};
rederCardList();

//добавление карточки
function addCard(evt) {
  evt.preventDefault();
  const newCard = composeCard({ link: inputLink.value, name: inputPlace.value});
  listElements.prepend(newCard);
  inputPlace.value = "";
  inputLink.value = "";
  closePopup(addCardPopup);
};
cardForm.addEventListener('submit', addCard);





