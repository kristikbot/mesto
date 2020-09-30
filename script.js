console.log('Hello World!');
//открытие попап
const buttonOpenEdit = document.querySelector(".profile__edit-btn");
const buttonCloseEdit = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

//значение формы
const popupForm = popup.querySelector(".popup__form");
const inputName = document.querySelector('.popup__input_name');
const inputAbout = document.querySelector('.popup__input_about');
const buttonSave = popup.querySelector(".popup__save");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__caption");
const profileContainer = document.querySelector(".profile__info-container");

//функция открытия попап
function openPopup() {
  popup.classList.add("popup_opened");
  popup.setAttribute("style", "display:flex");
}

buttonOpenEdit.addEventListener("click", openPopup)

//функция закрытия попап
function closePopup() {
  popup.classList.remove("popup_opened");
  popup.removeAttribute("style", "display:flex");
}
buttonCloseEdit.addEventListener("click", closePopup)

//функция которая связывает значение профиля с формой
function openFormHandler() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}
openFormHandler();

// Находим форму в DOM
let formElement = popup.querySelector(".popup__form"); 
// Обработчик «отправки» формы, 
function formSubmitHandler (evt) {
    evt.preventDefault(); 

    // Находим поля формы в DOM
    let inputName = document.querySelector('.popup__input_name');
    let inputAbout = document.querySelector('.popup__input_about'); 

    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent

    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(formElement);
}
formElement.addEventListener('submit', formSubmitHandler); 

/*
const popupToggle = () => {
    console.log("#1");
    popup.classList.toggle("popup__opened")
}

buttonOpenEdit.addEventListener("click", popupToggle)
buttonCloseEdit.addEventListener("click", popupToggle)


inputName.value = profileName.textContent;
inputAbout.value = profileAbout.textContent;

profileContainer.innerHTML(`
    <h1 class="profile__name">${inputName.value}</h1>
    <p class="profile__caption">${inputAbout.value}</p>`);

function addSong() {
    let artist = document.querySelector('.input__text_type_artist');
    let song = document.querySelector('.input__text_type_song');
    
    songsContainer.insertAdjacentHTML('beforeend', `
        <div class="song">
            <h4 class="song__artist">${artist.value}</h4>
            <p class="song__title">${song.value}</p>
            <button class="song__like"></button>
        </div>
    `);

    renderAdded();
} 
*/