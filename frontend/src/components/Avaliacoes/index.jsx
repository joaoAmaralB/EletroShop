import React from 'react'
import styles from './Avaliacoes.module.css'

function Avaliacoes({ nota, comentario, nome }) {
  return (
    <div className={styles.nota__container}>
      <div className={styles.nome_nota}>
        <h2 className={styles.nota}>{nota}</h2>
        <h4>{nome}</h4>
      </div>
      <aside className={styles.comentario}>{comentario}</aside>
    </div>
  )
}

export default Avaliacoes