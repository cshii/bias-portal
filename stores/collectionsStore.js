import { makeAutoObservable } from 'mobx';
import { server } from '../config';

class CollectionsStore {
    collections = [];
    collection = [];

    constructor() {
        makeAutoObservable(this);
    };

    async getCollections() {
        this.collections = await getCollectionsRoute();
    }

    async getCollectionbyID(id) {
        this.collection = await getCollectionbyIDRoute(id);
    }


}

const getCollectionsRoute = async () => {
    const res = await fetch(`${server}/api/collections`);
    const collections = await res.json();
    return collections;
}

const getCollectionbyIDRoute = async (id) => {
    const res = await fetch(`${server}/api/collections/${id}`);
    const collection = await res.json();
    return collection;
}

export default CollectionsStore;