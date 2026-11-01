import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  return <><Input label="First input" text={text} onTextChange={setText} />
    <Input label="Second input" text={text} onTextChange={setText} />
    <p><span>Synchronized value:</span> {text}</p></>;
}

function Input({ label, text, onTextChange }: { label: string; text: string; onTextChange: (text: string) => void }) {
  return <label>{label}{' '}
    <input value={text} onChange={e => onTextChange(e.target.value)} />
  </label>;
}
