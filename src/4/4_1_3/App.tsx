import { useRef, type ReactNode } from 'react';

function DebouncedButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);
  return <button onClick={() => {
    if (timeoutID.current !== null) clearTimeout(timeoutID.current);
    timeoutID.current = setTimeout(onClick, 1000);
  }}>{children}</button>;
}

export default function Dashboard() {
  return <>
    <DebouncedButton onClick={() => alert('Spaceship launched!')}>Launch the spaceship</DebouncedButton>
    <DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
    <DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
  </>;
}
