import navStyles from '../styles/Nav.module.css';
import Link from 'next/Link';

import { Layout, Menu, Typography, Input, Tooltip, Dropdown, Row, Col, Button } from 'antd';
import { UserOutlined, ShoppingOutlined, SearchOutlined, DownOutlined} from '@ant-design/icons';

const { Text } = Typography;

const SplashNav = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link href='/corvette'>
                    Corvette x Bias
                    </Link>
            </Menu.Item>
            <Menu.Item disabled>
                Coming Soon x Bias
                </Menu.Item>
        </Menu>
    );
    // TODO: fix dropdown :/

    return (
        <div className={navStyles.fixed}>
            <Row className={navStyles.splashNav}>
                <Col span={6} className={navStyles.begin} >
                    <Link href='/'>B I A S</Link>
                </Col>
                <Col span={12} className=
                    {navStyles.center} >
                    <Link href='/inventory'>SHOP</Link>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                            {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                COLLECTIONS
                            </Text> */}
                            COLLECTIONS <DownOutlined/>
                        </a>
                    </Dropdown>

                    <Link href='/about'>OUR STORY</Link>

                </Col>

                <Col span={6} className={navStyles.end} >
                    <Input style={{ color: 'white', width: '8vw', fontWeight: 'bold' }} placeholder='SEARCH' bordered={false} suffix={<SearchOutlined />} />

                    {/* TODO: unsure why link isn't working here */}
                    <a href='/cart' style={{ margin: 16 }}>
                        <ShoppingOutlined style={{ color: 'white' }} />
                    </a>
                </Col>
            </Row>
        </div>

    )
}

export default SplashNav;