import React, { useEffect, useState } from 'react'
import styles from './Estoque.module.css'
import Botao from 'components/Botao'
import { Link, useNavigate } from 'react-router-dom'
import add from 'assets/add.png'
import axios from 'axios'

function Estoque() {
  const [produtos, setProdutos] = useState([])

  const nav = useNavigate()

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await axios.get('http://localhost:8800/')
        setProdutos(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProdutos()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/estoque/${id}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className={styles.titulo}>Estoque </h1>
      <img className={styles.add} src={add} alt="Ícone de adicionar produto" onClick={() => nav('/add')}/>

      <ul className={styles.lista}>
        {produtos.map(produto => {
          return <li className={styles.item} key={produto.id}>
            <div className={styles.texto}>
              <h3>{produto.nome}</h3>
              <h4>Quantidade em estoque: {produto.quantidade}</h4>
            </div>

            <div className={styles.botoes}>
              <Link to={`/update/${produto.id}`}><button className={styles.att}>Atualizar</button></Link>
              <div onClick={()=> handleDelete(produto.id)}><button className={styles.delete}>Remover</button ></div>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Estoque