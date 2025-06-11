import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const musicas = [
  { nome: 'Nikes', arquivo: '/Nikes.mp3' },
  { nome: 'ivy', arquivo: '/Ivy.mp3' },
  { nome: 'Self Control', arquivo: '/Self Control.mp3' },
  { nome: 'Seigfried', arquivo: '/Seigfried.mp3' },
  { nome: 'White Ferrari', arquivo: '/White Ferrari.mp3' }
];

export function Home() {
  const [musicaAtual, setMusicaAtual] = useState(0);
  const audioRef = useRef(null);

  const tocarProxima = () => {
    setMusicaAtual((prev) => (prev + 1) % musicas.length);
  };

  return (
  <>
    <div className="player-container">
  <div style={{ display: 'flex', alignItems: 'center', gap: 24, width: '100%' }}>
    <img
      src="/assets/Blond.jpeg"
      className="vitrola-img"
      style={{ margin: 0, width: 100, height: 100, position: 'static' }}
    />
    <div style={{ flex: 1, textAlign: 'center' }}>
      <strong>Tocando agora:</strong> {musicas[musicaAtual].nome}
      <audio
        ref={audioRef}
        src={musicas[musicaAtual].arquivo}
        controls
        autoPlay
        onEnded={tocarProxima}
        style={{ display: 'block', margin: '18px auto 0 auto', width: '90%' }}
      />
    </div>
  </div>
</div>

    <div className="home-container">
      <h1>Trabalho Indivual - React</h1><br/>
      <h2>Escolha uma questão abaixo:</h2>
      <div className="links-container">
        <Link to="/questao1" className="link-button link-questao1">
          Questão 1 - Tema Claro/Escuro
        </Link>
        <Link to="/questao2" className="link-button link-questao2">
          Questão 2 - Mensagem de Boas-Vindas
        </Link>
        <Link to="/questao3" className="link-button link-questao3">
          Questão 3 - Lista de Tarefas
        </Link>
      </div>
    </div>
  </>
  );
}