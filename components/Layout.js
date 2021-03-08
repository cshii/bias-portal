import Meta from './Meta';
import Nav from './Nav';
import Splash from './Splash';
import styles from '../styles/Layout.module.css';

// warps ALL pages

const Layout = ({ children }) => {
    console.log('layout children:', children)
    return (
        <div>
            <Meta />
            <Splash />

            <div className={styles.container}>
                <main className={styles.name}>
                    {children}
                </main>
            </div>
        </div>
    )
};

export default Layout
