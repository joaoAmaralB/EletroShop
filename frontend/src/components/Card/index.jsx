import styles from './Card.module.css'
import Botao from 'components/Botao'
import BotaoCarrinho from 'components/BotaoCarrinho'
import { useNavigate } from 'react-router-dom'

function Card({ id, nome, preco, imagem, tag }) {
  const nav = useNavigate()

  return (
    <div className={styles.card__container}>
      <img className={styles.imagem} src={imagem} alt="Imagem do produto" />

      <h4>{nome}</h4>
      <h3>{`R$${preco}`}</h3>

      <div className={styles.botoes}>
        <button onClick={() => nav(`/produto/${id}`)}>Comprar</button>
        <BotaoCarrinho/>
      </div>
    </div>
  )
}

export default Card