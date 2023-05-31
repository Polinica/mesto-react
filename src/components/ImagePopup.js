function ImagePopup({ card, onClose, isOpen }) {
  return (
    // {/* <!-- Popup: Увеличенное изображение --> */}
    <div className={`popup popup_type_image` + (isOpen && " popup_opened")}>
      <figure className="popup__image-container">
        <div
          //style={{ backgroundImage: `url(${props.card.link})` }}
          src={card.link}
          alt={card.name}
          className="popup__image"
        />
        <figcaption className="popup__image-caption">{card.name}</figcaption>
        <button
          className="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
