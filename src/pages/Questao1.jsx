import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questao1.css';

export function Questao1() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Salva o background anterior
    const prevBg = document.body.style.background;
    const prevBgImg = document.body.style.backgroundImage;
    // Remove o fundo do body só na Questão 1
    document.body.style.background = temaEscuro ? '#0f0f0f' : '#fff';
    document.body.style.backgroundImage = 'none';

    return () => {
      // Restaura o fundo anterior ao sair da Questão 1
      document.body.style.background = prevBg;
      document.body.style.backgroundImage = prevBgImg;
    };
  }, [temaEscuro]);

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
      <span style={{marginTop: 15}}></span>
      <button onClick={() => navigate('/questao2')} className="navegar-botao">
        Próxima Questão
      </button>
    </div>
  );
}