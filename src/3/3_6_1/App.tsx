import { useContext, useState } from 'react';
import { ImageSizeContext } from './Context';
import { places, type PlaceType } from './data';
import { getImageUrl } from './utils';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  return <ImageSizeContext.Provider value={isLarge ? 150 : 100}>
    <label><input type="checkbox" checked={isLarge} onChange={e => setIsLarge(e.target.checked)} />Use large images</label>
    <hr /><List />
  </ImageSizeContext.Provider>;
}

function List() {
  return <ul>{places.map(place => <li key={place.id}><Place place={place} /></li>)}</ul>;
}

function Place({ place }: { place: PlaceType }) {
  return <><PlaceImage place={place} /><p><b>{place.name}</b>{': ' + place.description}</p></>;
}

export function PlaceImage({ place }: { place: PlaceType }) {
  const imageSize = useContext(ImageSizeContext);
  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />;
}
