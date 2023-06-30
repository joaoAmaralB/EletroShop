import React, { useContext, useState } from 'react'
import styles from './Cadastro.module.css'
import Botao from 'components/Botao'
import { Link } from 'react-router-dom'
import FormCadastro from 'components/FormCadastro'
import FormEntrar from 'components/FormEntrar'
import { ClienteContext } from 'context/ClienteContext'
import { useNavigate } from 'react-router-dom'

function Cadastro() {
  const [toggleForm, setToggleForm] = useState(false)
  const { clientEmail, setClientEmail } = useContext(ClienteContext)
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    endereco: '',
    telefone: ''
  })

  const nav = useNavigate()

  const handleChange = (e) => {
    setCliente((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8800/cadastro/cadastrar', cliente);
      setClientEmail(cliente.email);
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:8800/cadastro/entrar/${cliente.email}`);
      setClientEmail(res.data);
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
        <FormEntrar styles={styles} toggleForm={toggleForm} setToggleForm={setToggleForm} handleChange={handleChange} handleClick={handleClickLogin} />
      }
    </div>
  )
}

export default Cadastro