import React, { createContext, useState } from 'react';

// Crie o contexto
export const ClienteContext = createContext();

// Crie um componente Provider para envolver a parte da sua aplicação que precisa acessar o contexto
export const ClienteProvider = ({ children }) => {
  const [clientId, setClientId] = useState(null);

  // Defina funções ou estados que você deseja compartilhar com outros componentes

  return (
    <ClienteContext.Provider value={{ clientId, setClientId }}>
      {children}
    </ClienteContext.Provider>
  );
};