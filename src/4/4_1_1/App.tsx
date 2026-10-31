import { useRef, useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('Отправлено!');
      setIsSending(false);
      timeoutID.current = null;
    }, 3000);
  }
  function handleUndo() {
    if (timeoutID.current !== null) clearTimeout(timeoutID.current);
    timeoutID.current = null;
    setIsSending(false);
  }
  return <>
    <input disabled={isSending} value={text} onChange={e => setText(e.target.value)} />
    <button disabled={isSending} onClick={handleSend}>{isSending ? 'Отправляем...' : 'Отправить'}</button>
    {isSending && <button onClick={handleUndo}>Отменить</button>}
  </>;
}
