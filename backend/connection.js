import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ifb2023",
  database: "database01",
});

app.use(express.json());
app.use(cors());

//Get
app.get("/", (req, res) => {
  const q = "SELECT * FROM produtos";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Get produto x
app.get("/produto/:id", (req, res) => {
  const produtoId = req.params.id;
  const q = "SELECT * FROM produtos WHERE id = ?";
  db.query(q, [produtoId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Get login cliente x
app.get("/cadastro/entrar/:email", (req, res) => {
  const clienteEmail = req.params.email
  const q = "SELECT id FROM clientes WHERE email = ?";
  db.query(q, [clienteEmail], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
})

//Get id do recente cliente cadastrado
app.get("/cadastro/novo", (req, res) => {
  const q = "SELECT LAST_INSERT_ID() FROM clientes";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
})

//Get total do carrinho
app.get("/carrinho/:id/total", (req, res) => {
  const carrinhoId = req.params.id
  const q = `SELECT fn_TotalCarrinho(${carrinhoId})`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
})

//Get carrinho x
app.get("/carrinho/:id", (req, res) => {
  const q = "SELECT * FROM produtos p INNER JOIN carrinho ca ON ca.id_prod = p.id INNER JOIN clientes cl ON cl.id = ca.id_cli WHERE ca.id_cli = ?"
  const clientId = req.params.id
  db.query(q, [clientId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
});

//Get avaliacoes
app.get("/avaliacoes/:id", (req, res) => {
  const produtoId = req.params.id;
  const q = "SELECT * FROM avaliacoes WHERE id_prod = ?"

  db.query(q, [produtoId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
});

//Get media avaliacoes
app.get("/avaliacao/media/:id", (req, res) => {
  const produtoId = req.params.id;
  const q = `SELECT fn_MediaAvaliacao (${produtoId})`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Delete
app.delete("/estoque/:id", (req, res) => {
  const produtoId = req.params.id;
  const q = " DELETE FROM produtos WHERE id = ? ";

  db.query(q, [produtoId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//Add produto
app.post("/add", (req, res) => {
  const q = "INSERT INTO produtos(`nome`, `descricao`, `preco`, `tag`, `quantidade`, `imagem`) VALUES (?)";
  const values = [
    req.body.nome,
    req.body.descricao,
    req.body.preco,
    req.body.tag,
    req.body.quantidade,
    req.body.imagem
  ];

  db.query(q, [values], (err, data) => {
    if (err) return console.log(err);
    return console.log("Added into produtos");
  });
});

//Add cliente
app.post("/cadastro/cadastrar", (req, res) => {
  const q = "INSERT INTO clientes(`nome`, `email`, `endereco`, `telefone`, `senha`) VALUES (?)";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.endereco,
    req.body.telefone,
    req.body.senha
  ];

  db.query(q, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json(data);
  });
});

//Add carrinho do cliente x
app.post("/carrinho/:clientId/:prodId", (req, res) => {
  const q = "INSERT INTO carrinho(`id`, `id_prod`, `id_cli`, `qtd_itens`) VALUES (?)";
  const prodId = req.params.prodId;
  const clientId = req.params.clientId;
  const qtd_itens = req.body.quantidade;

  db.query(q, [clientId, prodId, clientId, qtd_itens], (err, data) => {
    if (err) return console.log(err);
    return console.log("Added into carrinho");
  });
});

//Update
app.put("/update/:id", (req, res) => {
  const produtoId = req.params.id;
  const q =
    "UPDATE produtos SET `nome` = ?, `descricao` = ?, `preco` = ?, `tag` = ?, `quantidade` = ?, `imagem` = ? WHERE id = ?";
  const values = [
    req.body.nome,
    req.body.descricao,
    req.body.preco,
    req.body.tag,
    req.body.quantidade,
    req.body.imagem,
  ];

  db.query(q, [...values, produtoId], (err, data) => {
    if (err) return res.json(err);
    return res.json(`Produto ${produtoId}: ${req.body.nome} updated`);
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
