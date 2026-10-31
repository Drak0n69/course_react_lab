import { useState } from 'react';

// React-версия для проверки ожидаемого поведения исходного DOM-примера.
export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  return (
    <form onSubmit={e => { e.preventDefault(); setIsEditing(v => !v); }}>
      <label>Имя: {' '}{isEditing ? <input value={firstName} onChange={e => setFirstName(e.target.value)} /> : <b>{firstName}</b>}</label>
      <label>Фамилия: {' '}{isEditing ? <input value={lastName} onChange={e => setLastName(e.target.value)} /> : <b>{lastName}</b>}</label>
      <button type="submit">{isEditing ? 'Сохранить' : 'Редактировать'}</button>
      <p><i>Привет, {firstName} {lastName}!</i></p>
    </form>
  );
}
