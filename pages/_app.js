import Layout from '../components/Layout';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {

  const CustomLayout = Component.Layout || Layout;


  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}

export default MyApp
