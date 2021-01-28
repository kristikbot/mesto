export class Card {
    constructor(data, TemplateSelector, composeFullImagePopup) {
      this._name = data.name;
      this._link = data.link;
      this._TemplateSelector = TemplateSelector;
      this._clickFullPhoto = composeFullImagePopup;
    } 
    
    //находит шаблон для карточки
    _getTemplate() {
      const cardElement = document
      .querySelector(this._TemplateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
      
      return cardElement;
    };
    
    //создает карточку
    generateCard(){
      this._element = this._getTemplate();
  
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').src = this._link;
    
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
      this._element.querySelector(".popup-image").addEventListener('click', () => {
        this._clickFullPhoto(this._name, this._link);
      })
    }
  
    _handleLikeCard() {
      this._element.querySelector(".element__like").classList.toggle("element__like-active");
    }
  
    _handleDeleteCard() {
      this._element.remove();
      //this._element = null;
    }
  
  }