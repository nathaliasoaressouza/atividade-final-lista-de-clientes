import { useState } from 'react';

const ClientForm = ({ onAddClient }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !telefone) return alert('Preencha nome e telefone!');
    onAddClient({ nome, telefone, observacao });
    setNome('');
    setTelefone('');
    setObservacao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome*</label><br />
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <div>
        <label>Telefone*</label><br />
        <input
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <div>
        <label>Observações</label><br />
        <textarea
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px',
          width: '100%',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}
      >
        Adicionar
      </button>
    </form>
  );
};

export default ClientForm;