import React, { useState } from 'react'
import styles from './Cadastro.module.css'
import Botao from 'components/Botao'
import { Link } from 'react-router-dom'
import FormCadastro from 'components/FormCadastro'
import FormEntrar from 'components/FormEntrar'

function Cadastro() {
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div className={styles.cadastro__container}>
      {toggleForm ?
        <FormCadastro styles={styles} toggleForm={toggleForm} setToggleForm={setToggleForm} />
        :
        <FormEntrar styles={styles} toggleForm={toggleForm} setToggleForm={setToggleForm} />
      }
    </div>
  )
}

export default Cadastro