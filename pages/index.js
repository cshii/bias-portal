import Head from 'next/head';

import Layout from '../layouts/splashLayout';
import { server } from '../config';
import { Row, Col } from 'antd';

import splashStyles from '../styles/Splash.module.css';

const Home = ({ articles }) => {
  console.log(

  )
  return (
    <div className={splashStyles.background}>
      <div className={splashStyles.screen}>
        <div className={splashStyles.display}>
          <Row>
            <h1 className={splashStyles.title}><span>BIAS</span> BRANDS</h1>

          </Row>
          <Row>
            <p className={splashStyles.description}>CHOOSE SUSTAINABLE FASHION</p>
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