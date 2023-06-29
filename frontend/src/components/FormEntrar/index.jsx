import Botao from 'components/Botao'
import React from 'react'

function FormEntrar({ styles, setToggleForm, toggleForm }) {
    return (
        <div>
            <div>
                <form className={styles.formulario}>
                    <h2 className={styles.textos}>Email</h2>
                    <input type="email" placeholder='Insira seu email aqui' className={styles.inputs} />
                    <h2 className={styles.textos}>Senha</h2>
                    <input type="password" placeholder='Insira sua senha aqui' className={styles.inputs} />
                </form>
                <div className={styles.botoes}>
                    <Botao className={styles.botao_entrar}>
                        Entrar
                    </Botao>
                </div>
                <p>Não possui cadastro? <spam className={styles.link} onClick={() => setToggleForm(!toggleForm)}> Cadastrar</spam></p>
            </div>
        </div>
    )
}

export default FormEntrar