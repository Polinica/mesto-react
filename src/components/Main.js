import React from "react";
import api from "../utils/Api";
import Card from "./Card";

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      {/* <!-- Profile --> */}
      <section className="profile content__element">
        <div className="profile__avatar">
          <div //img
            //src={{ backgroundImage: `url(${userAvatar})` }}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            alt="Фотография пользователя"
            className="profile__avatar-image"
          />
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__button profile__button_type_edit"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__button profile__button_type_add"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>

      {/* <!-- Elements --> */}
      <section className="cards content__element" aria-label="Фотографии">
        {/* <!--  6 карточек, которые добавит JavaScript --> */}
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
        ;
      </section>
    </main>
  );
}

export default Main;
