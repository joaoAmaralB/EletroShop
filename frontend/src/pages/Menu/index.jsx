import React, { useEffect, useState } from 'react'
import styles from './Menu.module.css'
import Card from 'components/Card'
import axios from 'axios'
import Tags from 'components/Tags'

function Menu() {
  const [produtos, setProdutos] = useState([])
  const [produtosTotais, setProdutosTotais] = useState([])
  const tags = [...new Set(produtosTotais.map(produto => {return produto.tag}))]

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await axios.get('http://localhost:8800/')
        setProdutos(res.data)
        setProdutosTotais(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProdutos()
  }, [])

  const FiltrarProdutos = (tag) => {
    const prodFiltrados = produtosTotais.filter(produto => {
      return produto.tag === tag
    })

    setProdutos(prodFiltrados)
  }
  

  return (
    <div className={styles.menu__container}>
      <h1 className={styles.produtos}>Produtos</h1>
      <Tags tags={tags} produtosTotais={produtosTotais} FiltrarProdutos={FiltrarProdutos} setProdutos={setProdutos}/>
      <ul className={styles.cards}>
        {produtos.map(produto => {
          return <Card
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            tag={produto.tag}
          />
        })}
      </ul>
    </div>
  )
}

export default Menu