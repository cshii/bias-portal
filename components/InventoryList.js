import inventoryStyles from '../styles/Inventory.module.css';
import InventoryItem from './InventoryItem';

const InventoryList = ({ inventory }) => {

    return (
        <div className={inventoryStyles.grid}>
            {inventory.map(piece => {
                return <InventoryItem inventory={inventory}/>
            })}
        </div>
    )
}

export default InventoryList