import { useState } from 'react';

import inventoryStyles from '../../styles/Inventory.module.css';
import Image from 'next/image';

import { Row, Col, Typography, Button, Tooltip, Modal, Select } from 'antd';
const { Text } = Typography;
const { Option } = Select;
import { ExpandOutlined } from '@ant-design/icons';


const InventoryItem = ({ piece }) => {
    const [previewVisible, setPreviewVisible] = useState(false);

    return (
        <div>
            <div className={inventoryStyles.imgDisplay} style={{ position: 'relative', width: '400px', height: '550px' }}>
                {/* TODO: finish hoverover */}
                <Image id='stockImage' src={piece.image} layout='fill' onMouseOver={(e) => {
                    console.log('e ', e.currentTarget.src)
                    console.log('piece ', piece.backImage)
                    e.currentTarget.src = `${piece.backImage}`;
                }
                }
                    onMouseOut={e => (e.currentTarget.src = `${piece.image}`)} />


            </div>
            <Row justify='center'>
                <Text style={{ marginRight: 10 }}>{piece.name}</Text>
                <Text>${piece.price}</Text>

            </Row>
            <Row justify='center' style={{ marginTop: 5 }}>

                <Tooltip title='Preview'>
                    <Button shape='circle' icon={<ExpandOutlined />} onClick={() => setPreviewVisible(true)} />
                </Tooltip>
            </Row>

            <Modal title={piece.name} visible={previewVisible}
                okText='add to cart'
                cancelText='close preview' cancelButtonProps={{ style: {} }} okButtonProps={{ style: {} }}
                onCancel={() => setPreviewVisible(false)} onOk={() => setPreviewVisible(false)}>
                <Row>
                    <Col span={16}>
                        <div style={{ position: 'relative', width: '300px', height: '412.5px' }}>
                            <Image id='stockImage' src={piece.image} layout='fill' />
                        </div>
                    </Col>
                    <Col span={8}>
                        <Select placeholder='Select Size' bordered={false} disbaled={`${piece.sm}` === '0' && `${piece.ml}` === '0' ? true : false}>
                            <Option value='1' disbaled={`${piece.sm}` === '0' ? true : false}>
                                Small/Medium
                            </Option>
                            <Option value='2' disabled={`${piece.ml}` === '0' ? true : false}>
                                Medium/Large
                            </Option>
                        </Select>

                    </Col>
                </Row>
            </Modal>
        </div>

    )
}

export default InventoryItem