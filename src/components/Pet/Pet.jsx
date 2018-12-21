import React from 'react';

export default function Pet(props) {
  const { pet, onAdoptPet, loading } = props;

  if (loading) {
    return <section>Loading</section>;
  }

  if (!pet) {
    return null;
  }

  return (
    <section>
      <header>
        <h2>{pet.name}</h2>
        <img src={pet.imageURL} alt={pet.imageDescription} />
      </header>
      <div>
        <dl>
          <dt>Sex</dt>
          <dd>{pet.sex}</dd>

          <dt>Age</dt>
          <dd>{pet.age}</dd>

          <dt>Breed</dt>
          <dd>{pet.breed}</dd>

          <dt>Story</dt>
          <dd>{pet.story}</dd>
        </dl>

        <button type="button" onClick={onAdoptPet}>Adopt</button>
      </div>
    </section>
  );
}
