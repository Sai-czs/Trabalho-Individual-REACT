import { useState } from 'react';
import './Questao1.css'; 

export function Questao1() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <div className={`tema-container ${temaEscuro ? 'dark' : 'light'}`}>
      <h1>Questão 1 - Tema Claro/Escuro</h1>
      <button onClick={toggleTema} className="tema-button">
        {temaEscuro ? 'Tema Claro' : 'Tema Escuro'}
      </button>
    </div>
  );
}