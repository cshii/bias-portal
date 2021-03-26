import Link from 'next/link';
import inventoryStyles from '../../styles/Inventory.module.css';
import Image from 'next/image';

import { Row, Typography } from 'antd';
const { Text } = Typography;

const InventoryItem = ({ piece }) => {
    console.log('piece ', piece)
    return (
        <div>
            <div className={inventoryStyles.imgDisplay} style={{ position: 'relative', width: '400px', height: '550px' }}>
                <Image src={piece.image} layout='fill' />


            </div>
            <Row justify='center'>
                <Text style={{marginRight: 10}}>{piece.name}</Text>
                <Text>${piece.price}</Text>
            </Row>
        </div>

    )
}

export default InventoryItem