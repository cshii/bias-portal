import { inventory } from '../../../data';

export default function handler({ query: { id } }, res) {
    // req.query.id decided to destructure up top
    const filtered = inventory.filter(item => item.id === id);

    console.log('id ', id);
    console.log('filtered')

    if (filtered.length > 0) {
        res
            .status(200)
            .json(filtered[0]);
    } else {
        res
            .status(404)
            .json({ message: `inventory with the id of ${id} is not found` })
    }
}