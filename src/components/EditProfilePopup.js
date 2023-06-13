import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditProfilePopup;
