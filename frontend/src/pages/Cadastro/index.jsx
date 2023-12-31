import React, { useContext, useState } from 'react'
import styles from './Cadastro.module.css'
import FormCadastro from 'components/FormCadastro'
import FormEntrar from 'components/FormEntrar'
import { ClienteContext } from 'context/ClienteContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Cadastro() {
  const [toggleForm, setToggleForm] = useState(false)
  const { clientId, setClientId } = useContext(ClienteContext)
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    endereco: '',
    telefone: '',
    senha: ''
  })

  console.log(clientId)

  const nav = useNavigate()

  const handleChange = (e) => {
    setCliente((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8800/cadastro/cadastrar', cliente);
      const res = await axios.get('http://localhost:8800/cadastro/novo');
      const idNovo = res.data[0].id;
      setClientId(idNovo);
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(cliente)
      const res = await axios.get(`http://localhost:8800/cadastro/entrar/${cliente.email}/${cliente.senha}`);
      const idNovo = res.data[0].id;
      console.log(idNovo);
      setClientId(idNovo);
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.cadastro__container}>
      {toggleForm ?
        <FormCadastro styles={styles} toggleForm={toggleForm} setToggleForm={setToggleForm} handleChange={handleChange} handleClick={handleClick} />
        :
        <FormEntrar styles={styles} toggleForm={toggleForm} setToggleForm={setToggleForm} handleChange={handleChange} handleClickLogin={handleClickLogin} />
      }
    </div>
  )
}

export default Cadastro