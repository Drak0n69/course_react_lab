import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  function handleReset() { setFirstName(''); setLastName(''); }
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
      <h1>Hi, {firstName} {lastName}</h1>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
