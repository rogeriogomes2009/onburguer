import Prismic from 'prismic-javascript'
import Header from '../components/Header'
import Product from '../components/Product'
import { useCart } from '../components/CartContext'
import Head from 'next/head'

const Index = ({ products }) => {
  const cart = useCart()

  //const products = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Head>
        <title>ONBURGUER</title>
      </Head>
      <Header />
      <div className='h-screen bg-red-900'>
        <main className='flex flex-row bg-red-900 flex-wrap space-y-1 '>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </main>
      </div>
    </>
  )
}
export async function getServerSideProps({ res }) {
  const client = Prismic.client('https://onburguer.prismic.io/api/v2')
  const products = await client.query(
    Prismic.Predicates.at('document.type', 'product')
  )
  return {
    props: {
      date: Date.now(),
      products: products.results,
    },
  }
}
export default Index
