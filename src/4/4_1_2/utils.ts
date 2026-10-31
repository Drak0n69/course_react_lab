type PersonWithImage = { imageId: string };
export function getImageUrl(person: PersonWithImage) {
  return 'https://i.imgur.com/' + person.imageId + 'l.jpg';
}
