import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useStore } from '../../../stores/stores';

import { Typography } from 'antd';
const { Title, Text } = Typography;

const Collection = observer(() => {
    const router = useRouter();
    const store = useStore();

    useEffect(() => {
        let id = router.asPath.split('/')[2];
        store.collectionsStore.getCollectionbyID(id);
        console.log(toJS(store.collectionsStore.collection))
    }, []);

    return (
        <div style={{ marginTop: '15vh' }}>
            <Title>
                {toJS(store.collectionsStore.collection.name)}
            </Title>
            <Text>
                {toJS(store.collectionsStore.collection.description)}
            </Text>

        </div>
    )
});



export default Collection;