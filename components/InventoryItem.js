import Link from 'next/link';
import inventoryStyles from '../styles/Inventory.module.css';

const InventoryItem = ({ inventory }) => {

    return (
        <Link href='/inventory/[id]' as={`/inventory/${inventory.id}`}>
            <a className={inventoryStyles.card}>
                <h3>{inventory.title} &rarr;</h3>
                <p>{inventory.excerpt}</p>
            </a>
        </Link>
    )
}

export default InventoryItem