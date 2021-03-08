import {server} from '../../config';
import InventoryList from '../../components/InventoryList';

// THIS IS YOUR HOME PAGE

export default function Home({ inventory }) {
  console.log(

  )
  return (
    <div> 
      <InventoryList inventory={inventory}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const inventory = await res.json();

  return {
    props: {
      inventory
    }
  }
}