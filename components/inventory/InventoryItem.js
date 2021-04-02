import { useState } from 'react';

import inventoryStyles from '../../styles/Inventory.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { Row, Col, Typography, Button, Tooltip, Modal, Select, Divider, Carousel } from 'antd';
const { Text, Title } = Typography;
const { Option } = Select;

import { ExpandOutlined } from '@ant-design/icons';


const InventoryItem = ({ piece }) => {
    const [previewVisible, setPreviewVisible] = useState(false);

    return (
        <div>
            <Link href={`/inventory/${piece.id}`}>
                <div style={{ margin: '2rem 6rem 1rem 6rem', position: 'relative', width: '400px', height: '550px' }}>
                    {/* TODO: finish hoverover */}

                    <Image src={piece.image.main} layout='fill' onMouseOver={(e) => {
                        console.log('e ', e.currentTarget.src)
                        console.log('piece ', piece.image.back)
                        e.currentTarget.src = `${piece.image.back}`;
                    }}
                        onMouseOut={e => (e.currentTarget.src = `${piece.image.main}`)} />
                </div>
            </Link>
            <Row justify='center'>
                <Text style={{ marginRight: 10 }}>{piece.name}</Text>
                <Text>${piece.price}</Text>

            </Row>
            <Row justify='center' style={{ marginTop: 5 }}>

                <Tooltip title='Preview'>
                    <Button shape='circle' icon={<ExpandOutlined />} onClick={() => setPreviewVisible(true)} />
                </Tooltip>
            </Row>

            <Modal visible={previewVisible}
                okText='add to cart'
                cancelText='close preview'
                cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }}
                onOk={() => setPreviewVisible(false)}
                onCancel={() => setPreviewVisible(false)}
                width={800} footer={null} >


                <Row style={{ margin: '1rem 1rem 1rem 1rem' }}>
                    <Col span={14}>
                        <div style={{ position: 'relative', width: '300px', height: '412.5px', marginLeft: '10%' }}>
                            <Image id='stockImage' src={piece.image.main} layout='fill' />
                        </div>
                    </Col>
                    <Col span={10} >
                        <div className={inventoryStyles.modalDetails}>
                            <Row>
                                <Title>
                                    {piece.name} | ${piece.price}
                                </Title>
                            </Row>
                            <Row>
                                <Title level={3}>
                                    {piece.description}
                                </Title>
                            </Row>
                            <Divider />
                            <Select style={{ width: '100%' }} placeholder='Select Size' bordered={false} disbaled={`${piece.sm}` === '0' && `${piece.ml}` === '0' ? true : false}>
                                <Option value='1' disabled={`${piece.sm}` === '0' ? true : false}>
                                    {`${piece.sm}` === '0' ? 'Small/Medium - out of stock' : 'Small/Medium'}

                                </Option>
                                <Option value='2' disabled={`${piece.ml}` === '0' ? true : false}>
                                    {`${piece.ml}` === '0' ? 'Medium/Large - out of stock' : 'Medium/Large'}
                                </Option>
                            </Select>
                            <Divider />
                            <Row justify='center'>
                                <Button size='large'>
                                    ADD TO CART
                                </Button>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </div>

    )
}

export default InventoryItem