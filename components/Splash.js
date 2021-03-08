import Nav from './Nav';
import splashStyles from '../styles/Splash.module.css';

import { Row, Col } from 'antd';

const Splash = () => {
    return (

        <div className={splashStyles.background}>

            <Nav />
            <div className={splashStyles.display}>
                <Row>
                        <h1 className={splashStyles.title}><span>BIAS</span> BRANDS</h1>

                </Row>
                <Row>
                        <p className={splashStyles.description}>CHOOSE SUSTAINABLE FASHION</p>

                </Row>

            </div>
        </div>
    )
}

export default Splash;