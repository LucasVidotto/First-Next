
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
export default function Navbar() {
  return (

      <ul className={styles.navbar}>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/Products"> Produtos</Link>
        </li>
        <li>
          <Link href="/contact"> Contato</Link>
        </li>
        <li>
          <Link href="/about"> Sobre nós</Link>
        </li>
      </ul>

  )
}
