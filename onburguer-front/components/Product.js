import { useCart } from './CartContext'
import CartIcon from './icons/CartIcon'

const Product = ({ product }) => {
  const cart = useCart()
  const add = (product) => () => {
    cart.addToCart(product)
  }
  /*return (
    <div className='flex justify-center items-center'>
      <div className='container mx-auto max-w-sm w-full p-10'>
        <div className='card flex flex-col justify-center py-5 px-5 bg-white rounded-lg shadow-3xl'>
          <div className='prod-title'>
            <p className='uppercase text-center text-sm text-gray-400'>
              SUA FOME ACABA AQUI!
            </p>
            <p className='text-md text-center uppercase text-gray-900 font-bold'>
              {product.data.name}
            </p>
          </div>
          <div className='prod-img'>
            <img
              src={product.data.image.url}
              alt=''
              className='w-full object-cover object-center'
            />
          </div>
          <div className='prod-info grid gap-10'>
            <div>
              <ul className='flex flex-row justify-center items-center'></ul>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
              <p className='font-bold text-xl'>R$ {product.data.price}</p>
              <button
                className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'
                onClick={add(product)}
              >
                <CartIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )*/
  return (
    <section className='flex flex-col md:flex-row py-10 px-5 bg-red-700 rounded-3xl shadow-lg w-1/3'>
      <div className='text-md text-center uppercase text-gray-900 font-bold'>
        <img src={product.data.image.url} alt='' />
      </div>
      <div className='text-yellow-100'>
        <h4 className='uppercase text-lg text-right'>SUA FOME ACABA AQUI!</h4>
        <h3 className='uppercase text-white text-lg font-medium text-right'>
          {product.data.name}
        </h3>
        <div>
          <h3 className='flex flex-col md:flex-row justify-between items-center text-yellow-100 font-bold text-3xl underline underline-offset-4'>
            R$ {product.data.price}
          </h3>
        </div>
        <div className='flex gap-0.5 mt-0'>
          <button
            id='addToCartButton'
            className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'
            onClick={add(product)}
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
export default Product
