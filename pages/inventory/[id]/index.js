import { useEffect, useState } from 'react';
import { server } from '../../../config';
import Image from 'next/image';

import materialCareInstructions from '../../../material';
import sizeGuideDetails from '../../../size';
import Meta from '../../../components/Meta';
import InfoDrawer from '../../../components/inventory/InfoDrawer';
import AlsoLike from '../../../components/inventory/AlsoLike';
import inventoryStyles from '../../../styles/Inventory.module.css';

import { Row, Col, Typography, Button, Select, Divider, Carousel } from 'antd';
const { Text, Title } = Typography;
const { Option } = Select;

const piece = ({ piece }) => {
    const [details, setDetails] = useState(false);
    const [materialCare, setMaterialCare] = useState(false);
    const [sizeGuide, setSizeGuide] = useState(false);
    const [materialCareInstruction, setMaterialInstruction] = useState([]);
    const [sizeGuideDetail, setSizeGuideDetail] = useState([]);

    useEffect(() => {
        // const getInstructions = async () => {
        //     let filteredInstructions = await piece.details.materials.map((material)=> {
        //         let filter = materialCareInstructions.filter((instruction) => material === instruction.material)[0];
        //         return filter;
        //     })
        //     setMaterialInstruction(filteredInstructions);
        //     console.log('materialcare intrsuction: ', materialCareInstructions);


        //     let filteredSize = await sizeGuideDetails.filter((detail) => detail.category === piece.category)[0];
        //     console.log('filteredSize: ', filteredSize)
        //     setSizeGuideDetail(filteredSize);

        //     setSizeGuideDetail('test');
        //     setSizeStuff(filteredSize)
        //     console.log('sizeGuideDetail: ', sizeGuideDetail)
        //     console.log('sizeStuff: ', sizeStuff)

        // };
        // getInstructions();
        let filteredInstructions = piece.details.materials.map((material)=> {
            let filter = materialCareInstructions.filter((instruction) => material === instruction.material)[0];
            return filter;
        })
        setMaterialInstruction(filteredInstructions);
        console.log('filteredInstructions: ', filteredInstructions);

        console.log('materialcare intrsuction: ', materialCareInstruction);

        
        let filteredSize = sizeGuideDetails.filter((detail) => detail.category === piece.category);
        setSizeGuideDetail(filteredSize);
    },[])

    return (
        <div style={{ marginTop: '12vh' }}>
            <Meta title={piece.name} description={piece.description} />

            <Row style={{ paddingBottom: 32 }}>
                <Col span={16} className={inventoryStyles.displayImage}>
                    <Carousel dotPosition='right' style={{ width: 450, height: 600 }} >
                        <div style={{ height: 600, width: 450 }}>
                            <Image src={piece.image.main} width={450} height={600} />
                        </div>
                        <div style={{ height: 600, width: 450 }}>
                            <Image src={piece.image.front} width={450} height={600} />
                        </div>
                        <div style={{ height: 600, width: 450 }}>
                            <Image src={piece.image.back} width={450} height={600} />
                        </div>
                        {piece.image.additional ? <div style={{ height: 600, width: 450 }}>
                            <Image src={piece.image.additional} width={450} height={600} />
                        </div> : null}
                    </Carousel>
                </Col>
                <Col span={8}>
                    <div className={inventoryStyles.displayDetails} style={{ padding: 32, width: '85%' }}>
                        <Title>
                            {piece.name} | ${piece.price}
                        </Title>
                        <Title level={5}>
                            {piece.description}
                        </Title>
                        {/* TODO: add in sliding animation */}
                        {details ?
                            <><Text>
                               { piece.details.materials.join(', ')}
                            </Text>
                                <Text>
                                    {piece.details.fits.join(', ')}
                                </Text>
                                <Text>
                                   { piece.details.additional.join(', ')}
                                </Text>
                                <Text className={inventoryStyles.underlineText} onClick={() => setDetails(false)}>
                                    See Less
                        </Text> </>
                            :
                            <Text className={inventoryStyles.underlineText} onClick={() => setDetails(true)}>
                                See More
                        </Text>}
                        <Divider />
                        <Select placeholder='Select Size' bordered={false} disbaled={`${piece.sm}` === '0' && `${piece.ml}` === '0' ? true : false}>
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
                        <Row justify='center' style={{ margin: 16, marginTop: 16 }}>
                            <Text className={inventoryStyles.underlineText} onClick={() => setMaterialCare(true)}>Material & Care</Text>{`\xa0|\xa0`}<Text className={inventoryStyles.underlineText} onClick={() => setSizeGuide(true)}> Size Guide</Text>{`\xa0|\xa0`}
                            <Text className={inventoryStyles.underlineText} copyable={{ text: `${server}/inventory/${piece.id}` }}>Share</Text>

                        </Row>
                    </div>
                </Col>
            </Row>
            {materialCare || sizeGuide ? <InfoDrawer title={materialCare ? 'Material & Care' : 'Size Guide'} details={materialCare ? materialCareInstruction : sizeGuideDetail}
                visible={materialCare ? materialCare : sizeGuide} setClose={materialCare ? setMaterialCare : setSizeGuide} /> : null}
            <Divider />
            <Row style={{ width: '90vw' }}>
                <AlsoLike ids={piece.related} />
            </Row>
            <Divider />
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