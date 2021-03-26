import { server } from '../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';

const piece = ({ piece }) => {
    // const router = useRouter()
    // const { id } = router.query
    console.log('piece ', piece)
    return (
        <>
            <Meta title={piece.name} description={piece.description} />
            <h1>{piece.name}</h1>
            <p>{piece.description}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {

    const res = await fetch(`${server}/api/inventory/${context.params.id}`)

    const piece = await res.json()
    return {
        props: {
            piece,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/inventory`)

    const inventory = await res.json()

    const ids = inventory.map((piece) => piece.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default piece;