import Navbar from '../Components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keyworkds" content="Roupas, calçados"></meta>
      <meta name="description" content="Encontre a melhor roupa para você"></meta>
    </Head>
      <div className={styles.container}>
      <h1>Hellow World</h1>
      <Image 
        src="/images/zelda.jpg" 
        width="200px" 
        height="200px" 
        alt="Imagem"
      />
    </div>
    </>
  )
}
