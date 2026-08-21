'use client'; // diretiva use client
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image'; // imagens next
import { useState } from 'react'; // estado

export default function Header() {
    const [menu, setMenu] = useState('/icons/closed.png');
    return (
        <div className={styles.divHeader}>
            <button className={styles.btn}
                onClick={() => setMenu(menu === '/icons/closed.png' ? '/icons/opened.png' : '/icons/closed.png')}
            >
                <Image src={menu} width={30} height={30} alt='menu' />
            </button>

            {menu === '/icons/opened.png' &&
                <header className={styles.header}>
                    <nav>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/contato'>Contatossss</Link></li>
                            <li><Link href='/sobre'>Sobre</Link></li>
                        </ul>
                    </nav>
                </header>
            }

        </div>
    )
}