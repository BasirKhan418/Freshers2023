
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Couponclaimsection = () => {
    const[order,setOrder]=useState();
    const[coupon,setCoupon]=useState('');
    const[regd,setRegd]=useState('');
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const handleChanges=(e)=>{
        if(e.target.name==='coupon'){
            setCoupon(e.target.value);
        }
        else if(e.target.name==='regd'){
            setRegd(e.target.value);
            setOrder("")
        }
    }
    const handleSubmit=async()=>{
if(coupon.length<=2){
    toast.error('Please enter a Coupon Code !', {
        position: "top-right",
      })
}
else{
    const data={coupon};
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/coupon`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response=await res.json();
      if(response.success==true){
        setLoading(false);
        toast.success('Coupon Claimed Successfully', {
            position: "top-right",
            });
            setCoupon('');
      }
      else if(response.success==false){
        setLoading(false);
        toast.error(response.message, {
            position: "top-right",
            });
      }
     
      setLoading(false);

}
       }
       const handleSearch=async()=>{
        if(regd.length<=5){
            toast.error('Please enter a Regd No. !', {
                position: "top-right",
              })
        }
        else{
            const data={regd};
            setLoading1(true);
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/searchcoupon`, {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              const response=await res.json();
              if(response.success){
                toast.success('Coupon Found', {
                    position: "top-right",
                    });
                setLoading1(false);
                    setOrder(response.data);
              }
              else if(response.success==false){
                setLoading1(false);
                toast.error(response.message, {
                    position: "top-right",
                    });
              }
        }
       }
  return (
    <div className='min-h-screen py-28'>
        <Toaster/>
        <div className='bg-black font-bold flex justify-center flex-col items-center my-2'>
      <h1 className='font text-4xl text-white my-2'>
        Claim Your Coupon
      </h1>
      <div className='h-1 w-44 bg-yellow-600 rounded-3xl my-2'></div>
    </div> 
      <div className="w-full max-w-sm p-6  m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 ">
    <div className="flex justify-center mx-auto">
       
    </div>

    <div className="mt-6">
        <div>
            <label for="coupon" className="block text-sm text-gray-800 dark:text-gray-200">Enter Your Coupon</label>
            <input type="text" value={coupon} onChange={handleChanges} name='coupon' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-600 rounded-lg hover:bg--700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" onClick={handleSubmit}>
                {loading==true?"Claiming...":"Claim Coupon"}
            </button>
        </div>
    </div>


    <p className="mt-8 text-xs font-light text-center text-gray-400"> Dont have an coupon? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</a></p>
</div>
<div className='bg-black font-bold flex justify-center flex-col items-center my-2'>
      <h1 className='font text-4xl text-white my-2'>
        Search For Coupons
      </h1>
      <div className='h-1 w-44 bg-yellow-600 rounded-3xl my-2'></div>
      </div>
      <div>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative flex justify-center">
        <div className="absolute inset-y-0 left-6 flex items-center pl-3 pointer-events-none lg:left-20">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"  name='regd' value={regd} onChange={handleChanges} id="default-search" className="block w-[90vw] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for coupon enter regd no." required/>
        <button onClick={handleSearch}  className="text-white absolute right-8 lg:right-28 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading1?"Searching.....":"Search"}</button>
    </div>
</div>
<div>
    
{order!=null?<div className="relative overflow-x-auto my-4 mx-4 rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Regd No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Coupon code
                </th>
                <th scope="col" className="px-6 py-3">
                    Coupon Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.regd}
                </th>
                <td className="px-6 py-4">
                   {order.cpn}
                </td>
                <td className="px-6 py-4">
                    {order.clm}
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>:""}

</div>
    </div>
  )
}

export default Couponclaimsection
