import { useState } from 'react';
import './Questao2.css'; 

export function Questao2() {
  const [mensagem, setMensagem] = useState('Olá!');

  const handleClick = () => {
    setMensagem('Bem-vindo!');
  };

  return (
    <div className="mensagem-container">
      <h1>Questão 2 - Mensagem de Boas-Vindas</h1>
      <p className="mensagem-texto">{mensagem}</p>
      <button onClick={handleClick} className="mensagem-botao">
        Entrar
      </button>
    </div>
  );
}