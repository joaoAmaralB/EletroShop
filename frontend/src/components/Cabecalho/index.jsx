import React from 'react'
import usuario from './user.png'
import estoque from './estoque.png'
import carrinho from './shopping-cart.png'
import styles from './Cabecalho.module.css'
import { useNavigate } from 'react-router-dom'

function Cabecalho() {
    const nav = useNavigate()

    return (
        <div className={styles.cabecalho__container}>
            <h1 className={styles.titulo} onClick={() => nav('/')}>EletroShop</h1>

            <ul className={styles.lista_icones}>
                <li className={styles.itens}>
                    <img src={estoque} alt="Ícone de estoque" onClick={() => nav('/estoque')}/>
                </li>
                <li className={styles.itens}>
                    <img src={carrinho} alt="Ícone de carrinho" onClick={() => nav('/carrinho')}/>
                </li>
                <li className={styles.itens}>
                    <img src={usuario} alt="Ícone de usuário" onClick={() => nav('/usuario')}/>
                </li>

            </ul>
        </div>
    )
}

export default Cabecalho