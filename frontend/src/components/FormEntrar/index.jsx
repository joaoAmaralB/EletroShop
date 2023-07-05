import React from 'react'

function FormEntrar({ styles, setToggleForm, toggleForm, handleChange, handleClickLogin }) {
    return (
        <div>
            <div>
                <form className={styles.formulario}>
                    <h2 className={styles.textos}>Email</h2>
                    <input type="email" placeholder='Insira seu email aqui' name='email' className={styles.inputs} onChange={handleChange}/>
                    <h2 className={styles.textos}>Senha</h2>
                    <input type="password" placeholder='Insira sua senha aqui' name='senha' className={styles.inputs} onChange={handleChange}/>
                </form>
                <div className={styles.botoes}>
                    <button className={styles.botao_entrar} onClick={handleClickLogin}>
                        Entrar
                    </button>
                </div>
                <p>Não possui cadastro? <spam className={styles.link} onClick={() => setToggleForm(!toggleForm)}> Cadastrar</spam></p>
            </div>
        </div>
    )
}

export default FormEntrar