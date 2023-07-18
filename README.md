# EletroShop

Projeto feito na matéria: Banco de dados 2.

## Linguagens e Bibliotecas utilizadas

* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
* <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
* <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
* <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
* <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>

## Banco de dados necessário para o backend

```
create table produtos(
	id int not null,
	nome varchar(50) not null,
	descricao varchar(100) not null,
	preco float not null,
	tag varchar(30) not null,
	quantidade int not null,
	imagem varchar(10000) not null,
	primary key(id)
);

create table clientes(
	id int not null,
	nome varchar(50) not null,
	email varchar(50) not null,
	endereco varchar(70) not null,
	telefone varchar(20) not null,
	senha varchar(45) not null,
	primary key(id)
);

create table avaliacao(
	id int not null,
	id_prod int not null,
	id_cli int not null,
	nota int not null,
	comentario varchar(100),
	primary key(id),
	foreign key(id_prod) references produtos(id),
	foreign key(id_cli) references clientes(id)
);

create table carrinho(
	id int not null,
	id_prod int not null,
	id_cli int not null,
	qtd_itens int not null,
	foreign key(id_prod) references produtos(id),
	foreign key(id_cli) references clientes(id)	
);

CREATE FUNCTION fn_TotalCarrinho (id_carrinho int)
RETURNS FLOAT DETERMINISTIC
RETURN
(SELECT SUM(p.preco * c.qtd_itens)
FROM produtos p INNER JOIN carrinho c
ON p.id = c.id_prod INNER JOIN clientes cl
ON cl.id = c.id_cli
WHERE c.id = id_carrinho);

DELIMITER $
CREATE TRIGGER Tgr_Carrinho_Insert AFTER INSERT
ON carrinho
FOR EACH ROW
BEGIN
UPDATE produtos SET quantidade = quantidade - NEW.qtd_itens
WHERE id = NEW.id_prod;
END$
DELIMITER ;

CREATE FUNCTION fn_MediaAvaliacao (id_prod int)
RETURNS FLOAT DETERMINISTIC
RETURN
(SELECT round(avg(a.nota), 2)
FROM avaliacao a INNER JOIN produtos p
ON p.id = a.id_prod INNER JOIN clientes cl
ON cl.id = a.id_cli
WHERE p.id = id_prod);
```

## Configuração do seu banco de dados

Em `backend/connection.js` insira as configurações do seu banco de dados:
```
const db = mysql.createConnection({
  host: "seu host",
  user: "seu usuario",
  password: "sua senha",
  database: "seu banco",
});
```
