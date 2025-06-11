import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Trabalho Individual - React</h1>
        <br />
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