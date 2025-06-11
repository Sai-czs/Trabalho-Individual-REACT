export function SpotifyPlayer() {
  return (
    <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
      <iframe
        style={{ borderRadius: 17, width: '100%', minHeight: 80, border: 'none' }}
        src="https://open.spotify.com/embed/playlist/1tCW6NQYYS1tsjEzd3NDJz?utm_source=generator&theme=0"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
  );
}