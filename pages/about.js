import Meta from '../components/Meta';

import { Card, Typography } from 'antd';
const { Text, Title } = Typography;

const about = () => {
    return (
        <div>
            <Meta title='About' />
            {/* <h1>About</h1> */}
            <Card title='Our Story' style={{width: 500, marginTop: '30vh'}}>
                <Text>
                    Personal: Recommended for individuals who shop and pay online, or wish to send or receive personal payments for shared expenses such as splitting of dinner bills or rental charges; for casual sellers or non-businesses who wish to get paid online, and who also make online purchases.
    
                </Text>
            </Card>
        </div>
    )
}

export default about;