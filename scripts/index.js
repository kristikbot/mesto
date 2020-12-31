
//универсальные const
const popup = document.querySelector(".popup");
const popups = document.querySelectorAll(".popup");
const inputName = document.querySelector('.popup__input-name');
const inputAbout = document.querySelector('.popup__input-about');

//const профиль попапа
const editProfilePopup = document.querySelector(".popup-profile");
const profileForm = editProfilePopup.querySelector("#edit-profile");

const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector("#popup-profile-close");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__caption");
const buttonSubmitEditProfile = profileForm.querySelector("#popup-profile-save");

//const карточка попап
const cardForm = document.querySelector("#add-card");
const addButton = document.querySelector(".profile__add-btn");
const buttonCloseCard = document.querySelector("#popup-cards-close");
const addCardPopup = document.querySelector(".popup-card");
const inputPlace = document.querySelector("#card-name");
const inputLink = document.querySelector("#link");
const buttonSubmit =cardForm.querySelector("#card-submit");

//const фото попап
const fullImagePopup = document.querySelector(".popup-image");
const fullImageCloseBtn = document.querySelector("#popup-image-close");
const popupImage = fullImagePopup.querySelector(".popup__full-image");
const fullImageTitle = fullImagePopup.querySelector(".popup__text");


//функция открытия попап 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener("click", closePopupByClick);//  тут не работает
  document.addEventListener('keyup', closePopupEsc);// и тут 
}

//функция закрытия попап 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener("click", closePopupByClick);// и тут
  document.removeEventListener('keyup', closePopupEsc);
}
/*buttonCloseEdit.addEventListener("click", ()=> closePopup(editProfilePopup));
buttonCloseCard.addEventListener("click", ()=> closePopup(addCardPopup));
fullImageCloseBtn.addEventListener("click", ()=> closePopup(fullImagePopup));*/


//закрытие попапа overlay click
function closePopupByClick(evt) {
  /*const overlay = evt.target;
  if (overlay.closest(".popup__form")) e.stopPropagation();
  else if (overlay.closest(".popup")) closePopup(overlay);
  console.log(evt.target);*/
  popups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains('popup')) {closePopup(evt.target)}
      if (evt.target.classList.contains('popup__close')) {closePopup(popup)}
    }
    )}
  )
};

//закрытие по Esc
const closePopupEsc = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.key === 'Escape') {closePopup(activePopup)};
  };

  buttonOpenEdit.addEventListener('click', ()=> {
    openPopup(editProfilePopup);
    openFormHandler();
    //enableValidation(profileForm);
    setButtonState(buttonSubmitEditProfile, profileForm.checkValidity(), validationConfig);
  });
  
  //функция открытия попап карточки
  addButton.addEventListener('click', ()=>{
    openPopup(addCardPopup);
    setButtonState(buttonSubmit, cardForm.checkValidity(), validationConfig);
  });

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
    closePopup(editProfilePopup);
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

const cardsContainer = document.querySelector('.elements');
const templateCard = document.querySelector('#templateCards');

//отрисовка дефолтных карточек 
function renderCardList() {
  const cardItems = initialCards.map(composeCard);
  cardsContainer.append(...cardItems);
};

//формируем карточку 
function composeCard({name, link})  {
  const newItem =  templateCard.content.cloneNode(true);
  const cardTitle = newItem.querySelector(".element__title");
  const cardImage = newItem.querySelector(".element__image");
  const cardLike = newItem.querySelector(".element__like");
  const deleteBtn = newItem.querySelector(".element__delete");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  //лайк
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("element__like-active");
  });
  //удалить 
  deleteBtn.addEventListener("click", deleteCard);
  //попап full фото
  cardImage.addEventListener("click", ()=> {
    composeFullImagePopup(name, link);
  });

  return newItem;
};
renderCardList();

//добавление карточки
function addCard(evt) {
  evt.preventDefault();
  const newCard = composeCard({ link: inputLink.value, name: inputPlace.value});
  cardsContainer.prepend(newCard);
  inputPlace.value = "";
  inputLink.value = "";
  closePopup(addCardPopup);
};
cardForm.addEventListener('submit', addCard);

//Удаление карточки
function deleteCard(event)  {
  event.target.closest(".element").remove();
}

//открыть попап full фото
const composeFullImagePopup = (name, link)  => {
  openPopup(fullImagePopup);
  fullImageTitle.textContent = name;
  popupImage.src = link;
  popupImage.alt = name;
};
