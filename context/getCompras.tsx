import React, { createContext, useEffect, useState } from 'react';
import api from '../pages/api/mercado-api'

export const ComprasContext = createContext({})

interface TypeProps {
  children: React.ReactNode
}

export const ContextProvider = ({ children }: TypeProps) => {
  const [ list, setList ] = useState([])


 const fecthData = async (month: string) => {
  try {
    const request = await api.get('/compra/list', { data: month })
    const result = request.data.result
    const compras = Object.keys(result).map((item) =>{
      const cliente = result[item].nome
      const compras = result[item].compras.filter((item: { mes: string; }) => item.mes === month)

       return { cliente, compras, count: compras.length }
 })

 const listaCompra = compras.filter((item) => item.compras.length > 0)
 const listSort = listaCompra.sort((a, b) => b.count - a.count)
    setList(listSort as any)
  } catch (error) {
    console.log(error);
  }
}


 return (
  <ComprasContext.Provider value={ { list, fecthData } }>
    { children }
  </ComprasContext.Provider>
 )
}