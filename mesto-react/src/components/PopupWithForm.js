function PopupWithForm(props) {
  return (
    // {/* <!-- Popup: редактировать профиль --> */}
    <div
      className={
        `popup popup_type_${props.name}` + (props.isOpen && " popup_opened")
      }
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button className="popup__save-button" type="submit">
            {props.buttonText}
          </button>
          {/* <label className="popup__field">
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
            <span className="popup__input-error name-input-error popup__input-error_type_name">
              Вы пропустили это поле.
            </span>
          </label>
          <label className="popup__field">
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
            <span className="popup__input-error popup__input-error_type_job job-input-error">
              Вы пропустили это поле.
            </span>
          </label> */}
        </form>
        <button
          className="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
