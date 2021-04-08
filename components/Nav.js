import navStyles from '../styles/Nav.module.css';
import Link from 'next/Link';

import { Menu, Typography, Input, Dropdown, Row, Col } from 'antd';
import { DownOutlined, ShoppingOutlined, SearchOutlined } from '@ant-design/icons';

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

    // TODO: fix dropdown :/
    return (
        <div className={navStyles.fixed}>
            <Row className={navStyles.nav}>
                <Col span={6} className={navStyles.begin} >
                    <Link href='/'>B I A S</Link>
                </Col>
                <Col span={12} className=
                    {navStyles.center} >
                    <Link href='/inventory'>SHOP</Link>

                    {/* <Dropdown overlay={menu}>
                        <a>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}> */}
                    <Link href='/collections'>
                        COLLECTIONS
                    </Link>

                    {/* </Text>
                        </a>
                    </Dropdown> */}
                    <Link href='/about'>BRAND</Link>
                    <Link href='/news'>NEWS</Link>
                    <Link href='/contact'>CONTACT</Link>
                </Col>



                <Col span={6} className={navStyles.end} >
                    <Input style={{ width: '8vw', fontWeight: 'bold' }} placeholder='SEARCH' bordered={false} suffix=
                        {<SearchOutlined />} />

                    {/* TODO: unsure why link isn't working here */}
                    <a href='/cart' style={{ margin: 16 }}>


                        <ShoppingOutlined />

                    </a>
                </Col>
            </Row>


        </div>

    )
}

export default Nav;