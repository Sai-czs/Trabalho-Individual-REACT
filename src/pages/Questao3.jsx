import { useState } from 'react';
import './Questao3.css'; 

export function Questao3() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [editando, setEditando] = useState(null);
  const [tarefaEditada, setTarefaEditada] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const excluirTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const iniciarEdicao = (index) => {
    setEditando(index);
    setTarefaEditada(tarefas[index]);
  };

  const salvarEdicao = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index] = tarefaEditada;
    setTarefas(tarefasAtualizadas);
    setEditando(null);
    setTarefaEditada('');
  };

  return (
    <div className="tarefas-container">
      <h1>Questão 3 - Lista de Tarefas</h1>
      
      <div className="tarefas-input-container">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
          className="tarefas-input"
        />
        
        <button onClick={adicionarTarefa} className="tarefas-botao">
          Adicionar
        </button>
      </div>
      
      <ul className="tarefas-lista">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="tarefas-item">
            {editando === index ? (
              <div className="tarefas-edicao">
                <>
                <input
                  type="text"
                  value={tarefaEditada}
                  onChange={(e) => setTarefaEditada(e.target.value)}
                  className="tarefas-input-edicao"
                />
                <button onClick={() => salvarEdicao(index)} className="tarefas-botao-salvar"> Salvar </button>
                </>
              </div>
            ) : (
              <>
                {tarefa}
                <button onClick={() => iniciarEdicao(index)} className="tarefas-botao">Editar</button>
                <button onClick={() => excluirTarefa(index)} className="tarefas-botao">Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}