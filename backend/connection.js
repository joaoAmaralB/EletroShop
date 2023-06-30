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

//Get total do carrinho
app.get("/carrinho/:id", (req, res) => {
  const carrinhoId = req.params.id
  const q = `SELECT fn_TotalCarrinho(${carrinhoId})`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
})

//Get carrinho x
app.get("/carrinho", (req, res) => {
  const q = ""
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

//Add
app.post("/add", (req, res) => {
  const q = "INSERT INTO produtos(`nome`, `descricao`, `preco`, `tag`, `quantidade`, `imagem`) VALUES (?)";
  const values = [
    req.body.nome,
    req.body.descricao,
    req.body.preco,
    req.body.tag,
    req.body.quantidade,
    req.body.imagem,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return console.log(err);
    return console.log("Added");
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
    return res.json("Updated");
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
