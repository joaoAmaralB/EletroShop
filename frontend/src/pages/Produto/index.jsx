import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Produto.module.css'
import Avaliacoes from 'components/Avaliacoes'

function Produto() {
    const loc = useLocation()
    const nav = useNavigate()
    const prodId = loc.pathname.split('/')[2]

    const [produto, setProduto] = useState([])
    const [avaliacoes, setAvaliacoes] = useState([])
    console.log(produto)

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/produto/${prodId}`)
                setProduto(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProduto()
    }, [])

    useEffect(() => {
        const fetchAvaliacoes= async () => {
            try {
                const res = await axios.get(`http://localhost:8800/avaliacao/${prodId}`)
                setAvaliacoes(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAvaliacoes()
    }, [])

    const handleBuy = async () => {
        try {
            const novaQuantidade = produto
            await axios.put(`http://localhost:8800/produto/${produto.id}`, novaQuantidade)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {produto.map(prod => {
                return (
                    <div>
                        <div className={styles.produto__container}>
                            <img className={styles.produto__imagem} src={prod.imagem} alt="" />
                            <div className={styles.produto__info}>
                                <h1>{prod.nome}</h1>
                                <h2>R${prod.preco}</h2>
                                <p>Em estoque: {prod.quantidade}</p>
                                <p>Tag: {prod.tag}</p>
                                <p>Descrição: {prod.descricao}</p>
                            </div>
                        </div>
                        <p>-</p>
                        <input type="number" />
                        <p>+</p>
                        <button onClick={() => nav('/')}>Cancelar</button>
                        <button onClick={handleBuy}>Comprar</button>
                    </div>
                )
            })}
            <div>
                <h1>Avaliações</h1>
                <h2>{mediaAvaliacoes}</h2>
                {avaliacoes.map(avaliacao => {
                    return (
                        <Avaliacoes nota={avaliacao.nota} comentario={avaliacao.comentario}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Produto