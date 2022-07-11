import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import InputSelectMes from '../components/InputSelectMes'
import TableResults from '../components/TableResults'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>App Mercado</title>
        <meta name="description" content="App mercado" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "100%", margin: "auto" }}>
        <h2 style={{ margin: "50px auto 20px auto", textAlign: "center" }}>Selecione o mês para consultar as vendas</h2>
        <InputSelectMes />
      </div>
      <TableResults/>
    </div>
  )
}

export default Home
