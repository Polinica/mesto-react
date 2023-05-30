function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card" key={props.card._id}>
      <img
        src={props.card.link}
        //style={{ backgroundImage: `url(${props.card.link})` }}
        alt={props.card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
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
        class="card__delete-button"
        aria-label="Удалить"
      ></button>
    </div>
  );
}

export default Card;
