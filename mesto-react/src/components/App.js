import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div class="content">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        children={
          <>
            <label class="popup__field">
              <input
                id="name-input"
                type="text"
                class="popup__input popup__input_type_name"
                placeholder="Имя"
                name="name"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="popup__input-error name-input-error popup__input-error_type_name">
                Вы пропустили это поле.
              </span>
            </label>
            <label class="popup__field">
              <input
                id="job-input"
                type="text"
                class="popup__input popup__input_type_job"
                placeholder="Профессия"
                name="job"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="popup__input-error popup__input-error_type_job job-input-error">
                Вы пропустили это поле.
              </span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        children={
          <label class="popup__field">
            <input
              type="url"
              class="popup__input popup__input_type_link"
              id="avatar-link-input"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span class="popup__input-error avatar-link-input-error"></span>
          </label>
        }
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        children={
          <>
            <label class="popup__field">
              <input
                id="title-input"
                type="text"
                class="popup__input popup__input_type_title"
                placeholder="Название"
                name="name"
                minlength="2"
                maxlength="30"
                required
              />
              <span class="popup__input-error popup__input-error_type_title title-input-error">
                Вы пропустили это поле.
              </span>
            </label>
            <label class="popup__field">
              <input
                id="link-input"
                type="url"
                class="popup__input popup__input_type_link"
                placeholder="Ссылка на картинку"
                name="link"
                required
              />

              <span class="popup__input-error popup__input-error_type_link link-input-error">
                Введите адрес сайта.
              </span>
            </label>
          </>
        }
      />
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        children={<></>}
      />
      <ImagePopup />

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
  );
}

export default App;
