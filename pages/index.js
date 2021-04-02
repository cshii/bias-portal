import Head from 'next/head';

import Layout from '../components/layouts/SplashLayout';
import { server } from '../config';
import { Row, Col } from 'antd';

import splashStyles from '../styles/Splash.module.css';

const Home = ({ articles }) => {
  console.log(

  )
  return (
    <div className={splashStyles.background} >
      <div className={splashStyles.screen}>
        <div className={splashStyles.display}>
          <Row>
            <h1 className={splashStyles.title}><span>CORVETTE</span> x BIAS</h1>

          </Row>
          <Row>
            <p className={splashStyles.description}>HANDMADE ON EARTH</p>
          </Row>
        </div>
      </div>
    </div>
  )
};

Home.Layout = Layout;

export default Home;


// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }