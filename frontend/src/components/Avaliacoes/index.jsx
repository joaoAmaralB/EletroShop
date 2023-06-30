import React from 'react'

function Avaliacoes({ nota, comentario, nome }) {
  return (
    <div>
      <h2>{nota}</h2>
      <h4>{nome}</h4>
      <p>{comentario}</p>
    </div>
  )
}

export default Avaliacoes