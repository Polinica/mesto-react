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
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__save-button" type="submit">
            {props.buttonText || "Сохранить"}
          </button>
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
