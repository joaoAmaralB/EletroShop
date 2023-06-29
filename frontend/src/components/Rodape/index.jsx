import React from 'react'
import styles from './Rodape.module.css'

function Rodape() {
  return (
    <div className={styles.rodape__container}>
      <p className={styles.texto}>
        Atividade Computacional de Banco de dados 2
      </p>

      <p className={styles.texto}>
        Desenvolvido por João Pedro Amaral Bonfim
      </p>

      <p className={styles.marca}>EletroShop ©</p>
    </div>
  )
}

export default Rodape