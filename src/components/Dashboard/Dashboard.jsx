import React from 'react';

import Pet from '../Pet';

export default function Dashboard(props) {
  const { catToAdopt, dogToAdopt } = props;
  return (
    <main>
      <Pet pet={catToAdopt} onAdoptPet={() => console.log('adopt cat')} />
      <Pet pet={dogToAdopt} onAdoptPet={() => console.log('adopt dog')} />
    </main>
  );
}
