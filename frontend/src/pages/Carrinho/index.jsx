import styles from 'Carrinho.module.css'
import { ClienteContext } from 'context/ClienteContext'
import React, { useContext, useEffect, useState } from 'react'

function Carrinho() {
  const { clientId } = useContext(ClienteContext)
  const [produtosCarrinho, setProdutosCarrinho] = useState([])
  const [valorTotal, setValorTotal] = useState()

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/carrinho/${clientId}`)
        setProdutosCarrinho(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCarrinho()
  }, [])

  useEffect(() => {
    const fetchCarrinho = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/carrinho/${clientId}/total`)
        setValorTotal(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCarrinho()
  }, [])

  return (
    <div>
      {produtosCarrinho === [] ?
        <h2>Nenhum item adicionado ao carrinho</h2>
        :
        <ul>
          <h2>Itens no carrinho</h2>
          {produtosCarrinho.map(produto => {
            return <li>
              <div className={styles.texto}>
                <h3>{produto.nome}</h3>
                <h4>Preço: {produto.preco}</h4>
              </div>

              <div><button className={styles.delete}>Remover</button ></div>
            </li>
          })}
          <h2>Total: R${valorTotal}</h2>
          <button>Finalizar compra</button>
        </ul>
      }
    </div>
  )
}

export default Carrinho