import React from 'react'
import styles from './BotaoCarrinho.module.css'
import carrinho from 'assets/shopping-cart.png'

function BotaoCarrinho({ handleCarrinho }) {
  return (
    <button className={styles.botao} onClick={handleCarrinho}>
        <img src={carrinho} alt="Ícone de carrinho" />
    </button>
  )
}

export default BotaoCarrinho