import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Produto.module.css'
import Avaliacoes from 'components/Avaliacoes'
import AvaliacaoComentario from 'components/AvaliacaoComentario'
import { ClienteContext } from 'context/ClienteContext'

function Produto() {
    const loc = useLocation()
    const nav = useNavigate()
    const prodId = loc.pathname.split('/')[2]

    const [produto, setProduto] = useState([])
    const [avaliacoes, setAvaliacoes] = useState([])
    const [mediaAvaliacoes, setMediaAvaliacoes] = useState()
    const [quantidade, setQuantidade] = useState({
        quantidade: ""
    })
    const { clientId } = useContext(ClienteContext)

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
        const fetchAvaliacoes = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/avaliacoes/${prodId}`)
                setAvaliacoes(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAvaliacoes()
    }, [])

    useEffect(() => {
        const fetchMediaAvaliacoes = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/avaliacao/media/${prodId}`)
                setMediaAvaliacoes(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMediaAvaliacoes()
    }, [])

    const handleChange = (e) => {
        setQuantidade((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBuy = async () => {
        try {
            await axios.post(`http://localhost:8800/carrinho/${clientId}/${prodId}`, quantidade)
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
                                <label htmlFor="qtd">Quantidade</label>
                                <input type="number" id='qtd' className={styles.qtd} name='quantidade' onChange={handleChange}/>
                            </div>
                        </div>
                        <div className={styles.botoes}>
                            <button onClick={() => nav('/')}>Cancelar</button>
                            <button className={styles.botao_carrinho} onClick={handleBuy}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                )
            })}
            <div className={styles.avaliacao}>
                <h1>Avaliações</h1>
                <h2>Média de avaliações: {mediaAvaliacoes}</h2>
                {avaliacoes.length === 0 ?
                    <h4 className={styles.avaliacoes}>Nenhuma avaliação desse produto</h4>
                    :
                    avaliacoes.map(avaliacao => {
                        return (
                            <Avaliacoes nota={avaliacao.nota} comentario={avaliacao.comentario} nome={avaliacao.nome} />
                        )
                    })}
                <AvaliacaoComentario prodId={prodId} />
            </div>
        </div>
    )
}

export default Produto