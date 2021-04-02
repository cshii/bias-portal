import Meta from '../Meta';
import SplashNav from '../SplashNav';
import Footer from '../Footer';
import Head from 'next/head';

import styles from '../../styles/Layout.module.css';

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
