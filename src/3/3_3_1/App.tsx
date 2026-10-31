import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  return <><Input label="First input" text={text} onTextChange={setText} />
    <Input label="Second input" text={text} onTextChange={setText} /></>;
}

function Input({ label, text, onTextChange }: { label: string; text: string; onTextChange: (text: string) => void }) {
  return <label>{label}{' '}
    <input value={text} onChange={e => onTextChange(e.target.value)} />
  </label>;
}
