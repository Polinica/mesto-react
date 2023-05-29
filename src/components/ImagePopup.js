function ImagePopup(props) {
  return (
    // {/* <!-- Popup: Увеличенное изображение --> */}
    <div class={`popup popup_type_image` + (props.isOpen && " popup_opened")}>
      <figure class="popup__image-container">
        <img
          //style={{ backgroundImage: `url(${props.card.link})` }}
          src={props.card.link}
          alt={props.card.name}
          class="popup__image"
        />
        <figcaption class="popup__image-caption">{props.card.name}</figcaption>
        <button
          class="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
