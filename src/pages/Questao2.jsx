import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questao2.css'; 

export function Questao2() {
  const [mensagem, setMensagem] = useState('Olá!');
  const navigate = useNavigate(); 

  const handleClick = () => {
    setMensagem('Bem-vindo ao meu trabalho indidual de Desenvolvimento WEB!');
  };

  return (
    <div className="mensagem-container">
      <h1>Questão 2 - Mensagem de Boas-Vindas</h1>
      <p className="mensagem-texto">{mensagem}</p>
      <button onClick={handleClick} className="mensagem-botao">
        Entrar
      </button>
      <button onClick={() => navigate('/questao3')} className="navegar-botao">
        Próxima Questão
      </button>
    </div>
  );
}