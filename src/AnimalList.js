import AnimalEmoji from './AnimalEmoji'; 

export default function AnimalList({ animals }) {
  return (
    <div className='parade'>
      {
        animals.map((animal, i) => <AnimalEmoji animal={animal} key={animal + i} />)
      }
    </div>
  );
}