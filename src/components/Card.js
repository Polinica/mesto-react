import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  //console.log(currentUser._id);
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwner = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((person) => person._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const activeLikeButtonClassName = "card__like-button_active";

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
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
            className={
              "card__like-button " + (isLiked && activeLikeButtonClassName)
            }
            aria-label="Добавить в избранное"
            onClick={handleCardLike}
          ></button>
          <span className="card__like-count"></span>
        </div>
      </div>
      {/* Далее в разметке используем переменную для условного рендеринга */}
      {isOwner && (
        <button
          type="button"
          className="card__delete-button"
          aria-label="Удалить"
          onClick={handleCardDelete}
        />
      )}
    </div>
  );
}

export default Card;
