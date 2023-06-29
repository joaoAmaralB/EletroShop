import React from 'react'
import styles from './BotaoCarrinho.module.css'
import carrinho from 'assets/shopping-cart.png'

function BotaoCarrinho() {
  return (
    <button className={styles.botao}>
        <img src={carrinho} alt="Ícone de carrinho" />
    </button>
  )
}

export default BotaoCarrinho