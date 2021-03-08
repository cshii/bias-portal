import React from 'React';
import navStyles from '../styles/Nav.module.css';
import Link from 'next/Link';

import { Layout, Menu, Breadcrumb, Button, Tooltip, Row, Col } from 'antd';
import { UserOutlined, ShoppingOutlined, SearchOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Nav = () => {
    return (
        <div>
            <Row className={navStyles.header}>
                <Col span={5} className=
                    {navStyles.begin} >
                    <Link href='/'>Home</Link>
                    <Link href='/inventory'>Shop</Link>
                </Col>

                <Col span={14} className={navStyles.center} >
                    <Link href='/'>BIAS</Link>
                </Col>

                <Col span={5} className={navStyles.end} >
                    <Link href='/'>Collections</Link>
                    <Link href='/'>Contact Us</Link>
                </Col>
            </Row>
        </div>

    )
}

export default Nav;