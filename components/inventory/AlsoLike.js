import { useEffect } from 'react';
import Image from 'next/image';
import { server } from '../../config';

import { Row, Col, Typography, Button, Select, Divider, Drawer, Carousel } from 'antd';
const { Text, Title } = Typography;

const AlsoLike = ({ ids, inventory }) => {
    let relevant;

    // TODO: figure out how to wait for async
    useEffect(() => {
        // relevant = inventory.filter((item) => {
        //     if (ids.indexOf(item.id) !== -1) {
        //         return item;
        //     }
        // })
        // console.log('rel ', relevant)
    }, [])

    return (
        <div>
            <Text style={{ marginLeft: 32 }}>YOU MIGHT ALSO LIKE</Text>
            {/* <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/> */}
        </div>
    )
};

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/inventory`)
    const inventory = await res.json()
    return {
        props: {
            inventory,
        },
    }
}

export default AlsoLike;