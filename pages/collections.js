import { useEffect } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useStore } from '../stores/stores';

import collectionsStyles from '../styles/Collections.module.css';

import { Typography } from 'antd';
import { collections } from 'data';
const { Text, Title } = Typography;

const Collections = observer(() => {
    const store = useStore();

    useEffect(async () => {
        await store.collectionsStore.getCollections();
        console.log(toJS(store.collectionsStore.collections[0].images.background))
    }, [])

    return (
        <div style={{ marginTop: '15vh' }} className={collectionsStyles.wrapper}>
            {toJS(store.collectionsStore.collections).map((collection) => {
                return (
                    <div style={{background: `url(${collection.images.background})`}} className={collectionsStyles.collectionBackground}>
                        <div className={collectionsStyles.screen}>
                        <Link href={`collection/${collection.id}`}>
                        
                            <Title className={collectionsStyles.title} style={{marginLeft: '25vw', color: 'white'}}>{collection.name}</Title>
                        
                        </Link>
                        </div>
                    </div>
                )
            })}

        </div>
    )
});

export default Collections;