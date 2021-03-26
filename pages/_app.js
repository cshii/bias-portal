import Layout from '../components/Layout';
import Nav from '../components/Nav';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {

  const Navigation = Component.Navigation || Nav;

  console.log('custom layout ', Navigation);

  return (
    <Layout Navigation={Navigation}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
