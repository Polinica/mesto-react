import logo from './images/Vector.svg';

function App() {
  return (
    <div class="content">
      {/* <!-- Header --> */}
      <header class="header content__element">
        <img
          src={logo}
          alt="Место. Логотип проекта"
          class="header__logo"
        />
      </header>

      <main>
        {/* <!-- Profile --> */}
        <section class="profile content__element">
          <div class="profile__avatar">
            <img
              src="#"
              alt="Фотография пользователя"
              class="profile__avatar-image"
            />
            <button
              class="profile__avatar-button"
              type="button"
              aria-label="Обновить аватар"
            ></button>
          </div>
          <div class="profile__info">
            <div class="profile__name-block">
              <h1 class="profile__name"></h1>
              <button
                type="button"
                class="profile__button profile__button_type_edit"
                aria-label="Редактировать профиль"
              ></button>
            </div>
            <p class="profile__job"></p>
          </div>
          <button
            type="button"
            class="profile__button profile__button_type_add"
            aria-label="Добавить фотографию"
          ></button>
        </section>

        {/* <!-- Elements --> */}
        <section class="cards content__element" aria-label="Фотографии">
          {/* <!--  6 карточек, которые добавит JavaScript --> */}
          <template id="card">
            <div class="card">
              <img src="#" alt="#" class="card__image" />
              <div class="card__description">
                <h2 class="card__title">#</h2>
                <div class="card__like">
                  <button
                    type="button"
                    class="card__like-button"
                    aria-label="Добавить в избранное"
                  ></button>
                  <span class="card__like-count"></span>
                </div>
              </div>
              <button
                type="button"
                class="card__delete-button"
                aria-label="Удалить"
              ></button>
            </div>
          </template>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer class="footer content__element">
        <p class="footer__copyright">&copy;&nbsp;2023 Виктория Люсикова</p>
      </footer>

      {/* <!-- Popups --> */}

      {/* <!-- Popup: редактировать профиль --> */}
      <div class="popup popup_type_edit-profile">
        <div class="popup__container">
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form" name="popupForm" novalidate>
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
            <button class="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div>

      {/* <!-- Popup: обновление аватара --> */}
      <div class="popup popup_type_change-avatar">
        <div class="popup__container content__element">
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form" name="avatarChangePopupForm" novalidate>
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
            <button class="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div>

      {/* <!-- Popup: Новое место --> */}
      <div class="popup popup_type_add-card">
        <div class="popup__container">
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form" name="popupForm" novalidate>
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
            <button class="popup__save-button" type="submit">
              Создать
            </button>
          </form>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </div>
      </div>

      {/* <!-- Popup: Увеличенное изображение --> */}
      <div class="popup popup_type_image">
        <figure class="popup__image-container">
          <img src="#" alt="#" class="popup__image" />
          <figcaption class="popup__image-caption">#</figcaption>
          <button
            class="popup__cancel-button"
            type="button"
            aria-label="Закрыть окно"
          ></button>
        </figure>
      </div>

      {/* <!-- Popup: Подтверждение удаления --> */}
      <div class="popup popup_type_confirm">
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
      </div>
    </div>
  );
}

export default App;
