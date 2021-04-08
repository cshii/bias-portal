import Layout from '../components/Layout';
import { RootStore, StoreProvider } from '../stores/stores';

import '../styles/globals.css';
import 'antd/dist/antd.css';

const store = new RootStore();

const MyApp = ({ Component, pageProps }) => {

  const CustomLayout = Component.Layout || Layout;


  return (
    <StoreProvider store={store}>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </StoreProvider>
  )
}

export default MyApp
