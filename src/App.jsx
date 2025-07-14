import { useState } from 'react';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';

function App() {
  const [activeTab, setActiveTab] = useState('form');
  const [clients, setClients] = useState([]);

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Registro de Cliente</h1>

      <div style={styles.navButtons}>
        <button
          style={activeTab === 'form' ? styles.activeButton : styles.button}
          onClick={() => setActiveTab('form')}
        >
          Cadastrar clientes
        </button>
        <button
          style={activeTab === 'list' ? styles.activeButton : styles.button}
          onClick={() => setActiveTab('list')}
        >
          Ver clientes
        </button>
      </div>

      {activeTab === 'form' && <ClientForm onAddClient={addClient} />}
      {activeTab === 'list' && <ClientList clients={clients} />}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px #ccc',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  navButtons: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 15px',
    margin: '5px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#eee',
    cursor: 'pointer',
  },
  activeButton: {
    padding: '10px 15px',
    margin: '5px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};

export default App;