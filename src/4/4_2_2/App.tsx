import { useRef } from 'react';

export default function Page() {
  const searchRef = useRef<HTMLInputElement>(null);
  return <>
    <nav><button onClick={() => searchRef.current?.focus()}>Search</button></nav>
    <input ref={searchRef} placeholder="Looking for something?" />
  </>;
}
