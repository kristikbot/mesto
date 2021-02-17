
import {Card} from "./Card.js";
import {validationConfig, FormValidator} from "./FormValidator.js";
// import {FormValidator}  from "./FormValidator.js";

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
const pofileInputList = profileForm.querySelectorAll(".popup__input");

//const карточка попап
const cardForm = document.querySelector("#add-card");
const addButton = document.querySelector(".profile__add-btn");
const buttonCloseCard = document.querySelector("#popup-cards-close");
const addCardPopup = document.querySelector(".popup-card");
const inputPlace = document.querySelector("#card-name");
const inputLink = document.querySelector("#link");
const buttonSubmit =cardForm.querySelector("#card-submit");
const cardInputList = cardForm.querySelectorAll(".popup__input");
const cardsContainer = document.querySelector('.elements');
const templateCard = document.querySelector('#templateCards');

//const фото попап
const fullImagePopup = document.querySelector(".popup-image");
const fullImageCloseBtn = document.querySelector("#popup-image-close");
const popupImage = fullImagePopup.querySelector(".popup__full-image");
const fullImageTitle = fullImagePopup.querySelector(".popup__text");

//дефолтные карточки
const initialCards = [
  {
      name: 'Maja Ruznic',
      link: 'https://i.pinimg.com/564x/69/d7/ff/69d7ff060aa1bfc5089d8b76b9996c48.jpg'
  },
  {
      name: 'Richard Butler',
      link: 'https://i.pinimg.com/564x/bc/84/be/bc84be5d9f411234728942098cfb3de3.jpg'
  },
  {
      name: 'Naudline Pierre',
      link: 'https://i.pinimg.com/564x/23/c8/02/23c8022b2c1074fcefbd3e3aa8779869.jpg'
  },
  {
      name: 'Vivian Springford',
      link: 'https://i.pinimg.com/564x/29/e9/c7/29e9c767f9386735f1dde59cfd3d7ac2.jpg'
  },
  {
      name: 'Larry Poons',
      link: 'https://i.pinimg.com/564x/af/d3/3c/afd33c680d406918eaab7b7adcfc05d4.jpg'
  },
  {
      name: 'James Marshall',
      link: 'https://i.pinimg.com/564x/66/04/39/6604391f91e0e91e93e4243a63862437.jpg'
  }
]; 


//функция открытия попап 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEsc);
}

//функция закрытия попап 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEsc);
}

//закрытие попапа overlay click
popups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains('popup')) {closePopup(evt.target)}
      if (evt.target.classList.contains('popup__close')) {closePopup(popup)}
    }
    )}
)

//закрытие по Esc
const closePopupEsc = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.key === 'Escape') {closePopup(activePopup)};
};

//кнопка изменения профиля
buttonOpenEdit.addEventListener('click', ()=> {
    openPopup(editProfilePopup);
    openFormHandler();
    // setButtonState(buttonSubmitEditProfile, profileForm.checkValidity(), validationConfig);//валидация кнопки
    pofileInputList.forEach((input) => {
     hideError(profileForm, input, validationConfig);//убирает ошибку
    });
    const validator = new FormValidator(validationConfig, editProfilePopup);
    validator.enableValidation();
});

//функция которая связывает значение профиля с формой
function openFormHandler() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}
// Находим форму в DOM
// Обработчик «отправки» формы, 
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(editProfilePopup);
}
profileForm.addEventListener('submit', formSubmitHandler); 


//открыть попап full фото
const composeFullImagePopup = (name, link)  => {
  openPopup(fullImagePopup);
  fullImageTitle.textContent = name;
  popupImage.src = link;
  popupImage.alt = name;
};


// формируем карточку 
// function composeCard(data)  {
//   const card = new Card(data, "#templateCards", composeFullImagePopup);
//   const cardElement = card.generateCard();
//   cardsContainer.prepend(cardElement);
//   const newItem =  templateCard.content.cloneNode(true);
//   const cardTitle = newItem.querySelector(".element__title");
//   const cardImage = newItem.querySelector(".element__image");
//   const cardLike = newItem.querySelector(".element__like");
//   const deleteBtn = newItem.querySelector(".element__delete");
//   cardTitle.textContent = name;
//   cardImage.src = link;
//   cardImage.alt = name;
//   //лайк
//   cardLike.addEventListener("click", () => {
//     cardLike.classList.toggle("element__like-active");
//   });
//   //удалить 
//   deleteBtn.addEventListener("click", deleteCard);
//   //попап full фото
//   cardImage.addEventListener("click", ()=> {
//     composeFullImagePopup(name, link);
//   });
//   return newItem;
// };

//отрисовка дефолтных карточек 
function renderCardList() {
  initialCards.forEach((item) => {
    const newCard = new Card(item.name, item.link, "#templateCards", composeFullImagePopup);
    const cardElement = newCard.generateCard();
    cardsContainer.append(cardElement);
  });
}; 
renderCardList();

//добавление карточки
const addCard = (event) => {
  event.preventDefault();

  const newCard = new Card(inputPlace.value, inputLink.value, "#templateCards", composeFullImagePopup);
  const cardElement = newCard.generateCard();
  // cardsContainer.addCard(cardElement);
  cardsContainer.prepend(cardElement);
  closePopup(addCardPopup);


  // const newCard = composeCard({ 
  //   link: inputLink.value, 
  //   name: inputPlace.value, 
  //   TemplateSelector: "#templateCards", 
  //   clickFullPhoto: composeFullImagePopup });
  //   composeCard(newCard);
  // return cardElement;
};

cardForm.addEventListener('submit', addCard);

//кнопка открытия попап новой карточки
addButton.addEventListener('click', ()=>{
  openPopup(addCardPopup);
  cardForm.reset();//сбрасывает недобавленную карточку
  // setButtonState(buttonSubmit, cardForm.checkValidity(), validationConfig);
  const validator = new FormValidator(validationConfig, addCardPopup);
  validator.enableValidation();
  // hideError(addCardPopup);
  // cardInputList.forEach((input) => {
  //   hideError(cardForm, input, validationConfig);//убирает ошибку
    
  //  });

});

// enableValidation(validationConfig);
// //валидация форм
// const setValidation = (formElement) => {
//   const validation = new FormValidator(validationConfig, formElement);
//   validation.enableValidation();
// };

// setValidation(editProfilePopup);
// setValidation(addNewCardPopup);

