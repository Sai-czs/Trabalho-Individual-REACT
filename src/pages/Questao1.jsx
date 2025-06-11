import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // adicionado
import './Questao1.css'; 

export function Questao1() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const navigate = useNavigate(); // adicionado

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <div className={`tema-container ${temaEscuro ? 'dark' : 'light'}`}>
      <h1>Questão 1 - Tema Claro/Escuro</h1>
      <label className="switch">
        <input
          type="checkbox"
          checked={temaEscuro}
          onChange={toggleTema}
          id="switch"
        />
        <span className="slider"></span>
      </label>
      <span style={{marginTop: 15}}>
        
      </span>
      <button onClick={() => navigate('/questao2')} className="navegar-botao">
        Próxima Questão
      </button>
    </div>
  );
}