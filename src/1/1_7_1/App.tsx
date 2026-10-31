import { people } from './data';
import { getImageUrl } from './utils';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

function PersonList({ members }: { members: Person[] }) {
  return (
    <ul>{members.map(person => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p><b>{person.name}:</b>{' ' + person.profession + ' '}known for {person.accomplishment}</p>
      </li>
    ))}</ul>
  );
}

export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <PersonList members={people.filter(person => person.profession === 'chemist')} />
      <h2>Everyone Else</h2>
      <PersonList members={people.filter(person => person.profession !== 'chemist')} />
    </article>
  );
}
