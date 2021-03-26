import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {

    return (
        <div>
            <Meta />
            <Head>
                <Nav />
            </Head>
            <div className={styles.container}>
                <main className={styles.name}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Layout;
