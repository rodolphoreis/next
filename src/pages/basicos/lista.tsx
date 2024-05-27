const lista = () => {
  const user = [
    { id: 1, name: "João", idade: 13, email: "joao@gmail.com" },
    { id: 2, name: "Maria", idade: 14, email: "maria@gmail.com" },
    { id: 3, name: "Pedro", idade: 15, email: "pedro@gmail.com" },
    { id: 4, name: "Ana", idade: 16, email: "ana@gmail.com" },
    { id: 5, name: "José", idade: 17, email: "jose@gmail.com" },
  ];

  return (
    <div>
      <h3>Alunos</h3>
      {user &&
        user.map((use) => (
          <ul key={use.id}>
            <li style={{ listStyle: "none" }}>
              {use.name} - {use.idade} - {use.name}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default lista;
