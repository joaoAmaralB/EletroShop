import Card from 'components/Card'
import React from 'react'

function Carrinho() {

  return (
    <h2>Nenhum item adicionado ao carrinho</h2>
    /*{ itens === [] ?
      <h2>Nenhum item adicionado ao carrinho</h2>
      :
      <div>
        <h2>Itens no carrinho</h2>
        {itens.map(item => {
          return <Card
            id={item.id}
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}
            tag={item.tag}
          />
        })}
      </div>
      }*/
  )
}

export default Carrinho