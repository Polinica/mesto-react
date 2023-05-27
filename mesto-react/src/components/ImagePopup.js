function ImagePopup(props) {
  return (
    // {/* <!-- Popup: Увеличенное изображение --> */}
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
  );
}

export default ImagePopup;
