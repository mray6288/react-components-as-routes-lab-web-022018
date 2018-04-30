import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let allDirectors = directors.map(director => {
  	return <div className='director'>{director.name} - {director.movies}</div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
