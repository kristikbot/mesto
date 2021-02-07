export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inputInvalidClass: 'popup__input_state_invalid',
    buttonInvalidClass: 'popup__save_state_invalid', 
};

export class FormValidator{
    constructor(validationConfig, formElement) {
        this._formSelector  = validationConfig.formSelector,
        this._inputSelector = validationConfig.inputSelector,
        this._submitButtonSelector = validationConfig.submitButtonSelector,
        this._inputInvalidClass = validationConfig.inputInvalidClass,
        this._buttonInvalidClass = validationConfig.buttonInvalidClass, 
        this._formElement = formElement
    }
    
    _showError(input){
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._inputInvalidClass);
    }

    _hideError(input){
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent ='';
        input.classList.remove(this._inputInvalidClass);
    }

    _checkInputValidity(input){
        if (!input.validity.valid) {
          this._showError(input);
        } else {
          this._hideError(input);
        }
    }

    _setButtonState(isActive){
        if (isActive) {
            this._submitButton.classList.remove(this._buttonInvalidClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._buttonInvalidClass);
            this._submitButton.disabled = true; 
        }
    }

    _setEventListeners(){
        this._inputsList = this._form.querySelectorAll(this._inputSelector);
        // const submitButton = form.querySelector(this._submitButtonSelector);
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault;
        })
    
        this._inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState(this._from.checkValidity());
            });
        });

        this._form.addEventListener('reset', () => {
            this._hideError();
        })
    }


    enableValidation(){
     this._form = this._formElement.querySelectorAll(this._formSelector);
     this._submitButton = this._form.querySelector(this._submitButtonSelector);

        this._setButtonState(this._form.checkValidity());
        this._setEventListeners();
    };
}