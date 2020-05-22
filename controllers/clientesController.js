module.exports = (app) => {  
  // Retorna todas as empresas
    app.get( "/clientes", (req, res) => res.type('application/json').status(200).json([
      {
        "cnpj": "00360305000104",
          "faturamento": 1235489.53,
          "endereco": "Rua sem nome lote 3, Terminal dos Patos, MG",
          "dataConstituicao": "2017-03-15",
          "nomeFantasia": "Primeira Empresa",
          "razaoSocial": "Primeira Empresa ME",
          "finalidade": "Testar a api mocada"
      },
      {
        "cnpj": "00360305000104",
          "faturamento": 1235.43,
          "endereco": "Rua sem nome lote 3, Terminal dos Patos, MG",
          "dataConstituicao": "2017-05-04",
          "nomeFantasia": "Primeira Empresa",
          "razaoSocial": "Primeira Empresa ME",
          "finalidade": "Testar a api mocada"
      },
      {
        "cnpj": "00360305000104",
          "faturamento": 1235489.53,
          "endereco": "Rua sem nome lote 3, Terminal dos Patos, MG",
          "dataConstituicao": "2017-03-15",
          "nomeFantasia": "Primeira Empresa",
          "razaoSocial": "Primeira Empresa ME",
          "finalidade": "Testar a api mocada"
      }
    ]))
  
    // Inclui empresa no banco de dados
    app.post("/clientes", (req, res) => res.type('application/json').status(201).json)
  }
