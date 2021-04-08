import Meta from '../components/Meta';

import { Card, Typography, Timeline, Button } from 'antd';
const { Text, Title } = Typography;

const about = () => {
    return (
        <div style={{marginTop: '15vh'}}>
            <Meta title='About' />
            {/* <h1>About</h1> */}
            {/* <Card title='Our Story' style={{width: 500, marginTop: '30vh'}}>
                <Text>
                    Personal: Recommended for individuals who shop and pay online, or wish to send or receive personal payments for shared expenses such as splitting of dinner bills or rental charges; for casual sellers or non-businesses who wish to get paid online, and who also make online purchases.
    
                </Text>
            </Card> */}

                <Timeline pending="to be continued . . . " >
                    <Timeline.Item>Bias Brands Created</Timeline.Item>
                    <Timeline.Item>Site Active</Timeline.Item>
                    <Timeline.Item>Corvette Collection Released</Timeline.Item>
                </Timeline>
                

        </div>
    )
}

export default about;