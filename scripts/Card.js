export class Card {
    constructor(name, link, templateSelector, composeFullImagePopup) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._clickFullPhoto = composeFullImagePopup;
    } 
    //если передать параметры объектом data, в index.js ф-я addCard:149 у меня не получается подтянуть данные
    //если оставить data - то код не идентифицирует ссылку и имя. 
    
    //находит шаблон для карточки
    _getTemplate() {
      const cardElement = document
          .querySelector(this._templateSelector)
          .content.querySelector('.element')
          .cloneNode(true);
      return cardElement;
    };
    
    //создает карточку
    generateCard(){
      this._element = this._getTemplate();
      this._setEventListeners();

      this._titleElement = this._element.querySelector(".element__title").textContent = this._name;
      this._imageElement = this._element.querySelector(".element__image").src = this._link;
    
      return  this._element;
    }
    
    //слушатели карточки
    _setEventListeners() {
      this._element.querySelector(".element__like").addEventListener('click', () => {
        this._handleLikeCard();
      })
      this._element.querySelector(".element__delete").addEventListener('click', () => {
        this._handleDeleteCard();
      })
      this._element.querySelector(".element__image").addEventListener('click', () => {
        this._clickFullPhoto(this._name, this._link);
      })
    }
  
    _handleLikeCard() {
      this._element.querySelector(".element__like").classList.toggle("element__like-active");
    }
  
    _handleDeleteCard() {
      this._element.remove();
      this._element = null;
    }
  
  }