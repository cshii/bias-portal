import { server } from '../../../config';
import Link from 'next/link';
import Image from 'next/image';

import Meta from '../../../components/Meta';
import inventoryStyles from '../../../styles/Inventory.module.css';

import { Row, Col, Typography, Button, Select, Divider, Carousel } from 'antd';
const { Text, Title } = Typography;
const { Option } = Select;

const piece = ({ piece }) => {

    console.log('piece ', piece);

    return (
        <div style={{ marginTop: '12vh' }}>
            <Meta title={piece.name} description={piece.description} />

            <Row>
                <Col span={18}>
                    <div style={{ margin: '2rem 6rem 1rem 6rem', position: 'relative', width: '400px', height: '550px' }}>
                        <Image src={piece.image} layout='fill' />
                    </div>
                </Col>
                <Col span={6}>
                    {/* <Row align='bottom' justify='start' style={{height: '100%'}}> */}
                    <div className={inventoryStyles.display}>


                        <Title>
                            {piece.name}
                        </Title>
                        <Title level={5}>
                            {piece.description}
                        </Title>
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
                    {/* </Row> */}
                </Col>
            </Row>

        </div>
    )
}

export const getStaticProps = async (context) => {

    const res = await fetch(`${server}/api/inventory/${context.params.id}`)

    const piece = await res.json()
    return {
        props: {
            piece,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/inventory`)

    const inventory = await res.json()

    const ids = inventory.map((piece) => piece.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default piece;