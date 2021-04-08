import { makeAutoObservable } from 'mobx';
import { server } from '../config';

class InventoryStore {
    inventory = [];
    piece = [];
    alsoLikeInventory = [];

    constructor() {
        makeAutoObservable(this);
    };

    async getInventory() {
        this.inventory = await getInventoryRoute();
    }

    async getInventorybyID(id) {
        this.piece = await getInventorybyIDRoute(id);
    }

    async getInventorybyIDs(ids) {
        this.alsoLikeInventory = [];
        await ids.forEach(async (id) => {
            const onePiece = await getInventorybyIDRoute(id);
            this.alsoLikeInventory.push(onePiece);
        })
    }

    async getInventoryRoutebyCollection(id) {

    }
}

const getInventoryRoute = async () => {
    const res = await fetch(`${server}/api/inventory`);
    const inventory = await res.json();
    return inventory;
}

const getInventorybyIDRoute = async (id) => {
    const res = await fetch(`${server}/api/inventory/${id}`);
    const piece = await res.json();
    return piece;
}

const getInventoryRoutebyCollectionRoute = async (id) => {
    // TODO:
}

export default InventoryStore;