import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = "card__like-button_active";

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
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
      {/* Далее в разметке используем переменную для условного рендеринга */}
      {isOwn && (
        <button
          type="button"
          className="card__delete-button"
          aria-label="Удалить"
        />
      )}
    </div>
  );
}

export default Card;
