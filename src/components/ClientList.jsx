function ClientList({ clients }) {
  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Lista de Clientes</h2>

      {clients.length === 0 ? (
        <p>Nenhum cliente cadastrado ainda.</p>
      ) : (
        <div style={styles.cardContainer}>
          {clients.map((cliente, index) => (
            <div key={index} style={styles.card}>
              <p><strong>{cliente.nome}</strong></p>
              <p><strong>Telefone:</strong> {cliente.telefone}</p>
              {cliente.observacao && (
                <p><strong>Observações:</strong> {cliente.observacao}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  }
};

export default ClientList;