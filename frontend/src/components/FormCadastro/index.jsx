import Botao from 'components/Botao'
import React from 'react'

function FormCadastro({ styles, setToggleForm, toggleForm }) {
    return (
        <div>
            <form className={styles.formulario}>
                <h2 className={styles.textos}>Nome</h2>
                <input type="text" placeholder='Insira seu nome aqui' className={styles.inputs} />

                <h2 className={styles.textos}>Email</h2>
                <input type="email" placeholder='Insira seu email aqui' className={styles.inputs} />

                <h2 className={styles.textos}>Endereço</h2>
                <input type="text" placeholder='Insira seu endereço aqui' className={styles.inputs} />

                <h2 className={styles.textos}>Telefone</h2>
                <input type="tel" placeholder='Insira seu telefone aqui' className={styles.inputs} />

                <h2 className={styles.textos}>Senha</h2>
                <input type="password" placeholder='Insira sua senha aqui' className={styles.inputs} />
            </form>
            <div className={styles.botoes}>
                <Botao>
                    Cadastrar
                </Botao>
            </div>
            <p>Já possui cadastro? <spam className={styles.link} onClick={()=> setToggleForm(!toggleForm)}> Entrar</spam></p>
        </div>
    )
}

export default FormCadastro