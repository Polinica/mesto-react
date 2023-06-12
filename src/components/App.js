import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import api from "../utils/Api";

import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setIsImagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="content">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="name-input"
              type="text"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              name="name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-input-error popup__input-error_type_name">
              Вы пропустили это поле.
            </span>
          </label>
          <label className="popup__field">
            <input
              id="job-input"
              type="text"
              className="popup__input popup__input_type_job"
              placeholder="Профессия"
              name="job"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error popup__input-error_type_job job-input-error">
              Вы пропустили это поле.
            </span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              type="url"
              className="popup__input popup__input_type_link"
              id="avatar-link-input"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span className="popup__input-error avatar-link-input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="title-input"
              type="text"
              className="popup__input popup__input_type_title"
              placeholder="Название"
              name="name"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error popup__input-error_type_title title-input-error">
              Вы пропустили это поле.
            </span>
          </label>
          <label className="popup__field">
            <input
              id="link-input"
              type="url"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />

            <span className="popup__input-error popup__input-error_type_link link-input-error">
              Введите адрес сайта.
            </span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={false}
          onClose={closeAllPopups}
          children={<></>}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

        {/* <!-- Popups --> */}

        {/* <!-- Popup: редактировать профиль --> */}
        {/* <div class="popup popup_type_edit-profile">
        <div class="popup__container">
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form" name="popupForm" novalidate> */}

        {/* <button class="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div> */}

        {/* <!-- Popup: обновление аватара --> */}
        {/* <div class="popup popup_type_change-avatar">
        <div class="popup__container content__element">
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form" name="avatarChangePopupForm" novalidate> */}
        {/* <label class="popup__field">
              <input
                type="url"
                class="popup__input popup__input_type_link"
                id="avatar-link-input"
                placeholder="Ссылка на картинку"
                name="link"
                required
              />
              <span class="popup__input-error avatar-link-input-error"></span>
            </label> */}
        {/* <button class="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div> */}

        {/* <!-- Popup: Новое место --> */}
        {/* <div class="popup popup_type_add-card">
        <div class="popup__container">
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form" name="popupForm" novalidate> */}

        {/* <button class="popup__save-button" type="submit">
              Создать
            </button>
          </form>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div> */}

        {/* <!-- Popup: Подтверждение удаления --> */}
        {/* <div class="popup popup_type_confirm">
        <div class="popup__container content__element">
          <h2 class="popup__title">Вы уверены?</h2>
          <button class="popup__save-button" type="button">
            Да
          </button>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
