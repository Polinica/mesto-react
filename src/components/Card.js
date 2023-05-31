function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card" key={card._id}>
      <img
        src={card.link}
        //style={{ backgroundImage: `url(${props.card.link})` }}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            type="button"
            className="card__like-button"
            aria-label="Добавить в избранное"
          ></button>
          <span className="card__like-count"></span>
        </div>
      </div>
      <button
        type="button"
        className="card__delete-button"
        aria-label="Удалить"
      ></button>
    </div>
  );
}

export default Card;
