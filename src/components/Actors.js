import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let allActors = actors.map(actor => {
  	return <div className='actor'>{actor.name} - {actor.movies}</div>
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
