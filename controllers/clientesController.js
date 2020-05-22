module.exports = (app, db) => {  
  // Retorna todas as empresas
    app.get( "/clientes", (req, res) =>
      db.Cliente.findAll()
      .then((clientes) => res.status(200).json(clientes))
      .catch((err) => res.status(500).json(err))
    );
  
    // Inclui empresa no banco de dados
    app.post("/clientes", (req, res) => {
        const cliente = db.Cliente.build(req.body);
        cliente.save()
        .then(() => res.status(201))
        .catch((err) => res.status(500).json(err))
      }
    );
  }