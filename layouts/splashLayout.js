import Meta from '../components/Meta';
import SplashNav from '../components/SplashNav';
import Footer from '../components/Footer';
import Head from 'next/head';

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {

    return (
        <div>
            <Meta />
            <Head>
                <SplashNav />
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
