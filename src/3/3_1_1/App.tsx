import { useState } from 'react';

export default function Picture() {
  const [active, setActive] = useState(false);
  return (
    <div className={`background${active ? '' : ' background--active'}`} onClick={() => setActive(false)}>
      <img className={`picture${active ? ' picture--active' : ''}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia" src="/5qwVYb1.jpg"
        onClick={event => { event.stopPropagation(); setActive(true); }} />
    </div>
  );
}
