
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Couponclaimsection = () => {
    const[coupon,setCoupon]=useState('');
    const [loading, setLoading] = useState(false);
    const handleChanges=(e)=>{
        if(e.target.name==='coupon'){
            setCoupon(e.target.value);
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
  return (
    <div className='min-h-screen py-28'>
        <Toaster/>
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
    </div>
  )
}

export default Couponclaimsection
