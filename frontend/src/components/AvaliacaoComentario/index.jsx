import React, { useContext, useState } from 'react'
import styles from './Avaliacao.Comentario.module.css'
import axios from 'axios';
import { ClienteContext } from 'context/ClienteContext';

function AvaliacaoComentario({ prodId }) {
    const {clientId} = useContext(ClienteContext)
    const [novaAvaliacao, setNovaAvaliacao] = useState({
        nota: null,
        comentario: ''
    })

    console.log(clientId)

    const handleChange = (e) => {
        setNovaAvaliacao((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            await axios.post(`http://localhost:8800/avaliacao/${clientId}/${prodId}`, novaAvaliacao);
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.comentario__container}>
            <h3>Adicionar uma avaliação</h3>
            <label className={styles.label} htmlFor="nota">Nota  <input className={styles.input} type="number" id='nota' placeholder='  1-5' name='nota' onChange={handleChange}/></label>
            
            <label htmlFor="comentario">Comentário:</label>
            <textarea className={styles.textarea} name="comentario" id="comentario" cols="50" rows="10" onChange={handleChange}></textarea>
            <button className={styles.botao} onClick={handleClick}>Adicionar</button>
        </div>
    )
}

export default AvaliacaoComentario