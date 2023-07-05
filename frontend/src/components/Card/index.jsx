import axios from 'axios'
import styles from './Card.module.css'
import BotaoCarrinho from 'components/BotaoCarrinho'
import { ClienteContext } from 'context/ClienteContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ id, nome, preco, imagem, tag }) {
  const nav = useNavigate()
  const {clientId} = useContext(ClienteContext)
  const quantidade = 1;

  const handleCarrinho = async () => {
    try {
      await axios.post(`http://localhost:8800/carrinho/${clientId}/${id}`, { quantidade: quantidade })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.card__container}>
      <img className={styles.imagem} src={imagem} alt="Imagem do produto" />

      <h4>{nome}</h4>
      <h3>{`R$${preco}`}</h3>

      <div className={styles.botoes}>
        <button onClick={() => nav(`/produto/${id}`)}>Comprar</button>
        <BotaoCarrinho handleCarrinho={handleCarrinho}/>
      </div>
    </div>
  )
}

export default Card