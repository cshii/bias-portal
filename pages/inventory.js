import { server } from '../config';
import InventoryItem from '../components/inventory/InventoryItem';

import inventoryStyles from '../styles/Inventory.module.css';

const inventory = ({ inventory }) => {
  return (
    <div className={inventoryStyles.grid}>
      {inventory.map(piece => {
        return <InventoryItem piece={piece} />
      })}
    </div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/inventory`)
  const inventory = await res.json()
  return {
    props: {
      inventory,
    },
  }
}

export default inventory;