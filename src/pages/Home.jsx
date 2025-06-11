import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const musicas = [
  { nome: 'Música 1', arquivo: '/musica1.mp3' },
  { nome: 'Música 2', arquivo: '/musica2.mp3' },
  { nome: 'Música 3', arquivo: '/musica3.mp3' }
];

export function Home() {
  const [musicaAtual, setMusicaAtual] = useState(0);
  const audioRef = useRef(null);

  const tocarProxima = () => {
    setMusicaAtual((prev) => (prev + 1) % musicas.length);
  };

  return (
    <div className="home-container">
      <div style={{ marginBottom: 24 }}>
        <strong>Tocando agora:</strong> {musicas[musicaAtual].nome}
        <audio
          ref={audioRef}
          src={musicas[musicaAtual].arquivo}
          controls
          autoPlay
          onEnded={tocarProxima}
          style={{ display: 'block', margin: '12px auto 0 auto', width: '100%' }}
        />
      </div>
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
  );
}