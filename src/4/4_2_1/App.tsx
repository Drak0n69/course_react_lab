import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  function handleClick() {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) video.pause();
    else void video.play();
    setIsPlaying(!isPlaying);
  }
  return <>
    <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
    <video ref={videoRef} width="250" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} controls>
      <source src="flower.mp4" type="video/mp4" />
    </video>
  </>;
}
