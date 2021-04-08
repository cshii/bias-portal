import { createContext, useContext, useEffect } from 'react';
import { makeAutoObservable } from 'mobx';

import InventoryStore from './inventoryStore';
import CollectionsStore from './collectionsStore';

class RootStore {
    inventoryStore;
    collectionsStore;

    constructor() {
        this.inventoryStore = new InventoryStore;
        this.collectionsStore = new CollectionsStore;
    }
}


const StoreContext = createContext(new RootStore);

const StoreProvider = ({ store, children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

const useStore = () => {
    return useContext(StoreContext);
};

export { RootStore, StoreProvider, useStore }