// import React from 'react'
// import img2 from '../assets/images/Tgrilkurta1.png'
// import img3 from '../assets/images/Tgrilkurta2.png'
// import img4 from '../assets/images/Tgrilkurta3.png'
// import EmptyCart from './EmptyCart'
// import {useNavigate} from 'react-router-dom'
// import { Cartcontext } from '../context/CartContext';
// import { useContext } from 'react';
// import { AiOutlineDelete } from "react-icons/ai";

// function Cart() {

//   const navigate = useNavigate()

//   const {cart,Removecart} = useContext(Cartcontext)
//   // console.log(cart)

//   let totalPrice = cart.reduce((acc,item) => acc + item.price,0)
//   // console.log(totalPrice)



//   const handlecheckOut = ()=>{
//        navigate('/checkout')
//   }

// //   const handlecheckOut = ()=>{
// //     if (cart.length === 0) {
// //       alert("Your cart is empty! Please add items to the cart before proceeding to checkout.");
// //       return;
// //     }
// //     navigate('/checkout');
// // }

//    return(
//     <>
//       {

// cart.length === 0 ? (
//   <div className='mt-28'>
//     <EmptyCart/>
//   </div>
// ): (
//   <div className='mt-30'>
//   <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5'>
//          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold ml-5 sm:ml-35'>Shooping Cart {cart.length}</h1>  
//        <div className='border-[3px] mt-4 border-red-800 w-full max-w-[1100px] mx-auto p-2'>
//      <div className='border-[2px] border-blue-400 flex flex-col items-center md:flex-row gap-4 relative'>
//             <div className='border-[2px] border-black w-full md:w-[70%] h-auto'>
//                {
//                 cart.map((item,index)=>(
                
//                   <div key={index} className='border-[1px] border-orange-600 h-[120px] flex justify-between items-center mb-2'>
//                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                               <button className='text-red-500 text-xl sm:text-2xl cursor-pointer' onClick={()=>{Removecart(item.id)}}><AiOutlineDelete size={25}/></button>
//                           </div>
//                            <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                             <img src={`http://localhost:5000${item.image}`} alt="img" className='h-20 md:h-25 w-[90%] object-contain' />
//                            </div>
//                            <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                             <h3 className='text-sm ml-2 min-[403px]:ml-0 sm:text-lg md:text-xl font-medium'>{item.name}</h3>
//                            </div>
//                            <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                              <h3 className='text-sm ml-2 min-[403px]:ml-0 sm:text-lg md:text-xl font-medium'>Price: <span className='text-md sm:text-lg md:text-xl text-orange-700'>{item.price}</span></h3>
//                            </div>
//                      </div>

//                 ))
//                }
                 
                  
                 
                
//              </div>
//              <div className='border-[2px] border-purple-800 w-[80%] sm:w-[60%] md:w-[30%] h-auto md:absolute top-0 right-0'>
//                   <div className='border-[1px] border-black p-1 w-[90%] mx-auto'>
//                     <h2 className='text-lg md:text-xl px-4 py-4 ml-10'>Total Price: <span className='text-lg md:text-xl text-orange-700'>₹{totalPrice}</span></h2> 
//                     <div className='w-full flex items-center justify-center'>
//                         <button onClick={handlecheckOut}
//                          className='border-[1px] bg-orange-700 mt-15 px-6 md:px-2 py-2 w-[80%] md:w-[90%]  text-white text-lg md:text-sm  transition hover:bg-transparent hover:text-black hover:border-[2px]'>
//                           Proceed To CheckOut
//                         </button>
//                    </div>
//                   </div>
//              </div> 
//        </div>            
//        </div>
//       </div>
// </div>
// )
// }

//     </>
//    )



// }

// export default Cart





/* <div className='mt-30'>
    <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5'>
           <h1 className='text-3xl font-bold ml-35'>Shooping Cart 2</h1>  
         <div className='border-[3px] mt-4 border-red-800 w-full max-w-[1100px] mx-auto p-2'>
       <div className='border-[2px] border-blue-400 flex flex-col items-center md:flex-row gap-4 relative'>
              <div className='border-[2px] border-black w-full md:w-[70%] h-auto'>
                    <div className='border-[1px] border-orange-600 h-[120px] flex justify-between items-center mb-2'>
                          <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                              <h3 className='text-xl md:text-2xl'>X </h3>
                          </div>
                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                            <img src={img4} alt="img" className='h-20 md:h-25 w-[90%] object-contain' />
                           </div>
                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                            <h3 className='text-lg md:text-xl font-normal'>Kurta</h3>
                           </div>
                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                             <h3 className='text-lg md:text-xl font-normal'>Price: <span className='text-lg md:text-xl text-orange-700'>₹8000</span></h3>
                           </div>
                     </div>
                   
                    
                   
                  
               </div>
               <div className='border-[2px] border-purple-800 w-[80%] sm:w-[60%] md:w-[30%] h-auto md:absolute top-0 right-0'>
                    <div className='border-[1px] border-black p-1 w-[90%] mx-auto'>
                      <h2 className='text-lg md:text-xl px-4 py-4 ml-10'>Total Price: <span className='text-lg md:text-xl text-orange-700'>₹8000</span></h2> 
                      <div className='w-full flex items-center justify-center'>
                          <button onClick={handlecheckOut}
                           className='border-[1px] bg-orange-800 mt-15 px-6 md:px-2 py-2 w-[80%] md:w-[90%]  text-white text-lg md:text-sm  transition hover:bg-transparent hover:text-black hover:border-[2px]'>
                            Proceed To CheckOut
                          </button>
                     </div>
                    </div>
               </div> 
         </div>            
         </div>
        </div>
</div> */



// .........................................................................................................................

//  with shipping charge plus discount



// import React from 'react'

// import EmptyCart from './EmptyCart'
// import {useNavigate} from 'react-router-dom'
// import { Cartcontext } from '../context/CartContext';
// import { useContext } from 'react';
// import { AiOutlineDelete } from "react-icons/ai";

// function Cart() {

//   const navigate = useNavigate()

//   const {cart,Removecart,totalprice,discount,shippingCharge,finalprice} = useContext(Cartcontext)
//   // console.log(cart)
//   console.log(totalprice,"cart")

//   // let totalPrice = cart.reduce((acc,item) => acc + item.price,0)
//   // console.log(totalPrice)



//   const handlecheckOut = ()=>{
//        navigate('/checkout')
//   }



//    return(
//     <>
//       {

// cart.length === 0 ? (
//   <div className='mt-28'>
//     <EmptyCart/>
//   </div>
// ): (
//   <div className='mt-30'>
//   <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5'>
//          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold ml-5 sm:ml-35'>Shooping Cart {cart.length}</h1>  
//        <div className='border-[3px] mt-4 border-red-800 w-full max-w-[1100px] mx-auto p-2 min-h-[500px]'>
//      <div className='border-[2px] border-blue-400 flex flex-col items-center md:flex-row gap-4 relative'>
//             <div className='border-[2px] border-black w-full md:w-[65%] h-auto'>
//                {
//                 cart.map((item,index)=>(
                
//                   <div key={index} className='border-[1px] border-orange-600 h-[120px] flex justify-between items-center mb-2'>
//                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                               <button className='text-red-500 text-xl sm:text-2xl cursor-pointer' onClick={()=>{Removecart(item.id)}}><AiOutlineDelete size={25}/></button>
//                           </div>
//                            <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                             <img src={`http://localhost:5000${item.image}`} alt="img" className='h-20 md:h-25 w-[90%] object-contain' />
//                            </div>
//                            <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                             <h3 className='text-sm ml-2 min-[403px]:ml-0 sm:text-lg md:text-xl font-medium'>{item.name}</h3>
//                            </div>
//                            <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
//                              <h3 className='text-sm ml-2 min-[403px]:ml-0 sm:text-lg md:text-xl font-medium'>Price: <span className='text-md sm:text-lg md:text-xl text-orange-700'>{item.price}</span></h3>
//                            </div>
//                      </div>

//                 ))
//                }
                 
                  
                 
                
//              </div>
//                <div className='border-[4px] border-red-800 w-[80%] sm:w-[60%] md:w-[35%] min-h-[200px] md:absolute top-0 right-0'>
//                   <div className='border-[1px] border-black p-1 w-[90%] mx-auto'>
//                     <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Subtotal: <span className='text-lg md:text-xl text-orange-700'> ₹{totalprice}</span></p> 
//                     <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Shipping Charge: <span className='text-lg md:text-xl text-orange-700'> ₹{shippingCharge}</span></p> 
//                     <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Discount (10%): <span className='text-lg md:text-xl text-green-700'> -₹{discount}</span></p> 
//                     <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Final Amount: <span className='text-lg md:text-xl text-orange-700'> ₹{finalprice}</span></p> 
//                   </div>
//                   <div className='w-full flex items-center justify-center'>
//                         <button onClick={handlecheckOut}
//                          className='border-[1px] bg-orange-700 mt-8 px-6 md:px-2 py-2 w-[80%] md:w-[90%]  text-white text-[16px] min-[389px]:text-[18px] transition hover:bg-transparent hover:text-black hover:border-[2px]'>
//                           Proceed To CheckOut
//                         </button>
//                  </div>
//              </div> 
//        </div>            
//        </div>
//       </div>
// </div>
// )
// }

//     </>
//    )



// }

// export default Cart

// .....................................................................

// .................change design total price,shipping charge,discount etc


import React from 'react'

import EmptyCart from './EmptyCart'
import {useNavigate} from 'react-router-dom'
import { Cartcontext } from '../context/CartContext';
import { useContext } from 'react';
import { AiOutlineDelete } from "react-icons/ai";

function Cart() {

  const navigate = useNavigate()

  const {cart,Removecart,totalprice,discount,shippingCharge,finalprice} = useContext(Cartcontext)
  // console.log(cart)
  console.log(totalprice,"cart")





  const handlecheckOut = ()=>{
       navigate('/checkout')
  }



   return(
    <>
      {

cart.length === 0 ? (
  <div className='mt-32'>
    <EmptyCart/>
  </div>
): (
  <div className='mt-30'>
  <div className='max-w-[1300px] mx-auto mt-5 border-[3px] border-red-400'>
         <h1 className='text-xl sm:text-2xl md:text-3xl font-bold ml-5 sm:ml-35'>Shooping Cart {cart.length}</h1>  
       <div className='mt-4 w-full max-w-[1200px] mx-auto p-2 min-h-[500px] border-[2px] border-blue-500'>
     {/* <div className='flex flex-col items-center min-[500px]:flex-row gap-4'> */}
     <div className='border-[2px] border-yellow-400 flex flex-col min-[713px]:flex-row gap-2'>
            <div className='w-full h-auto bg-white border-[1px] border-black shadow-md rounded-md'>
               {
                cart.map((item,index)=>(
                
                  <div key={index} className='h-[120px] flex justify-between gap-1 items-center border-b-[1px] border-b-gray-300 p-1 min-[403px]:p-0'>
                          <div className='w-1/4 h-full flex justify-center items-center'>
                              <button className='text-red-500 text-xl sm:text-2xl cursor-pointer' onClick={()=>{Removecart(item.id)}}><AiOutlineDelete size={25}/></button>
                          </div>
                           <div className='w-1/4 h-full flex justify-center items-center border-[1px] border-blue-600'>
                            <img src={`http://localhost:5000${item.image}`} alt="img" className='h-20 md:h-25 w-[90%] object-contain' />
                           </div>
                           <div className='w-1/4 h-full flex justify-center items-center border-[1px] border-blue-600'>
                            <h3 className='text-[16px] sm:text-[20px] font-normal'>{item.name}</h3>
                           </div>
                           <div className='w-1/4 h-full flex justify-center items-center border-[1px] border-blue-600'>
                             <h3 className='ml-4 min-[373px]:ml-0 text-[16px] sm:text-[20px] font-normal'>Price: <span className=' text-orange-700'>{item.price}</span></h3>
                           </div>
                     </div>

                ))
               }
                 
                  
                 
                
             </div>
               <div className='w-full min-[713px]:w-[40%] min-h-[200px] border-[1px] border-black flex flex-col gap-4'>
                  <div className='border-[2px] border-blue-500 p-1 bg-white rounded-md shadow-md min-h-[200px]'>
                       <div className='flex items-center justify-between p-2'>
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] font-normal'>Subtotal:</p> 
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] text-orange-700'> ₹{totalprice}</p>
                       </div>
                       <div className='flex items-center justify-between p-2'>
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] font-normal'>Shipping Charge:</p> 
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] text-orange-700'> ₹{shippingCharge}</p>
                       </div>
                       <div className='flex items-center justify-between p-2'>
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] font-normal'>Discount (10%):</p> 
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] text-green-700'> -₹{discount}</p>
                       </div>
                       <div className='flex items-center justify-between p-2'>
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] font-normal'>Final Amount:</p> 
                          <p className='text-[20px] min-[713px]:text-[15px] min-[742px]:text-[16px] min-[784]:text-[18px] lg:text-[20px] text-orange-700'> ₹{finalprice}</p>
                       </div>
                  </div>
                  <div className='w-full flex items-center justify-center'>
                       <button onClick={handlecheckOut}
                         className='border-[1px] rounded-md bg-orange-700 cursor-pointer px-6 py-3 font-medium text-white text-[18px] min-[713px]:text-[14px] min-[827px]:text-[18px] transition hover:bg-transparent hover:text-black hover:border-[2px]'>
                          Proceed To CheckOut
                        </button>
                 </div>
             </div> 
       </div>            
       </div>
      </div>
</div>
)
}

    </>
   )



}

export default Cart