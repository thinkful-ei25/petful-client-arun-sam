import React from 'react';

import './Pet.css';

export default function Pet(props) {
  const { pet, onAdoptPet, loading, className } = props;

  if (loading) {
    return <section>Loading</section>;
  }

  if (!pet) {
    return null;
  }

  return (
    <section className={`${className} Pet`}>
      <header>
        <h2 className="Pet__name">{pet.name}</h2>
        <img src={pet.imageURL} alt={pet.imageDescription} className="Pet__image" />
      </header>
      <div>
        <dl className="Pet__info">
          <div className="Pet__info--row">
            <dt className="Pet__info--category">Sex</dt>
            <dd className="Pet__info--data">{pet.sex}</dd>
          </div>

          <div className="Pet__info--row">
          <dt className="Pet__info--category">Age</dt>
          <dd className="Pet__info--data">{pet.age}</dd>
          </div>

          <div className="Pet__info--row">
          <dt className="Pet__info--category">Breed</dt>
          <dd className="Pit__info--data">{pet.breed}</dd>
          </div>

          <div className="Pet__info--row">
          <dt className="Pet__info--category">Story</dt>
          <dd className="Pet__info--data">{pet.story}</dd>
          </div>
        </dl>

        <button type="button" onClick={onAdoptPet} className="Pet__adoptButton">
          Adopt
        </button>
      </div>
    </section>
  );
}
