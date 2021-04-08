import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/stores';
import { toJS } from 'mobx';

import { Row, Col, Typography, Carousel, Button, Select } from 'antd';
const { Text } = Typography;
const {Option} = Select;

import { TagOutlined } from '@ant-design/icons'

const AlsoLike = observer(({ ids }) => {
    const store = useStore();
    const [addCart, setAddCart] = useState(false);

    useEffect(() => {
        store.inventoryStore.getInventorybyIDs(ids);

    }, [])

    // TODO: refresh to other items doesnt refresh this section do something so that useEffect can refresh this when other page gone to
    return (
        <div>
            <Text style={{ marginLeft: 32 }}>YOU MIGHT ALSO LIKE</Text>
            <Row justify='space-around' style={{ width: '100vw' }}>

                {toJS(store.inventoryStore.alsoLikeInventory).map((piece) => {
                    return (
                        <Link href={`/inventory/${piece.id}`}>
                            <div style={{ fontSize: 12 }}>


                                <div style={{ margin: 16, position: 'relative', width: 145.5, height: 200 }}>
                                    <Image src={piece.image.back} layout='fill' />
                                </div>
                                <Row justify='center' align='middle'>
                                    <Text>{piece.name} | ${piece.price}</Text>
                                </Row>
                                <Row justify='center' align='middle'>
                                    {/* TODO: make functional toggle size selection */}
                                    <Button size='small' style={{ fontSize: 8, margin: 4, display: `${addCart ? 'none' : 'true'}`}} onClick={() => setAddCart(true)}>
                                        ADD TO CART
                                </Button>

                                    <Select style={{ width: '100%', display: `${addCart ? 'true' : 'none'}` }} placeholder='Select Size' bordered={false} disbaled={`${piece.sm}` === '0' && `${piece.ml}` === '0' ? true : false}>
                                        <Option value='1' disabled={`${piece.sm}` === '0' ? true : false}>
                                            {`${piece.sm}` === '0' ? 'Small/Medium - out of stock' : 'Small/Medium'}

                                        </Option>
                                        <Option value='2' disabled={`${piece.ml}` === '0' ? true : false}>
                                            {`${piece.ml}` === '0' ? 'Medium/Large - out of stock' : 'Medium/Large'}
                                        </Option>
                                    </Select>

                                </Row>


                            </div>

                        </Link>
                    )
                })
                }
            </Row>

        </div>
    )
});


export default AlsoLike;