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


function handlePopupSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile);
}

/*


/*
const popupToggle = () => {
    console.log("#1");
    popup.classList.toggle("popup__opened")
}

buttonOpenEdit.addEventListener("click", popupToggle)
buttonCloseEdit.addEventListener("click", popupToggle)


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