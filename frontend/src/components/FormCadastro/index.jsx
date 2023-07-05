import Botao from 'components/Botao'
import React from 'react'

function FormCadastro({ styles, setToggleForm, toggleForm, handleChange, handleClick }) {
    return (
        <div>
            <form className={styles.formulario}>
                <h2 className={styles.textos}>Nome</h2>
                <input type="text" placeholder='Insira seu nome aqui' name='nome' className={styles.inputs} onChange={handleChange} />

                <h2 className={styles.textos}>Email</h2>
                <input type="email" placeholder='Insira seu email aqui' name='email' className={styles.inputs} onChange={handleChange} />

                <h2 className={styles.textos}>Endereço</h2>
                <input type="text" placeholder='Insira seu endereço aqui' name='endereco' className={styles.inputs} onChange={handleChange} />

                <h2 className={styles.textos}>Telefone</h2>
                <input type="tel" placeholder='Insira seu telefone aqui' name='telefone' className={styles.inputs} onChange={handleChange} />

                <h2 className={styles.textos}>Senha</h2>
                <input type="password" placeholder='Insira sua senha aqui' name='senha' className={styles.inputs} onChange={handleChange} />
            </form>
            <div className={styles.botoes}>
                <button onClick={handleClick}>
                    Cadastrar
                </button>
            </div>
            <p>Já possui cadastro? <spam className={styles.link} onClick={()=> setToggleForm(!toggleForm)}> Entrar</spam></p>
        </div>
    )
}

export default FormCadastro