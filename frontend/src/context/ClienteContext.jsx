import React, { createContext, useState } from 'react';

// Crie o contexto
export const ClienteContext = createContext();

// Crie um componente Provider para envolver a parte da sua aplicação que precisa acessar o contexto
export const ClienteProvider = ({ children }) => {
  const [clientEmail, setClientEmail] = useState(null);

  // Defina funções ou estados que você deseja compartilhar com outros componentes

  return (
    <ClienteContext.Provider value={{ clientEmail, setClientEmail }}>
      {children}
    </ClienteContext.Provider>
  );
};