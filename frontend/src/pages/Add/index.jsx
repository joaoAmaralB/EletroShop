import React, { useState } from 'react'
import styles from './Add.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add() {
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        preco: null,
        tag: '',
        quantidade: null,
        imagem: ''
    })
    const [resposta, setResposta] = useState('')
    //const [showResposta, setShowResposta] = useState(false)

    const nav = useNavigate()

    const handleChange = (e) => {
        setProduto((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8800/add', produto);
            nav('/estoque');
        } catch (err) {
            err ? setResposta(err) : setResposta('Produto adicionado com sucesso!');
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
                <input type="text" id='descricao' placeholder='Insira a nova descrição.' name='descricao' onChange={handleChange}/>
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
                <input type="url" id='imagem' placeholder='Insira a nova imagem.' name='imagem' onChange={handleChange}/>
            </label>

            <div className={styles.botoes}>
                <button on onClick={() => nav('/estoque')}>Cancelar</button>
                <button className={styles.att} onClick={handleClick}>Adicionar</button>
            </div>
        </form>
        
    )
}

export default Add