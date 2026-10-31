import { getImageUrl } from './util';

export type Person = { name: string; imageId: string };

function Avatar({ person, size }: { person: Person; size: number }) {
  return (
    <img className="avatar"
      src={getImageUrl(person, size < 90 ? 's' : 'b')}
      alt={person.name} width={size} height={size}
    />
  );
}

export default function Profile() {
  const person = { name: 'Gregorio Y. Zara', imageId: '7vQD0fP' };
  return <><Avatar size={40} person={person} /><Avatar size={120} person={person} /></>;
}
