import navStyles from '../styles/Nav.module.css';
import Link from 'next/Link';

import { Layout, Menu, Typography, Input, Tooltip, Dropdown, Row, Col } from 'antd';
import { UserOutlined, ShoppingOutlined, SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Nav = () => {
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

    return (
        <div className={navStyles.fixed}>
            <Row className={navStyles.nav}>
                <Col span={6} className=
                    {navStyles.begin} >
                    <Link href='/inventory'>SHOP</Link>
                    <Dropdown overlay={menu}>
                        <Text style={{color: 'white'}}>
                            COLLECTIONS

                        </Text>
                    </Dropdown>
                </Col>

                <Col span={12} className={navStyles.center} >
                    <Link href='/'>BIAS</Link>
                </Col>

                <Col span={6} className={navStyles.end} >
                    <Link href='/about'>OUR STORY</Link>
                    <Input style={{color: '#fff'}} placeholder='SEARCH' bordered={false} style={{width: '12vw'}}/>
                </Col>
            </Row>
        </div>

    )
}

export default Nav;