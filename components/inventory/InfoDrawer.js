import { Row, Col, Typography, Divider, Drawer } from 'antd';
const { Text, Title } = Typography;

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_2461986_jcgyjvb4gth.js',
        '//at.alicdn.com/t/font_2463421_y8vbi37lpro.js'
    ]
});

const InfoDrawer = ({ title, details, visible, setClose }) => {
    return (
        <Drawer
            title={title}
            placement='left'
            closable={false}
            onClose={() => setClose(false)}
            visible={visible}
            key='left'
        >
            {details[0].material ? details.map((detail) => {
                let careMap = detail.care.map((care) => (
                        <Row style={{ flexWrap: 'initial' }}>
                            <IconFont type={care.icon} style={{ margin: 8 }} />
                            <Text>{care.text}</Text>
                        </Row>
                    ));
                return (
                    <div>
                        <Title level={4} style={{ margin: 8 }}>
                            {detail.material}
                        </Title>
                        {careMap}
                    </div>
                );

            }) :
                details.map((detail) => {
                    let sizeMap = detail.guide.map((size) => (
                            <div>
                                <Title level={5} style={{ margin: 8 }}>{size.size}</Title>
                                {Object.keys(size.measurements).map((measure, key) => (
                                    <Row style={{ margin: 8 }}>{measure}: {size.measurements[measure]}</Row>))}
                            </div>
                        ));
                    return (
                        <div>
                            <Title level={3} style={{ marginTop: 8 }}>{detail.category} <IconFont type={detail.icon} style={{ margin: 8 }} /></Title>
                            {sizeMap}
                        </div>
                    )
                })
            }

        </Drawer>
    )
};

export default InfoDrawer;