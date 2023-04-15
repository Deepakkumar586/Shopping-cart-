import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'


const Cart = () => {
  // cart ke sare data  slice me store hai usko  access karne ke liye useSelector hook se aate hai
  const { cart } = useSelector((state) => state);
  console.log("cart is printing");
  console.log(cart)
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  return (
    <div >
      {
        cart.length > 0 ?
          (<div className='flex'>
            <div>
              {
                cart.map((item, index) => (
                  <CartItem key={index} item={item} itemIndex={index} />
                ))
              }

            </div>


            <div className='ml-20'>
              <div className='font-bold text-2xl mt-10 text-green-600'>
                Your Cart
              </div>
              <div className='font-thin text-2xl mt-2'>
                Summary
              </div>
              <p className='mt-3 font-thin'><span>Total Item: {cart.length}</span></p>




            </div>

            <div className='mt-10 ml-20'>
              <p className='font-bold text-green-500'>Total Amount: ${totalAmount}</p>
              <button className='mt-4 border-2 border-gray-800 rounded py-2 m-2 p-2 font-bold hover:text-white hover:bg-gray-700'>
                Check Out
              </button>
            </div>

          </div>) :
          (<div className='mt-56 text-center'>
            <h1 className='font-bold text-xl text-green-800'> Yeah! Cart is Empty</h1>
            <Link to="/">
              <button className='border-2 border-gray-800 rounded py-2 m-2 p-2 hover:text-white hover:bg-gray-700 font-bold mt-10'>
                Shop Now
              </button>
            </Link>
          </div>)

      }




    </div>
  )
};

export default Cart;
