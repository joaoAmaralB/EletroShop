import React, { useState } from 'react'
import styles from './Update.module.css'
import Botao from 'components/Botao'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Update() {
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        preco: null,
        tag: '',
        quantidade: null,
        imagem: ''
    })

    const nav = useNavigate()
    const loc = useLocation()

    const produtoId = loc.pathname.split("/")[2];

    const handleChange = (e) => {
        setProduto((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8800/update/${produtoId}`, produto);
            nav("/estoque");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className={styles.formulario}>
            <label htmlFor="nome" className={styles.label}>
                Nome
                <input type="text" id='nome' placeholder='Insira o novo nome.' name='nome' onChange={handleChange}/>
            </label>
            <label htmlFor="descricao" className={styles.label}>
                Descrição
                <textarea type="text" id='descricao' placeholder='Insira a nova descrição.' name='descricao' onChange={handleChange}/>
            </label>
            <label htmlFor="preco" className={styles.label}>
                Preço
                <input type="number" id='preco' placeholder='Insira o novo preço.' name='preco' onChange={handleChange}/>
            </label>
            <label htmlFor="tag" className={styles.label}>
                Tag
                <input type="text" id='tag' placeholder='Insira a nova tag.' name='tag' onChange={handleChange}/>
            </label>
            <label htmlFor="quantidade" className={styles.label}>
                Quantidade
                <input type="number" id='quantidade' placeholder='Insira a nova quantidade.' name='quantidade' onChange={handleChange}/>
            </label>
            <label htmlFor="imagem" className={styles.label}>
                Imagem
                <input type="url" id='imagem' placeholder='Insira a nova url da imagem.' name='imagem' onChange={handleChange}/>
            </label>

            <div className={styles.botoes}>
                <button on onClick={() => nav('/estoque')}>Cancelar</button>
                <button className={styles.att} onClick={handleClick}>Atualizar</button>
            </div>
        </form>
    )
}

export default Update