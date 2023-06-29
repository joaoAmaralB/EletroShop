import React from 'react'
import styles from './Tags.module.css'

function Tags({ tags, produtosTotais, FiltrarProdutos, setProdutos }) {
    

  return (
    <div className={styles.tags__container}>
        <p className={styles.texto}>Busque por tags:</p>
        <ul className={styles.lista}>
            {tags.map(tag => {
                return (
                    <li className={styles.tag} onClick={() => FiltrarProdutos(tag)}>{tag}</li>
                )
            })}
            <li className={styles.tag} onClick={() => setProdutos(produtosTotais)}>Todas</li>
        </ul>
    </div>
  )
}

export default Tags